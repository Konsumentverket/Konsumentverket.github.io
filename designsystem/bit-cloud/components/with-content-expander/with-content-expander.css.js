import { css } from '@emotion/react';
import {
  newColors,
  spacing,
  breakpoints,
  typography,
} from '@konsumentverket-sverige/designsystem.utils';

export const containerStyle = css`
  width: 100%;
  border-radius: ${spacing.s};
  box-shadow: 0px 4px 20px 0px rgba(22, 34, 89, 0.1);
  border: 1px solid rgba(22, 34, 89, 0.1);
  overflow: hidden;

  html[data-theme='dark'] & {
    background-color: ${newColors.shades.kovBlue};
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);

    & .withContentExpander {
      background-color: ${newColors.shades.kovBlue75};
      border: 1px solid ${newColors.shades.mediumBlue};
    }
  }

  html[data-theme='dark'] .commentform &,
  html[data-theme='dark'] form[data-comp] & {
    background-color: ${newColors.shades.kovBlue75} !important;
  }

  html[data-theme='dark'] form[data-comp='contactForm-otherCases'] & {
    box-shadow: none;
  }

  html[data-theme='dark'] form[data-comp='contactForm-subscribe'] &,
  html[data-theme='dark'] form[data-comp='contactForm-guidance'] & {
    box-shadow: none;
    h3 {
      color: ${newColors.kovWhite} !important;
    }
    svg {
      fill: ${newColors.kovWhite} !important;
    }
  }
`;

export const containerLightBlueAlternativeStyle = css`
  box-shadow: none;
  border: 1px solid ${newColors.primaries.lightBlue};

  html[data-theme='dark'] & {
    border: 1px solid ${newColors.shades.kovBlue};
  }
`;

export const containerAlternativeStyle = css`
  border: 1px solid ${newColors.secondaries.lightGrey};
  box-shadow: inset 0 0 0 1px ${newColors.secondaries.lightGrey};

  html[data-theme='dark'] & {
    border: 1px solid ${newColors.shades.kovBlue};
  }
`;

export const noLeftBorderRadiusStyling = css`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  &:hover {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const headerStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${spacing.s};

  @media (min-width: ${breakpoints.m}) {
    padding: ${spacing.m};
  }

  svg {
    min-width: 12px;
    width: 12px;

    @media (min-width: ${breakpoints.m}) {
      min-width: 18px;
      width: 18px;
    }
  }
`;

export const headerProcessStepStyle = css`
  @media (min-width: ${breakpoints.m}) {
    padding: ${spacing.m} ${spacing.l};
  }
`;

export const headerLightBlueAlternativeStyle = css`
  padding: 16px;

  @media (min-width: ${breakpoints.m}) {
    padding: 16px;
  }
`;

export const innerHeaderStyle = css`
  display: flex;
  align-items: center;
`;

export const innerHeaderTextStyle = css`
  display: block;
  margin-right: ${spacing.s};

  @media (min-width: ${breakpoints.m}) {
    margin-right: ${spacing.m};
  }
`;

export const iconStyle = css`
  flex-shrink: 0;
  fill: ${newColors.primaries.fullBlue};
  margin-right: ${spacing.s};

  @media (min-width: ${breakpoints.m}) {
    margin-right: ${spacing.m};
  }
`;

export const titleStyle = css`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.5;
  color: ${newColors.primaries.fullBlue};

  @media (min-width: ${breakpoints.m}) {
    font-size: 2.4rem;
  }

  html[data-theme='dark'] & {
    color: ${newColors.shades.mediumBlue};
  }
`;

export const titleAlternativeStyle = css`
  @media (min-width: ${breakpoints.m}) {
    font-size: 1.8rem;
  }
`;

export const titleLightBlueAlternativeStyle = css`
  @media (min-width: ${breakpoints.m}) {
    font-size: 1.6rem;
  }
`;

export const titleProcessStepStyle = css`
  ${typography.clickLarge};
`;

export const preambleStyle = css`
  color: ${newColors.kovBlack};
  line-height: 1.25;
  font-size: 1.6rem;
  margin: 0;

  @media (min-width: ${breakpoints.m}) {
    font-size: 1.8rem;
  }
`;

export const linkStyle = css`
  position: relative;
  display: block;
  text-decoration: none;
  background-color: ${newColors.kovWhite};
  border-radius: ${spacing.s};
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: ${newColors.shades.lightBlue};
    box-shadow: inset 0 0 0 1px ${newColors.shades.mediumBlue};
  }

  &:focus-within {
    outline-offset: -4px;
  }

  html[data-theme='dark'] & {
    background-color: transparent;
    &:hover {
      background-color: ${newColors.shades.kovBlue75};
    }
  }

  html[data-theme='dark'] .commentform &,
  html[data-theme='dark'] form[data-comp] & {
    &:hover {
      background-color: ${newColors.shades.kovBlue50} !important;
    }
  }
`;

export const buttonResetStyle = css`
  border: none;
  padding: 0;
  margin: 0;
  text-align: left;
  width: 100%;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
`;

export const linkAlternativeStyle = css`
  border-radius: ${spacing.s};
  background-color: ${newColors.shades.lightGrey25};
  border-top: 1px solid ${newColors.secondaries.mediumGrey};
  border-right: 1px solid ${newColors.secondaries.mediumGrey};
  border-bottom: 1px solid ${newColors.secondaries.mediumGrey};
  border-left: 1px solid ${newColors.secondaries.mediumGrey};

  &:hover {
    background-color: ${newColors.shades.lightGrey50};
    box-shadow: none;
  }

  html[data-theme='dark'] & {
    border: 0 !important;
  }
`;

export const linkLightBlueAlternativeStyle = css`
  background-color: ${newColors.primaries.lightBlue};

  &:hover {
    background-color: ${newColors.shades.lightBlue};
    box-shadow: none;
  }

  &:after {
    @media (min-width: ${breakpoints.m}) {
      left: 16px;
      width: calc(100% - (${spacing.s} * 2));
    }
  }
`;

export const linkStyleExpanded = css`
  border-radius: ${spacing.s} ${spacing.s} 0 0;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: ${spacing.s};
    display: block;
    height: 1px;
    width: calc(100% - (${spacing.s} * 2));
    background-color: ${newColors.shades.mediumBlue};

    @media (min-width: ${breakpoints.m}) {
      left: ${spacing.m};
      width: calc(100% - (${spacing.m} * 2));
    }

    html[data-theme='dark'] & {
      background-color: ${newColors.shades.mediumBlue};
    }
  }

  &:hover {
    border-radius: ${spacing.s} ${spacing.s} 0 0;
    box-shadow: inset 0 0 0 1px ${newColors.shades.mediumBlue};
  }
`;

export const linkStyleAlternativeExpanded = css`
  border-radius: ${spacing.s} ${spacing.s} 0 0 !important;
  border-bottom: 0 !important;

  &:after {
    background-color: ${newColors.secondaries.mediumGrey};
  }

  &:hover {
    &:after {
      left: 0;
      width: 100%;
    }
  }
`;

export const linkStyleLightBlueAlternativeExpanded = css`
  background-color: ${newColors.primaries.lightBlue};
  border-radius: ${spacing.s} ${spacing.s} 0 0 !important;
  border-bottom: 0 !important;

  &:after {
    background-color: ${newColors.primaries.mediumBlue};

    @media (min-width: ${breakpoints.m}) {
      left: 16px;
      width: calc(100% - (${spacing.s} * 2));
    }
  }
`;

export const linkStyleLightBlueAlternativeExpandedWithNoBorderLeftRadius = css`
  background-color: ${newColors.primaries.lightBlue};
  border-bottom: 0 !important;

  &:after {
    background-color: ${newColors.primaries.mediumBlue};
  }
`;

export const chevronStyle = css`
  fill: ${newColors.primaries.fullBlue};
  transform: rotate(0);
  width: 18px;

  html[data-theme='dark'] & {
    fill: ${newColors.shades.mediumBlue};
  }
`;

export const chevronExpandedStyle = css`
  transform: rotate(-180deg);
`;

export const expandedAreaStyle = css`
  background-color: ${newColors.kovWhite};
  overflow: hidden;
  visibility: hidden;
  padding: 0;
  height: 0;

  html[data-theme='dark'] & {
    background-color: transparent;
    border: 0;
    color: ${newColors.kovWhite};
  }
`;

export const expandedAreaAlternativeStyle = css`
  background-color: ${newColors.shades.lightGrey25};
  border: 1px solid ${newColors.secondaries.mediumGrey};
  border-top: 0;
`;

export const expandedAreaLightBlueAlternativeStyle = css`
  background-color: ${newColors.primaries.lightBlue};
  border: 0;
  border-top: 0;
  padding: ${spacing.s} ${spacing.s} ${spacing.m} ${spacing.s};

  @media (min-width: ${breakpoints.m}) {
    padding: ${spacing.s} ${spacing.s} ${spacing.m} ${spacing.s};
  }
`;

export const expandedAreaExpandedStyle = css`
  visibility: visible;
  padding: ${spacing.m} ${spacing.s} ${spacing.l} ${spacing.s};
  height: auto;
  border-radius: 0 0 ${spacing.s} ${spacing.s};

  @media (min-width: ${breakpoints.m}) {
    padding: ${spacing.m} ${spacing.m} ${spacing.l} ${spacing.m};
  }
`;

/*
 * Panelvariant. Används när expandrarna ligger i en gemensam, färgad panel och själva
 * ska sakna eget kort-utseende: ingen bakgrund, ram, skugga eller radie. Panelens
 * bakgrund och avdelarna mellan posterna sätts av den omgivande listan, inte här.
 */
export const containerPanelStyle = css`
  background-color: transparent;
  box-shadow: none;
  border: 0;
  border-radius: 0;

  html[data-theme='dark'] & {
    background-color: transparent;
    box-shadow: none;
    border: 0;
  }
`;

export const linkPanelStyle = css`
  background-color: transparent;
  box-shadow: none;
  border: 0;

  /* Standardvariantens hover ritar tillbaka hela kortet: en ljusblå platta med
     inset-kant. I panelen blir det fel – plattan har dessutom exakt samma färg som
     avdelarna mellan posterna. Hover-regeln i linkStyle har högre specificitet än
     bastillståndet ovan, så den måste nollas uttryckligen. Kvar som affordans blir
     understruken rubrik. */
  &:hover {
    background-color: transparent;
    box-shadow: none;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      text-decoration: underline;
    }
  }

  html[data-theme='dark'] & {
    background-color: transparent;
    box-shadow: none;
    border: 0;

    &:hover {
      background-color: transparent;
      box-shadow: none;
    }
  }
`;

export const expandedAreaPanelStyle = css`
  background-color: transparent;
  border: 0;

  /* Svaret ligger indraget bredvid en böjd pil som pekar in mot texten. Pilen är
     dekorativ och ligger först i flödet; innehållet tar resten av bredden.
     min-width: 0 behövs för att långa ord och kodblock ska kunna brytas i stället
     för att spränga flexboxen. */
  display: flex;
  align-items: flex-start;
  gap: ${spacing.s};

  > :last-child {
    flex: 1;
    min-width: 0;
  }

  html[data-theme='dark'] & {
    background-color: transparent;
    border: 0;
  }
`;

/*
 * Panelen sätter redan sin egen vågräta padding, så raderna ska inte ha någon:
 * annars hamnar frågetexten dubbelt indragen (24px + 24px på desktop). Kvar blir
 * bara luft över och under, som ger raderna sin höjd.
 */
export const headerPanelStyle = css`
  padding: ${spacing.s} 0;

  @media (min-width: ${breakpoints.m}) {
    padding: ${spacing.s} 0;
  }
`;

/*
 * Måste vara skild från expandedAreaPanelStyle och villkorad på expanded – i
 * hopfällt läge är höjden 0, och padding där skulle ge varje hopfälld rad extra
 * höjd trots att innehållet är dolt.
 */
export const expandedAreaExpandedPanelStyle = css`
  padding: 0 0 ${spacing.s} 0;

  @media (min-width: ${breakpoints.m}) {
    padding: 0 0 ${spacing.s} 0;
  }
`;

export const indentArrowPanelStyle = css`
  flex: 0 0 auto;
  width: 20px;
  height: 20px;
  margin-top: 2px;

  @media (min-width: ${breakpoints.m}) {
    width: 24px;
    height: 24px;
  }

  /* Ikonen har fill hårdkodad på sin path, så färgen måste sättas där och inte på
     svg-elementet. */
  path {
    fill: ${newColors.primaries.fullBlue};
  }

  html[data-theme='dark'] & path {
    fill: ${newColors.shades.mediumBlue};
  }
`;

export const titlePanelStyle = css`
  font-size: 1.8rem;

  @media (min-width: ${breakpoints.m}) {
    font-size: 1.8rem;
  }
`;
