/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';

import { Check } from '@konsumentverket-sverige/designsystem.icons-system/dist/SystemIcons/Check/Check.js';

import {
  buttonStyle,
  smallStyle,
  chipsStyle,
  linkStyles,
  linkStylesSmall,
  secondaryStyle,
  buttonIconLeft,
  buttonIconRight,
  buttonIconOnly,
  cookieStyle,
  statusStyle,
  loadingStyle,
  spinnerStyle,
} from './Button.css.js';

const ButtonSpinner = () => (
  <svg
    css={spinnerStyle}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    {Array.from({ length: 8 }, (_, i) => (
      <rect
        key={i}
        x="9.1"
        y="1.2"
        width="1.8"
        height="5"
        rx="0.9"
        fill="currentColor"
        opacity={0.25 + (i / 8) * 0.75}
        transform={`rotate(${i * 45} 10 10)`}
      />
    ))}
  </svg>
);

export const Button = ({
  text,
  secondaryButtonStyle = false,
  smallButtonStyle = false,
  chipsButtonStyle = false,
  linkStyle = false,
  linkStyleSmall = false,
  className,
  id,
  type = 'submit',
  selected,
  disabled,
  iconLeft,
  iconRight,
  reference,
  onClick,
  href,
  contentfulName,
  contentfulId,
  isCookie = false,
  noStyle = false,
  // 'default' | 'loading' | 'done'
  state = 'default',
  linkComponent: LinkComponent = 'a',
  ...other
}) => {
  // document.documentElement.setAttribute('data-theme', 'dark');

  const isLoading = state === 'loading';
  const isDone = state === 'done';

  const statusIcon = isLoading ? <ButtonSpinner /> : isDone ? <Check width="20" height="17" /> : null;

  const cssClass = [className];
  let styles = [buttonStyle];

  if (!!noStyle) styles = [];
  else if (!!isCookie) styles = [cookieStyle];
  else {
    secondaryButtonStyle && styles.push(secondaryStyle);
    chipsButtonStyle && styles.push(chipsStyle);
    linkStyle && styles.push(linkStyles);
    linkStyleSmall && styles.push(linkStylesSmall);
    selected && cssClass.push('selectedButtonStyle');
    linkStyle && cssClass.push('button--linkstyle');
    href && !linkStyle && !linkStyleSmall && cssClass.push('noStyle');
    text === '' && (iconLeft || iconRight) && styles.push(buttonIconOnly);
    iconLeft && styles.push(buttonIconLeft);
    iconRight && styles.push(buttonIconRight);
    smallButtonStyle && styles.push(smallStyle);
    statusIcon && styles.push(statusStyle);
    isLoading && styles.push(loadingStyle);
  }

  const ariaAttrs = {};
  Object.keys(other)
    .filter((x) => x.startsWith('aria-'))
    .forEach((x) => (ariaAttrs[x] = other[x]));

  const props = {
    id: id,
    css: styles,
    className: cssClass.join(' '),
    disabled: disabled,
    onClick: onClick,
    ref: reference,
    type: href ? null : type,
    href: href || null,
    ...(isLoading ? { 'aria-busy': true } : {}),
    ...ariaAttrs,
  };

  return href ? (
    <LinkComponent
      data-comp="button"
      injected={true}
      data-contentful-field-id={contentfulName}
      data-contentful-entry-id={contentfulId}
      {...props}
    >
      {statusIcon || iconLeft}
      {text}
      {iconRight}
    </LinkComponent>
  ) : (
    <button
      {...props}
      data-comp="button"
      data-contentful-field-id={contentfulName}
      data-contentful-entry-id={contentfulId}
    >
      {statusIcon || iconLeft}
      {text}
      {iconRight}
    </button>
  );
};
