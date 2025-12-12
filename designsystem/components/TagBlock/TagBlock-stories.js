/** @jsx jsx */
import { jsx } from '@emotion/core'
import { css } from '@emotion/core';
import React from 'react';
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import { TagBlock } from './TagBlock';
import { boolean, text, select } from '@storybook/addon-knobs';
import { colors } from '../Colors/Colors';

let name = 'TagBlock';
storiesOf('Digitala Produkter|Komponenter/Kort', module)
  .add(name, () => {

    var linkCardStyle = css`
      width 32%;
      flex-grow: 0;
    `

  return <div style={{height: "100vh",padding:"50px", }}>
      <div style={{maxWidth:"960px", display:"flex", justifyContent:"space-between"}}>
          <div css={linkCardStyle}>
            <TagBlock
              heading={text('Heading', 'Lorem ipsum')}
              alternativeTagText={text('Alternativ tagtext', 'Till oss kan du vända dig med frågor om köp av varor och tjänster, reklamationer och annat som du som konsument behöver hjälp med. Tjänsten samordnas av Konsumentverket.')}
              invertedColors={boolean('Inventerade färger', false)}
              secondaryArrowStyle={boolean('Alternativ pil', false)}
            />
          </div>
          <div css={linkCardStyle}>
            <TagBlock
              heading={"Konsumenträtt"}
              icon="SalesLaw"
              invertedColors={boolean('Inventerade färger', false)}
              secondaryArrowStyle={boolean('Alternativ pil', false)}
              tags={[
                {titleInNavigation:"Lagar"},
                {titleInNavigation:"Regler"},
                {titleInNavigation:"Recommendationer"},
                {titleInNavigation:"Sunt förnuft"}
              ]}
            />
          </div>
          <div css={linkCardStyle}>
            <TagBlock
              heading="Husdjur"
              icon="Pets"
              // headingLevel={select('Heading', ['1', '2', '3', '4', '5'])}
              alternativeTagText={"När du köper ett husdjur av en privatperson gäller inte konsumentlagstiftningen utan istället köplagen. Det betyder att du inte har samma rättigheter som när du köper ett djur av ett företag."}
              invertedColors={boolean('Inventerade färger', false)}
              secondaryArrowStyle={boolean('Alternativ pil', false)}
            />
          </div>
        </div>
      </div>
  }
  , { notes: NotesLoader(name) }
)