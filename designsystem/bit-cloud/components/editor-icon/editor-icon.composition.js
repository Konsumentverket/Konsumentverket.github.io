import React from 'react';;

import { EditorIcon, editorIconDefinitions } from './editor-icon.js';

export const BasicEditorIcon = () => {
  const inlineStyle = { fill: '#000', marginTop: '10px', display: 'block' };
  if (!editorIconDefinitions) {
    console.error("no definitions")
    return null;
  }

  return (
    Object.keys(editorIconDefinitions).map((key) => (
      <EditorIcon key={key} icon={key} style={inlineStyle} />
    ))
  );
}
