/** @jsx jsx */
import { jsx } from '@emotion/react';

import * as editorIconDefinitions from '@konsumentverket-sverige/designsystem.icons-editor';

const EditorIcon = ({ icon, className, style, title, ...otherAttr }) => {
  const Element = editorIconDefinitions[icon];

  if (typeof Element !== 'function') {
    return null;
  }

  return (
    <Element
      className={className}
      style={style}
      focusable="false"
      {...(title ? { role: 'img', 'aria-label': title } : { 'aria-hidden': true })}
      {...otherAttr}
    />
  );
};

export { EditorIcon, editorIconDefinitions };
