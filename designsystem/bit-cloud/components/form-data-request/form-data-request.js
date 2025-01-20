/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@konsumentverket-sverige/designsystem.button';
import { Heading } from '@konsumentverket-sverige/designsystem.heading';
import { Icon } from '@konsumentverket-sverige/designsystem.icon';
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

const FormDataRequestInner = ({ title, children, handleFormSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({mode: 'onBlur'});

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

  return (
    <form
      css={[form]}
      data-comp="form-data-request"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div css={[reasonTitle]}>
        <Heading text="Vad vill du göra?" level={3} />
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
            {...register('firstName', { required: true })}
            watch={watch}
          />
          {errors.firstName && (
            <span css={[errorMessage]}>
              <Icon icon="Warn" />
              Ange ditt förnamn
            </span>
          )}
        </div>
        <div>
          <label htmlFor="lastName">Efternamn*</label>
          <input
            id="lastName"
            placeholder="Ange ditt efternamn"
            css={errors.lastName ? inputError : null}
            {...register('lastName', { required: true })}
            watch={watch}
          />
          {errors.lastName && (
            <span css={[errorMessage]}>
              <Icon icon="Warn" />
              Ange ditt efternamn
            </span>
          )}
        </div>
      </div>

      <div css={[formRow]}>
        <div>
          <label htmlFor="ssn">Personnummer 10-siffror*</label>
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
              <Icon icon="Warn" />
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
              required: 'Ange din e-postadress',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Ange en giltig e-postadress ',
              },
            })}
          />
          {errors.email && (
            <span css={[errorMessage]}>
              <Icon icon="Warn" />
              {errors.email.message}
            </span>
          )}
        </div>
      </div>
      {recaptchaError !== '' && (
        <div css={[recaptchaContainer]}>
          <span css={[errorMessage]}>
            <Icon icon="Warn" />
            {recaptchaError}
          </span>
        </div>
      )}

      <div css={[childrenContainer]}>{children}</div>
      <Button text="Skicka begäran" iconRight={<Icon icon="ChevronRight" />} />
    </form>
  );
};

export const FormDataRequest = ({
  title,
  children,
  recaptchaSiteKey,
  handleFormSubmit = () => {},
}) => (
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
