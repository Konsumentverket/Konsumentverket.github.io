import React from 'react';
import {
  globalStyles as GlobalStyles,
  CompositionFonts,
} from '@konsumentverket-sverige/designsystem.utils';

import { WithContentExpander } from './with-content-expander.js';

export const BasicWithIconAndPreambleAndSubComponentWithContentExpander = () => {
  return (
    <CompositionFonts>
      <GlobalStyles/>
      <WithContentExpander
        wrapperId={"test"}
        icon={"FurnituresAndDecoration"}
        text={"Lorem ipsum dolor sit amet consectetur adipiscing elit"}
        preamble={"Pellentesque vulputate risus sit amet lorem volutpat eu aliquam odio varius?"}
        wrappedComponent={
          <div>
            <h3>Lorem ipsum dolor sit amet consectetur adipiscing elit</h3>
            <p>Suspendisse rhoncus sem quis feugiat facilisis. Pellentesque vulputate risus sit amet lorem volutpat, eu
              aliquam odio varius. Morbi arcu magna, suscipit finibus tortor ac, vehicula malesuada urna. Quisque non
              aliquam enim. In dictum, sapien vel rhoncus elementum.</p>
            <p>Aliquam sit amet sapien eget velit tempus posuere. Vivamus facilisis nulla rhoncus orci dictum, eu
              molestie ipsum varius. Duis egestas turpis sed turpis aliquet, at consequat sem mollis. Nunc mollis,
              tellus in sodales dictum, erat diam volutpat lacus, sed mattis est libero eget ex.</p>
            <WithContentExpander
              text={"Lorem the ipsum"}
              useAlternativeStyling={true}
              wrappedComponent={
                <div>
                  <h2>This h2 should be styled</h2>
                  <p>Suspendisse rhoncus sem quis feugiat facilisis. Pellentesque vulputate risus sit amet lorem
                    volutpat
                  </p>
                  <div className={"noStyleComponent"}>
                    <h2>This h2 should not be styled since it's not a direct child in the first div in the Typography
                      component</h2>
                    <p>Neither this paragraph</p>
                  </div>
                </div>
              }
            />
          </div>
        }
      />
    </CompositionFonts>
  );
}

export const WithLinksInList = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <WithContentExpander
        icon={"FurnituresAndDecoration"}
        text={"Lorem ipsum dolor sit amet consectetur adipiscing elit"}
        preamble={"Pellentesque vulputate risus sit amet lorem volutpat eu aliquam odio varius?"}
        wrappedComponent={
          <div>
            <ul className="kov-1k4kh7i-fancyDots-Markdown">
              <li><p><a href="/miljo-och-hallbarhet/miljomedvetna-matval/" rel="" className=" kov-1d260cr-linkStyle">Läs
                om miljömedvetna matval</a></p></li>
              <li>
                <p><a href="https://www2.jordbruksverket.se/webdav/files/SJV/trycksaker/Pdf_rapporter/ra09_20.pdf"
                      rel="" className=" external kov-1d260cr-linkStyle">På Jordbruksverkets webbplats kan du läsa
                  rapporten ”Vad får du som konsument när du köper närproducerat”
                  <svg className="external kov-1ojobql-External" width="18" height="19" fill="none" viewBox="0 0 18 19"
                       focusable="false" role="img" aria-label="Extern länk"><title>Extern länk</title>
                    <g clip-path="url(#a)">
                      <path
                        d="M17.532 5.902c-.077.962-.998 1.316-1.71.664-.3-.273-.595-.55-.886-.832a1191.11 1191.11 0 0 1-5.136 5.04c-.372.362-.92.513-1.34.208a3.704 3.704 0 0 1-.803-.806c-.3-.416-.154-.958.202-1.329.922-.96 2.859-2.965 5.036-5.155-.319-.33-.588-.619-.816-.868-.652-.713-.298-1.634.664-1.711.46-.036.919-.063 1.379-.08 1.223-.046 2.022.034 2.513.124a1.04 1.04 0 0 1 .853.853c.09.49.17 1.29.124 2.513-.017.46-.044.92-.08 1.38Z"></path>
                      <path
                        d="M8.063 3.082c-2.306 0-3.963.082-5.053.165A2.454 2.454 0 0 0 .727 5.529C.644 6.62.563 8.277.563 10.582c0 2.305.081 3.963.165 5.053a2.454 2.454 0 0 0 2.282 2.282c1.09.083 2.747.165 5.053.165 2.305 0 3.963-.082 5.052-.165a2.454 2.454 0 0 0 2.283-2.282c.083-1.09.165-2.747.165-5.053 0-.655-.007-1.258-.018-1.81a.562.562 0 0 0-.956-.391c-.547.534-1.039 1.012-1.48 1.44a.564.564 0 0 0-.172.407v.354c0 1.554-.047 2.722-.101 3.543a1.294 1.294 0 0 1-1.23 1.23c-.822.054-1.989.102-3.543.102-1.555 0-2.722-.048-3.544-.102a1.294 1.294 0 0 1-1.23-1.23 54.458 54.458 0 0 1-.101-3.543c0-1.554.048-2.722.102-3.543a1.294 1.294 0 0 1 1.23-1.23 54.46 54.46 0 0 1 3.543-.102h.263a.563.563 0 0 0 .407-.172c.426-.442.904-.934 1.439-1.481a.563.563 0 0 0-.391-.956 88.825 88.825 0 0 0-1.718-.016Z"></path>
                    </g>
                    <defs>
                      <clipPath>
                        <path fill="#fff" d="M0 .645h18v18H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </a></p>
              </li>
              <li>
                <p><a href="http://smakasverige.se/" rel="" className=" external kov-1d260cr-linkStyle">Läs om regional
                  mat och skyddade ursprungs- och geografiska beteckningar på webbplatsen Smaka Sverige
                  <svg className="external kov-1ojobql-External" width="18" height="19" fill="none" viewBox="0 0 18 19"
                       focusable="false" role="img" aria-label="Extern länk"><title>Extern länk</title>
                    <g clip-path="url(#a)">
                      <path
                        d="M17.532 5.902c-.077.962-.998 1.316-1.71.664-.3-.273-.595-.55-.886-.832a1191.11 1191.11 0 0 1-5.136 5.04c-.372.362-.92.513-1.34.208a3.704 3.704 0 0 1-.803-.806c-.3-.416-.154-.958.202-1.329.922-.96 2.859-2.965 5.036-5.155-.319-.33-.588-.619-.816-.868-.652-.713-.298-1.634.664-1.711.46-.036.919-.063 1.379-.08 1.223-.046 2.022.034 2.513.124a1.04 1.04 0 0 1 .853.853c.09.49.17 1.29.124 2.513-.017.46-.044.92-.08 1.38Z"></path>
                      <path
                        d="M8.063 3.082c-2.306 0-3.963.082-5.053.165A2.454 2.454 0 0 0 .727 5.529C.644 6.62.563 8.277.563 10.582c0 2.305.081 3.963.165 5.053a2.454 2.454 0 0 0 2.282 2.282c1.09.083 2.747.165 5.053.165 2.305 0 3.963-.082 5.052-.165a2.454 2.454 0 0 0 2.283-2.282c.083-1.09.165-2.747.165-5.053 0-.655-.007-1.258-.018-1.81a.562.562 0 0 0-.956-.391c-.547.534-1.039 1.012-1.48 1.44a.564.564 0 0 0-.172.407v.354c0 1.554-.047 2.722-.101 3.543a1.294 1.294 0 0 1-1.23 1.23c-.822.054-1.989.102-3.543.102-1.555 0-2.722-.048-3.544-.102a1.294 1.294 0 0 1-1.23-1.23 54.458 54.458 0 0 1-.101-3.543c0-1.554.048-2.722.102-3.543a1.294 1.294 0 0 1 1.23-1.23 54.46 54.46 0 0 1 3.543-.102h.263a.563.563 0 0 0 .407-.172c.426-.442.904-.934 1.439-1.481a.563.563 0 0 0-.391-.956 88.825 88.825 0 0 0-1.718-.016Z"></path>
                    </g>
                    <defs>
                      <clipPath>
                        <path fill="#fff" d="M0 .645h18v18H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </a></p>
              </li>
            </ul>
            <h3>Lorem ipsum dolor sit amet consectetur adipiscing elit</h3>
            <p>Suspendisse rhoncus sem quis feugiat facilisis. Pellentesque vulputate risus sit amet lorem volutpat, eu
              aliquam odio varius. Morbi arcu magna, suscipit finibus tortor ac, vehicula malesuada urna. Quisque non
              aliquam enim. In dictum, sapien vel rhoncus elementum.</p>
            <p>Aliquam sit amet sapien eget velit tempus posuere. Vivamus facilisis nulla rhoncus orci dictum, eu
              molestie ipsum varius. Duis egestas turpis sed turpis aliquet, at consequat sem mollis. Nunc mollis,
              tellus in sodales dictum, erat diam volutpat lacus, sed mattis est libero eget ex.</p>
            <WithContentExpander
              text={"Lorem the ipsum"}
              useAlternativeStyling={true}
              wrappedComponent={
                <div>
                  <h2>This h2 should be styled</h2>
                  <p>Suspendisse rhoncus sem quis feugiat facilisis. Pellentesque vulputate risus sit amet lorem
                    volutpat
                  </p>
                  <div className={"noStyleComponent"}>
                    <h2>This h2 should not be styled since it's not a direct child in the first div in the Typography
                      component</h2>
                    <p>Neither this paragraph</p>
                  </div>
                </div>
              }
            />
          </div>
        }
      />
    </CompositionFonts>
  );
}

export const BasicWithSubComponentLightBlueWithContentExpander = () => {
  return (
    <CompositionFonts>
      <GlobalStyles/>
      <WithContentExpander
        useLightBlueAlternativeStyling={true}
        text={"Lorem ipsum dolor sit amet consectetur adipiscing elit"}
        wrappedComponent={
          <>
            <h3>Lorem ipsum dolor sit amet consectetur adipiscing elit</h3>
            <p>Suspendisse rhoncus sem quis feugiat facilisis. Pellentesque vulputate risus sit amet lorem volutpat, eu
              aliquam odio varius. Morbi arcu magna, suscipit finibus tortor ac, vehicula malesuada urna. Quisque non
              aliquam enim. In dictum, sapien vel rhoncus elementum.</p>
            <p>Aliquam sit amet sapien eget velit tempus posuere. Vivamus facilisis nulla rhoncus orci dictum, eu
              molestie ipsum varius. Duis egestas turpis sed turpis aliquet, at consequat sem mollis. Nunc mollis,
              tellus in sodales dictum, erat diam volutpat lacus, sed mattis est libero eget ex.</p>
            <WithContentExpander
              text={"Lorem the ipsum"}
              useAlternativeStyling={true}
              wrappedComponent={
                <>
                  <p>Suspendisse rhoncus sem quis feugiat facilisis. Pellentesque vulputate risus sit amet lorem
                    volutpat</p>
                </>
              }
            />
          </>
        }
      />
    </CompositionFonts>
  );
}

export const BasicWithIconAndPreambleWithContentExpander = () => {
  return (
    <CompositionFonts>
      <GlobalStyles/>
      <WithContentExpander
        icon={"FurnituresAndDecoration"}
        text={"Lorem ipsum dolor sit amet consectetur adipiscing elit"}
        preamble={"Pellentesque vulputate risus sit amet lorem volutpat eu aliquam odio varius?"}
        wrappedComponent={
          <>
            <h3>Lorem ipsum dolor sit amet consectetur adipiscing elit</h3>
            <p>Suspendisse rhoncus sem quis feugiat facilisis. Pellentesque vulputate risus sit amet lorem volutpat, eu
              aliquam odio varius. Morbi arcu magna, suscipit finibus tortor ac, vehicula malesuada urna. Quisque non
              aliquam enim. In dictum, sapien vel rhoncus elementum.</p>
            <p>Aliquam sit amet sapien eget velit tempus posuere. Vivamus facilisis nulla rhoncus orci dictum, eu
              molestie ipsum varius. Duis egestas turpis sed turpis aliquet, at consequat sem mollis. Nunc mollis,
              tellus in sodales dictum, erat diam volutpat lacus, sed mattis est libero eget ex.</p>
          </>
        }
      />
    </CompositionFonts>
  );
}

export const BasicWithContentExpander = () => {
  return (
    <CompositionFonts>
      <GlobalStyles/>
      <WithContentExpander
        text={"Lorem ipsum dolor sit amet consectetur adipiscing elit"}
        wrappedComponent={
          <>
            <h3>Lorem ipsum dolor sit amet consectetur adipiscing elit</h3>
            <p>Suspendisse rhoncus sem quis feugiat facilisis. Pellentesque vulputate risus sit amet lorem volutpat, eu
              aliquam odio varius. Morbi arcu magna, suscipit finibus tortor ac, vehicula malesuada urna. Quisque non
              aliquam enim. In dictum, sapien vel rhoncus elementum.</p>
            <p>Aliquam sit amet sapien eget velit tempus posuere. Vivamus facilisis nulla rhoncus orci dictum, eu
              molestie ipsum varius. Duis egestas turpis sed turpis aliquet, at consequat sem mollis. Nunc mollis,
              tellus in sodales dictum, erat diam volutpat lacus, sed mattis est libero eget ex.</p>
          </>
        }
      />
    </CompositionFonts>
  );
}

export const BasicWithIconWithContentExpander = () => {
  return (
    <CompositionFonts>
      <GlobalStyles/>
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

export const BasicWithProcessStepStyling = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <WithContentExpander
        // icon={"FurnituresAndDecoration"}
        text={"Lorem ipsum dolor sit amet consectetur adipiscing elit"}
        // preamble={"Pellentesque vulputate risus sit amet lorem volutpat eu aliquam odio varius?"}
        wrappedComponent={
          <>
            <h3>Lorem ipsum dolor sit amet consectetur adipiscing elit</h3>
            <p>Suspendisse rhoncus sem quis feugiat facilisis. Pellentesque vulputate risus sit amet lorem volutpat, eu aliquam odio varius. Morbi arcu magna, suscipit finibus tortor ac, vehicula malesuada urna. Quisque non aliquam enim. In dictum, sapien vel rhoncus elementum.</p>
            <p>Aliquam sit amet sapien eget velit tempus posuere. Vivamus facilisis nulla rhoncus orci dictum, eu molestie ipsum varius. Duis egestas turpis sed turpis aliquet, at consequat sem mollis. Nunc mollis, tellus in sodales dictum, erat diam volutpat lacus, sed mattis est libero eget ex.</p>
            <WithContentExpander
              text={"Lorem the ipsum"}
              useAlternativeStyling={true}
              wrappedComponent={
                <>
                  <p>Suspendisse rhoncus sem quis feugiat facilisis. Pellentesque vulputate risus sit amet lorem volutpat</p>
                </>
              }
            />
          </>
        }
        useProcessStepStyling={true}
      />
    </CompositionFonts>
  );
}
