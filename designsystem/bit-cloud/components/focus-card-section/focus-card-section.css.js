import { css } from '@emotion/core'
import { spacing, newColors, containerStyles, breakpoints } from '@konsumentverket-sverige/designsystem.utils';

// Set the background color in a :before pseudo element instead?

export const focusCardSectionStyle = css`
    background-color: ${newColors.kovWhite};
    width: 100%;
    padding: ${spacing.m} 0;

    @media (min-width: ${breakpoints.m}) {
        padding: ${spacing.xl} 0;
    }
`;

export const focusCardSectionContainerStyle = css`
    ${containerStyles};
`;

export const focusCardSectionGreyStyle = css`
    background-color: ${newColors.shades.lightGrey25};
`;

export const focusCardSectionBlueStyle = css`
    background-color: ${newColors.shades.lightBlue50};
`;

export const focusCardSectionIconWrapperStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: ${newColors.kovBlue};
    margin-right: ${spacing.s};

    @media (min-width: ${breakpoints.m}) {
        margin-right: ${spacing.m};
    }
`;

export const focusCardSectionHeaderStyle = css`
    display: flex;
    margin-bottom: ${spacing.m};

    @media (min-width: ${breakpoints.m}) {
        margin-bottom: ${spacing.l};
    }
`;

export const focusCardSectionTitleStyle = css`
    font-size: 1.8rem;
    line-height: 1.2;
    font-weight: 700;
    color: ${newColors.shades.kovBlue75};

    @media (min-width: ${breakpoints.m}) {
        font-size: 2.8rem;
    }
`;

export const focusCardSectionTextStyle = css`
    font-size: 1.8rem;
    line-height: 1.45;
    color: ${newColors.kovBlack};

    @media (min-width: ${breakpoints.m}) {
        font-size: 2.0rem;
    }
`;

export const focusCardSectionItemsListStyle = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: ${spacing.m};
    list-style: none;
    padding: 0;
    margin: 0;

    @media (min-width: ${breakpoints.m}) {
        flex-direction: row;
    }
`;

export const focusCardSectionItemStyle = css`
    width: 100%;

    @media (min-width: ${breakpoints.m}) {
        width: calc(50% - (${spacing.m} / 2));
    }
`;
