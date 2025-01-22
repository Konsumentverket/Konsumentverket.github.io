/** @jsx jsx */
import React from 'react';
import {jsx} from '@emotion/core';
import {
  wrapper,
  dataListTitle,
  dataList,
  nestedContainerTitle,
  nestedWrapper,
  nestedFlex,
  nestedKeyStyle,
  nestedFlexChild,
  loader
} from './form-success.css.js';
import {NoticeBox} from '@konsumentverket-sverige/designsystem.notice-box';
import {Loading} from '@konsumentverket-sverige/designsystem.loading';
import {Button} from '@konsumentverket-sverige/designsystem.button';
import {Icon} from '@konsumentverket-sverige/designsystem.icon';

export const FormSuccess = ({
  formData,
  children,
  headline,
  contentfulId,
  contentfulName,
  buttonClick = () => {},
  buttonText,
  loading = false,
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

      <h3 css={dataListTitle}>Inskickade uppgifter:</h3>

      {loading ? (
        <div css={[loader]}>
          <Loading />
        </div>
      ) : (
        <>
          {formData && (
            <dl css={dataList}>
              {Object.keys(formData).map((key) => {
                const hasNestedData = typeof formData[key] === 'object' && formData[key] !== null;

                return (
                  hasNestedData ? (
                    <div key={key} css={nestedWrapper}>
                      <dt css={nestedContainerTitle}>{key}:&nbsp;</dt>
                      <dd css={nestedFlex}>
                        {Object.entries(formData[key]).map(([nestedKey, nestedValue]) => (
                          <span key={nestedKey} css={[nestedFlex, nestedFlexChild]}>
                              <span css={nestedKeyStyle}>{nestedKey}: </span>
                              <span>{!!nestedValue ? nestedValue : "Saknar beskrivning."}</span>
                          </span>
                        ))}
                      </dd>
                    </div>
                  ) : (
                    <div key={key}>
                      <dt>{key}:&nbsp;</dt>
                      <dd>
                        {formData[key]}
                      </dd>
                    </div>
                  )
                )
              })}
            </dl>
          )}
        </>
      )}

      <Button
        onClick={buttonClick}
        text={buttonText ?? "Ladda ner bekräftelse"}
        iconRight={
          <Icon icon="MonoDownload"/>
        }
      />
    </div>
  );
};
