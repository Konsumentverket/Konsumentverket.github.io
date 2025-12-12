/** @jsx jsx */
import React, { useState } from 'react';
import { jsx } from '@emotion/react';
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha
} from 'react-google-recaptcha-v3';

import { Guidance } from "./types/guidance";
import { OtherCases } from "./types/otherCases";
import { Subscribe } from "./types/subscribe";

export const ContactForms = ({
  recaptchaSiteKey,
  recaptchaSiteKeyV2,
  title,
  children,
  handleFormSubmit = () => {},
  type = 'guidance',
  texts,
  isLoading = false,
}) => {

  const forms = {
    guidance: Guidance,
    otherCases: OtherCases,
    subscribe: Subscribe,
  };

  const SelectedForm = forms[type] || null;
  if (!SelectedForm) return null;

  const ComponentWrapper = () => {
    const { executeRecaptcha } = useGoogleReCaptcha();

    const [showV2, setShowV2] = useState(false);
    const [pendingFormData, setPendingFormData] = useState(null);

    const scoreIsLow = async (token) => {
      const res = await fetch("/api/subscribeform/verify-recaptcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      const data = await res.json();

      if (data.usedVersion === "v3" && data.score < 0.5) {
        setShowV2(true);
        return true;
      }
      return false;
    };

    const handleSubmitInternal = async (formData) => {
      setPendingFormData(formData);

      try {
        const v3Token = await executeRecaptcha("personuppgifter");

        const low = await scoreIsLow(v3Token);
        if (low) {
          setShowV2(true);
          return; // visa V2-fallback
        }

        // v3 OK → skicka direkt
        await handleFormSubmit({
          ...formData,
          recaptchaToken: v3Token
        });

      } catch (error) {
        setShowV2(true); // tekniskt fel -> v2 fallback
      }
    };

    const handleV2 = async (token) => {
      if (!pendingFormData) return;

      await handleFormSubmit({
        ...pendingFormData,
        recaptchaToken: token
      });
    };

    const props = {
      title,
      children,
      texts,
      isLoading,
      showV2,
      recaptchaSiteKeyV2,
      handleFormSubmit: handleSubmitInternal,
      handleV2
    };

    return <SelectedForm {...props} />;
  };

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={recaptchaSiteKey}
      useEnterprise={true}
      scriptProps={{ async: true, defer: true, appendTo: 'head' }}
    >
      <ComponentWrapper />
    </GoogleReCaptchaProvider>
  );
};
