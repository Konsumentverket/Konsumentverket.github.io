/** @jsx jsx */
import {jsx} from '@emotion/core';
import {errorMessage} from "../contact-forms.css";
import { SystemIcon } from '@konsumentverket-sverige/designsystem.icons-system';

const ErrorMessage = ({id, children}) => {
  return (
    <span
      css={[errorMessage]}
      id={id}
      role="alert"
    >
      <SystemIcon icon="Warn"/>
      {children}
    </span>
  )
}

export default ErrorMessage;
