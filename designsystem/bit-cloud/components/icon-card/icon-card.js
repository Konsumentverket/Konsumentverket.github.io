/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { ChevronRight } from '@konsumentverket-sverige/designsystem.icons-system';

import {
  iconCardStyle,
  altIconCardStyle,
  chevronStyle,
  iconStyle,
  iconTextStyle,
  altLightIconCardStyle,
} from './icon-card.css.js';

const IconCard = React.forwardRef(
  (
    {
      icon,
      text,
      url,
      onClick,
      id,
      lang = 'sv',
      dir = 'ltr',
      useLightAlternativeColors = false,
      useAlternativeColors = false,
      contentfulName,
      contentfulId,
      linkComponent: LinkComponent = 'a',
    },
    ref
  ) => {
    // document.documentElement.setAttribute('data-theme', 'dark');

    return (
      <LinkComponent
        data-comp="icon-card"
        ref={ref}
        dir={dir}
        id={id}
        href={url}
        lang={lang}
        onClick={onClick}
        css={[
          iconCardStyle,
          useAlternativeColors
            ? altIconCardStyle
            : useLightAlternativeColors
              ? altLightIconCardStyle
              : null,
        ]}
        className="noStyle"
        data-contentful-field-id={contentfulName}
        data-contentful-entry-id={contentfulId}
        injected={true}
      >
        {icon &&
          React.cloneElement(icon, { 'aria-hidden': 'true', style: iconStyle })}
        <span css={iconTextStyle}>{text}</span>
        <ChevronRight aria-hidden="true" style={chevronStyle} />
      </LinkComponent>
    );
  }
);

export { IconCard };
