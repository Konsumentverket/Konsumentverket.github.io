/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
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
import { SystemIcon, registerIcons } from '@konsumentverket-sverige/designsystem.icons-system/dist/iconsSystem.js';
import { Information } from '@konsumentverket-sverige/designsystem.icons-system/dist/SystemIcons/Information/Information.js';
import { MonoBookmark } from '@konsumentverket-sverige/designsystem.icons-system/dist/SystemIcons/MonoBookmark/MonoBookmark.js';

// Bara de ikoner komponenten faktiskt anvander registreras, sa att barreln med
// samtliga 113 ikoner inte dras in i bundlen.
registerIcons({ Information, MonoBookmark });

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
  // document.documentElement.setAttribute('data-theme', 'dark');
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
