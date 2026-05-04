/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useState, useEffect, useRef } from 'react';
import {
  characterCountInput,
  deleteFileButton,
  dragArea,
  dragAreaWrapper,
  exceededMaxCount,
  fileDescriptionInstruction,
  fileListStyle,
  fileThumbnail,
  fileTileTop,
  fileUploadLabel,
  fileUploadLabelText,
  fileUploadTypes,
  fileUploadWrapper,
  iconMarginLeft,
  iconMarginRight,
  iconSize,
  inputDescriptionStyle,
  inputError,
  inputWrapper,
  listItem,
  uploadBox,
  uploadBoxActive,
  uploadBoxTextStyle,
  uploadBoxTitleStyle,
  visuallyHidden,
} from '../contact-forms.css';
import { SystemIcon } from '@konsumentverket-sverige/designsystem.icons-system';
import ErrorMessage from './ErrorMessage';

const MAX_MEGABYTES = 20;
const MAX_TOTAL_SIZE = MAX_MEGABYTES * 1024 * 1024; // 20 MB in bytes
const MAX_NUMBER_OF_FILES = 10;
const ACCEPTED_FILE_TYPES = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // docx
  'application/msword', // doc
  'text/rtf',
  'text/plain',
  'application/vnd.oasis.opendocument.text', // odt
  'image/jpeg',
  'image/png',
  'image/gif',
];
const ACCEPTED_FILE_TYPES_STRING =
  'pdf, docx/doc, rtf, txt, odt, jpg/jpeg, png, gif.';

const FILE_TYPE_ICONS = {
  'application/pdf': 'DBFilePDF',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
    'DBFileText',
  'application/msword': 'DBFileText',
  'text/rtf': 'DBFileText',
  'text/plain': 'DBFileText',
  'application/vnd.oasis.opendocument.text': 'DBFileText',
  'image/jpeg': 'DBFileImage',
  'image/png': 'DBFileImage',
  'image/gif': 'DBFileImage',
};

// Replaces periods (".") with hyphens ("-") and spaces (" ") with underscores ("_")
// to ensure the name is compatible as a key in react-hook-form
const formatFileName = (string) =>
  string.replace(/[. ]/g, (match) => (match === '.' ? '-' : '_'));

const generateUniqueId = (fileName = '') => {
  return `${Date.now()}_${Math.floor(Math.random() * 1000)}_filename__${formatFileName(fileName)}`;
};

const FORM_FILE_INPUT_KEY = 'files';
const FORM_FILE_DESCRIPTIONS_KEY = 'fileDescriptions';

const FileSelectorWithList = ({
  reactHookFormProps,
  fileLabel,
  fileTypesText,
  uploadBoxLabel,
  uploadBoxText,
  fileDescriptionLabel,
  fileDescriptionText,
  fileDescriptionPlaceholder,
  removeFileText,
  maxLengthInput,
}) => {
  const dragAreaElement = useRef();
  const [dragging, setDragging] = useState(false);
  const [dragCounter, setDragCounter] = useState(0);
  const [totalSize, setTotalSize] = useState(0);

  const {
    register,
    watch,
    errors,
    setValue,
    trigger,
    unregister,
    getValues,
    setError,
    clearErrors,
  } = reactHookFormProps;

  const fileList = getValues(FORM_FILE_INPUT_KEY) || [];

  useEffect(() => {
    const div = dragAreaElement.current;
    div.addEventListener('dragenter', handleDragIn);
    div.addEventListener('dragleave', handleDragOut);
    div.addEventListener('dragover', handleDrag);
    div.addEventListener('drop', handleDrop);

    return () => {
      div.removeEventListener('dragenter', handleDragIn);
      div.removeEventListener('dragleave', handleDragOut);
      div.removeEventListener('dragover', handleDrag);
      div.removeEventListener('drop', handleDrop);
    };
  }, [dragAreaElement]);

  const checkForDuplicates = (newFiles, previousFiles) => {
    const duplicates = newFiles.filter((file) =>
      previousFiles.some(
        (prevFile) =>
          prevFile.file.name === file.name &&
          prevFile.file.size === file.size &&
          prevFile.file.lastModified === file.lastModified
      )
    );

    return !!duplicates.length;
  };

  const handleFilesForUpload = (newFiles) => {
    clearErrors(FORM_FILE_INPUT_KEY);

    const previousFiles = getValues(FORM_FILE_INPUT_KEY);

    // No duplicates are allowed
    const duplicates = previousFiles?.length
      ? checkForDuplicates(newFiles, previousFiles)
      : false;
    if (duplicates) {
      let duplicatesText = '';

      if (newFiles.length > 1) {
        duplicatesText = `Filerna kunde inte bifogas eftersom en av dem redan har laddats upp.`;
      } else {
        duplicatesText = `Filen kunde inte bifogas eftersom den redan har laddats upp.`;
      }

      setError(FORM_FILE_INPUT_KEY, { message: duplicatesText });
      return;
    }

    const newFilesWithId = newFiles.map((file) => ({
      file,
      id: generateUniqueId(file.name),
    }));

    const updatedFiles = [...previousFiles, ...newFilesWithId];
    // Validate number of files
    if (updatedFiles.length > MAX_NUMBER_OF_FILES) {
      let tooManyFilesText = '';

      if (newFiles.length > 1) {
        tooManyFilesText = `Filerna kunde inte bifogas eftersom det totala antalet filer då skulle överskrida gränsen på ${MAX_NUMBER_OF_FILES} filer.`;
      } else {
        tooManyFilesText = `Filen kunde inte bifogas eftersom det totala antalet filer då skulle överskrida gränsen på ${MAX_NUMBER_OF_FILES} filer.`;
      }

      setError(FORM_FILE_INPUT_KEY, { message: tooManyFilesText });
      return;
    }

    // Validate file extensions
    for (const file of newFiles) {
      if (!file.type || !ACCEPTED_FILE_TYPES.includes(file.type)) {
        let notAcceptedText = '';

        if (newFiles.length > 1) {
          notAcceptedText = `Filerna kunde inte bifogas eftersom en eller flera filer har en otillåten filtyp. Endast följande filtyper är tillåtna: ${ACCEPTED_FILE_TYPES_STRING}`;
        } else {
          notAcceptedText = `Filen kunde inte bifogas eftersom den har en otillåten filtyp. Endast följande filtyper är tillåtna: ${ACCEPTED_FILE_TYPES_STRING}`;
        }
        setError(FORM_FILE_INPUT_KEY, { message: notAcceptedText });
        return;
      }
    }

    // Validate total file size
    const totalFileSize = updatedFiles.reduce(
      (acc, file) => acc + file.file.size,
      0
    );

    if (totalFileSize > MAX_TOTAL_SIZE) {
      let maxSizeText = '';

      if (newFiles.length > 1) {
        maxSizeText = `Filerna kunde inte bifogas eftersom den totala storleken skulle överskrida gränsen på ${MAX_MEGABYTES} MB.`;
      } else {
        maxSizeText = `Filen kunde inte bifogas eftersom den totala storleken skulle överskrida gränsen på ${MAX_MEGABYTES} MB.`;
      }

      setError(FORM_FILE_INPUT_KEY, { message: maxSizeText });
      return;
    }

    setValue(FORM_FILE_INPUT_KEY, updatedFiles);
    trigger(FORM_FILE_INPUT_KEY);
  };

  const onChange = async (e) => {
    handleFilesForUpload(await Array.from(e.target.files));
  };

  const handleRemove = (index) => {
    const fileToRemove = fileList[index];

    const updatedFiles = fileList.filter((_, i) => i !== index);
    setValue(FORM_FILE_INPUT_KEY, updatedFiles);
    trigger(FORM_FILE_INPUT_KEY);

    unregister(`${FORM_FILE_DESCRIPTIONS_KEY}[${fileToRemove.id}]`);
    clearErrors(`customErrors.files.[${fileToRemove.id}]`);

    if (errors.customErrors && !errors.customErrors.files) {
      clearErrors('customErrors');
    }
  };

  const generateCustomErrorsData = (files, message) => {
    let obj = {};

    files.forEach(
      (file) =>
        (obj[formatFileName(file.name)] = {
          type: 'custom',
          message: message,
        })
    );

    return obj;
  };

  const validateFiles = (files) => {
    let notAcceptedFiles = [];

    for (const entry of files) {
      const file = entry.file;
      if (!file.type || !ACCEPTED_FILE_TYPES.includes(file.type)) {
        notAcceptedFiles.push(file);
      }
    }

    if (notAcceptedFiles.length) {
      const errorData = generateCustomErrorsData(
        notAcceptedFiles,
        `Otillåten filtyp. Tillåtna filtyper: ${ACCEPTED_FILE_TYPES_STRING}`
      );
      setError(`customErrors`, { files: errorData });
      return `Invalid file type`;
    }

    if (files.length > 0) {
      const totalFileSize = files.reduce((acc, file) => acc + file.size, 0);
      setTotalSize(totalFileSize);

      if (totalFileSize > MAX_TOTAL_SIZE) {
        return 'Invalid file size';
      }
    }

    return true;
  };

  const getFilesFromDropEvent = async (event) => {
    let items = null;

    if ('dataTransfer' in event) {
      const dt = event.dataTransfer;

      // NOTE: Only the 'drop' event has access to DataTransfer.files, otherwise it will always be empty
      if ('files' in dt && dt.files.length) {
        items = dt.files;
      } else if (dt.items && dt.items.length) {
        items = dt.items;
      }
    }
    return Array.from(items);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDragIn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragCounter(dragCounter + 1);
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDragging(true);
    }
  };
  const handleDragOut = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragCounter(dragCounter - 1);
    if (dragCounter === 0) {
      setDragging(false);
    }
  };
  const handleDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    handleFilesForUpload(await getFilesFromDropEvent(e));
  };

  const formatFileSize = (sizeInBytes) =>
    (sizeInBytes / 1024 / 1024).toFixed(2);

  const formattedFileSize = formatFileSize(totalSize);

  return (
    <>
      <div css={[fileUploadWrapper]}>
        <div css={dragAreaWrapper} ref={dragAreaElement}>
          <label htmlFor="file-upload" className="noStyle" css={dragArea}>
            <span css={fileUploadLabel}>
              <span css={fileUploadLabelText}>{fileLabel}</span>
              <span css={fileUploadTypes}>{fileTypesText}</span>
            </span>
            <span css={[uploadBox, dragging && uploadBoxActive]}>
              <span css={uploadBoxTitleStyle}>
                <SystemIcon icon="DBFileUpload" style={iconMarginRight} />
                {uploadBoxLabel}
              </span>
              <span css={uploadBoxTextStyle}>{uploadBoxText}</span>
            </span>
            <input
              type="file"
              multiple
              onChange={onChange}
              id="file-upload"
              css={visuallyHidden}
              aria-invalid={Boolean(errors[FORM_FILE_INPUT_KEY]?.message)}
              aria-describedby={errors[FORM_FILE_INPUT_KEY]?.message ? 'file-error' : undefined}
            />
          </label>
          <input
            type="hidden"
            {...register(FORM_FILE_INPUT_KEY, {
              validate: validateFiles,
            })}
          />
        </div>

        {errors[FORM_FILE_INPUT_KEY]?.message && (
          <ErrorMessage id="file-error">
            {errors[FORM_FILE_INPUT_KEY]?.message}
          </ErrorMessage>
        )}
      </div>

      {!!fileList.length && (
        <div>
          <p id="file-description-instruction" css={fileDescriptionInstruction}>
            <strong>{fileDescriptionLabel}</strong>
            {fileDescriptionText}
          </p>

          <ul aria-label="Lista med bifogade filer" css={fileListStyle}>
            {fileList.map((fileEntry, index) => {
              const file = fileEntry.file;
              const itemKey = fileEntry.id;
              const itemError =
                (errors[FORM_FILE_DESCRIPTIONS_KEY] &&
                  errors[FORM_FILE_DESCRIPTIONS_KEY][itemKey]) ||
                null;
              const itemCustomError =
                errors.customErrors?.files?.[itemKey]?.message;
              const fileText = `${file.name} ( ${formatFileSize(file.size)} MB )`;
              return (
                <li key={`${file.name}-${index}`} css={listItem}>
                  <div css={fileTileTop}>
                    <span
                      css={fileThumbnail}
                      aria-label={`Bifogad fil: ${fileText}`}
                    >
                      <SystemIcon
                        icon={FILE_TYPE_ICONS[file.type] || 'Warn'}
                        style={[iconMarginRight, iconSize]}
                      />
                      {fileText}
                    </span>

                    <button
                      type="button"
                      onClick={() => handleRemove(index)}
                      css={deleteFileButton}
                      aria-label={`Ta bort ${file.name} från listan`}
                    >
                      {removeFileText}
                      <SystemIcon
                        icon={'DBDeleteFileAlt2'}
                        style={iconMarginLeft}
                      />
                    </button>
                  </div>

                  {!itemCustomError && (
                    <span css={inputWrapper}>
                      <label
                        htmlFor={`fileDescription-${itemKey}`}
                        css={visuallyHidden}
                      >
                        Beskrivning av {file.name}
                      </label>

                      <input
                        id={`fileDescription-${itemKey}`}
                        placeholder={fileDescriptionPlaceholder}
                        css={[
                          inputDescriptionStyle,
                          itemError ? inputError : null,
                        ]}
                        {...register(
                          `${FORM_FILE_DESCRIPTIONS_KEY}[${itemKey}]`,
                          {
                            required: {
                              value: true,
                              message:
                                'Du behöver skriva en kort beskrivning av filen.',
                            },
                            maxLength: {
                              value: maxLengthInput,
                              message: `Beskrivningen får inte vara mer än ${maxLengthInput} tecken.`,
                            },
                          }
                        )}
                        maxLength={maxLengthInput}
                        aria-invalid={Boolean(itemError)}
                        aria-describedby={`error-file-description-${itemKey}-${index}`}
                      />

                      <span
                        aria-hidden={true}
                        css={[
                          characterCountInput,
                          watch(`${FORM_FILE_DESCRIPTIONS_KEY}[${itemKey}]`, '')
                            .length > maxLengthInput
                            ? exceededMaxCount
                            : null,
                        ]}
                      >
                        {
                          watch(`${FORM_FILE_DESCRIPTIONS_KEY}[${itemKey}]`, '')
                            .length
                        }
                        /{maxLengthInput}
                      </span>
                    </span>
                  )}

                  {itemCustomError && (
                    <ErrorMessage id={`error-file-format-${itemKey}-${index}`}>
                      {itemCustomError}
                    </ErrorMessage>
                  )}

                  {itemError && (
                    <ErrorMessage
                      id={`error-file-description-${itemKey}-${index}`}
                    >
                      {itemError.message}
                    </ErrorMessage>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default FileSelectorWithList;
