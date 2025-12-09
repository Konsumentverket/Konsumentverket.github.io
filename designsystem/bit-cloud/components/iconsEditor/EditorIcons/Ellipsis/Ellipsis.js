/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { newColors } from '@konsumentverket-sverige/designsystem.utils';
import { css } from '@emotion/core';

const iconStyle = css`
  html[data-theme='dark'] & {
    path {
      fill: ${newColors.shades.fullBlue};
    }
  }
`;

export const Ellipsis = ({ className, style, title, ...otherAttr }) => {
  return (
    <svg
      className={className}
      css={[iconStyle, style]}
      width="32px"
      height="29px"
      viewBox="0 0 192 512"
      {...otherAttr}
    >
      <title>{title}</title>
      <g stroke="none" strokeWidth="1">
        <g transform="translate(-584.000000, -533.000000)">
          <g transform="translate(584.000000, 533.000000)">
            <path d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"></path>
          </g>
        </g>
      </g>
    </svg>
  );
};
