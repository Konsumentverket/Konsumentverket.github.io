/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import React from 'react';
import {
  wrapper,
  linkTextWrapper,
  mainLinkStyle,
  innerTextWrapperStyle,
  linkTextCardContentStyle,
  linkTextMainLinkStyle
} from '../link-card/link-card.css.js';
import { SubHeading } from '../sub-heading/sub-heading'
import Arrow from '../utils/Icons/SystemIcons/Arrow/Arrow';

const LinkTextCard = React.forwardRef(({
  text,
  href,
  children,
  id,
  headingLevel = 2,
  onClick,
  style,
  dir,
  lang,
  ...other
}, ref) => {

  const renderLinkText = () => {
    if (children) {
      return (
        <SubHeading level={headingLevel} styleLevel={3} style={innerTextWrapperStyle}>
          <span>{text}</span><Arrow aria-hidden='true' />
        </SubHeading>
      );
    } else {
      return (
        <div css={innerTextWrapperStyle}>
          <span>{text}</span><Arrow aria-hidden='true' />
        </div>
      )
    }
  }

  return (
    <div id={id} dir={dir} css={[wrapper, linkTextWrapper, style]} lang={lang} {...other}>
      <a ref={ref} href={href} css={[mainLinkStyle, linkTextMainLinkStyle]} onClick={onClick}>
        {renderLinkText()}
        {children && <span css={linkTextCardContentStyle}>{children}</span>}
      </a>
    </div>
  )
})

LinkTextCard.displayName = "LinkTextCard"

export { LinkTextCard };