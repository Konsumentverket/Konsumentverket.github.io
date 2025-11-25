/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
  focusWrapper,
  pictureWrapper,
  textArea,
  focusHeadline,
  externalIcon,
  focusText,
  iconBackground,
  puffIcon,
  linkWrapper
} from './campaign-focus-puff.css.js';
import React from 'react';

import External from '@konsumentverket-sverige/designsystem.utils';

export const CampaignFocusPuff = ({
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
}) => {
  let imageArea = imageComponent;
  if (imageArea == null) {
    if (image != null) imageArea = <img src={image} alt={imageAlt} />;
    else {
      imageArea = (
        <div css={iconBackground}>
          {icon && React.cloneElement(icon, { style: puffIcon })}
        </div>
      );
    }
  }

  const campaignPuffMarkup = () => {
    return (
      <div css={focusWrapper}>
        <div css={pictureWrapper} className={imageComponent ? 'image' : null}>{imageArea}</div>
        <div css={textArea} className='textarea'>
          <h3 css={focusHeadline}>
            {headline}
            {isExternalLink && <External title="Extern länk" style={externalIcon} />}
          </h3>
          <p css={focusText}>{text}</p>
        </div>
      </div>
    );
  };

  return url !== null ? (
    <LinkComponent
      css={linkWrapper}
      href={url}
      onClick={onClick}
      className="noStyle"
      injected={true}
    >
      {campaignPuffMarkup(CampaignFocusPuff)}
    </LinkComponent>
  ) : (
    campaignPuffMarkup(CampaignFocusPuff)
  );
};
