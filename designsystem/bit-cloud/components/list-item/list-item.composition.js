import React from 'react';

import { ListItem } from './list-item.js';
import {
  globalStyles as GlobalStyles,
  CompositionFonts,
} from '@konsumentverket-sverige/designsystem.utils';

export const BasicListItem = () => {
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto asperiores consectetur consequatur dicta dolore doloribus error facilis impedit labore modi nemo non obcaecati odio perspiciatis placeat praesentium quaerat quidem quisquam quo quod sapiente sint sit suscipit tempora, voluptate voluptates voluptatum! Aspernatur blanditiis consequuntur cupiditate dignissimos doloremque, fugit id in ipsam iste laborum maiores molestias, mollitia neque non officia pariatur perferendis porro quam quia quisquam sequi suscipit ut voluptatum? Cum eos ex facilis odit recusandae sunt vero! Esse fuga neque nulla praesentium suscipit! Animi assumenda at culpa dolorem, nemo nulla obcaecati porro ratione suscipit tempora! Aut nesciunt obcaecati ullam voluptates!';
  return (
    <>
      <CompositionFonts>
        <GlobalStyles />
        <ListItem
          type="Nyhet"
          updatedAt={null}
          publishedAt={new Date().toISOString()}
          href="#"
          headline="Trafikskolor glömmer ångerrätten"
          preamble={text}
        />
      </CompositionFonts>
    </>
  );
};


export const BasicListItemExternal = () => {
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto asperiores consectetur consequatur dicta dolore doloribus error facilis impedit labore modi nemo non obcaecati odio perspiciatis placeat praesentium quaerat quidem quisquam quo quod sapiente sint sit suscipit tempora, voluptate voluptates voluptatum! Aspernatur blanditiis consequuntur cupiditate dignissimos doloremque, fugit id in ipsam iste laborum maiores molestias, mollitia neque non officia pariatur perferendis porro quam quia quisquam sequi suscipit ut voluptatum? Cum eos ex facilis odit recusandae sunt vero! Esse fuga neque nulla praesentium suscipit! Animi assumenda at culpa dolorem, nemo nulla obcaecati porro ratione suscipit tempora! Aut nesciunt obcaecati ullam voluptates!';
  return (
    <>
      <CompositionFonts>
        <GlobalStyles />
        <ListItem
          type="Nyhet"
          updatedAt={null}
          publishedAt={new Date().toISOString()}
          href="#"
          headline="Trafikskolor glömmer ångerrätten"
          preamble={text}
          isPortal={true}
          isExternal={true}
        />
      </CompositionFonts>
    </>
  );
};

export const UpdatedListItem = () => {
  return (
    <>
      <CompositionFonts>
        <GlobalStyles />
        <ListItem
          type="Nyhet"
          updatedAt={new Date().toISOString()}
          publishedAt={new Date().toISOString()}
          href="#"
          headline="Trafikskolor glömmer ångerrätten"
          preamble="Kort ingress som förklarar webbinariet!"
        />
      </CompositionFonts>
    </>
  );
};

export const WebbinairListItemComing = () => {
  return (
    <>
      <CompositionFonts>
        <GlobalStyles />
        <ListItem
          type="Webbinarium"
          webbinairDateStart={'2025-03-05'}
          webbinairDateEnd={'17:00 - 19:00'}
          href="#"
          headline="Trafikskolor glömmer ångerrätten"
          preamble="Kort ingress som förklarar webbinariet!"
        />
      </CompositionFonts>
    </>
  );
};

export const WebbinairListItemOld = () => {
  return (
    <>
      <CompositionFonts>
        <GlobalStyles />
        <ListItem
          type="Webbinarium"
          webbinairDateStart={'2024-01-05'}
          webbinairDateEnd={null}
          href="#"
          headline="Trafikskolor glömmer ångerrätten"
          preamble="Kort ingress som förklarar webbinariet!"
        />
      </CompositionFonts>
    </>
  );
};

export const ListItemSearch = () => {
  return (
    <>
      <CompositionFonts>
        <GlobalStyles />
        <ListItem
          type=""
          href="#"
          headline="Landet runt med budget i siktet"
          preamble="En granskning ledd av EU-kommissionen visar att endast en av fem influerare sköter sig när det gäller att reklammarkera sina inlägg. Flygbiljett."
          bottomText="Start > För konsument > Produktsäkerhet"
          children=""
        />
      </CompositionFonts>
    </>
  );
};

export const WebbinariumListPageItem = () => {
  return (
    <>
      <CompositionFonts>
        <GlobalStyles />
        <ListItem
          type="Privatekonomi, Miljö och hållbarhet, Konsumenträtt"
          webbinairDateStart={'2025-03-05'}
          webbinairDateEnd={'17:00 - 19:00'}
          href="#"
          headline="Trafikskolor glömmer ångerrätten"
          preamble="Kort ingress som förklarar webbinariet!"
        />
      </CompositionFonts>
    </>
  );
};

export const ExternalLinkListItem = () => {
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto asperiores consectetur consequatur dicta dolore doloribus error facilis impedit labore modi nemo non obcaecati odio perspiciatis placeat praesentium quaerat quidem quisquam quo quod sapiente sint sit suscipit tempora, voluptate voluptates voluptatum! Aspernatur blanditiis consequuntur cupiditate dignissimos doloremque, fugit id in ipsam iste laborum maiores molestias, mollitia neque non officia pariatur perferendis porro quam quia quisquam sequi suscipit ut voluptatum? Cum eos ex facilis odit recusandae sunt vero! Esse fuga neque nulla praesentium suscipit! Animi assumenda at culpa dolorem, nemo nulla obcaecati porro ratione suscipit tempora! Aut nesciunt obcaecati ullam voluptates!';
  return (
    <>
      <CompositionFonts>
        <GlobalStyles />
        <ListItem
          type="Nyhet"
          updatedAt={null}
          publishedAt={new Date().toISOString()}
          href="#"
          headline="Trafikskolor glömmer ångerrätten"
          preamble={text}
          icon="External"
        />
      </CompositionFonts>
    </>
  );
};
