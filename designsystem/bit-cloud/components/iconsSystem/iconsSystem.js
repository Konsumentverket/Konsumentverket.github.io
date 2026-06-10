/** @jsx jsx */
import { jsx } from '@emotion/react';
import * as systemIconDefinitions from './index';

const ACCESSIBLE_ICONS = ['External'];

export const SystemIcon = ({ icon, className, style, title, ...otherAttr }) => {
  const Element = systemIconDefinitions[icon];

  if (typeof Element !== 'function') {
    return null;
  }

  const isAccessible = ACCESSIBLE_ICONS.includes(icon);

  return (
    <Element
      className={className}
      css={style}
      focusable="false"
      {...(!isAccessible && !title ? { 'aria-hidden': true } : {})}
      {...(title ? { role: 'img', 'aria-label': title } : {})}
      {...otherAttr}
    />
  );
};
