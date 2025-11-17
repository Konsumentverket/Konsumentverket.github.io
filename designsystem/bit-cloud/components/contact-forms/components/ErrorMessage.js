/** @jsx jsx */
import {jsx} from '@emotion/core';
import {errorMessage} from "../contact-forms.css";
import { Icon } from '@konsumentverket-sverige/designsystem.icon';

const ErrorMessage = ({id, children}) => {
  return (
    <span
      css={[errorMessage]}
      id={id}
      role="alert"
    >
      <Icon icon="Warn"/>
      {children}
    </span>
  )
}

export default ErrorMessage;
