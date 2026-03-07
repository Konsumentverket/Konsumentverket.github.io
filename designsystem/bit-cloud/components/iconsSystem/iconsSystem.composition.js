/** @jsxImportSource @emotion/react */
import * as systemIconDefinitions from './index';
import {
  globalStyles as GlobalStyles,
  CompositionFonts,
} from '@konsumentverket-sverige/designsystem.utils';
import { SystemIcon } from './iconsSystem';

const iconContainerStyle = {
  display: 'block',
  width: 120,
  height: 120,
  margin: 10,
  textAlign: 'center',
  verticalAlign: 'top',
};

const iconStyle = {
  width: 40,
  height: 40,
  marginBottom: 5,
};

const titleStyle = {
  fontSize: 16,
  marginBottom: 20,
};

export const BasicSystemIcon = () => {
  const icons = systemIconDefinitions || {}; // fallback
  // document.documentElement.setAttribute('data-theme', 'dark');

  return (
    <CompositionFonts>
      <GlobalStyles />
      <h3 style={titleStyle}>System icons ({Object.keys(icons).length})</h3>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          // backgroundColor: '#13182F',
        }}
      >
        {Object.keys(icons).map((key, index) => (
          <div
            style={iconContainerStyle}
            key={key}
            data-id={key}
            data-index={index}
          >
            <SystemIcon icon={key} style={iconStyle} fill="#4E4745" />
            <h4 style={{ fontSize: '12px' }}>{key}</h4>
          </div>
        ))}
      </div>
    </CompositionFonts>
  );
};
