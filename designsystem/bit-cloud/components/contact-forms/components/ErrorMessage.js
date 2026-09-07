/** @jsx jsx */
import { jsx } from '@emotion/react';
import { errorMessage } from '../contact-forms.css';
import { SystemIcon, registerIcons } from '@konsumentverket-sverige/designsystem.icons-system/dist/iconsSystem.js';
import { Warn } from '@konsumentverket-sverige/designsystem.icons-system/dist/SystemIcons/Warn/Warn.js';

// Bara de ikoner komponenten faktiskt anvander registreras, sa att barreln med
// samtliga 113 ikoner inte dras in i bundlen.
registerIcons({ Warn });

const ErrorMessage = ({ id, children }) => {
  return (
    <span css={[errorMessage]} id={id} role="alert">
      <SystemIcon icon="Warn" />
      {children}
    </span>
  );
};

export default ErrorMessage;
