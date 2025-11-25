/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as systemIconDefinitions from './index';

export const SystemIcon = ({ icon, className, style, title, ...otherAttr }) => {
  const Element = systemIconDefinitions[icon];

  if (Element === undefined) {
    console.log(`Could not find icon in storybook tried to load: ${icon}`);
    return null;
  }

  return (
    <Element
      title={title}
      className={className}
      css={style}
      role="img"
      aria-label={title || icon || ""}
      {...otherAttr}
    />
  );
};

