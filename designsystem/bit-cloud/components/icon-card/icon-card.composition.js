import React from 'react';
import { IconCard } from './icon-card.js';
import { Icon } from '@konsumentverket-sverige/designsystem.icon'
import {
  globalStyles as GlobalStyles, CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';

export const BasicIconCard = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <IconCard
        url="#"
        text="Lorem ipsum"
        icon={<Icon icon="Burger" />}
      />
    </CompositionFonts>
  );
}

export const WithoutIconIconCard = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <IconCard
        url="#"
        text="Lorem ipsum"
      />
    </CompositionFonts>
  );
}

export const AlternativeIconCard = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <IconCard
        url="#"
        text="A very special delivery"
        icon={<Icon icon="HomeDelivery" />}
        useAlternativeColors={true}
      />
    </CompositionFonts>
  );
}

export const AlternativeLightIconCard = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <IconCard
        url="#"
        text="A very special delivery"
        icon={<Icon icon="HomeDelivery" />}
        useLightAlternativeColors={true}
      />
    </CompositionFonts>
  );
}

export const IconCardRTL = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <IconCard
        url="#"
        dir={"rtl"}
        text="A very special delivery"
        icon={<Icon icon="HomeDelivery" />}
        useLightAlternativeColors={true}
      />
    </CompositionFonts>
  );
}
