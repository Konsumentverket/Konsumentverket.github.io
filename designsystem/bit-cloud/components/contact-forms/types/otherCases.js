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
  childrenContainer,
  recaptchaContainer,
} from '../contact-forms.css.js';
import {
  useGoogleReCaptcha,
} from 'react-google-recaptcha-v3';
import FormInput from "../components/FormInput";
import FormTextArea from "../components/FormTextArea";
import FileSelectorWithList, {restoreFileNames} from "../components/FileSelectorWithList";
import ErrorMessage from "../components/ErrorMessage";
import LoaderOverlay from "../components/LoaderOverlay";

export const OtherCases = ({
  title,
  children,
  handleFormSubmit,
  texts,
  isLoading
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
    setValue,
    trigger,
    unregister,
    getValues,
    setError,
    clearErrors,
  } = useForm({mode: 'onTouched'});

  const {executeRecaptcha} = useGoogleReCaptcha();
  const [recaptchaError, setRecaptchaError] = useState('');

  if (!texts) return null;

  const {
    otherCasesEmailLabel,
    otherCasesEmailPlaceholder,
    otherCasesEmailHelpText,
    otherCasesSubjectLabel,
    otherCasesSubjectPlaceholder,
    otherCasesSubjectHelpText,
    otherCasesQuestionLabel,
    otherCasesQuestionPlaceholder,
    otherCasesFileLabel,
    otherCasesFileTypes,
    otherCasesUploadBoxLabel,
    otherCasesUploadBoxText,
    otherCasesFileDescriptionLabel,
    otherCasesFileDescriptionText,
    otherCasesRemoveFile,
    otherCasesFileDescriptionPlaceholder,
    otherCasesSubmitButtonText,
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

      if (data.fileDescriptions) {
        data.fileDescriptions = restoreFileNames(data.fileDescriptions)

        for (const key in data.fileDescriptions) {
          if (data.fileDescriptions[key] === "") {
            data.fileDescriptions[key] = "Saknar beskrivning.";
          }
        }
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
  const maxLengthFileDescription = 50;
  const maxLengthEmail = 100;
  const maxLengthText = 2000;

  return (
    <form
      css={[form]}
      data-comp="contactForm-otherCases"
      onSubmit={handleSubmit(onSubmit)}
      aria-busy={isLoading}
    >

      {title && (
        <h2 css={formTitle}>
          {title}
        </h2>
      )}

      <FormInput
        id={"email"}
        type={"email"}
        label={otherCasesEmailLabel}
        placeholder={otherCasesEmailPlaceholder}
        tooltipText={otherCasesEmailHelpText}
        error={errors && errors.email}
        maxLengthValidation={true}
        maxLengthCount={maxLengthEmail}
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
          maxLength: {
            value: maxLengthEmail,
            message: `E-postadressen får inte vara mer än ${maxLengthEmail} tecken.`,
          },
        }}
        watch={watch}
      />

      <FormInput
        id={"subject"}
        label={otherCasesSubjectLabel}
        placeholder={otherCasesSubjectPlaceholder}
        tooltipText={otherCasesSubjectHelpText}
        error={errors && errors.subject}
        maxLengthValidation={true}
        maxLengthCount={maxLengthInput}
        showCounter={true}
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
        }
        }
        watch={watch}
      />

      <FormTextArea
        id={"question"}
        label={otherCasesQuestionLabel}
        placeholder={otherCasesQuestionPlaceholder}
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

      <FileSelectorWithList
        reactHookFormProps={{
          register,
          watch,
          errors,
          setValue,
          trigger,
          unregister,
          getValues,
          setError,
          clearErrors
        }}
        fileLabel={otherCasesFileLabel}
        fileTypesText={otherCasesFileTypes}
        uploadBoxLabel={otherCasesUploadBoxLabel}
        uploadBoxText={otherCasesUploadBoxText}
        fileDescriptionLabel={otherCasesFileDescriptionLabel}
        fileDescriptionText={otherCasesFileDescriptionText}
        fileDescriptionPlaceholder={otherCasesFileDescriptionPlaceholder}
        removeFileText={otherCasesRemoveFile}
        maxLengthInput={maxLengthFileDescription}
      />

      {recaptchaError !== '' && (
        <div css={[recaptchaContainer]}>
          <ErrorMessage id="recaptcha-error">
            {recaptchaError}
          </ErrorMessage>
        </div>
      )}

      <div css={[childrenContainer]}>{children}</div>

      {isLoading && <LoaderOverlay/>}

      <Button
        className="submitButton"
        disabled={isLoading}
        text={isLoading ? "Skickar..." : otherCasesSubmitButtonText}
        iconRight={isLoading ? <Loading color={"#FFF"}/> : <Icon icon="ChevronRight"/>}
      />
    </form>
  );
};
