import React from 'react';;

import { NoticeBox } from './notice-box.js';
import {
  globalStyles as GlobalStyles, CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';

export const BasicNoticeBox = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <NoticeBox
        headline="Konsumentverket har tagit emot din begäran om radering av information."
      >
        <p>Vi har tagit emot för din begäran om registerutdrag.</p>
        <p>Vi kommer att skicka dig registerutdraget kostnadsfritt inom en månad efter att vi har mottagit din begäran.</p>
      </NoticeBox>
    </CompositionFonts>
  );
}

export const BasicWarningNoticeBox = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <NoticeBox
        headline="Konsumentverket har tagit emot din begäran om radering av information."
        type={"warning"}
      >
        <p>Vi har tagit emot för din begäran om registerutdrag.</p>
        <p>Vi kommer att skicka dig registerutdraget kostnadsfritt inom en månad efter att vi har mottagit din begäran.</p>
      </NoticeBox>
    </CompositionFonts>
  );
}
