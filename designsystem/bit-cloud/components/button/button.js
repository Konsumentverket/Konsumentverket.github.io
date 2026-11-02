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
  inactiveStyle,
  spinnerStyle,
} from './Button.css.js';

/*
 * aria-disabled i stället för disabled-attributet. disabled hade dels gjort knappen
 * grå via :disabled och ätit upp statusfärgen, dels tagit bort den ur tabbordningen –
 * och då kan den som navigerar med tangentbord inte hitta knappen och förstå varför
 * den inte går att använda. Priset är att knappen fortfarande går att aktivera med
 * Enter, så klicket måste stoppas här. pointer-events i css räcker bara för mus.
 */
const blockInactiveClick = (event) => {
  event.preventDefault();
  event.stopPropagation();
};

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
  const isPending = state === 'pending';

  /*
   * Både loading och pending går att klicka på utan effekt, men av olika skäl:
   * det ena pågår redan, det andra är ännu inte möjligt att utföra.
   */
  const isInactive = isLoading || isPending;

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
    (statusIcon || isPending) && styles.push(statusStyle);
    isInactive && styles.push(inactiveStyle);
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
    onClick: isInactive ? blockInactiveClick : onClick,
    ref: reference,
    type: href ? null : type,
    href: href || null,
    ...(isLoading ? { 'aria-busy': true } : {}),
    ...(isInactive ? { 'aria-disabled': true } : {}),
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
