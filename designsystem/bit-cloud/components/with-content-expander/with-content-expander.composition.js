import React from 'react';
import {
  globalStyles as GlobalStyles,
  CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';
import 'date-fns';
import { WithContentExpander } from './with-content-expander.js';
import { SubHeading } from '@konsumentverket-sverige/designsystem.sub-heading';

export const BasicWithIconAndPreambleWithContentExpander = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <WithContentExpander
        icon={"FurnituresAndDecoration"}
        text={"Lorem ipsum dolor sit amet consectetur adipiscing elit"}
        preamble={"Pellentesque vulputate risus sit amet lorem volutpat eu aliquam odio varius?"}
        wrappedComponent={
          <>
            <h3>Lorem ipsum dolor sit amet consectetur adipiscing elit</h3>
            <p>Suspendisse rhoncus sem quis feugiat facilisis. Pellentesque vulputate risus sit amet lorem volutpat, eu aliquam odio varius. Morbi arcu magna, suscipit finibus tortor ac, vehicula malesuada urna. Quisque non aliquam enim. In dictum, sapien vel rhoncus elementum.</p>
            <p>Aliquam sit amet sapien eget velit tempus posuere. Vivamus facilisis nulla rhoncus orci dictum, eu molestie ipsum varius. Duis egestas turpis sed turpis aliquet, at consequat sem mollis. Nunc mollis, tellus in sodales dictum, erat diam volutpat lacus, sed mattis est libero eget ex.</p>
          </>
        }
      />
    </CompositionFonts>
  );
}

export const BasicWithContentExpander = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <WithContentExpander
        text={"Lorem ipsum dolor sit amet consectetur adipiscing elit"}
        wrappedComponent={
          <>
            <h3>Lorem ipsum dolor sit amet consectetur adipiscing elit</h3>
            <p>Suspendisse rhoncus sem quis feugiat facilisis. Pellentesque vulputate risus sit amet lorem volutpat, eu aliquam odio varius. Morbi arcu magna, suscipit finibus tortor ac, vehicula malesuada urna. Quisque non aliquam enim. In dictum, sapien vel rhoncus elementum.</p>
            <p>Aliquam sit amet sapien eget velit tempus posuere. Vivamus facilisis nulla rhoncus orci dictum, eu molestie ipsum varius. Duis egestas turpis sed turpis aliquet, at consequat sem mollis. Nunc mollis, tellus in sodales dictum, erat diam volutpat lacus, sed mattis est libero eget ex.</p>
          </>
        }

      />
    </CompositionFonts>
  );
}

export const BasicWithIconWithContentExpander = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <WithContentExpander
        icon={"FurnituresAndDecoration"}
        text={"Lorem ipsum dolor sit amet consectetur adipiscing elit"}
        wrappedComponent={
          <>
            <h3>Lorem ipsum dolor sit amet consectetur adipiscing elit</h3>
            <p>Suspendisse rhoncus sem quis feugiat facilisis. Pellentesque vulputate risus sit amet lorem volutpat, eu aliquam odio varius. Morbi arcu magna, suscipit finibus tortor ac, vehicula malesuada urna. Quisque non aliquam enim. In dictum, sapien vel rhoncus elementum.</p>
            <p>Aliquam sit amet sapien eget velit tempus posuere. Vivamus facilisis nulla rhoncus orci dictum, eu molestie ipsum varius. Duis egestas turpis sed turpis aliquet, at consequat sem mollis. Nunc mollis, tellus in sodales dictum, erat diam volutpat lacus, sed mattis est libero eget ex.</p>
          </>
        }
      />
    </CompositionFonts>
  );
}
