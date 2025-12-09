import React from 'react';

//import { Icon, systemIconDefinitions, editorIconDefinitions } from './icon.js';
import * as EditorIconsPackage from '@konsumentverket-sverige/designsystem.icons-editor';
import * as SystemIconsPackage from '@konsumentverket-sverige/designsystem.icons-system';

const EditorIcon = EditorIconsPackage['EditorIcon'];
const SystemIcon = SystemIconsPackage['SystemIcon'];

import {
  globalStyles as GlobalStyles,
  CompositionFonts,
} from '@konsumentverket-sverige/designsystem.utils';

const iconContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '16px 0',
};
const iconStyle = { marginTop: '8px', display: 'block' };
const titleStyle = {
  fontSize: '16px',
  fontWeight: 600,
  marginBottom: '24px',
  textAlign: 'center',
};

export const BasicSystemIcon = () => {
  const icons = SystemIconsPackage || {};

  return (
    <CompositionFonts>
      <GlobalStyles />
      <h3 style={titleStyle}>System icons ({Object.keys(icons).length})</h3>
      <div
        style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {Object.keys(icons).map((key) => (
          <div style={iconContainerStyle} key={key} data-id={key}>
            <h4>{key}</h4>
            <SystemIcon icon={key} style={iconStyle} />
          </div>
        ))}
      </div>
    </CompositionFonts>
  );
};

export const BasicEditorIcon = () => {
  const iconsEditor = EditorIconsPackage || {};
  console.log('editorIconDefinitions are ', EditorIconsPackage);

  if (iconsEditor == null || iconsEditor == undefined) {
    console.error('none found');
    return;
  }

  return (
    <CompositionFonts>
      <GlobalStyles />
      <h3 style={titleStyle}>
        Editor icons ({Object.keys(iconsEditor).length})
      </h3>
      {Object.keys(iconsEditor).map((key, index) => (
        <div
          style={iconContainerStyle}
          key={key}
          data-id={key}
          data-index={index}
        >
          <h4>{key}</h4>
          <EditorIcon icon={key} style={iconStyle} />
        </div>
      ))}
    </CompositionFonts>
  );
};
