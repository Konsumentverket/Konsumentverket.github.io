/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@konsumentverket-sverige/designsystem.button';
import { SystemIcon, registerIcons } from '@konsumentverket-sverige/designsystem.icons-system/dist/iconsSystem.js';
import { ChevronRight } from '@konsumentverket-sverige/designsystem.icons-system/dist/SystemIcons/ChevronRight/ChevronRight.js';
import { Loading } from '@konsumentverket-sverige/designsystem.loading';
import {
  form,
  formTitle,
  formIntro,
  formRow,
  childrenContainer,
  recaptchaContainer,
  topLeftIcon,
  recaptcha,
} from '../contact-forms.css.js';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import FormInput from '../components/FormInput';
import { Checkbox } from '../components/CheckBox';
import ErrorMessage from '../components/ErrorMessage';
import LoaderOverlay from '../components/LoaderOverlay';

// Bara de ikoner komponenten faktiskt anvander registreras, sa att barreln med
// samtliga 113 ikoner inte dras in i bundlen.
registerIcons({ ChevronRight });

export const Subscribe = ({
  title,
  intro,
  children,
  handleFormSubmit,
  texts,
  isLoading,
  showV2,
  recaptchaSiteKeyV2,
  handleV2,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onTouched' });

  const { executeRecaptcha } = useGoogleReCaptcha();
  const [recaptchaError, setRecaptchaError] = useState('');
  const [v2Token, setV2Token] = useState(null);

  if (!texts) return null;

  const {
    subscribeEmailLabel,
    subscribeEmailPlaceholder,
    subscribeEmailHelpText,
    consentLabel,
    subscribeSubmitButtonText,
  } = texts;

  const onSubmit = (data) => {
    handleFormSubmit(data, v2Token);
  };

  const checkboxId = 'consent';

  const maxLengthEmail = 254;

  return (
    <form
      css={[form, topLeftIcon]}
      data-comp="contactForm-subscribe"
      onSubmit={handleSubmit(onSubmit)}
      aria-busy={isLoading}
    >
      {title && <h2 css={formTitle}>{title}</h2>}

      {intro && <p css={formIntro}>{intro}</p>}

      <div css={[formRow]}>
        <FormInput
          id={'email'}
          type={'email'}
          label={subscribeEmailLabel}
          placeholder={subscribeEmailPlaceholder}
          tooltipText={subscribeEmailHelpText}
          tooltipLabel={'e-post'}
          error={errors && errors.email}
          register={register}
          validation={{
            required: {
              value: true,
              message: 'Du behöver skriva din e-postadress.',
            },
            maxLength: {
              value: maxLengthEmail,
              message: `E-postadressen får inte vara mer än ${maxLengthEmail} tecken`,
            },
            validate: {
              hasAt: (value) =>
                value.includes('@') || 'E-postadressen måste innehålla ett @',
              tldLength: (value) => {
                const domainParts = value.split('.');
                const tld = domainParts[domainParts.length - 1];
                return (
                  !tld ||
                  tld.length <= 63 ||
                  'Toppdomänen (t.ex. .se) får inte vara längre än 63 tecken'
                );
              },
              format: (value) =>
                /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(value) ||
                'E-postadressen måste vara giltig, (t.ex. namn@domän.se)',
            },
          }}
          watch={watch}
        />
      </div>

      <div css={[formRow]}>
        <Checkbox
          id={checkboxId}
          name={checkboxId}
          labelText={consentLabel}
          register={register}
          validation={{
            required: {
              value: true,
              message:
                'För att ta emot nyheter från Konsumentverket behöver du godkänna att vi får använda din e-postadress.',
            },
          }}
          error={errors && errors[checkboxId]}
        />
      </div>

      {recaptchaError !== '' && (
        <div css={[recaptchaContainer]}>
          <ErrorMessage id="recaptcha-error">{recaptchaError}</ErrorMessage>
        </div>
      )}

      {children && <div css={[childrenContainer]}>{children}</div>}

      {isLoading && <LoaderOverlay />}

      {/* V2 Fallback */}
      {showV2 && (
        <div css={recaptcha}>
          <ReCAPTCHA
            sitekey={recaptchaSiteKeyV2}
            onChange={(token) => setV2Token(token)}
          />
        </div>
      )}

      <Button
        className="submitButton"
        disabled={isLoading || (showV2 && !v2Token)}
        text={isLoading ? 'Skickar...' : subscribeSubmitButtonText}
        iconRight={
          isLoading ? (
            <Loading color={'#FFF'} />
          ) : (
            <SystemIcon icon="ChevronRight" />
          )
        }
      />
    </form>
  );
};
