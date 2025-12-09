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
import ReCAPTCHA from "react-google-recaptcha";

export const ContactForms = ({
  recaptchaSiteKey,
  recaptchaSiteKeyV2,
  title,
  type = "guidance",
  children,
  handleFormSubmit = () => {},
  texts,
  isLoading = false
}) => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const forms = {
    guidance: Guidance,
    otherCases: OtherCases,
    subscribe: Subscribe,
  };

  const SelectedForm = forms[type] ?? null;
  if (!SelectedForm) return null;

  const [showV2, setShowV2] = useState(false);
  const [v3Token, setV3Token] = useState(null);
  const [v2Token, setV2Token] = useState(null);
const handleInternalSubmit = async (formData) => {
    // formData kommer från ditt SelectedForm
    if (!showV2) {
      // Försök med v3 först
      try {
        const v3Token = await executeRecaptcha('actionName');

        if (formData.scoreIsLow(v3Token)) {
          setShowV2(true);
          return; // Vänta tills användaren gör v2
        }

        // Score ok → kör submit med v3-token
        await handleFormSubmit({
          ...formData.data,
          recaptchaToken: v3Token,
        });
        return;

      } catch (e) {
        // v3 failade → fallback v2
        setShowV2(true);
        return;
      }
    }

    // === V2 MODE ===
    if (v2Token) {
      await handleFormSubmit({
        ...formData.data,
        recaptchaToken: v2Token,
      });
    }
  };

  const formProps = {
    title,
    children,
    isLoading,
    texts,
    recaptchaV3Token: v3Token,
    recaptchaV2Token: v2Token,
    showV2
  };

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={recaptchaSiteKey}
      useEnterprise={true}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: 'head',
      }}
    >
      <>
        {showV2 && (
          <ReCAPTCHA
            sitekey={recaptchaSiteKeyV2}
            onChange={(token) => {
              setV2Token(token);
            }}
          />
        )}

        <SelectedForm
          {...formProps}
          handleFormSubmit={handleInternalSubmit}
        />
      </>
    </GoogleReCaptchaProvider>
  );
};