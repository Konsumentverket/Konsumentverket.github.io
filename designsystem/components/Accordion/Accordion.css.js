import { css } from "@emotion/core";
import { colors } from "../Colors/Colors";

export default css`
  .content-text-section {
    a.toggle-heading {
        position: relative;
        display: block;
        text-align: left;
        padding: 0;
        margin: 0;
        font-size: 2rem;
        cursor: pointer;
        background: ${colors.natural.isabelline};
        color: black;
        margin-bottom: 0.5rem;

        &:hover, &:active, &:visited {
            color: black;
        }

        &.open {
            background: ${colors.natural["gray-light"]};
        }

        h3 {
            margin: 0;
            padding: 0.5rem 0;
            display: inline-block;
        }
    }

    overflow: hidden;
    padding-top: 0;

    .section-content {
      transition: all .3s ease-in-out;
      line-height: 0;
      color: transparent;
      overflow: hidden;
      padding-top: 0;

      &.open {
        line-height: 1.5;
        padding-bottom: 1em;
        color: black;
      }
      &.closed {
      }
    }
  }
`;
