/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from "react"
import * as css from "./ListItem.css"
import { DateFormat } from '../DateFormat/DateFormat'

const ListItem = ({
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
  onClick,
  linkComponent: LinkComponent = 'a',
}) => {

  const styles = [css.wrapper, invertedLinkStyle && css.invertedLink, style];

  const props = {
    className: 'noStyle',
    href,
    onClick,
    css: styles,
  };

  return (
    <LinkComponent
      {...props}
      injected={true}
    >
      {type && <p css={css.news}>{type.toUpperCase()}
        {reviewedDate && <>: <DateFormat date={reviewedDate} showDate={true}/></>}</p>}
      <p
        css={css.headline}
        className="listItemHeadline">
        {headline}
      </p>
      {children}
      {preamble && <p css={css.preambleStyle}>{preamble}</p>}
      {bottomText && <p css={css.bottomText}>{bottomText}</p>}
    </LinkComponent>
  )
}

export { ListItem };
