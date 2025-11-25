import { css } from '@emotion/core'
import { newColors, breakpoints } from '@konsumentverket-sverige/designsystem.utils';


export const focusWrapper = css`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  background-color: #fff;
  border-radius: 16px;
  position: relative;
  height: 100%;

  &.fullWidth {
    @media (min-width: ${breakpoints.m}) {
      flex-direction: row !important;
      min-width:700px;
    }
  }
`

export const linkWrapper = css`
  text-decoration:none;
  display:flex;
  flex-shrink: 0;
  box-shadow: 0px 4px 20px 0px rgba(22, 34, 89, 0.10);
  border: 1px solid transparent;
  transition: background-color 0.3s;
  background-color: #fff;
  border-radius: 16px;
  height: 100%;

  & > div {
    background-color: #fff;
    transition: background-color 0.3s;
  }

  h3 {
    transition: all 0.3s;
  }

  &:hover {
    & + div {
      background-color: ${newColors.shades.lightBlue};
      border: 1px solid ${newColors.primaries.fullBlue};
    }

    & > div {
      background-color: ${newColors.shades.lightBlue};
    }

    img {
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;

      .fullWidth & {
        @media (min-width: ${breakpoints.m}) {
          border-radius: 15px 0 0 15px;
        }
      }
    }
  }

  &:active {
    background-color: ${newColors.shades.mediumBlue50};
    border: 1px solid ${newColors.primaries.fullBlue};

    & > div {
      background-color: ${newColors.shades.mediumBlue50};
    }
  }

  &:active h3 > svg {
    fill: ${newColors.primaries.fullBlue};
  }

  &:hover h3, &:active h3 {
    text-decoration: underline;
  }
`

export const focusHeadline = css`
  color: ${newColors.primaries.fullBlue};
  font-size: 1.6rem;
  padding: 1.6rem 0;
  font-weight: 500;
  line-height: 1.4;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  svg {
    fill: ${newColors.primaries.fullBlue};

    .fullWidth & {
      @media (min-width: ${breakpoints.m}) {
        position: absolute;
        top: calc(50% - 12px);
        right: 24px;
      }
    }
  }

  @media (min-width: ${breakpoints.m}) {
    font-size: 1.8rem;
  }

`

export const focusText = css`
  margin: 0;
  padding: 0;
  color: ${newColors.shades.kovBlack50};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.5;
  padding-bottom: 2.4rem;
`

export const textArea = css`
  padding: 0 2.4rem 0.8rem 2.4rem;
  box-sizing: border-box;
  width: 100%;
`

export const pictureWrapper = css`
  width: 100%;
  min-height: 13.6rem;
  height: 13.6rem;

  .fullWidth & {
    @media (min-width: ${breakpoints.m}) {
      width: 264px;
    }
  }

  picture {
    display: block;
    width: 100%;
    height: 100%;
    min-height: 5rem;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    object-fit: cover;

    .fullWidth & {
      @media (min-width: ${breakpoints.m}) {
        border-radius: 16px 0 0 16px;
      }
    }
  }
`

export const iconBackground = css`
  border-top-right-radius: 1.6rem;
  border-top-left-radius: 1.6rem;
  position: relative;
  padding-top: 36.84%;
`


export const externalIcon = css`
  position: relative;
  margin-left: 0.8rem;
  fill: ${newColors.primaries.fullBlue};
  width:2rem;
`

export const puffIcon = css`
  position: absolute;
  fill: #fff;
  width: 6.4rem;
  height: 6.4rem;
  left: calc(50% - 3.2rem);
  top: calc(50% - 3.2rem);
`;
