import React from 'react';
import { ImageCard } from './image-card';
import {
  CompositionFonts,
  globalStyles as GlobalStyles,
} from '@konsumentverket-sverige/designsystem.utils';

export const BasicImageCard = () => {
  return (
    <>
      <CompositionFonts>
      <GlobalStyles />
      <ImageCard
        headline="Lorem ipsum"
        text="Lorem ipsum dolor sit amet"
        image="https://picsum.photos/600/400"
        url="https://www.google.se"
      />
      </CompositionFonts>
    </>
  );
}

export const BasicImageCardNoPreamble = () => {
  return (
    <>
      <CompositionFonts>
        <GlobalStyles />
        <ImageCard
          headline="Lorem ipsum"
          image="https://picsum.photos/600/400"
          url="https://www.google.se"
        />
      </CompositionFonts>
    </>
  );
}



export const BasicImageCardFullWidth = () => {
  return (
    <>
      <CompositionFonts>
        <GlobalStyles />
        <ImageCard
          headline="Lorem ipsum"
          text="Lorem ipsum dolor sit amet"
          image="https://picsum.photos/600/400"
          url="https://www.google.se"
          extraClass="fullWidth"
        />
      </CompositionFonts>
    </>
  );
}
