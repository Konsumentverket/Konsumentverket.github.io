/** @jsx jsx */
import { jsx } from "@emotion/core";
import { SystemIcon, systemIconDefinitions } from "./index";
import {
  globalStyles as GlobalStyles,
  CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';

const iconContainerStyle = {
  display: "block",
  width: 80,
  height: 80,
  margin: 10,
  textAlign: "center",
  verticalAlign: "top",
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

  return (
    <CompositionFonts>
      <GlobalStyles />
      <h3 style={titleStyle}>System icons ({Object.keys(icons).length})</h3>
      {Object.keys(icons).map((key, index) => (
        <div style={iconContainerStyle} key={key} data-id={key} data-index={index}>
          <h4>{key}</h4>
          <SystemIcon icon={key} style={iconStyle} fill="#4E4745"/>
        </div>
      ))}
    </CompositionFonts>
  );
};
