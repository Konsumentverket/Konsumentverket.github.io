import { css } from "@emotion/core";
import { colors } from '../Colors/Colors';
import { medium } from '../GlobalStyles/globalStyles';
import { spacing } from "../Spacing/Spacing";

export const sourceStyle = css`
    padding: ${spacing.s} ${spacing.s} ${spacing.m} ${spacing.s};

    ${medium} {
        padding: ${spacing.m} ${spacing.l} ${spacing.m} ${spacing.l};
    }

    a {
        font-size: 1.8rem;
        line-height: ${spacing.l};
        margin-right: ${spacing.s};
    }
    background-color: ${colors.theme1.light};

    ${medium} {
        p > a {
            margin-bottom: 0;
        }
    }
    margin-bottom: ${spacing.s};
    border-radius: ${spacing.xs};
`;

export const firstRow = css`
    p {
        padding-bottom: 0;
    }
    padding-bottom: ${spacing.s};
    padding-top: ${spacing.m};
    border-bottom: .1rem solid ${colors.theme3.midLight};
    display: flex;
    flex-direction: column;

    ${medium} {
        flex-direction: row;
    }
`;

export const firstRowUsabilla = css`
    p {
        padding-bottom: 0;
    }
    display: flex;
    flex-direction: column;

    ${medium} {
        flex-direction: row;
    }
`;

export const secondRow = css`
    flex-direction: column;
    display: flex;

    ${medium} {
        flex-direction: row;
    }
`;

export const buttonStyle = css`
    font-size: 1.6rem;
    width: 7.2rem;
    height: 4rem;
    margin-left: ${spacing.m};
    margin-bottom: ${spacing.s};
    padding: 0 ${spacing.m};

    &:first-of-type {
        margin-left: 0;
    }

    ${medium} {
        font-size: 1.6rem;
        width: 7.2rem;
        padding: 0 ${spacing.m};

        &:first-of-type {
            margin-left: ${spacing.m};
        }

        margin-left: ${spacing.m};
        margin-bottom: 0;
        margin-top: -.4rem;
    }
`;

export const rightAlign = css`
    margin-top: ${spacing.xs};
    ${medium} {
        margin-top: 0;
        display: inline-block;
        flex-grow: 1;
        text-align: right;
        font-size: 1.8rem;
    }
`;

export const sourceLink = css`
    svg {
        position: relative;
        top: 1px;        
        left: 8px;
    }
`