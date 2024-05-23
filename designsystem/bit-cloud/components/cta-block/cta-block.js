/** @jsx jsx */
import {jsx} from '@emotion/core';
import { ctaWrapper, focusHeadline, focusText, textArea, pictureWrapper } from './cta-block.css.js';
import React from 'react';

export const CtaBlock = ({
  headline,
  text,
  btn,
  isExternalLink,
  image,
  imageAlt,
  icon,
  imageComponent,
}) => {
  let imageArea = imageComponent;
  if (imageArea == null) {
    if (image != null) imageArea = <img src={image} alt={imageAlt} />;
    else {
      imageArea = (
        <div>
          {icon && React.cloneElement(icon)}
        </div>
      );
    }
  }


    return (
      <div css={ctaWrapper} data-comp="cta-block">
        <div css={pictureWrapper} className={imageComponent ? 'image' : null}>{imageArea}</div>
        <div css={textArea} className='textarea'>
          <h3 css={focusHeadline}>
            {headline}
            {isExternalLink && <External title="Extern länk" style={externalIcon} />}
          </h3>
          <p css={focusText}>{text}</p>

          {btn}
        </div>
      </div>
    );
};
