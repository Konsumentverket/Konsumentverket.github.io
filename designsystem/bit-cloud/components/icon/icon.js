/** @jsx jsx */
import { jsx } from '@emotion/core';

import {
  systemIconDefinitions
} from '@konsumentverket-sverige/designsystem.icons-system';

import {
  // Editor Icons
 editorIconDefinitions
} from '@konsumentverket-sverige/designsystem.icons-editor';


const Icon = ({ icon, className, style, title, ...otherAttr }) => {
  const concatenatedIcons = {
    ...systemIconDefinitions,
    ...editorIconDefinitions
  };
  const Element = concatenatedIcons[icon];

  if (Element === undefined) {
    console.error("❌ Icon not found:", icon);
    console.log("Available icons:", Object.keys(concatenatedIcons));
    return null;
  }


  return (
    <Element
      focusable="false"
      className={className}
      style={style}
      aria-hidden={icon !== 'External'}
      {...otherAttr}
    />
  );
};

export { Icon, systemIconDefinitions, editorIconDefinitions };
