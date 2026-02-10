/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import {
  wrapperStyling,
  themeBlue,
  themeGrey,
  titleStyling,
  iconWrapper,
  iconWrapperReport,
  removeMargin,
  iconColor,
  articleEntryMarginStyling,
} from './fact-box.css.js';
import { SystemIcon } from '@konsumentverket-sverige/designsystem.icons-system';

export const FactBox = ({
  children,
  headline,
  content,
  tag = true,
  contentfulId,
  contentfulName,
  articleEntryMargin = false,
  reportIcon = false,
  noMargin = false,
  themeColor = 'blue',
}) => {
  document.documentElement.setAttribute('data-theme', 'dark');
  if (!content && !children) {
    return null;
  }

  return (
    <div
      css={[
        wrapperStyling,
        articleEntryMargin ? articleEntryMarginStyling : null,
        noMargin ? removeMargin : null,
        themeColor === 'grey' ? themeGrey : themeBlue,
      ]}
      data-comp="fact-box"
      data-contentful-field-id={contentfulName ?? 'considerationBox'}
      data-contentful-entry-id={contentfulId}
    >
      {tag && (
        <div css={[iconWrapper, reportIcon ? iconWrapperReport : null]}>
          <SystemIcon
            icon={reportIcon ? 'Information' : 'MonoBookmark'}
            style={iconColor}
          />
        </div>
      )}

      {headline && <h2 css={titleStyling}>{headline}</h2>}
      {children}
      {content}
    </div>
  );
};
