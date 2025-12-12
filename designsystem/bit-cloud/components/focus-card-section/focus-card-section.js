/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from "react";

import {
  focusCardSectionStyle,
  focusCardSectionGreyStyle,
  focusCardSectionBlueStyle,
  focusCardSectionContainerStyle,
  focusCardSectionHeaderStyle,
  focusCardSectionTextWrapperStyle,
  focusCardSectionIconWrapperStyle,
  focusCardSectionTitleStyle,
  focusCardSectionTextStyle,
  focusCardSectionItemsListStyle,
  focusCardSectionItemStyle,
} from './focus-card-section.css.js';

import { EditorIcon } from '@konsumentverket-sverige/designsystem.icons-editor';
import { FocusCard } from '@konsumentverket-sverige/designsystem.focus-card';

export const FocusCardSection = ({
  title,
  text,
  icon,
  backgroundColor,
  items,
}) => {

  const backgroundColorMap = {
    blue: focusCardSectionBlueStyle,
    grey: focusCardSectionGreyStyle,
  };
  
  const modifierCssClass = backgroundColorMap[backgroundColor] || '';
  
  return (
    <div css={[focusCardSectionStyle, modifierCssClass && modifierCssClass]} data-comp="focus-card-section">
      <div css={focusCardSectionContainerStyle}>
        <div css={focusCardSectionHeaderStyle}>
          {icon && (<div css={focusCardSectionIconWrapperStyle}><EditorIcon icon={icon} /></div>)}
          <div css={focusCardSectionTextWrapperStyle}>
            {title && (<h2 css={focusCardSectionTitleStyle}>{title}</h2>)}
            {text && (<p css={focusCardSectionTextStyle}>{text}</p>)}
          </div>
        </div>
        {items && (
          <div css={focusCardSectionItemsListStyle}>
            {items.map((item, index) => (
              <div key={index} css={focusCardSectionItemStyle}>
                <FocusCard {...item} dark={!modifierCssClass} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
