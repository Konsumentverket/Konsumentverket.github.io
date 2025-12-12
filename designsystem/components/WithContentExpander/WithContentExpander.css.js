import { css } from "@emotion/core";
import { small,medium } from "../GlobalStyles/globalStyles";
import { colors } from "../Colors/Colors";
import { spacing } from "../Spacing/Spacing";


export const grayContentExpanderWrapper = css`
    background-color: ${colors.theme3.xLight};
    border-radius: 0.5rem;

    :focus-within {
      .tabnav &{
          outline: .2rem solid ${colors.states.focus};
          outline-offset: .2rem;
      }
    }

    > .withContentExpander {
      .full-width {
          border: 2px solid transparent;
          &.expanded,:hover{
              border: .2rem solid ${colors.theme1.mid};
          }
      }

      > .link-element { 
          margin-bottom: 0rem!important;
          a{
              padding: 2.4rem;
              box-sizing: border-box;
              &:hover {
                  text-decoration: underline;
                  background-color: inherit;
                  cursor: pointer;
              }
              &[aria-expanded="true"] {
                  h2,h3,h4{
                      text-decoration: underline!important;
                  }
              }
          }
      }
      > .expand-section{
          padding: 0 2.4rem;
      }
    }

`

export const grayFocusedOnExpansionWrapper = css`

  > .expanded > .link-element {
    background-color: ${colors.theme3.light};
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    &:hover {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
  > div > .link-element {
    border-radius: ${spacing.xs};
    background-color: ${colors.theme3.xLight};
    margin-bottom: 0rem!important;
    border: 2px solid transparent;
    &:hover {
      border: .2rem solid ${colors.theme1.mid};
      border-radius: ${spacing.xs};
      background-color: ${colors.theme1.light};
    }
    a{
        margin: 0 1px 1px 1px;
        padding: ${spacing.s} ${spacing.xs};
        ${medium} {
          padding: ${spacing.s} ${spacing.m};
        }
        box-sizing: border-box;
        &:hover {
            text-decoration: underline;
            cursor: pointer;
        }
        &[aria-expanded="true"] {
            h2,h3,h4{
                text-decoration: underline!important;
            }
        }
    }
  }
  > div > .expand-section {
      background-color: ${colors.common.white};
      border: 2px solid transparent;
      padding: ${spacing.s} ${spacing.xs} ${spacing.m} ${spacing.xs};
      ${medium} {
        padding: ${spacing.s} ${spacing.m} ${spacing.m} ${spacing.m};
      }
      position: fixed;
  }
  > div > .expand-section.expanded {
    border: 2px solid ${colors.theme3.light};
    border-bottom-left-radius: ${spacing.xs};
    border-bottom-right-radius: ${spacing.xs};
    border-top: none;
    position: relative;
    > div {
      margin-top: 0;
    }
  }

`

export const ComponentWrapperStyle = css`

  &.full-width > .link-element a {
    display: block;
  }

  > .link-element a {

    .link-element-container {

        h1, h2, h3, h4 {
            white-space: pre-line;
            margin-bottom: 0;
        }

        display: flex;
        align-items: center;

    }

    font-weight: 600;
    display: inline-block;
    position: relative;
    text-decoration: none;
    position: relative;
    ${small} {
      width: 100%;
    }

    svg {
      font-size: inherit;
      vertical-align: middle;
      fill: ${colors.theme1.mid};
      flex-shrink: 0;
    }
  }

  .expand-section {
    max-height: 0;
    overflow: hidden;
    height: auto;
    transition: all 0.3s ease-in-out;
    display: flex;
    flex-direction: column;

    &.expanded {
      max-height: 100%;
      overflow: visible;
      -ms-overflow-style: none;
      overflow: -moz-scrollbars-none;
      &::-webkit-scrollbar{
        display:none;
      }
    }
    &:not(.expanded) {
      visibility: hidden;
      display: none;

    }
  }
`;

export const IconStyle = fontSize => css`
    transition: transform .2s ease-out;
    width: ${fontSize};
    height: ${fontSize};
    margin-left: .5rem;
    display:flex;
    ${medium} {
        margin-left: 1rem;
    }
`

export const IconExpandedStyle = css`
  transform: rotate(180deg);
`;
export const IconFullWidth = css`
    margin-left:auto!important;
`

export const collapseButtonStyle = css`
  margin-top: ${spacing.xs};
  position: relative;
  font-size: 1.6rem;
  line-height: 2.4rem;
  padding: 0.8rem 4rem 0.8rem 1.6rem;
  border: solid 1px ${colors.theme1.mid};
  color: ${colors.theme1.mid};
  border-radius: 3.2rem;
  transition: visibility 0.1s, opacity 0.1s ease-in-out;
  font-weight: 700;
  margin-bottom: 1.6rem;
  margin-left:auto;
  align-self: center;

  cursor: pointer;

  .expanded > & {
    visibility: visible;
    display:block;
    opacity: 1;
  }

  &:hover {
    text-decoration: underline;
    background-color: ${colors.theme1.midLight};
    border-color: ${colors.theme1.xDark};
  }

  &:active {
    text-decoration: underline;
    color: #fff;
    background-color: ${colors.theme1.xDark};
    border-color: ${colors.theme1.xDark};
    svg {
      fill: #fff;
    }
  }

  > svg {
    transform: rotate(180deg);
    height: 1.6rem;
    fill: ${colors.theme1.mid};
    height: 1.6rem;
    position: absolute;
    width: 1.6rem;
    top: 1.2rem;
    right: 1.6rem;
  }
`;

export const baseLinkStyle = css`
  color: ${colors.theme1.mid};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${colors.theme1.mid};
  }
  &:hover {
    text-decoration: underline !important;
  }
`;
