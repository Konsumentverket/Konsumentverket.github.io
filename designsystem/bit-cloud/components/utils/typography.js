/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { newColors } from './colors';
import { breakpoints } from './breakpoints';

const baseHeading = css`
  color: ${newColors.kovBlue};
  font-style: normal;
  font-weight: 700;
  position: relative;
  word-break: break-word;
  margin-bottom: 16px;

  html[data-theme='dark'] & {
    color: ${newColors.shades.lightBlue};
  }
`;

export const h1 = css`
  ${baseHeading};

  font-size: 3.2rem;
  line-height: 130%;
  margin-top: 16px;

  @media (min-width: ${breakpoints.m}) {
    font-size: 5rem;
    margin-top: 32px;
  }
`;

export const h1NoMargin = css`
  ${h1};
  margin: 0;
`;

export const headingLine = css`
  &::before {
    content: '';
    position: absolute;
    background-color: ${newColors.primaries.mediumOrange};
    top: 0;
    height: 100%;
    width: 4px;
    left: -16px; // 4px stroke and 12px space

    @media (min-width: ${breakpoints.ml}) {
      left: -20px; // 4px stroke and 16px space
    }
  }
`;

export const h1Line = css`
  ${h1};
  ${headingLine};
`;

export const h1LineNoMargin = css`
  ${h1Line};
  margin: 0;
`;

export const h2 = css`
  ${baseHeading};

  font-size: 2.6rem;
  line-height: 130%;
  margin-top: 16px;

  @media (min-width: ${breakpoints.m}) {
    font-size: 2.8rem;
    line-height: 140%;
    margin-top: 32px;
  }
`;

export const h2NoMargin = css`
  ${h2};
  margin: 0;

  @media (min-width: ${breakpoints.m}) {
    margin: 0;
  }
`;

export const h2Line = css`
  ${h2};
  ${headingLine};
`;

export const h2LineNoMargin = css`
  ${h2};
  ${headingLine};
  margin: 0;

  @media (min-width: ${breakpoints.m}) {
    margin: 0;
  }
`;

export const h3 = css`
  ${baseHeading};

  font-size: 2.2rem;
  line-height: 130%;
  margin-top: 16px;

  @media (min-width: ${breakpoints.m}) {
    font-size: 2.4rem;
    line-height: 140%;
    margin-top: 24px;
  }
`;

export const h3NoMargin = css`
  ${h3};
  margin: 0;

  @media (min-width: ${breakpoints.m}) {
    margin: 0;
  }
`;

export const h3Line = css`
  ${h3};
  ${headingLine};
`;

export const h3LineNoMargin = css`
  ${h3Line};
  margin: 0;

  @media (min-width: ${breakpoints.m}) {
    margin: 0;
  }
`;

export const h4 = css`
  ${baseHeading};

  font-size: 1.8rem;
  line-height: 130%;
  margin-top: 16px;

  @media (min-width: ${breakpoints.m}) {
    font-size: 2rem;
    line-height: 140%;
    margin-top: 24px;
  }
`;

export const h5 = css`
  ${baseHeading};
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 130%;
  margin-top: 16px;

  @media (min-width: ${breakpoints.m}) {
    font-size: 2rem;
    line-height: 140%;
    margin-top: 24px;
  }
`;

export const h6 = css`
  ${baseHeading};

  font-size: 1.6rem;
  line-height: 130%;
  margin-top: 16px;

  @media (min-width: ${breakpoints.m}) {
    font-size: 1.8rem;
    margin-top: 24px;
  }
`;

export const subHeading = css`
  ${baseHeading};
  font-size: 2rem;
  line-height: 140%;
  margin-top: 14px;
  margin-bottom: 8px;

  @media (min-width: ${breakpoints.m}) {
    margin-top: 16px;
  }
`;

export const subHeadingNoMargin = css`
  ${subHeading};
  margin: 0;

  @media (min-width: ${breakpoints.m}) {
    margin: 0;
  }
`;

export const subHeadingLine = css`
  ${subHeading};
  ${headingLine};
`;

export const subHeadingLineNoMargin = css`
  ${subHeadingLine};
  margin: 0;

  @media (min-width: ${breakpoints.m}) {
    margin: 0;
  }
`;

export const preamble = css`
  color: ${newColors.readingBlack};
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  word-break: normal;
  max-width: 744px;
  margin-bottom: 24px;

  @media (min-width: ${breakpoints.m}) {
    font-size: 2.4rem;
    margin-bottom: 40px;
  }
`;

export const preambleNoMargin = css`
  ${preamble};
  margin: 0;

  @media (min-width: ${breakpoints.m}) {
    margin: 0;
  }
`;

export const paragraph = css`
  color: ${newColors.kovBlack};
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  word-break: normal;
  margin-bottom: 14px;

  b,
  strong {
    font-weight: 500;
  }

  @media (min-width: ${breakpoints.m}) {
    font-size: 2rem;
    line-height: 145%;
    margin-bottom: 16px;
  }

  html[data-theme='dark'] & {
    color: ${newColors.kovWhite};
    strong,
    b {
      color: ${newColors.kovWhite};
    }
  }
`;

export const paragraphNoMargin = css`
  ${paragraph};
  margin: 0;

  @media (min-width: ${breakpoints.m}) {
    margin: 0;
  }
`;

export const paragraphStrong = css`
  ${paragraph};
  font-weight: 500;

  @media (min-width: ${breakpoints.m}) {
    line-height: 150%;
  }
`;

export const paragraphStrongNoMargin = css`
  ${paragraphStrong};
  margin: 0;

  @media (min-width: ${breakpoints.m}) {
    margin: 0;
  }
`;

export const textSmall = css`
  color: ${newColors.kovBlack};
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  word-break: normal;

  @media (min-width: ${breakpoints.m}) {
    font-size: 1.6rem;
  }
`;

export const textSmallAlt = css`
  ${textSmall};
  font-weight: 500;
`;

export const textMini = css`
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  word-break: normal;

  @media (min-width: ${breakpoints.m}) {
    font-size: 1.4rem;
    line-height: 170%;
  }
`;

export const textMiniAlt = css`
  ${textMini};
  font-weight: 500;

  @media (min-width: ${breakpoints.m}) {
    line-height: 150%;
  }
`;

export const blockquoteText = css`
  ${paragraph};

  @media (min-width: ${breakpoints.m}) {
    ${textSmall};
  }
`;

export const linkHover = css`
  text-decoration: none;
  background-color: ${newColors.primaries.lightBlue};
  box-shadow: 0 0 0 2px ${newColors.primaries.lightBlue};

  html[data-theme='dark'] & {
    background-color: ${newColors.shades.kovBlue75};
    box-shadow: 0 0 0 2px ${newColors.shades.kovBlue75};
  }
`;

export const linkFocus = css`
  text-decoration: none;
  background-color: ${newColors.primaries.mediumBlue};
  box-shadow: 0 0 0 2px ${newColors.primaries.mediumBlue};

  html[data-theme='dark'] & {
    background-color: ${newColors.shades.kovBlue75};
    box-shadow: 0 0 0 2px ${newColors.shades.kovBlue75};
  }
`;

export const link = css`
  ${paragraph};
  color: ${newColors.primaries.fullBlue};
  text-decoration: underline;
  border-radius: 3px;

  &:not(.noStyle):active,
  &:not(.noStyle):hover {
    ${linkHover};
  }

  &:not(.noStyle):focus {
    ${linkFocus};
  }

  html[data-theme='dark'] & {
    color: ${newColors.shades.mediumBlue};

    &:hover {
      color: ${newColors.shades.mediumBlue};
    }
  }
`;

export const linkNoMargin = css`
  ${link};
  margin: 0;

  @media (min-width: ${breakpoints.m}) {
    margin: 0;
  }
`;

export const linkMini = css`
  ${link};
  font-size: 1.2rem;

  @media (min-width: ${breakpoints.m}) {
    font-size: 1.4rem;
  }
`;

export const linkSmall = css`
  ${link};
  font-size: 1.4rem;
  font-weight: 500;

  @media (min-width: ${breakpoints.m}) {
    font-size: 1.6rem;
  }
`;

export const linkTextSmall = css`
  ${link};
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 150%;

  @media (min-width: ${breakpoints.m}) {
    font-size: 1.6rem;
    font-weight: 500;
  }
`;

export const linkBodyMedium = css`
  ${link};
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 32px;

  @media (min-width: ${breakpoints.m}) {
    font-size: 1.8rem;
  }
`;

export const linkLarge = css`
  ${link};
  font-size: 2rem;

  @media (min-width: ${breakpoints.m}) {
    font-size: 2.4rem;
  }
`;

export const linkParagraph = css`
  ${link};
  font-size: 1.8rem;

  @media (min-width: ${breakpoints.m}) {
    line-height: 150%;
    font-size: 2rem;
  }
`;

export const linkParagraphStrong = css`
  ${linkParagraph};
  font-weight: 700;
`;

export const clickHover = css`
  text-decoration: underline;
`;

export const clickFocus = css`
  text-decoration: underline;
`;

const baseClick = css`
  color: ${newColors.primaries.fullBlue};
  text-decoration: none;
  background-color: none;
  border-radius: 3px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  text-align: left;
  word-break: normal;

  &:active,
  &:hover {
    ${clickHover};
  }

  &:focus {
    ${clickFocus};
  }
`;

export const navClick = css`
  ${baseClick};
  font-size: 1.6rem;
  font-weight: 400;
`;

export const clickMini = css`
  ${baseClick};
  font-size: 1.2rem;

  @media (min-width: ${breakpoints.m}) {
    font-size: 1.4rem;
  }
`;

export const clickMiniUL = css`
  ${clickMini};
  text-decoration: underline;
`;

export const clickSmall = css`
  ${baseClick};
  font-size: 1.4rem;

  @media (min-width: ${breakpoints.m}) {
    font-size: 1.6rem;
  }
`;

export const clickSmallUL = css`
  ${clickSmall};
  text-decoration: underline;
`;

export const clickSmallAlt = css`
  ${clickSmall};
  font-weight: 400;
`;

export const clickMedium = css`
  ${baseClick};
  font-size: 1.6rem;

  @media (min-width: ${breakpoints.m}) {
    font-size: 1.8rem;
  }
`;

export const clickMediumUL = css`
  ${clickMedium};
  text-decoration: underline;
`;

export const clickMediumAlt = css`
  ${clickMedium};
  font-weight: 400;
`;

export const clickMediumAltUL = css`
  ${clickMediumAlt};
  text-decoration: underline;
`;

export const clickLarge = css`
  ${baseClick};
  font-weight: 700;
  font-size: 2rem;

  @media (min-width: ${breakpoints.m}) {
    font-size: 2.4rem;
  }
`;

export const clickLargeUL = css`
  ${clickLarge};
  text-decoration: underline;
`;

const baseHeadingAlt = css`
  color: ${newColors.kovBlue};
  font-style: normal;
  font-weight: 700;

  html[data-theme='dark'] & {
    color: ${newColors.shades.lightBlue};
  }
`;

export const h1Alt2 = css`
  ${baseHeadingAlt};
  font-size: 2.6rem;
  line-height: 130%;
  font-weight: 700;

  @media (min-width: ${breakpoints.m}) {
    font-size: 2.8rem;
    line-height: 128.571%; /* 36px */
  }
`;

export const h1MediumAlt = css`
  ${h1Alt2};
`;

export const h1Alt3 = css`
  ${baseHeadingAlt};
  line-height: 130%;
  font-size: 2.2rem;

  @media (min-width: ${breakpoints.m}) {
    font-size: 2.4rem;
  }
`;

export const h1SmallAlt = css`
  ${h1Alt3};
`;

export const h2Alt2 = css`
  ${baseHeadingAlt};
  font-size: 2.2rem;
  line-height: 130%;

  @media (min-width: ${breakpoints.m}) {
    font-size: 2.4rem;
    line-height: 141.667%;
  }
`;

export const h2MediumAlt = css`
  ${h2Alt2};
`;

export const h2Alt3 = css`
  ${baseHeadingAlt};
  font-size: 1.8rem;
  line-height: 130%;

  @media (min-width: ${breakpoints.m}) {
    font-size: 2rem;
    line-height: 140%;
  }
`;

export const h2SmallAlt = css`
  ${h2Alt3};
`;

const baseSubHeadingAlt = css`
  color: ${newColors.kovBlue};
  font-style: normal;
  font-weight: 700;
  margin-bottom: 8px;

  html[data-theme='dark'] & {
    color: ${newColors.shades.lightBlue};
  }
`;

export const subHeadingAltBig = css`
  ${baseSubHeadingAlt};
  font-size: 2.6rem;
  line-height: 120%; /* 33.6px */
  margin-top: 32px;

  @media (min-width: ${breakpoints.m}) {
    font-size: 2.8rem;
  }
`;

export const subHeadingLarge = css`
  ${subHeadingAltBig};
`;

export const subHeadingAltBigNoMargin = css`
  ${subHeadingAltBig};
  margin: 0;
`;

export const subHeadingAltMedium = css`
  ${baseSubHeadingAlt};
  font-size: 2.2rem;
  line-height: 130%;
  margin-top: 24px;

  @media (min-width: ${breakpoints.m}) {
    line-height: 150%;
    font-size: 2.4rem;
  }
`;

export const subHeadingMedium = css`
  ${subHeadingAltMedium};
`;

export const subHeadingAltMediumNoMargin = css`
  ${subHeadingAltMedium};
  margin: 0;

  @media (min-width: ${breakpoints.m}) {
    margin: 0;
  }
`;

export const subHeadingAltSmall = css`
  ${baseSubHeadingAlt};
  font-size: 1.8rem;
  line-height: 130%;
  margin-top: 16px;

  @media (min-width: ${breakpoints.m}) {
    font-size: 2rem;
    line-height: 140%;
  }
`;

export const subHeadingSmall = css`
  ${subHeadingAltSmall};
`;

export const subHeadingAltSmallNoMargin = css`
  ${subHeadingAltSmall};
  margin: 0;

  @media (min-width: ${breakpoints.m}) {
    margin: 0;
  }
`;

export const subHeadingAltMini = css`
  ${baseSubHeadingAlt};
  font-size: 1.6rem;
  line-height: 130%; /* 20.8px */
  margin-top: 8px;
`;

export const subHeadingAltMiniNoMargin = css`
  ${subHeadingAltMini};
  margin: 0;

  @media (min-width: ${breakpoints.m}) {
    margin: 0;
  }
`;

export const subHeadingXS = css`
  ${subHeadingAltMini};
`;

export const richTextHeadingMargin = css`
  margin-top: 32px;
  margin-bottom: 8px;

  @media (min-width: ${breakpoints.m}) {
    margin-top: 40px;
  }
`;

export const richTextH2 = css`
  ${h2}
  ${richTextHeadingMargin}
`;

export const richTextH3 = css`
  ${h3}
  ${richTextHeadingMargin}
`;

export const richTextH4 = css`
  ${h4}
  ${richTextHeadingMargin}
`;

export const richTextH5 = css`
  ${h5}
  ${richTextHeadingMargin}
`;

export const richTextH6 = css`
  ${h6}
  ${richTextHeadingMargin}
`;

export const ulListSpacing = css`
  margin: 32px 0 32px 0;
  padding: 0 0 0 8px;

  [dir='rtl'] & {
    padding: 0 8px 0 0;
  }

  @media (min-width: ${breakpoints.m}) {
    padding: 0 0 0 16px;

    [dir='rtl'] & {
      padding: 0 16px 0 0;
    }
  }
`;

export const ulSmallListSpacing = css`
  margin: 16px 0;
  padding: 0 0 0 8px;

  @media (min-width: ${breakpoints.m}) {
    margin: 24px 0;
    padding: 0 0 0 16px;
  }
`;

export const ulStyling = css`
  ${ulListSpacing};

  li {
    display: flex;
    align-items: baseline;
    flex-shrink: 0;
    ${paragraph};
    margin-bottom: 16px;

    @media (min-width: ${breakpoints.m}) {
      margin-bottom: 24px;
    }

    &:before {
      position: relative;
      top: -1px;
      content: ' ';
      flex-shrink: 0;
      background-color: ${newColors.shades.fullGrey};
      border: 1px solid ${newColors.shades.fullGrey};
      border-radius: 50%;
      display: inline-block;
      width: 7px;
      height: 7px;
      margin-right: 16px;

      [dir='rtl'] & {
        margin-right: 0;
        margin-left: 16px;
      }

      html[data-theme='dark'] & {
        background-color: ${newColors.primaries.lightOrange};
        border: 1px solid ${newColors.primaries.lightOrange};
      }
    }
  }

  > :last-child {
    margin-bottom: 0;
  }

  html[data-theme='dark'] & {
    li {
      color: ${newColors.kovWhite};
    }
  }
`;

export const ulSmallStyling = css`
  ${ulStyling};
  ${ulSmallListSpacing};

  li {
    ${textSmall};
  }
`;

export const olListSpacing = css`
  margin: 32px 27px; // 8px + 19px

  @media (min-width: ${breakpoints.m}) {
    margin: 32px 37px; // 16px + 21px
  }
`;

export const olSmallListSpacing = css`
  margin: 16px 27px; // 8px + 19px

  @media (min-width: ${breakpoints.m}) {
    margin: 24px 37px; // 16px + 21px
  }
`;

export const olStyling = css`
  ${olListSpacing};

  li {
    ${paragraph};
    padding-left: 16px;
    margin-bottom: 16px;

    @media (min-width: ${breakpoints.m}) {
      margin-bottom: 24px;
    }

    [dir='rtl'] & {
      padding-left: 0;
      padding-right: 16px;
    }
  }

  > :last-child {
    margin-bottom: 0;
  }
`;

export const olSmallStyling = css`
  ${olListSpacing};
  ${olSmallListSpacing};

  li {
    ${textSmall};
  }
`;
