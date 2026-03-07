/** @jsxImportSource @emotion/react */
import React from 'react';
import {
  wrapper,
  linkTextWrapper,
  mainLinkStyle,
  innerTextWrapperStyle,
  linkTextCardContentStyle,
  linkTextMainLinkStyle,
} from '@konsumentverket-sverige/designsystem.link-card';
import { SubHeading } from '@konsumentverket-sverige/designsystem.sub-heading';
import { Arrow } from '@konsumentverket-sverige/designsystem.icons-system';

const LinkTextCard = React.forwardRef(
  (
    {
      text,
      href,
      children,
      id,
      headingLevel = 2,
      onClick,
      style,
      dir,
      lang,
      linkComponent: LinkComponent = 'a',
      ...other
    },
    ref
  ) => {
    const renderLinkText = () => {
      if (children) {
        return (
          <SubHeading
            level={headingLevel}
            styleLevel={3}
            style={innerTextWrapperStyle}
          >
            <span>{text}</span>
            <Arrow aria-hidden="true" />
          </SubHeading>
        );
      } else {
        return (
          <div css={innerTextWrapperStyle}>
            <span>{text}</span>
            <Arrow aria-hidden="true" />
          </div>
        );
      }
    };

    return (
      <div
        id={id}
        dir={dir}
        css={[wrapper, linkTextWrapper, style]}
        lang={lang}
        {...other}
      >
        <LinkComponent
          injected={true}
          ref={ref}
          href={href}
          css={[mainLinkStyle, linkTextMainLinkStyle]}
          onClick={onClick}
        >
          {renderLinkText()}
          {children && <span css={linkTextCardContentStyle}>{children}</span>}
        </LinkComponent>
      </div>
    );
  }
);

LinkTextCard.displayName = 'LinkTextCard';

export { LinkTextCard };
