import React from 'react';

import { Icon, systemIconDefinitions, editorIconDefinitions } from './icon.js';

import {
  globalStyles as GlobalStyles,
  CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';

const iconContainerStyle = { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '16px 0' };
const iconStyle = { marginTop: '8px', display: 'block', fill: 'black' };
const titleStyle = { fontSize: '16px', fontWeight: 600, marginBottom: '24px', textAlign: 'center' };


export const BasicSystemIcon = () => {
  const icons = systemIconDefinitions || {};

  return (
    <CompositionFonts>
      <GlobalStyles />
      <h3 style={titleStyle}>System icons ({Object.keys(icons).length})</h3>
      {Object.keys(icons).map((key) => (
        <div style={iconContainerStyle} key={key} data-id={key}>
        <h4>{key}</h4>
          <Icon icon={key} style={iconStyle} />
        </div>
      ))}
    </CompositionFonts>
  );
}

export const BasicEditorIcon = () => {
  const iconsEditor = editorIconDefinitions || {};

  return (
    <CompositionFonts>
      <GlobalStyles />
      <h3 style={titleStyle}>Editor icons ({Object.keys(iconsEditor).length})</h3>
      {Object.keys(iconsEditor).map((key, index) => (
        <div style={iconContainerStyle} key={key} data-id={key} data-index={index}>
          <h4>{key}</h4>
          <Icon icon={key} style={iconStyle} />
        </div>
      ))}
    </CompositionFonts>
  );
}
