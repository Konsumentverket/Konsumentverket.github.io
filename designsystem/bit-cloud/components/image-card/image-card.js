/** @jsx jsx */
import { jsx } from '@emotion/react';
import {
  focusWrapper,
  pictureWrapper,
  textArea,
  focusHeadline,
  externalIcon,
  focusText,
  iconBackground,
  puffIcon,
  linkWrapper,
} from './image-card.css.js';
import React from 'react';

import { SystemIcon } from '@konsumentverket-sverige/designsystem.icons-system';

export const ImageCard = ({
  headline,
  text,
  url,
  isExternalLink,
  image,
  imageAlt,
  icon,
  imageComponent,
  onClick,
  extraClass,
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

  const imageCardMarkup = () => {
    return (
      <div css={focusWrapper} className={extraClass} data-comp="image-card">
        <div css={pictureWrapper} className={imageComponent ? 'image' : null}>
          {imageArea}
        </div>
        <div css={textArea} className="textarea">
          <h3 css={focusHeadline}>
            {headline}
            {!isExternalLink && (
              <SystemIcon aria-hidden="true" icon="ChevronRight" />
            )}
          </h3>
          {!!text && <p css={focusText}>{text}</p>}
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
      data-comp="image-card"
    >
      {imageCardMarkup(ImageCard)}
    </LinkComponent>
  ) : (
    imageCardMarkup(ImageCard)
  );
};
