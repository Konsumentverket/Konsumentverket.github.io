/** @jsx jsx */
import {jsx} from "@emotion/core";
import {loadingStyle, visuallyHidden} from "../contact-forms.css";

const LoaderOverlay = () => {
  return (
    <div css={loadingStyle} role="alert" aria-live="polite">
        <span css={visuallyHidden}>
          Skickar formuläret, var god vänta...
        </span>
    </div>
  )
}

export default LoaderOverlay;
