import React from 'react';

import { EditorIcon, editorIconDefinitions } from './editor-icon.js';

export const BasicEditorIcon = () => {
  const inlineStyle = {
    fill: '#000',
    marginTop: '10px',
    display: 'block',
    width: '76px',
    height: '58px',
  };

  if (!editorIconDefinitions) {
    console.error('no definitions');
    return null;
  }

  return (
    <div
      style={{
        display: 'flex',
        'flex-wrap': 'wrap',
        gap: '20px',
        padding: '20px',
      }}
    >
      {Object.keys(editorIconDefinitions).map((key) => (
        <EditorIcon key={key} icon={key} style={inlineStyle} />
      ))}
    </div>
  );
};
