/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import * as css from './focus-puff.css.js';
import { External } from '@konsumentverket-sverige/designsystem.icons-system';

const FocusPuff = React.forwardRef(({
  headline,
  text,
  url,
  isExternalLink,
  image,
  imageAlt,
  icon,
  imageComponent,
  onClick,
  linkComponent: LinkComponent = 'a',
  style
}, ref) => {

  let imageArea = imageComponent;

  if (!imageArea) {
    if (image) {
      imageArea = <img src={image} alt={imageAlt} />
    } else {
      if (icon) {
        imageArea = React.isValidElement(icon) ? React.cloneElement(icon, { style: css.puffIcon }) : null
      }
    }
  }

  return (
    <LinkComponent
      css={[css.linkWrapper, style]}
      onClick={onClick}
      href={url}
      className="noStyle"
      injected={true}
    >
      <div css={[css.focusWrapper]} className={'focusWrapper'}>
        <div css={css.pictureWrapper} className={imageComponent ? 'image' : null}>{imageArea}</div>
        <div css={css.textArea} className="textArea">
          <h3 css={css.focusHeadline} className="headline">
            {headline}
            {isExternalLink && <External title="Extern länk" style={css.externalIcon} />}
          </h3>
          <p css={css.focusText} className="text">{text}</p>
        </div>
      </div>
    </LinkComponent>
  )
});

FocusPuff.displayName = "FocusPuff"
export { FocusPuff }