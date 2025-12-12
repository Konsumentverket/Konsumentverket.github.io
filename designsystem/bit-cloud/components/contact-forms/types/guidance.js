/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@konsumentverket-sverige/designsystem.button';
import { SystemIcon } from '@konsumentverket-sverige/designsystem.icons-system';
import { Loading } from '@konsumentverket-sverige/designsystem.loading';
import {
  form,
  formTitle,
  formRow,
  childrenContainer,
  recaptchaContainer,
  recaptcha
} from '../contact-forms.css.js';
import FormInput from "../components/FormInput";
import FormTextArea from "../components/FormTextArea";
import ErrorMessage from "../components/ErrorMessage";
import LoaderOverlay from "../components/LoaderOverlay";
import ReCAPTCHA from "react-google-recaptcha";


export const Guidance = ({
  title,
  children,
  handleFormSubmit,
  texts,
  isLoading,
  showV2,
  recaptchaSiteKeyV2,
  handleV2
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onTouched' });

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

  const maxLengthInput = 40;
  const maxLengthEmail = 254;
  const maxLengthText = 2000;

  const [v2Token, setV2Token] = useState(null);

  const onSubmit = (data) => {
    handleFormSubmit(data, v2Token);
  };

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
          id="email"
          type="email"
          label={guidanceEmailLabel}
          placeholder={guidanceEmailPlaceholder}
          tooltipText={guidanceEmailHelpText}
          tooltipLabel="e-post"
          error={errors?.email}
          maxLengthValidation={false}
          register={register}
          validation={{
            required: "Du behöver skriva din e-postadress.",
            maxLength: {
              value: maxLengthEmail,
              message: `E-postadressen får inte vara mer än ${maxLengthEmail} tecken`,
            },
            validate: {
              hasAt: (v) => v.includes("@") || "E-postadressen måste innehålla ett @",
              tldLength: (v) => {
                const parts = v.split(".");
                const tld = parts[parts.length - 1];
                return (!tld || tld.length <= 63) || "Toppdomänen får inte vara längre än 63 tecken";
              },
              format: (v) => /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(v) || "E-postadressen måste vara giltig",
            },
          }}
          watch={watch}
        />

        <FormInput
          id="municipality"
          label={guidanceMunicipalityLabel}
          placeholder={guidanceMunicipalityPlaceholder}
          tooltipText={guidanceMunicipalityHelpText}
          tooltipLabel="kommun"
          error={errors?.municipality}
          maxLengthValidation
          maxLengthCount={maxLengthInput}
          showCounter
          register={register}
          validation={{
            maxLength: {
              value: maxLengthInput,
              message: `Texten får inte vara mer än ${maxLengthInput} tecken.`,
            },
          }}
          watch={watch}
        />

        <FormInput
          id="company"
          label={guidanceCompanyLabel}
          placeholder={guidanceCompanyPlaceholder}
          tooltipText={guidanceCompanyHelpText}
          tooltipLabel="företag"
          error={errors?.company}
          maxLengthValidation
          showCounter
          maxLengthCount={maxLengthInput}
          register={register}
          validation={{
            maxLength: {
              value: maxLengthInput,
              message: `Texten får inte vara mer än ${maxLengthInput} tecken.`,
            },
          }}
          watch={watch}
        />
      </div>

      <FormInput
        id="subject"
        label={guidanceSubjectLabel}
        placeholder={guidanceSubjectPlaceholder}
        tooltipText={guidanceSubjectHelpText}
        tooltipLabel="ämne"
        error={errors?.subject}
        maxLengthValidation
        showCounter
        maxLengthCount={maxLengthInput}
        register={register}
        validation={{
          required: "Du behöver beskriva vad din fråga handlar om.",
          maxLength: {
            value: maxLengthInput,
            message: `Ämnet får inte vara mer än ${maxLengthInput} tecken.`,
          },
        }}
        watch={watch}
      />

      <FormTextArea
        id="question"
        label={guidanceQuestionLabel}
        placeholder={guidanceQuestionPlaceholder}
        error={errors?.question}
        maxLengthValidation
        maxLengthCount={maxLengthText}
        showCounter
        register={register}
        validation={{
          required: "Du behöver skriva vad du vill ha hjälp med.",
          maxLength: {
            value: maxLengthText,
            message: `Texten får inte vara mer än ${maxLengthText} tecken.`,
          },
        }}
        watch={watch}
      />

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
        text={isLoading ? "Skickar..." : guidanceSubmitButtonText}
        iconRight={isLoading ? <Loading color="#FFF" /> : <SystemIcon icon="ChevronRight" />}
      />
    </form>
  );
};
