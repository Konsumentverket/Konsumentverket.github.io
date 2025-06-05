/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import {wrapperStyling, titleStyling, iconWrapper, iconWrapperReport, removeMargin, iconColor, articleEntryMarginStyling} from './fact-box.css.js'
import {
  Icon
} from '@konsumentverket-sverige/designsystem.icon';


export const FactBox = ({
  children,
  headline,
  content,
  tag = true,
  contentfulId,
  contentfulName,
  articleEntryMargin = false,
  reportIcon = false,
  noMargin = false
}) => {

  if (!content && !children) {
    return null;
  }

  return (
    <div css={[
      wrapperStyling,
      articleEntryMargin ? articleEntryMarginStyling : null,
      noMargin ? removeMargin : null
    ]}
     data-comp="fact-box"
     data-contentful-field-id={contentfulName ?? "considerationBox"}
     data-contentful-entry-id={contentfulId}
    >
      {tag && (
        <div css={reportIcon ? iconWrapperReport : iconWrapper}>
          <Icon
            icon={reportIcon ? "Information" : "MonoBookmark"}
            style={iconColor}
          />
        </div>
      )}

      {headline && (
        <h2 css={titleStyling}>{headline}</h2>
      )}
      {children}
      {content}
    </div>
  )
}
