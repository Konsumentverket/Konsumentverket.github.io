/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
  expandButtonStyle,
  iconStyle,
  disabledIconStyle,
  expandedIconStyle,
} from './expand-button.css.js';

export const ExpandButton = ({
  text,
  className,
  id,
  disabled,
  onClick,
  expanded = false,
}) => {
  return <button
    id={id}
    css={expandButtonStyle}
    className={className}
    disabled={disabled}
    aria-expanded={expanded ? "true" : "false"}
    onClick={onClick}
  >
    <span>{text}</span>
    <Chevron style={[iconStyle, expanded && expandedIconStyle, disabled && disabledIconStyle]} />
  </button>;
}

const Chevron = ({ style }) => (
  <svg css={style} aria-hidden="true" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M8 15 0 7V5l2-2h2l5 6 5-6h2l2 2v2l-8 8H8Z" /></g><defs><clipPath><path fill="#fff" d="M0 0h18v18H0z" /></clipPath></defs></svg>
)
