/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@konsumentverket-sverige/designsystem.button';
import { Heading } from '@konsumentverket-sverige/designsystem.heading';
import { SystemIcon, registerIcons } from '@konsumentverket-sverige/designsystem.icons-system/dist/iconsSystem.js';
import { Warn } from '@konsumentverket-sverige/designsystem.icons-system/dist/SystemIcons/Warn/Warn.js';
import { ChevronRight } from '@konsumentverket-sverige/designsystem.icons-system/dist/SystemIcons/ChevronRight/ChevronRight.js';
import {
  form,
  reasonTitle,
  formTitle,
  radio,
  radioLabel,
  formRow,
  inputError,
  errorMessage,
  childrenContainer,
  recaptchaContainer,
} from './form-data-request.css.js';
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from 'react-google-recaptcha-v3';

// Bara de ikoner komponenten faktiskt anvander registreras, sa att barreln med
// samtliga 113 ikoner inte dras in i bundlen.
registerIcons({ Warn, ChevronRight });

const FormDataRequestInner = ({ title, children, handleFormSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onTouched' });

  const { executeRecaptcha } = useGoogleReCaptcha();
  const [recaptchaError, setRecaptchaError] = useState('');

  const onSubmit = async (data) => {
    if (!executeRecaptcha) {
      setRecaptchaError('Något gick fel med reCAPTCHA. Försök igen.');
      return;
    }

    try {
      const token = await executeRecaptcha('personuppgifter');
      if (!token) {
        setRecaptchaError('Något gick fel med reCAPTCHA. Försök igen.');
        return;
      }

      const formData = {
        ...data,
        recaptchaToken: token,
      };

      handleFormSubmit(formData);
    } catch (error) {
      setRecaptchaError('Något gick fel med reCAPTCHA. Försök igen.');
    }
  };

  const maxLengthEmail = 254;

  return (
    <form
      css={[form]}
      data-comp="form-data-request"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div css={[reasonTitle]}>
        <Heading text="Vad vill du göra?" level={2} styleLevel={3} />
      </div>
      <input
        css={[radio]}
        id="reason-aquire"
        type="radio"
        value="aquire"
        defaultChecked
        {...register('reason', { required: true })}
      />
      <label htmlFor="reason-aquire" css={[radioLabel]}>
        Få ut information om mina personuppgifter
      </label>
      <input
        css={[radio]}
        id="reason-delete"
        type="radio"
        value="delete"
        {...register('reason', { required: true })}
      />
      <label htmlFor="reason-delete" css={[radioLabel]}>
        Radera mina personuppgifter
      </label>

      <div css={[formTitle]}>
        <Heading text={title} level={3} />
      </div>
      <div css={[formRow]}>
        <div>
          <label htmlFor="firstName">Förnamn*</label>
          <input
            id="firstName"
            placeholder="Ange ditt förnamn"
            css={errors.firstName ? inputError : null}
            {...register('firstName', {
              required: { value: true, message: 'Ange ditt förnamn' },
            })}
            watch={watch}
          />
          {errors.firstName && (
            <span css={[errorMessage]}>
              <SystemIcon icon="Warn" />
              {errors.firstName.message}
            </span>
          )}
        </div>
        <div>
          <label htmlFor="lastName">Efternamn*</label>
          <input
            id="lastName"
            placeholder="Ange ditt efternamn"
            css={errors.lastName ? inputError : null}
            {...register('lastName', {
              required: { value: true, message: 'Ange ditt efternamn' },
            })}
            watch={watch}
          />
          {errors.lastName && (
            <span css={[errorMessage]}>
              <SystemIcon icon="Warn" />
              {errors.lastName.message}
            </span>
          )}
        </div>
      </div>

      <div css={[formRow]}>
        <div>
          <label htmlFor="ssn">Personnummer (ÅÅMMDD-XXXX)*</label>
          <input
            id="ssn"
            placeholder="ÅÅMMDD-XXXX"
            css={errors.ssn ? inputError : null}
            {...register('ssn', {
              required: 'Ange ditt personnummer',
              pattern: {
                value: /^\d{2}\d{2}\d{2}-\d{4}$/,
                message: 'Ange ditt personnummer med 10 siffror (ÅÅMMDD-XXXX)',
              },
            })}
          />
          {errors.ssn && (
            <span css={[errorMessage]}>
              <SystemIcon icon="Warn" />
              {errors.ssn.message}
            </span>
          )}
        </div>
        <div>
          <label htmlFor="email">E-postadress*</label>
          <input
            id="email"
            type="email"
            placeholder="Ange din e-postadress"
            css={errors.email ? inputError : null}
            {...register('email', {
              required: 'Du behöver skriva din e-postadress.',
              maxLength: {
                value: maxLengthEmail,
                message: `E-postadressen får inte vara mer än ${maxLengthEmail} tecken.`,
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
                  /^[^\s@]+@[^\s@]+\.[a-zA-ZåäöÅÄÖ]{2,}$/.test(value) ||
                  'E-postadressen måste vara giltig (t.ex. namn@domän.se)',
              },
            })}
          />
          {errors.email && (
            <span css={[errorMessage]}>
              <SystemIcon icon="Warn" />
              {errors.email.message}
            </span>
          )}
        </div>
      </div>
      {recaptchaError !== '' && (
        <div css={[recaptchaContainer]}>
          <span css={[errorMessage]}>
            <SystemIcon icon="Warn" />
            {recaptchaError}
          </span>
        </div>
      )}

      <div css={[childrenContainer]}>{children}</div>
      <Button
        text="Skicka begäran"
        iconRight={<SystemIcon icon="ChevronRight" />}
      />
    </form>
  );
};

export const FormDataRequest = ({
  title,
  children,
  recaptchaSiteKey,
  handleFormSubmit = () => {},
}) => {
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
      <FormDataRequestInner
        title={title}
        children={children}
        handleFormSubmit={handleFormSubmit}
      />
    </GoogleReCaptchaProvider>
  );
};
