/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import {
  wrapperStyling,
  warningWrapperStyling,
  tagMargin,
  titleStyling,
  iconWrapper,
  iconWrapperWarning,
  iconColor,
  articleEntryMarginStyling,
} from './notice-box.css.js';
import { EditorIcon } from '@konsumentverket-sverige/designsystem.icons-editor';
import { SystemIcon } from '@konsumentverket-sverige/designsystem.icons-system';

export const NoticeBox = ({
  children,
  headline,
  content,
  tag = true,
  contentfulId,
  contentfulName,
  articleEntryMargin = false,
  type = 'success',
}) => {
  if (!content && !children) {
    return null;
  }

  const icon = type === 'warning' ? 'WarningTriangle' : 'Check';

  return (
    <div
      css={[
        wrapperStyling,
        type === 'warning' ? warningWrapperStyling : null,
        tag ? tagMargin : null,
        articleEntryMargin ? articleEntryMarginStyling : null,
      ]}
      data-comp="notice-box"
      data-contentful-field-id={contentfulName ?? 'noticeBox'}
      data-contentful-entry-id={contentfulId}
    >
      {tag && (
        <div
          css={[iconWrapper, type === 'warning' ? iconWrapperWarning : null]}
        >
          <SystemIcon icon={icon} style={[type === 'warning' ? null : iconColor]} />
        </div>
      )}

      {headline && <h2 css={titleStyling}>{headline}</h2>}
      {children}
      {content}
    </div>
  );
};
