/** @jsx jsx */
import { jsx } from '@emotion/react';
import {
  typographyContainerStyle,
  smallTypographyContainerStyle,
  alternativeHeadingStyle,
} from './Typography.css.js';

export const Typography = ({
  children,
  small = false,
  alternativeHeadings = false,
}) => {
  // document.documentElement.setAttribute('data-theme', 'dark');

  return (
    <div
      css={[
        typographyContainerStyle,
        small && smallTypographyContainerStyle,
        alternativeHeadings && alternativeHeadingStyle,
      ]}
      data-comp="typography"
    >
      {children}
    </div>
  );
};
