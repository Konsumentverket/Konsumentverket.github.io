import { css } from '@emotion/react';
import {
  newColors,
  breakpoints,
  typography,
  colors,
} from '@konsumentverket-sverige/designsystem.utils';

import {
  checkPath,
} from '@konsumentverket-sverige/designsystem.icons-system';

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

export const topLeftIcon = css`
  &::before {
    content: "";
    position: absolute;
    width: 32px;
    height: 32px;
    top: -8px;
    left: -12px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.24934 29.7C7.29267 29.8413 10.692 30 15.6667 30C20.6413 30 24.04 29.8413 26.084 29.7C27.964 29.57 29.484 28.1626 29.6707 26.2506C29.8353 24.5673 30 21.9726 30 18.3333C30 14.694 29.8353 12.0993 29.6707 10.416C29.484 8.50396 27.964 7.09596 26.084 6.96663C24.0407 6.82529 20.6413 6.66663 15.6667 6.66663C10.692 6.66663 7.29334 6.82529 5.24934 6.96663C3.36934 7.09663 1.84934 8.50396 1.66267 10.416C1.498 12.0993 1.33334 14.694 1.33334 18.3333C1.33334 21.9726 1.498 24.5673 1.66267 26.2506C1.84934 28.1626 3.36934 29.5706 5.24934 29.7Z' fill='%2392D2F4'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M22.8173 0.0059857C24.96 -0.102014 26.8427 1.29132 27.288 3.40599C27.5147 4.48132 27.7813 5.88599 28.0587 7.65399C27.4746 7.25083 26.7922 7.01332 26.084 6.96665C24.0407 6.82532 20.6413 6.66665 15.6667 6.66665C10.692 6.66665 7.29333 6.82532 5.24933 6.96665C3.36933 7.09665 1.84933 8.50399 1.66267 10.416C1.498 12.0993 1.33333 14.694 1.33333 18.3333C1.33333 18.69 1.33467 19.0373 1.338 19.3733C1.11332 17.9542 0.913071 16.5313 0.737333 15.1053C0.266667 11.3153 0.0753335 8.55865 0.00400015 6.72399C-0.0813332 4.56399 1.40733 2.75799 3.51467 2.34932C5.52 1.96132 8.66267 1.43065 13.13 0.888652C17.5967 0.345986 20.7767 0.108652 22.8167 0.0059857H22.8173Z' fill='%230061C2'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M6.33334 23.3333C6.06812 23.3333 5.81377 23.4387 5.62623 23.6262C5.43869 23.8137 5.33334 24.0681 5.33334 24.3333C5.33334 24.5985 5.43869 24.8529 5.62623 25.0404C5.81377 25.228 6.06812 25.3333 6.33334 25.3333H25C25.2652 25.3333 25.5196 25.228 25.7071 25.0404C25.8946 24.8529 26 24.5985 26 24.3333C26 24.0681 25.8946 23.8137 25.7071 23.6262C25.5196 23.4387 25.2652 23.3333 25 23.3333H6.33334Z' fill='%230061C2'/%3E%3Cpath d='M5.33334 20.3333C5.33334 20.0681 5.43869 19.8137 5.62623 19.6262C5.81377 19.4387 6.06812 19.3333 6.33334 19.3333H11.6667C11.9319 19.3333 12.1862 19.4387 12.3738 19.6262C12.5613 19.8137 12.6667 20.0681 12.6667 20.3333C12.6667 20.5985 12.5613 20.8529 12.3738 21.0404C12.1862 21.228 11.9319 21.3333 11.6667 21.3333H6.33334C6.06812 21.3333 5.81377 21.228 5.62623 21.0404C5.43869 20.8529 5.33334 20.5985 5.33334 20.3333Z' fill='%230061C2'/%3E%3Cpath d='M5.33334 16.3333C5.33334 16.0681 5.43869 15.8137 5.62623 15.6262C5.81377 15.4387 6.06812 15.3333 6.33334 15.3333H11.6667C11.9319 15.3333 12.1862 15.4387 12.3738 15.6262C12.5613 15.8137 12.6667 16.0681 12.6667 16.3333C12.6667 16.5985 12.5613 16.8529 12.3738 17.0404C12.1862 17.228 11.9319 17.3333 11.6667 17.3333H6.33334C6.06812 17.3333 5.81377 17.228 5.62623 17.0404C5.43869 16.8529 5.33334 16.5985 5.33334 16.3333Z' fill='%230061C2'/%3E%3Cpath d='M5.33334 12.3333C5.33334 12.0681 5.43869 11.8137 5.62623 11.6262C5.81377 11.4387 6.06812 11.3333 6.33334 11.3333H11.6667C11.9319 11.3333 12.1862 11.4387 12.3738 11.6262C12.5613 11.8137 12.6667 12.0681 12.6667 12.3333C12.6667 12.5985 12.5613 12.8529 12.3738 13.0404C12.1862 13.228 11.9319 13.3333 11.6667 13.3333H6.33334C6.06812 13.3333 5.81377 13.228 5.62623 13.0404C5.43869 12.8529 5.33334 12.5985 5.33334 12.3333Z' fill='%230061C2'/%3E%3Cpath d='M17.288 21.2466C18.0087 21.2933 19.0127 21.3333 20.3333 21.3333C21.6533 21.3333 22.658 21.2933 23.3787 21.2466C23.8657 21.2206 24.3259 21.0154 24.6708 20.6706C25.0157 20.3258 25.2211 19.8657 25.2473 19.3786C25.294 18.658 25.3333 17.654 25.3333 16.3333C25.3333 15.0133 25.2933 14.0086 25.2467 13.288C25.2206 12.801 25.0154 12.3408 24.6706 11.9958C24.3258 11.6509 23.8657 11.4456 23.3787 11.4193C22.3647 11.3584 21.3491 11.3297 20.3333 11.3333C19.0133 11.3333 18.0087 11.3733 17.288 11.42C16.801 11.4461 16.3408 11.6512 15.9959 11.996C15.6509 12.3409 15.4456 12.801 15.4193 13.288C15.3584 14.3019 15.3297 15.3175 15.3333 16.3333C15.3333 17.6533 15.3733 18.658 15.42 19.3786C15.4461 19.8657 15.6513 20.3259 15.9961 20.6708C16.3409 21.0157 16.801 21.2204 17.288 21.2466Z' fill='%230061C2'/%3E%3C/svg%3E");

    @media (min-width: ${breakpoints.m}) {
      top: -14px;
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
