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
  imageCardExternalIconStyle,
  linkWrapper,
} from './image-card.css.js';
import React from 'react';

import { SystemIcon } from '@konsumentverket-sverige/designsystem.icons-system';

export const ImageCard = ({
  headline,
  text,
  url,
  isExternalLink = false,
  image,
  imageAlt,
  icon,
  imageComponent,
  onClick,
  extraClass,
  isPortal = false,
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
             {isExternalLink && isPortal && (
              <SystemIcon icon="External" title="Extern länk" css={imageCardExternalIconStyle} />
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
