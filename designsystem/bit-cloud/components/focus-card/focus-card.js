/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';

import {
  focusCardStyle,
  focusCardDarkStyle,
  focusCardTextSectionStyle,
  focusCardTitleStyle,
  focusCardTextStyle,
  focusCardIconSectionStyle,
  focusCardIconDarkSectionStyle,
  focusCardChevronIconStyle,
  focusCardExternalIconStyle,
} from './focus-card.css.js';

import { SystemIcon } from '@konsumentverket-sverige/designsystem.icons-system';

export const FocusCard = ({
  title,
  headline,
  text,
  url,
  dark = false,
  linkComponent: LinkComponent = 'a',
  isExternal = false
}) => {
  return (
    <LinkComponent
      className={'noStyle'}
      css={[focusCardStyle, dark && focusCardDarkStyle]}
      href={url}
      data-comp="focus-card"
      injected={true}
      isExternal={isExternal}
    >
      <div css={focusCardTextSectionStyle}>
        {title && (
          <h3 css={focusCardTitleStyle} className="focusCardTitle">
            {title}
            {isExternal && <SystemIcon icon="External" title="Extern länk" css={focusCardExternalIconStyle} />}
          </h3>
        )}
        {headline && (
          <h3 css={focusCardTitleStyle} className="focusCardTitle">
            {headline}
            {isExternal && <SystemIcon icon="External" title="Extern länk" css={focusCardExternalIconStyle} />}
          </h3>
        )}
        {text && <p css={focusCardTextStyle}>{text}</p>}
      </div>
      <div
        css={[
          focusCardIconSectionStyle,
          !dark && focusCardIconDarkSectionStyle,
        ]}
        className="focusCardIconSection"
      >
        <SystemIcon
          title="Pil till höger"
          icon="MonoArrowRight"
          css={focusCardChevronIconStyle}
        />
      </div>
    </LinkComponent>
  );
};
