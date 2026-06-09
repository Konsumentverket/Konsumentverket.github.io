/** @jsx jsx */
import { jsx } from '@emotion/react';
import * as systemIconDefinitions from './index';

export const SystemIcon = ({ icon, className, style, title, ...otherAttr }) => {
  const Element = systemIconDefinitions[icon];

  if (typeof Element !== 'function') {
    return null;
  }

  return (
    <Element
      title={title}
      className={className}
      css={style}
      role={title ? 'img' : undefined}
      aria-label={title || undefined}
      {...otherAttr}
    />
  );
};
