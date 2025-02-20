import { css } from "@emotion/core";
import { newColors, spacing, medium } from '@konsumentverket-sverige/designsystem.utils';

export const wrapper = css`
  background-color: #fff;
  border-radius: 16px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 0;
  box-shadow: 0px 4px 20px 0px rgba(22, 34, 89, 0.10);
  position: relative;
  width: 100%;


  ${medium}{
  }

  & > * {
    z-index: 1;
  }

  p {
    font-size: 1.6rem;
    padding-bottom: 0;
    padding-left: 9px;
    line-height: 1.5;
    margin-bottom: 10px;
  }
`
export const heading = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 100%;


   & > svg {
      width: 12px !important;
      height: 16px !important;
      margin-right: 4px;
   }
`

export const linkTextMainLinkStyle = css`
    padding: 2.4rem 1.6rem;

    &:hover {
      border-radius: 16px 16px 0 0 !important;
    }

    .tabnav &:focus {

        > *{
            outline: none;
        }
    }
`

export const mainLinkStyle = css`
    box-sizing:border-box;
    text-decoration: none !important;
    z-index: 1;
    padding-left: 12px;

    h2 {
      margin: 0 !important;
      padding-left: 4px;
    }

    & > * {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 17px 16px 15px 8px;
      line-height: 1.5;
      color: ${newColors.shades.fullBlue};
      font-size: 1.8rem !important;
      font-weight: 500;

      div {
        display: flex;
        align-items: center;
        width: 100%;
      }

      svg {
        width: 18px;
        height: 18px;
        right: unset !important;
        margin-right: ${spacing.xs};
        margin-left: 4px;
        fill: ${newColors.shades.fullBlue};
        z-index: 1;

        ${medium}{
          width: 24px;
          height: 24px;
        }


        &:last-child {
          width: 18px;
          height: 18px;
          margin-left: 16px;
          margin-right: 0;
        }
      }
    }

    &:hover {
      background-color: ${newColors.primaries.lightBlue};
      border-radius: 16px 16px 0 0 !important;
      box-shadow: none !important;

      .singleItem &,
      .noLinkChildren & {
          border-radius: 16px !important;
      }
      .linkCardBorder {
        width: calc(100% + 12px) !important;
        margin-left: -12px !important;
        padding: 0 !important;
      }

      .noLinkChildren & {
          &:before {
            position: absolute;
            content: '';
            background-color: ${newColors.primaries.lightBlue};
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            cursor: pointer;
            border-radius: 16px;
            border: 1px solid ${newColors.primaries.fullBlue};
         }
      }

      h2 {
        text-decoration: underline!important;
        color: ${newColors.primaries.fullBlue} !important;
      }
    }

    &:active {
      background-color: ${newColors.shades.mediumBlue50} !important;
      border-radius: 16px 16px 0 0 !important;
      box-shadow: none !important;

        h2, span {
          color: ${newColors.primaries.fullBlue} !important;
        }
        svg {
          fill: ${newColors.shades.fullBlue} !important;
        }

        .linkCardBorder {
          width: 100% !important;
          margin-left: 0 !important;
          padding: 0;
       }

        .noLinkChildren & {
          &:before {
            position: absolute;
            content: '';
            background-color: ${newColors.shades.mediumBlue50};
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            cursor: pointer;
            border-radius: 16px;
            border: 1px solid ${newColors.primaries.fullBlue};
         }
       }
    }

    .tabnav &:focus {
        outline: none;

        > *:not(.linkCardBorder) {
          outline: 4px solid ${newColors.secondaries.fullGreen};
        }
    }

    width: 100%;

    [dir='rtl'] &{
        svg{
            right: 1.4rem;
        }
    }

`

export const border = css`
    width: calc(100% - 16px);
    margin-left: 4px;
    border-bottom: 1px solid ${newColors.shades.mediumBlue};
    padding: 0 !important;
`

export const rotateArrow = css`
    transform: rotate(0deg)!important;
`

export const childrenWrapper = css`
    display: inline-flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 1.6rem;
    width: 100%;
    overflow: hidden;

    a {
        display: inline-flex;
        align-self: stretch;
        font-weight: normal !important;
        justify-content: flex-start;
        align-items: center;
        text-decoration: none;
        font-size: 1.6rem !important;
        color: ${newColors.shades.fullBlue};
        padding: 8px 8px 8px 0;
        max-width: 100%;
        width: 100%;
        margin-right: 24px;
        line-height: 1.5;
        margin-bottom: 0;

        &:hover {
            border-radius: 2px !important;
            background-color: ${newColors.shades.lightBlue};
        }

        &:active {
            border-radius: 2px !important;
            background-color: ${newColors.shades.mediumBlue50};
        }

        svg {
          margin-right: 8px;
          margin-left: 8px;
          fill: ${newColors.shades.fullBlue};
          width: 12px;
          height: 16px;
        }
    }

  ul {
    list-style: none;
    margin: 0;
  }

  li {
    list-style: none;
    margin: 0;
  }
`

export const showAllLink = css`
    font-size: 1.6rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0;
    line-height: 2.4rem;
    align-self: flex-end;
    margin: 0 1.6rem 2rem 0;

    svg {
      width: 12px;
      height: 16px;
      margin-left: 12px;
    }
`

export const customFontSize = css`
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 500;
    z-index: 1;
    color: ${newColors.shades.fullBlue};

    ${medium}{
      font-size: 1.8rem;
    }
`

