/** @jsxImportSource @emotion/react */
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
