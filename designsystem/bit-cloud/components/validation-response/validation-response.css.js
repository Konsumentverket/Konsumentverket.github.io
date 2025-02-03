import { css } from '@emotion/core';
import { newColors, medium } from '@konsumentverket-sverige/designsystem.utils';

export const wrapperStyle = success => css`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  color: ${success ? newColors.validation.success : newColors.validation.warning};

  p {
    font-size: 1.6rem;
    line-height: 1.45;
    margin: 0;
    padding: 0;
  }

  svg {
    align-content: center;
    flex-shrink: 0;
    fill: ${success ? newColors.validation.success : newColors.validation.warning};
  }

  ${medium}{
    p {
      font-size: 2.0rem;
      line-height: 1.45;
    }
  }
`
