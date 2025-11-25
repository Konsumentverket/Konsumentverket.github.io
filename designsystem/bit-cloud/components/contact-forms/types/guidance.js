/** @jsx jsx */
import {jsx} from '@emotion/core';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Button} from '@konsumentverket-sverige/designsystem.button';
import {SystemIcon} from '@konsumentverket-sverige/designsystem.icons-system';
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
import FormTextArea from "../components/FormTextArea";
import ErrorMessage from "../components/ErrorMessage";
import LoaderOverlay from "../components/LoaderOverlay";

export const Guidance = ({
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
    guidanceEmailLabel,
    guidanceEmailPlaceholder,
    guidanceEmailHelpText,
    guidanceMunicipalityLabel,
    guidanceMunicipalityPlaceholder,
    guidanceMunicipalityHelpText,
    guidanceCompanyLabel,
    guidanceCompanyPlaceholder,
    guidanceCompanyHelpText,
    guidanceSubjectLabel,
    guidanceSubjectPlaceholder,
    guidanceSubjectHelpText,
    guidanceQuestionLabel,
    guidanceQuestionPlaceholder,
    guidanceSubmitButtonText
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

  const maxLengthInput = 40;
  const maxLengthEmail = 254;
  const maxLengthText = 2000;

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
          label={guidanceEmailLabel}
          placeholder={guidanceEmailPlaceholder}
          tooltipText={guidanceEmailHelpText}
          tooltipLabel={"e-post"}
          error={errors && errors.email}
          maxLengthValidation={false}
          register={register}
          validation={{
            required: {
              value: true,
              message: "Du behöver skriva din e-postadress.",
            },
            maxLength: {
              value: maxLengthEmail,
              message: `E-postadressen får inte vara mer än ${maxLengthEmail} tecken`,
            },
            validate: {
              hasAt: (value) =>
                value.includes("@") || "E-postadressen måste innehålla ett @",
              tldLength: (value) => {
                const domainParts = value.split(".");
                const tld = domainParts[domainParts.length - 1];
                return (
                  (!tld || tld.length <= 63) ||
                  "Toppdomänen (t.ex. .se) får inte vara längre än 63 tecken"
                );
              },
              format: (value) =>
                /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(value) ||
                "E-postadressen måste vara giltig, (t.ex. namn@domän.se)",
            },
          }}
          watch={watch}
        />

        <FormInput
          id={"municipality"}
          label={guidanceMunicipalityLabel}
          placeholder={guidanceMunicipalityPlaceholder}
          tooltipPosition={"center"}
          tooltipText={guidanceMunicipalityHelpText}
          tooltipLabel={"kommun"}
          error={errors && errors.municipality}
          maxLengthValidation={true}
          maxLengthCount={maxLengthInput}
          showCounter={true}
          register={register}
          validation={{
            required: {
              value: false,
            },
            maxLength: {
              value: maxLengthInput,
              message: `Texten får inte vara mer än ${maxLengthInput} tecken.`,
            }
          }}
          watch={watch}
        />

        <FormInput
          id={"company"}
          label={guidanceCompanyLabel}
          placeholder={guidanceCompanyPlaceholder}
          tooltipPosition={"right"}
          tooltipText={guidanceCompanyHelpText}
          tooltipLabel={"företag"}
          error={errors && errors.company}
          maxLengthValidation={true}
          showCounter={true}
          maxLengthCount={maxLengthInput}
          register={register}
          validation={{
            required: {
              value: false,
            },
            maxLength: {
              value: maxLengthInput,
              message: `Texten får inte vara mer än ${maxLengthInput} tecken.`,
            }
          }}
          watch={watch}
        />

      </div>

      <FormInput
        id={"subject"}
        label={guidanceSubjectLabel}
        placeholder={guidanceSubjectPlaceholder}
        tooltipText={guidanceSubjectHelpText}
        tooltipLabel={"ämne"}
        error={errors && errors.subject}
        maxLengthValidation={true}
        showCounter={true}
        maxLengthCount={maxLengthInput}
        register={register}
        validation={{
          required: {
            value: true,
            message: "Du behöver beskriva vad din fråga handlar om.",
          },
          maxLength: {
            value: maxLengthInput,
            message: `Ämnet får inte vara mer än ${maxLengthInput} tecken lång.`,
          }
        }}
        watch={watch}
      />

      <FormTextArea
        id={"question"}
        label={guidanceQuestionLabel}
        placeholder={guidanceQuestionPlaceholder}
        error={errors && errors.question}
        maxLengthValidation={true}
        maxLengthCount={maxLengthText}
        showCounter={true}
        register={register}
        validation={{
          required: {
            value: true,
            message: "Du behöver skriva vad du vill ha hjälp med.",
          },
          maxLength: {
            value: maxLengthText,
            message: `Texten får inte vara mer än ${maxLengthText} tecken lång.`,
          }
        }}
        watch={watch}
      />

      {recaptchaError !== '' && (
        <div css={[recaptchaContainer]}>
          <ErrorMessage id="recaptcha-error">
            {recaptchaError}
          </ErrorMessage>
        </div>
      )}

      <div css={[childrenContainer]}>{children}</div>

      {isLoading && <LoaderOverlay />}

      <Button
        className="submitButton"
        disabled={isLoading}
        text={isLoading ? "Skickar..." : guidanceSubmitButtonText}
        iconRight={isLoading ? <Loading color={"#FFF"}/> : <SystemIcon icon="ChevronRight"/>}
      />
    </form>
  );
};
