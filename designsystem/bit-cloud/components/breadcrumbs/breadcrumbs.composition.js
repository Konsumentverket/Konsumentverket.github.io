import { css } from '@emotion/core';
import {
  globalStyles as GlobalStyles,
  CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';

import React from 'react';
import { Breadcrumbs } from './breadcrumbs';

const whiteBackground = { padding: "32px", backgroundColor: "#ffffff" };
const blackBackground = { padding: "32px", backgroundColor: "#000000" };
const items = [
  {
    "title": "Start",
    "url": "/"
  },
  {
    "title": "Din ekonomi",
    "url": "/omrade/din-ekonomi/",
    "isRtl": false
  },
  {
    "title": "En sida till",
    "url": "/omrade/din-ekonomi/",
    "isRtl": false
  },
  {
    "title": "En mycket längre sidtitel har vi här",
    "url": "/omrade/din-ekonomi/",
    "isRtl": false
  },
  {
    "title": "Nuvarande sida",
    "url": "/omrade/din-ekonomi/",
    "isRtl": false
  }
]

const englishItems = [
  {
    "title": "Start",
    "url": "/"
  },
  {
    "title": "Other languages",
    "url": "/other-languages/",
    "isRtl": false,
    "lang": "en"
  },
  {
    "title": "English",
    "url": "/en/engelska/",
    "isRtl": false,
    "lang": "en"
  },
  {
    "title": "About us",
    "url": "/en/about-us/",
    "isRtl": false,
    "lang": "en"
  },
  {
    "title": "About the Swedish Consumer Agency and how to contact us",
    "url": "/en/articles/about-the-swedish-consumer-agency-and-how-to-contact-us/",
    "isRtl": false,
    "lang": "en"
  }
]

const yiddishItems = [
  {
    "title": "Start",
    "url": "/"
  },
  {
    "title": "Other languages",
    "url": "/other-languages/",
    "isRtl": false,
    "lang": "en"
  },
  {
    "title": "אידיש",
    "url": "/yi/jiddisch/",
    "isRtl": true,
    "lang": "yi"
  },
  {
    "title": "וועגן Konsumentverket (די שוועדישע קאנסומער אגענטור) און וויאזוי זיך צו פארבינדן מיט אונז",
    "url": "/yi/articles/om-konsumentverket-jiddisch/",
    "isRtl": true,
    "lang": "yi"
  }
]

// Basic Example
export const BreadcrumbsExample = () => {
  const element = <Breadcrumbs
   items={items}
  />;

  return (
    <>
      <CompositionFonts>
        <GlobalStyles />
        <div style={whiteBackground}>
          {element}
        </div>
        <div style={blackBackground}>
          {element}
        </div>
      </CompositionFonts>
    </>
  );
}

export const BreadcrumbsEnglish = () => {
  const element = <Breadcrumbs
    items={englishItems}
  />;

  return (
    <>
      <CompositionFonts>
        <GlobalStyles />
        <div style={whiteBackground}>
          {element}
        </div>
        <div style={blackBackground}>
          {element}
        </div>
      </CompositionFonts>
    </>
  );
}

export const BreadcrumbsYiddish = () => {
  const element = <Breadcrumbs
    items={yiddishItems}
  />;

  return (
    <>
      <CompositionFonts>
        <GlobalStyles />
        <div style={whiteBackground}>
          {element}
        </div>
        <div style={blackBackground}>
          {element}
        </div>
      </CompositionFonts>
    </>
  );
}
