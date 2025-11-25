import React from 'react';

;

import {Source} from './source.js';
import {
  globalStyles as GlobalStyles,
  CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';

const sourcesCollection = {
  items: [
    {
      linkUrl: "/",
      linkText: "Konsumentverket",
      occupationId: "fda16320-2da2-e411-9405-000d3a200e7c"
    },
    {
      linkUrl: "/",
      linkText: "Polisen",
      occupationId: "fda16320-2da2-e411-9405-000d3a200e7c"
    },
    {
      linkUrl: "/",
      linkText: "Konsument Europa",
      occupationId: "fda16320-2da2-e411-9405-000d3a200e7c"
    }
  ]
};

const noSourcesCollection = {items: []};

// Usually microcopy
const bottomContent = `Innehållet på den här sidan är framtaget i samarbete med en eller flera andra myndigheter och konsumentbyråer. Konsumentverket samverkar med andra i vårt uppdrag att vägleda konsumenter.`;

export const BasicSource = () => {
  return (
    <CompositionFonts>
      <GlobalStyles/>
      <Source
        baseUrl={"Gå till konsumentverket.se"}
        sourcesCollection={sourcesCollection}
        reviewedDate={new Date()}
        style=""
        english={false}
        bottomContent={bottomContent}
        bottomBorder={false}
      />
    </CompositionFonts>
  );
}

export const SourceWithOnlyReviewedDate = () => {
  return (
    <CompositionFonts>
      <GlobalStyles/>
      <Source
        baseUrl={"Gå till konsumentverket.se"}
        sourcesCollection={noSourcesCollection}
        reviewedDate={new Date()}
        style=""
        english={false}
        bottomContent={""}
        bottomBorder={true}
      />
    </CompositionFonts>
  );
}

export const SourceWithoutBottomBorder = () => {
  return (
    <CompositionFonts>
      <GlobalStyles/>
      <Source
        baseUrl={"Gå till konsumentverket.se"}
        sourcesCollection={sourcesCollection}
        reviewedDate={new Date()}
        style=""
        english={false}
        bottomContent={bottomContent}
        bottomBorder={false}
      />
    </CompositionFonts>
  );
}
