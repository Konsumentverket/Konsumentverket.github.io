/** @jsx jsx */
import { jsx } from '@emotion/core';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import { Guidance } from './types/guidance';
import { OtherCases } from './types/otherCases';
import { Subscribe } from './types/subscribe';

export const ContactForms = ({
  recaptchaSiteKey,
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

  const props = {
    title,
    children,
    handleFormSubmit,
    texts,
    isLoading,
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
      <SelectedForm {...props} />
    </GoogleReCaptchaProvider>
  );
};
