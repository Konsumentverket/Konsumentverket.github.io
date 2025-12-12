/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import * as css from './FocusPuff.css';
import External from '../Icons/SystemIcons/External/External';

const FocusPuff = React.forwardRef(({headline, text, url, isExternalLink, image, imageAlt, icon, imageComponent, onClick, style }, ref) => {

  let imageArea = imageComponent;

	if (!imageArea) {
		if (image)  {
      imageArea = <img src={image} alt={imageAlt} />
    } else {
      if(icon) {
        imageArea = React.isValidElement(icon) ? React.cloneElement(icon,{style:css.puffIcon}) : null
      }
		}
	}

  return (
    <a css={[css.linkWrapper, style]} onClick={onClick} href={url} className="noStyle">
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
    </a>
  )
});

FocusPuff.displayName = "FocusPuff"
export {FocusPuff}