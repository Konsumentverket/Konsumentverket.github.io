/** @jsxImportSource @emotion/react */

import * as editorIconDefinitions from '@konsumentverket-sverige/designsystem.icons-editor';

const EditorIcon = ({ icon, className, style, title, ...otherAttr }) => {
  const concatenatedIcons = {
    ...editorIconDefinitions,
  };
  const Element = concatenatedIcons[icon];

  if (Element === undefined) {
    return null;
  }

  return (
    <Element
      title={title}
      className={className}
      style={style}
      role="img"
      aria-label={title || icon || ''}
      {...otherAttr}
    />
  );
};

export { EditorIcon, editorIconDefinitions };
