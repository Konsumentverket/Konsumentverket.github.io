import { css } from '@emotion/core'
import { colors, spacing } from '@konsumentverket-sverige/designsystem.utils';

const linearGradient = rows => new Array(rows).fill(0).map(() =>
    `linear-gradient(${colors.theme3.xLight} 100%, transparent 0),`)

const randomIntFromInterval = (min, max) =>
    Math.random() * (max - min + 1) + min

const backgroundSize = rows => new Array(rows).fill(0).map(() =>
    `${randomIntFromInterval(80, 90)}% ${spacing.m},`)

const backgroundPosition = rows => new Array(rows).fill(0).map((a, i) =>
    `${spacing.xs} calc(${spacing.xs} * ${(i * 6)}),`)

export const wrapper = (rows, height) => css`
  height: ${height}rem;
  background-repeat: no-repeat;
  background-image: 
    ${linearGradient(rows)}
    linear-gradient(${colors.common.white} 100%, transparent 0);
    background-size:
      ${backgroundSize(rows)}
      100% 100%;
    background-position:
      ${backgroundPosition(rows)}
      0 0;
`
