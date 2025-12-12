import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import NotesLoader from '../NotesLoader';
import {PrerequisitesBox} from './PrerequisitesBox'
import { colors } from '../Colors/Colors';

let name = 'Förutsättningsruta';


storiesOf('Digitala Produkter|Komponenter', module)
    .add(name, () =>
    <div style={{height: "100vh",padding:"10px", }}>
      <div style={{maxWidth:"960px"}}>
        <PrerequisitesBox text="Innan du läser:">
            <div>
              <p>Har du köpt något av en annan privatperson?</p>
              
              <a href="#">Gå till köplagen/köpt vara av en annan privatperson</a>
            </div>
            <br />
            <div>
              <p>Har du köpt en tjänst?</p>
              <a href="#">Gå till konsumentlagen/vanliga tjänster</a>
            </div>
        </PrerequisitesBox>

        <br />

        <PrerequisitesBox>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </PrerequisitesBox>
        </div>
      </div>
    , { notes: NotesLoader(name) }
    );