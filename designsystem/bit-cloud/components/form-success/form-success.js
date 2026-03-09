/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import {
  wrapper,
  dataListTitle,
  dataList,
  nestedContainerTitle,
  nestedWrapper,
  nestedFlex,
  nestedKeyStyle,
  nestedFlexChild,
  loader,
} from './form-success.css.js';
import { NoticeBox } from '@konsumentverket-sverige/designsystem.notice-box';
import { Loading } from '@konsumentverket-sverige/designsystem.loading';
import { Button } from '@konsumentverket-sverige/designsystem.button';
import { SystemIcon } from '@konsumentverket-sverige/designsystem.icons-system';
import { newColors } from '@konsumentverket-sverige/designsystem.utils';

export const FormSuccess = ({
  formData,
  children,
  headline,
  contentfulId,
  contentfulName,
  buttonClick = () => {},
  buttonText,
  loading = true,
  showButton = true,
}) => {
  return (
    <div
      css={[wrapper]}
      data-comp="form-success"
      data-contentful-field-id={contentfulName ?? 'formSuccess'}
      data-contentful-entry-id={contentfulId}
      id="form-success"
    >
      <NoticeBox headline={headline}>{children}</NoticeBox>

      {formData && <h3 css={dataListTitle}>Inskickade uppgifter:</h3>}

      {loading ? (
        <div css={[loader]}>
          <Loading color={newColors.primaries.fullBlue} />
        </div>
      ) : (
        <div>
          {formData && (
            <dl css={dataList}>
              {Object.keys(formData).map((key) => {
                const hasNestedData = Array.isArray(formData[key]);
                return hasNestedData ? (
                  <div key={key} css={nestedWrapper}>
                    <dt css={nestedContainerTitle}>{key}:&nbsp;</dt>
                    <dd css={nestedFlex}>
                      {formData[key].map((item, index) => {
                        const [key, value] = Object.entries(item)[0];
                        return (
                          <span key={index} css={[nestedFlex, nestedFlexChild]}>
                            <span css={nestedKeyStyle}>{key}: </span>
                            <span>
                              {!!value ? value : 'Saknar beskrivning.'}
                            </span>
                          </span>
                        );
                      })}
                    </dd>
                  </div>
                ) : (
                  <div key={key}>
                    <dt>{key}:&nbsp;</dt>
                    <dd>
                      {typeof formData[key] === 'string'
                        ? formData[key].split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))
                        : formData[key]}
                    </dd>
                  </div>
                );
              })}
            </dl>
          )}
        </div>
      )}

      {showButton && (
        <Button
          onClick={buttonClick}
          text={buttonText ?? 'Ladda ner bekräftelse'}
          iconRight={<SystemIcon icon="MonoDownload" />}
        />
      )}
    </div>
  );
};
