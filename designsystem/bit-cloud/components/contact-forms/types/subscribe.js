/** @jsx jsx */
import {jsx} from '@emotion/core';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Button} from '@konsumentverket-sverige/designsystem.button';
import {Icon} from '@konsumentverket-sverige/designsystem.icon';
import {Loading} from '@konsumentverket-sverige/designsystem.loading';
import {
  form,
  formTitle,
  formRow,
  childrenContainer,
  recaptchaContainer,
} from '../contact-forms.css.js';
import {
  useGoogleReCaptcha,
} from 'react-google-recaptcha-v3';
import FormInput from "../components/FormInput";
import {Checkbox} from "../components/CheckBox";
import ErrorMessage from "../components/ErrorMessage";
import LoaderOverlay from "../components/LoaderOverlay";

export const Subscribe = ({
  title,
  children,
  handleFormSubmit,
  texts,
  isLoading,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm({mode: 'onTouched'});

  const {executeRecaptcha} = useGoogleReCaptcha();
  const [recaptchaError, setRecaptchaError] = useState('');

  if (!texts) return null;

  const {
    subscribeEmailLabel,
    subscribeEmailPlaceholder,
    subscribeEmailHelpText,
    consentLabel,
    subscribeSubmitButtonText
  } = texts;

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

  const checkboxId = "consent";

  return (
    <form
      css={[form]}
      data-comp="contactForm-guidance"
      onSubmit={handleSubmit(onSubmit)}
      aria-busy={isLoading}
    >

      {title && (
        <h2 css={formTitle}>
          {title}
        </h2>
      )}

      <div css={[formRow]}>

        <FormInput
          id={"email"}
          type={"email"}
          label={subscribeEmailLabel}
          placeholder={subscribeEmailPlaceholder}
          tooltipText={subscribeEmailHelpText}
          error={errors && errors.email}
          maxLengthValidation={false}
          register={register}
          validation={{
            required: {
              value: true,
              message: "Du behöver skriva din e-postadress.",
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Ange en giltig e-postadress ',
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
              message: 'För att ta emot nyheter från Konsumentverket behöver du godkänna att vi får använda din e-postadress.',
            }
          }}
          error={errors && errors[checkboxId]}
        />
      </div>

      {recaptchaError !== '' && (
        <div css={[recaptchaContainer]}>
          <ErrorMessage id="recaptcha-error">
            {recaptchaError}
          </ErrorMessage>
        </div>
      )}

      {children && <div css={[childrenContainer]}>{children}</div>}

      {isLoading && <LoaderOverlay/>}

      <Button
        className="submitButton"
        disabled={isLoading}
        text={isLoading ? "Skickar..." : subscribeSubmitButtonText}
        iconRight={isLoading ? <Loading color={"#FFF"}/> : <Icon icon="ChevronRight"/>}
      />
    </form>
  );
};
