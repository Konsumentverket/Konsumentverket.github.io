import { css } from '@emotion/core';
import { colors } from '../Colors/Colors';

export const tagStyle = css`
    box-shadow:inset 0px 0px 0px 1px ${colors.theme1.mid};
    border-radius:1.6rem;
    color: ${colors.theme1.mid};
    padding: .4rem 1.6rem;
    display: table;
    min-height: 3rem;
    text-decoration: none;
    font-size:1.6rem;
    font-weight: 500;
    line-height:2.4rem;
    display:inline-block;
    vertical-align:middle;
    box-sizing:border-box;

    &:hover {
        background-color: ${colors.theme1.midLight};
        box-shadow:inset 0px 0px 0px 1px ${colors.theme1.xDark};
        text-decoration:underline;
    }
    &:active {
        color:#fff;
        background-color: ${colors.theme1.xDark};
        box-shadow:none;
    }
`;

