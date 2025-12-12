/** @jsx jsx */
import { jsx,css } from '@emotion/core'
import React from 'react';
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import { colors } from '../Colors/Colors';
import { CampaignFocusPuff } from './CampaignFocusPuff';
import AppsAndGames from '../Icons/EditorIcons/AppsAndGames/AppsAndGames';


let name = 'CampaignFocusPuff';

storiesOf('Digitala Produkter|Komponenter/Kort', module).add(name, () => {
  return <div>
    <CampaignFocusPuff icon={AppsAndGames} text="Lorem" headline="Ipsum" />
  </div>}, { notes: NotesLoader(name) }
);