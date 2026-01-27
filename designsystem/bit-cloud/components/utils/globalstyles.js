/** @jsx jsx */
import { jsx } from '@emotion/react';
import { css, Global } from '@emotion/react';
import { spacing } from './spacing';
import { colors, newColors } from './colors';
import { paragraph } from './typography';
import React, { Children, useEffect } from 'react';

export const CompositionFonts = ({ children }) => {
  return (
    <>
      <Global
        styles={[
          css`
            @import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:ital,opsz,wght@0,8..144,400..700;1,8..144,400..700&display=swap');
          `,
          {
            body: { fontFamily: 'Roboto Flex' },
          },
        ]}
      />
      <div
        css={css`
          font-family: 'Roboto Flex';
        `}
      >
        {children}
      </div>
    </>
  );
};

export const GlobalStyles = ({
  fontSize = '62.5%',
  fontFamily = "'Roboto Flex', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontVariationSettings = '"opsz" 14, "GRAD" -60',
}) => {
  useEffect(() => {
    document.addEventListener('keyup', (e) => {
      if (e.key === 'Tab' && !document.body.classList.contains('tabnav')) {
        document.body.classList.add('tabnav');
      }
    });
    document.addEventListener('click', (e) => {
      // if detail is 0 it's most likely a keypress and not a mouse click
      if (e.detail !== 0 && document.body.classList.contains('tabnav')) {
        document.body.classList.remove('tabnav');
      }
    });
    return () => {};
  }, []);

  return (
    <Global
      styles={globalStyles(fontSize, fontFamily, fontVariationSettings)}
    />
  );
};

const fileIcon = (fileSvgPath) => `
  &:before{
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 30' %3E%3Cpath fill='${encodeURIComponent(colors.theme1.mid)}' d='${fileSvgPath}'/%3E%3C/svg%3E");
  }
`;

const globalStyles = (
  fontSize = '62.5%',
  fontFamily = "'Roboto Flex', 'Noto Sans Arabic', 'Noto Sans Hebrew','Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
) => css`
  html,
  body,
  button,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video,
  textarea {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  html {
    font-size: ${fontSize};
    font-family: ${fontFamily};
    font-variation-settings:
      'opsz' 14,
      'GRAD' -60;
    line-height: 16px;
    color: #4d4d4d;
    overflow-x: hidden;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;

    &:not(.tabnav) {
      *:focus {
        outline: none;
      }
    }
    &.tabnav {
      *:focus {
        outline: 4px solid ${newColors.secondaries.fullGreen};
      }
    }
  }

  p {
    ${paragraph};
    display: block;
  }

  ul {
    list-style: bullet inside none;

    li {
      margin-bottom: ${spacing.s};
    }
  }

  i {
    font-style: italic;
  }
  strong {
    font-weight: 700;
  }
  u {
    text-decoration: underline;
  }

  a {
    &.external {
      svg.external {
        margin-left: 8px;
      }
    }

    &:not(.noStyle) {
      text-decoration: underline;
      font-weight: 500;
      text-decoration-thickness: 1px;
      text-underline-offset: 2px;
      color: ${newColors.shades.fullBlue};
      svg {
        fill: ${newColors.shades.fullBlue};
      }

      &:hover {
        box-shadow: 0 0 0 4px ${colors.theme1.midLight};
        background-color: ${colors.theme1.midLight};
        border-radius: 0.4rem;
        text-decoration: none;
        svg {
          fill: ${colors.theme1.mid};
        }
      }
      &:visited {
        color: ${newColors.shades.fullBlue};
        svg {
          fill: ${newColors.shades.fullBlue};
        }
      }

      &:active {
        box-shadow: 0 0 0 4px ${colors.theme1.midLight};
        background-color: ${colors.theme1.midLight};
        color: ${colors.theme1.xDark};
        border-radius: 0.4rem;
        text-decoration: none;

        svg {
          fill: ${colors.theme1.xDark};
        }
      }

      &.invertedStyle:not(.noStyle) {
        &:visited {
          background-color: inherit;
        }
        &:hover {
          background-color: #fff;
          box-shadow: 0 0 0 4px #fff;
        }
        &:active {
          box-shadow: 0 0 0 4px #fff;
          background-color: #fff;
        }
      }

      html[data-theme='dark'] & {
        color: ${newColors.shades.mediumBlue};
        svg {
          fill: ${newColors.shades.mediumBlue};
        }
        &:hover {
          box-shadow: 0 0 0 4px ${newColors.primaries.fullBlue};
          background-color: ${newColors.primaries.fullBlue};
          color: ${newColors.shades.mediumBlue};
          svg {
            fill: ${newColors.shades.mediumBlue};
          }
        }
        &:visited {
          color: ${newColors.shades.mediumBlue};
          svg {
            fill: ${newColors.shades.mediumBlue};
          }
        }

        &:active {
          box-shadow: 0 0 0 4px ${newColors.primaries.fullBlue};
          background-color: ${newColors.primaries.fullBlue};
          color: ${newColors.shades.mediumBlue};
          svg {
            fill: ${newColors.shades.mediumBlue};
          }
        }
      }
    }

    .grecaptcha-badge {
      z-index: 1;
    }
  }

  .sr-only {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
    text-transform: none;
  }
`;

const LinkColors = css`
  color: ${colors.theme1.mid} !important;
  &:hover {
    background-color: ${colors.theme1.midLight} !important;
  }
  &:active {
    background-color: ${colors.theme1.midLight} !important;
    color: ${colors.theme1.xDark} !important;
  }
  &:visited {
    color: ${colors.states.visited} !important;
  }

  [data-theme='dark'] & {
    color: ${colors.theme1.xLight} !important;
    &:hover {
      background-color: ${colors.theme1.xDark} !important;
      color: ${colors.theme1.xLight} !important;
    }
    &:active {
      background-color: ${colors.theme1.xDark} !important;
      color: ${colors.theme1.light} !important;
    }
    &:visited {
      color: ${colors.states.visitedDark} !important;
    }
  }
`;

const LinkColorsInverted = css`
  color: ${colors.theme1.mid} !important;
  &:hover {
    background-color: #fff !important;
    box-shadow: 0 0 0 4px #fff !important;
  }
  &:active {
    background-color: #fff !important;
    box-shadow: 0 0 0 4px #fff !important;
    color: ${colors.theme1.xDark} !important;
  }
  &:visited {
    color: ${colors.states.visited} !important;
  }
`;

export const LinkWrapperColorStyle = css`
  a {
    ${LinkColors}
  }
`;

export const LinkWrapperInvertedColorStyle = css`
  a {
    ${LinkColorsInverted}
  }
`;

export const ElementLinkColorStyle = css`
  ${LinkColors}
`;

export const ElementLinkInvertedColorStyle = css`
  ${LinkColorsInverted}
`;

export const VisuallyHidden = css`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

export const viewportSmall = 420;
export const viewportMedium = 768;
export const viewportLarge = 1120;

const mediaQueryMaxWidth = (width) => `@media (max-width: ${width}px)`;
const mediaQueryMinWidth = (width) => `@media (min-width: ${width}px)`;

export const small = mediaQueryMaxWidth(viewportSmall);
export const medium = mediaQueryMinWidth(viewportMedium);
export const large = mediaQueryMinWidth(viewportLarge);
