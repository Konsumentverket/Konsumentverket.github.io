import { css } from '@emotion/core';
import {
  newColors,
  breakpoints,
  typography,
  colors,
  checkPath,
} from '@konsumentverket-sverige/designsystem.utils';

export const form = css`
  display: flex;
  flex-direction: column;
  background-color: ${newColors.shades.lightBlue50};
  border: 1px solid ${newColors.shades.lightBlue50};
  border-radius: 8px;
  padding: 24px 16px;
  position: relative;

  @media (min-width: ${breakpoints.m}) {
    padding: 24px;
  }

  .submitButton {
    position: relative;

    @media (min-width: ${breakpoints.m}) {
      margin-left: auto;
    }

    .lds-dual-ring {
      position: relative;
      top: -2px;
      margin-left: 8px;
    }
  }
`;

export const formTitle = css`
  ${typography.h2NoMargin};
  margin-bottom: 16px;

  @media (min-width: ${breakpoints.m}) {
    margin-bottom: 32px;
  }
`;

export const formRow = css`
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.m}) {
    flex-direction: row;
    column-gap: 32px;
  }
`;

export const inputStyle = css`
  height: 57px;
  padding: 0 16px;
  border-radius: 8px;
  border: 1px solid ${newColors.shades.fullBlue};
  width: 100%;
  font-size: 1.6rem;

  @media (min-width: ${breakpoints.m}) {
    margin-bottom: 0;
  }

  &::placeholder {
    ${typography.textSmall};
    font-style: italic;
  }
`;

export const textAreaStyle = css`
  min-height: 57px;
  padding: 12px 16px;
  resize: vertical;

  border-radius: 8px;
  border: 1px solid ${newColors.shades.fullBlue};
  width: 100%;
  font-size: 1.6rem;

  @media (min-width: ${breakpoints.m}) {
    margin-bottom: 0;
  }

  &::placeholder {
    ${typography.textSmall};
    font-style: italic;
  }
`;


export const labelStyle = css`
  display: block;
  font-weight: 700;
  margin-bottom: 16px;
  margin-right: 16px;
  height: 23px;
`;

export const formInputWrapper = css`
  position: relative;
  width: 100%;
  margin-bottom: 24px;

  @media (min-width: ${breakpoints.m}) {
    margin-bottom: 32px;
  }
`;


export const inputDescriptionStyle = css`
  //height: 57px;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid ${newColors.shades.fullBlue};
  width: 100%;
  font-size: 1.6rem;

  @media (min-width: ${breakpoints.m}) {
    margin-bottom: 0;
  }

  &::placeholder {
    ${typography.textSmall};
    font-style: italic;
  }
`;

export const labelWrapper = css`
  display: inline-flex;
  align-items: center;
  margin-bottom: 16px;

  label {
    margin-bottom: 0;
  }
`;

export const informationButtonWrapper = css`
  position: relative;
  top: -4px;
`;

export const informationButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: none;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    display: none;
    z-index: 2;
    top: calc(100% + 4px);
    left: 50%;
    transform: translateX(-50%);
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid ${newColors.primaries.lightOrange};
  }
`;

export const informationButtonOpen = css`
    &::after {
      display: block;
    }
`;

export const tooltip = css`
  display: none;
  background: ${newColors.primaries.lightOrange};
  border: 1px solid ${newColors.primaries.lightOrange};
  padding: 16px 16px 0 16px;
  position: absolute;
  width: 275px;
  left: -127px;
  top: calc(100% + 11px);
  z-index: 1;
  border-radius: 8px;
  box-shadow: 0px 4px 20px rgba(22, 34, 89, 0.10);

  button {
    background: none;
    display: flex;
    align-self: baseline;
    margin-left: 8px;
    cursor: pointer;
  }

  svg {
    fill: ${newColors.primaries.fullBlue};
    width: 14px;
    height: 14px;
  }
`;

export const tooltipText = css`
  ${typography.textMini};
`;

export const showTooltip = css`
  display: flex;
  justify-content: space-between;
`;

export const leftPosition = css`
  @media (min-width: ${breakpoints.m}) {
    left: -21px;
  }
`;

export const centerPosition = css`
  @media (min-width: ${breakpoints.m}) {
    left: -127px; // (275 / 2) - (23 / 2)
  }
`;

export const rightPosition = css`
  @media (min-width: ${breakpoints.m}) {
    left: -227px; // 250 - 23
  }
`;

export const inputWrapper = css`
  position: relative;
  display: flex;
  align-items: center;

  input {
    padding-right: 70px;
  }
`;

export const resetRightPadding = css`
  input {
    padding-right: 16px;
  }
`;

export const characterCount = css`
  ${typography.textSmall};
  color: ${newColors.readingBlack};
  background: #ffffff;
  padding: 2px 0 2px 2px;
`;

export const characterCountInput = css`
  ${characterCount};
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
`;

export const characterCountTextArea = css`
  ${characterCount};
  position: absolute;
  right: 16px;
  bottom: 12px;
`;


export const exceededMaxCount = css`
  color: ${newColors.secondaries.fullPink};
  background-color: #ffffff;
`;

export const errorMessage = css`
    align-items: center;
    color: ${newColors.secondaries.fullPink};
    display: flex;
    gap: 6px;
    font-size: 1.4rem;
    line-height: 1.5;
    margin-top: 8px;

    @media (min-width: ${breakpoints.m}) {
      bottom: -30px;
    }

    svg {
      flex-shrink: 0;
    }
`;

export const childrenContainer = css`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const recaptchaContainer = css`
  margin-bottom: 24px;
  position: relative;
`;

export const loadingStyle = css`
  background: #DFF1FB;
  opacity: .5;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const inputError = css`
  border-color: ${newColors.secondaries.fullPink} !important;
`;

export const fileUploadWrapper = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;

  @media (min-width: ${breakpoints.xs}) {
    margin-bottom: 32px;
  }
`;

export const dragAreaWrapper = css`
  position: relative;
  display: flex;
  height: 168px;
`;

export const fileUploadLabel = css`
  display: block;
  ${typography.subHeadingXS};
  margin-bottom: 16px;
  margin-top: 0;
  color: ${newColors.kovBlack};
`;

export const fileUploadLabelText = css`
  margin-right: 8px;
`;

export const fileUploadTypes = css`
  ${typography.clickSmallAlt};
  color: ${newColors.shades.kovBlack50};

  &:hover {
    text-decoration: none;
  }
`;

export const dragArea = css`
  display: block;
  cursor: pointer;

  & {
    position: absolute;
    margin: 0;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    &:focus-within {
      .tabnav & {
        outline: 4px solid ${newColors.secondaries.fullGreen};
      }
    }
  }
`;

export const uploadBox = css`
  padding: 32px;
  display: flex;
  flex-direction: column;
  background: ${newColors.shades.lightBlue};
  border: 1px solid ${newColors.shades.fullBlue50};
  border-radius: 8px;
  align-items: center;

  &:hover {
    background: ${newColors.shades.lightBlue50};
    border: 1px solid ${newColors.shades.lightBlue50};
  }
`;

export const uploadBoxActive = css`
  background: ${newColors.shades.lightBlue50};
  border: 1px solid ${newColors.shades.lightBlue50};
`;

export const uploadBoxTitleStyle = css`
  margin-bottom: 8px;
  ${typography.clickMedium};
  display: flex;
  align-items: center;
`;

export const iconMarginLeft = css`
  margin-left: 8px;
`;

export const iconMarginRight = css`
  margin-right: 8px;
`;

export const iconSize = css`
  min-width: 20px;
  width: 20px;
`;

export const uploadBoxTextStyle = css`
  ${typography.textSmall};
  color: ${newColors.shades.kovBlack50};
`;

export const visuallyHidden = css`
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  clip: rect(0, 0, 0, 0);
  overflow: hidden;
`;

// export const fileUploadInput = css`
//   position: absolute;
//   opacity: 0;
//   width: 1px;
//   height: 1px;
//   margin: -1px;
//   padding: 0;
//   border: 0;
//   clip: rect(0, 0, 0, 0);
//   overflow: hidden;
//   //display: none;
// `;

export const fileListStyle = css`
    list-style: none;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;
`;

export const listItem = css`
  padding: 16px;
  border-radius: 16px;
  background-color: ${newColors.kovWhite};
  border: 1px solid ${newColors.kovWhite};
  box-shadow: 0px 4px 20px 0px rgba(22, 34, 89, 0.10);
  margin-bottom: 0;
`;


export const fileTileTop = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;

  @media (min-width: ${breakpoints.m}) {
    align-items: center;
    flex-direction: row;
  }
`;

export const fileThumbnail = css`
  padding: 8px 16px;
  border-radius: 16px;
  background-color: ${newColors.shades.lightBlue50};
  display: flex;
  align-items: center;
  color: ${newColors.kovBlack};
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='16' ry='16' stroke='%230061C2FF' stroke-width='2' stroke-dasharray='4%2c 8' stroke-dashoffset='81' stroke-linecap='square'/%3e%3c/svg%3e");

  @media (min-width: ${breakpoints.m}) {
    margin-right: 16px;
  }
`;

export const deleteFileButton = css`
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  ${typography.clickSmallUL};
  white-space: nowrap;
`;

export const fileDescriptionInstruction = css`
  ${typography.textSmall};
  color: ${newColors.shades.kovBlack50};

  strong {
    ${typography.subHeadingXS};
    color: ${newColors.kovBlack};
    margin-right: 8px;
  }
`;

export const checkboxLabelStyle = css`
    display: flex;
    align-items: center;
    width: 100%;
    color: ${newColors.shades.kovBlack};
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 400;
    text-decoration: none;
    position: relative;

    @media (min-width: ${breakpoints.m}) {
      padding-right: 16px;
    }

    &:hover {
      text-decoration-thickness: 1px;
      text-underline-offset: 2px;
      text-decoration: underline;
  }
`;

export const checkboxStyle = css`
  margin-bottom: 24px;

  @media (min-width: ${breakpoints.m}) {
    margin-bottom: 32px;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkbox + .checkbox-label:before {
    content: '';
    flex-shrink: 0;
    background: #fff;
    border-radius: 2px;
    border: 1px solid ${newColors.shades.fullBlue};
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 1.6rem;
    box-shadow: 2px 2px 5px 0px rgba(22, 34, 89, 0.10) inset;
  }

  .checkbox {
    &:checked + .checkbox-label:before {
      background: ${newColors.shades.fullBlue};
      border: 1px solid ${newColors.shades.fullBlue};
    }
  }

  .checkbox:focus-visible + .checkbox-label {
    outline: ${colors.states.focus} solid 2px;
    outline-offset: 2px;
    box-shadow: none;
  }

  .checkbox:checked + .checkbox-label:before {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 85 85' %3E%3Cpath fill='${encodeURIComponent('#fff')}' d='${checkPath}'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: 48px 48px;
    background-position: 6px 8px;
    position: relative;
  }

  .checkbox[disabled],
  .checkbox[disabled] + .checkbox-label {
    pointer-events: none;
  }

  .checkbox[disabled] + .checkbox-label {
    color: ${newColors.shades.fullGrey};
  }

  .checkbox[disabled] + .checkbox-label:before {
    border: 1px solid ${newColors.shades.mediumGrey};
    background-color: ${newColors.shades.lightGrey25};
    box-shadow: none;
  }
`

export const labelPrimaryStyle = css`
  color: ${newColors.shades.fullBlue};
`

export const errorMargin = css`
  margin-bottom: 32px;
`
