import { css } from "@emotion/core";
import { colors } from "../Colors/Colors";
import { large, medium } from "../GlobalStyles/globalStyles";
import { spacing } from "../Spacing/Spacing";

export const paginationWrapperStyle = css`

    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-bottom: 5.6rem;

    ${large}{
        justify-content: space-between;
        padding-bottom: 4.8rem;
    }
`

export const pageStyle = css`
    height: 4.0rem;
    width: 4.2rem;

    line-height: 4.0rem;
    border: 1px solid ${colors.theme1.mid};
    border-radius: 8px;
    display: inline-block;
    font-size: 2.1rem;
    text-align:center;
    text-decoration: none !important;
    margin: 0 0.8rem;

    &.last{
        margin-right: 0;
    }

    &.first{
        margin-left: 0;
    }

    ${medium}{
        margin: 0 1.2rem;
        height: 5.6rem;
        line-height: 5.6rem;
        width: 6.0rem;
    }

    &:hover {
        box-shadow: none !important;
        border-radius: ${spacing.xs} !important;
    }

`

export const prevPageStyle = css`
    margin-right: auto;
    font-size: 1.8rem;
    position: absolute;
    left: 0px;
    bottom: -0rem;

    ${medium}{
        position: static;
    }
    &:visited{
        color: ${colors.theme1.mid}!important;
    }
`

export const nextPageStyle = css`
    margin-left: auto;
    font-size: 1.8rem;
    position: absolute;
    right: 0px;
    bottom: -0rem;

    ${medium}{
        position: static;
    }
    &:visited{
        color: ${colors.theme1.mid}!important;
    }

`

export const prevPageStyleHidden = css`
    visibility: hidden;
`

export const distanceIndicatorStyle = css`
    font-size: 1.6rem;
    color: ${colors.theme1.mid};
    font-weight: 500;
    ${medium}{
        font-size: 2.1rem;
    }

`

export const currentPageStyle = css`

    background-color:${colors.theme1.dark};
    border: 1px solid ${colors.theme1.dark};
    color: #fff!important;

    &:hover{
        color: ${colors.theme1.mid}!important;
        border: 1px solid ${colors.theme1.mid};
    }


`
