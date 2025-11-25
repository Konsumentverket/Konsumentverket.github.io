/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from "react"
import * as css from "./list-item-disabled.css.js"

export const ListItemDisabled = ({
  children,
  headline,
  preamble,
  bottomText,
  type,
  reviewedDate,
  href,
  headlineLevel,
  headlineStyleLevel,
  style,
  invertedLinkStyle,
  disabled
}) => (
  <div css={[css.wrapper, invertedLinkStyle && css.invertedLink, css.disabled, style]}>
    {type && <p css={css.news}>{type.toUpperCase()}
      {reviewedDate && <>: {reviewedDate}</>}</p>}
    <p
      css={[css.headlineDisabled, css.headline]}
      className="listItemHeadline">
      {headline}
    </p>
    {children}
    {preamble && <p css={css.preambleStyle}>{preamble}</p>}
    {bottomText && <p css={css.bottomText}>{bottomText}</p>}
  </div>
)
