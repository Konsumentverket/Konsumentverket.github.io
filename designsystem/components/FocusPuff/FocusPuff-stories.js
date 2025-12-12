/** @jsx jsx */
import { jsx,css } from '@emotion/core'
import React from 'react';
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import { FocusPuff } from './FocusPuff';
import { colors } from '../Colors/Colors';
import AppsAndGames from '../Icons/EditorIcons/AppsAndGames/AppsAndGames';
import { Icon } from '../Icon/Icon'

let name = 'FocusPuff';

storiesOf('Digitala Produkter|Komponenter/Kort', module).add(name, () => {
  var linkCardStyle = css`
    width 32%;
    flex-grow: 0;
    margin-bottom: 1.6rem;
  `
  return <div style={{backgroundColor: colors.theme3.xLight,height: "100vh",padding:"50px", }}>
    <div style={{maxWidth:"960px", display:"flex", justifyContent:"space-between", flexWrap: "wrap"}}>
        <div css={linkCardStyle}>
          <FocusPuff headline="Bli textilsmart!" text="Du kan göra mycket för att bidra till en mer hållbar textilkonsumtion." image="https://placekitten.com/304/100"/>
        </div>
        <div css={linkCardStyle}>
          <FocusPuff headline="Budgetkalkylen" text="Här kan du räkna ut din hushållsbudget" image="https://placekitten.com/304/101"/>
        </div>
        <div css={linkCardStyle}>
          <FocusPuff headline="Flygkalkylatorn" text="Flygproblem? Kolla vilken ersättning du har rätt till." image="https://placekitten.com/g/304/100"/>
        </div>
        <div css={linkCardStyle}>
          <FocusPuff headline="Custom image component" text="Denna puff innehåller en custom komponent för bild" imageComponent={<img src="https://www.fillmurray.com/304/100" alt="custom img component" />}/>
        </div>
        <div css={linkCardStyle}>
          <FocusPuff icon={<Icon icon={"Exclamationmark"}/>} headline="Custom icon component" text="Denna puff innehåller en ikonistället för bild" />
        </div>
        <div css={linkCardStyle}>
          <FocusPuff headline="Länkad puff!" text="Denna puff länkar." url={"https://www.konsumentverket.se"} image="https://placekitten.com/304/100"/>
        </div>
      </div>
  </div>}, { notes: NotesLoader(name) }
);