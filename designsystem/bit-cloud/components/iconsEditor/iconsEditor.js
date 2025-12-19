/** @jsx jsx */
import { jsx } from '@emotion/react';

import * as editorIconDefinitions from './index';

export const EditorIcon = ({ icon, className, style, title, ...otherAttr }) => {
  // document.documentElement.setAttribute('data-theme', 'dark');
  if (!editorIconDefinitions[icon]) {
    console.error('Missing icon ', icon);
    return null;
  }

  const Element = editorIconDefinitions[icon];

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
      aria-label={title || icon || ''}
      {...otherAttr}
    />
  );
};
