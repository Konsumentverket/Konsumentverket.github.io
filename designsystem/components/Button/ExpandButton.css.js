import { css } from '@emotion/core';
import { colors } from '../Colors/Colors';

export const expandButton = css`
    /* font-size: 19px; */
    background-color: ${colors.natural.isabelline};
    border-radius: 28px;
    /* margin: 0 10px 40px 10px; */
    width: 100%;
    display:block;
    text-align: center;
    cursor:pointer;
    span {
        font-size: 19px;
        line-height:57px;
        font-weight: 500;
        color: ${colors.profile['blue-mid']};
        display:inline-block;
        padding-right:10px;
    }
`;

export const expandArrow = css`
    vertical-align: middle;
    height: auto;
    width: 30px;
    fill: ${colors.profile['blue-mid']};
    margin-top:-2px;
`;

export const showLessArrow = css`
    vertical-align: middle;
    height: auto;
    width: 30px;
    fill: ${colors.profile['blue-mid']};
    margin-top:-2px;
    transform: rotate(180deg);
`;