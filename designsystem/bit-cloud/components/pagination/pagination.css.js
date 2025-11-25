import { css } from "@emotion/core";
import { newColors, colors, spacing, medium, large } from '@konsumentverket-sverige/designsystem.utils';

export const paginationWrapperStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    gap: 16px;

    ${large}{

    }
`

export const pageStyle = css`
    height: 36px;
    width: 36px;
    line-height: 1.5;
    font-weight: 500;
    color: ${newColors.shades.fullBlue};
    background-color: ${newColors.shades.lightBlue};
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    text-align: center;
    text-decoration: none ;

    &:hover {
        box-shadow: none !important;
        background-color: ${newColors.shades.mediumBlue};
        text-decoration: underline;
        border-radius: ${spacing.xs} !important;
    }

`

export const prevPageStyle = css`
  display: flex;
  align-items: center;
  transform: rotate(180deg);
`

export const nextPageStyle = css`
  display: flex;
  align-items: center;
`

export const prevPageStyleHidden = css`
    visibility: hidden;
`

export const distanceIndicatorStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    font-size: 1.8rem;
    line-height: 1.5;
    font-weight: 500;
    color: ${newColors.shades.fullBlue50};
`

export const currentPageStyle = css`
    background-color: ${newColors.kovBlue};
    border: 1px solid ${newColors.kovBlue};
    color: #fff;
    height: 34px;
    width: 34px;

    &:hover{
        color: ${newColors.shades.fullBlue};
        border: 1px solid ${newColors.shades.mediumBlue};
        background-color: ${newColors.shades.mediumBlue};
        text-decoration: underline;
    }
`
