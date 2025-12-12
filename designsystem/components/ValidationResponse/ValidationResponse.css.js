import css from '@emotion/css'
import { colors } from '../Colors/Colors'

export const wrapper = success => css`
  display: flex;
  align-items: center;
  color: ${success ? colors.common.success : colors.common.warning};
  font-size: 1.4rem;
  svg {
    align-content: center;
    flex-shrink: 0;
    margin-right: 0.4rem;
    fill: ${success ? colors.common.success : colors.common.warning};
  }
  p {
    line-height: 2.4rem;
    padding-bottom: 0;
  }
`