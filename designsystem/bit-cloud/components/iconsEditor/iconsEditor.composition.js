/** @jsx jsx */
import { jsx } from "@emotion/core";
import { editorIconDefinitions, SystemIcon } from "./index";
import {
  globalStyles as GlobalStyles,
  CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';
import { EditorIcon } from "./iconsEditor";

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

export const BasicEditorIcon = () => {
  const icons = editorIconDefinitions || {}; // fallback

  return (
    <CompositionFonts>
      <GlobalStyles />
      <h3 style={titleStyle}>System icons ({Object.keys(icons).length})</h3>
      {Object.keys(icons).map((key, index) => (
        <div style={iconContainerStyle} key={key} data-id={key} data-index={index}>
          <h4>{key}</h4>
          <EditorIcon icon={key} style={iconStyle} />
        </div>
      ))}
    </CompositionFonts>
  );
};
