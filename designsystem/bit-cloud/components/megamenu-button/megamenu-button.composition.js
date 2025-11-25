import { css } from '@emotion/core';
import React from 'react';


import {
  globalStyles as GlobalStyles,
  CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';

import { MegamenuButton } from './megamenu-button';
import {
  Icon
} from '@konsumentverket-sverige/designsystem.icon';


const whiteBackground = { padding: "32px", backgroundColor: "#ffffff" };
const blackBackground = { padding: "32px", backgroundColor: "#000000" };


// Basic Example with icon left
// Basic Example with icon left
export const BasicIconButton = () => {

  return (
    <>
      <CompositionFonts>
        <GlobalStyles />
        <div style={whiteBackground}>
          <MegamenuButton
            href={"https://frojd.se"}
            iconLeft={
              <Icon icon="MegamenuCompany" />
            }
            text="Konsumenträtt för företag"
          />
          <MegamenuButton
            href={"https://kov.se"}
            iconLeft={
              <Icon icon="MegamenuCompany" />
            }
            text="Olika säljkanaler"
          />
          <MegamenuButton
            href={"https://example.org"}
            iconLeft={
              <Icon icon="MegamenuCompany" />
            }
            text="Lorem ipsum"
          />
        </div>
      </CompositionFonts>
    </>
  );
}
