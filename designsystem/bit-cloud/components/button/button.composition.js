import { css } from '@emotion/core';

import {
  small,
  medium,
  globalStyles as GlobalStyles,
  CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';

import {
  Icon
} from '@konsumentverket-sverige/designsystem.icon';

import React from 'react';

import { Button } from './button';

const whiteBackground = { padding: "32px", backgroundColor: "#ffffff" };
const blackBackground = { padding: "32px", backgroundColor: "#000000" };


// Basic Example
export const BasicButton = () => {
  const element = <Button
    onClick={() => { alert("You clicked the button!") }}
    text="Lorem ipsum"
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

// Basic Selected
export const BasicSelectedButton = () => {
  const element = <Button
    selected={true}
    onClick={() => { alert("You clicked the button!") }}
    text="Lorem ipsum"
  />;

  return (
    <>
      <GlobalStyles />
      <div style={whiteBackground}>
        {element}
      </div>
      <div style={blackBackground}>
        {element}
      </div>
    </>
  );
}

// Basic Example with icon left
export const BasicIconButton = () => {
  const element = <Button
    onClick={() => { alert("You clicked the button!") }}
    iconLeft={
      <Icon icon="LinkArrow" />
    }
    text="Lorem ipsum"
  />;

  return (
    <>
      <GlobalStyles />
      <div style={whiteBackground}>
        {element}
      </div>
      <div style={blackBackground}>
        {element}
      </div>
    </>
  );
}

// Basic Example with icon right
export const BasicIconRightButton = () => {
  const element = <Button
    href={"#"}
    iconRight={
      <Icon icon="MonoDownload" />
    }
    text="Lorem ipsum"
  />;

  return (
    <>
      <GlobalStyles />
      <div style={whiteBackground}>
        {element}
      </div>
      <div style={blackBackground}>
        {element}
      </div>
    </>
  );
}

// Basic Example with icon no text
export const BasicIconButtonNoText = () => {
  const element = <Button
    onClick={() => { alert("You clicked the button!") }}
    iconLeft={
      <Icon icon="LinkArrow" />
    }
    text=""
  />;

  return (
    <>
      <GlobalStyles />
      <div style={whiteBackground}>
        {element}
      </div>
      <div style={blackBackground}>
        {element}
      </div>
    </>
  );
}

// Basic small button Example
export const BasicSmallButton = () => {
  const element = <Button
    onClick={() => { alert("You clicked the button!") }}
    text="Lorem ipsum"
    smallButtonStyle={true}
  />;

  return (
    <>
      <GlobalStyles />
      <div style={whiteBackground}>
        {element}
      </div>
      <div style={blackBackground}>
        {element}
      </div>
    </>
  );
}

// Link style button with icon example
export const LinkStyleButton = () => {
  const element = <Button
    href={"/test"}
    text="Lorem ipsum"
    iconLeft={
      <Icon icon="Video" />
    }
    linkStyle={true}
  />;

  return (
    <>
      <GlobalStyles />
      <div style={whiteBackground}>
        {element}
      </div>
      <div style={blackBackground}>
        {element}
      </div>
    </>
  );
}

// Link style small button with icon example
export const LinkStyleSmallButton = () => {
  const element = <Button
    href={"/test"}
    text="Lorem ipsum"
    iconLeft={
      <Icon icon="Camera" />
    }
    linkStyleSmall={true}
  />;

  return (
    <>
      <GlobalStyles />
      <div style={whiteBackground}>
        {element}
      </div>
      <div style={blackBackground}>
        {element}
      </div>
    </>
  );
}

// Basic Disabled
export const BasicDisabledButton = () => {
  const element = <Button
    disabled={true}
    onClick={() => { alert("You clicked the button!") }}
    text="Lorem ipsum"
  />;

  return (
    <>
      <GlobalStyles />
      <div style={whiteBackground}>
        {element}
      </div>
      <div style={blackBackground}>
        {element}
      </div>
    </>
  );
}

// Basic Link Example
export const BasicLinkButton = () => {
  const element = <Button
    text="Lorem ipsum" href="#"
  />;

  return (
    <>
      <GlobalStyles />
      <div style={whiteBackground}>
        {element}
      </div>
      <div style={blackBackground}>
        {element}
      </div>
    </>
  );
}

// basic Secondary Example
export const BasicSecondaryBasicButton = () => {
  const element = <Button
    text="Lorem ipsum"
    secondaryButtonStyle={true}
  />;

  return (
    <>
      <GlobalStyles />
      <div style={whiteBackground}>
        {element}
      </div>
      <div style={blackBackground}>
        {element}
      </div>
    </>
  );
}

// Cookie Compliance Custom Styling Example
export const CookieComplianceCustomStylingButton = () => {

  const element = <>
    <Button
      text="Nej, jag avböjer"
      isCookie={true}
      iconLeft={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.5 13.2497C8.5 10.6067 8.474 8.24116 8.449 6.58466C9.099 4.97216 9.709 3.04466 10.0925 1.75966C10.396 0.743662 11.338 -0.0628384 12.491 0.0786616C12.9175 0.131162 13.3985 0.217662 13.8735 0.360662C15.2105 0.763662 15.8495 2.06866 15.937 3.29266C16 4.17066 16.0095 5.05866 15.992 5.87716C17.312 5.75566 18.497 5.65716 19.5865 5.59066C21.381 5.48166 22.8985 6.83316 22.9665 8.63766C23.074 11.4662 22.991 16.0717 21.659 19.6807C21.124 21.1307 19.7115 21.9582 18.236 21.9897C14.976 22.0582 11.7675 21.7597 9.3785 21.4462C9.044 21.4022 8.7255 21.3577 8.4255 21.3142C8.4535 19.7992 8.5 16.7707 8.5 13.2497ZM4 22.2497C3.395 22.2497 2.8725 22.1717 2.45 22.0702C1.358 21.8087 0.838 20.8002 0.817 19.8832C0.772935 17.9223 0.750601 15.961 0.75 13.9997C0.750597 12.0381 0.772932 10.0767 0.817 8.11566C0.838 7.19866 1.358 6.19066 2.4495 5.92866C2.95756 5.80857 3.47795 5.74849 4 5.74966C4.605 5.74966 5.1275 5.82766 5.55 5.92866C6.642 6.19066 7.162 7.19866 7.183 8.11566C7.211 9.35366 7.25 11.5177 7.25 13.9997C7.25 16.4817 7.211 18.6452 7.183 19.8832C7.162 20.8002 6.642 21.8087 5.5505 22.0702C5.1275 22.1717 4.6055 22.2497 4 22.2497ZM4 16.4997C4.26522 16.4997 4.51957 16.605 4.70711 16.7926C4.89464 16.9801 5 17.2344 5 17.4997V18.4997C5 18.7649 4.89464 19.0192 4.70711 19.2068C4.51957 19.3943 4.26522 19.4997 4 19.4997C3.73478 19.4997 3.48043 19.3943 3.29289 19.2068C3.10536 19.0192 3 18.7649 3 18.4997V17.4997C3 17.2344 3.10536 16.9801 3.29289 16.7926C3.48043 16.605 3.73478 16.4997 4 16.4997Z"
          />
        </svg>
      }
    />

    <Button
      text="Ja, jag godkänner"
      isCookie={true}
      iconLeft={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.25 9.06284C15.25 11.7058 15.276 14.0713 15.301 15.7278C14.651 17.3403 14.041 19.2678 13.6575 20.5528C13.354 21.5688 12.412 22.3753 11.259 22.2338C10.8325 22.1813 10.3515 22.0948 9.8765 21.9518C8.5395 21.5488 7.9005 20.2438 7.813 19.0198C7.75 18.1418 7.7405 17.2538 7.758 16.4353C6.438 16.5568 5.253 16.6553 4.1635 16.7218C2.369 16.8308 0.851501 15.4793 0.783501 13.6748C0.676001 10.8463 0.758999 6.24084 2.091 2.63184C2.626 1.18184 4.0385 0.354338 5.514 0.322838C8.774 0.254337 11.9825 0.552837 14.3715 0.866337C14.706 0.910337 15.0245 0.954836 15.3245 0.998337C15.2965 2.51334 15.25 5.54184 15.25 9.06284ZM19.75 0.0628376C20.355 0.0628376 20.8775 0.140839 21.3 0.242338C22.392 0.503838 22.912 1.51234 22.933 2.42934C22.9771 4.3902 22.9994 6.35148 23 8.31284C22.9994 10.2744 22.9771 12.2358 22.933 14.1968C22.912 15.1138 22.392 16.1218 21.3005 16.3838C20.7924 16.5039 20.2721 16.564 19.75 16.5628C19.145 16.5628 18.6225 16.4848 18.2 16.3838C17.108 16.1218 16.588 15.1138 16.567 14.1968C16.539 12.9588 16.5 10.7948 16.5 8.31284C16.5 5.83084 16.539 3.66734 16.567 2.42934C16.588 1.51234 17.108 0.503838 18.1995 0.242338C18.6225 0.140839 19.1445 0.0628376 19.75 0.0628376ZM19.75 5.81284C19.4848 5.81284 19.2304 5.70748 19.0429 5.51995C18.8554 5.33241 18.75 5.07805 18.75 4.81284V3.81284C18.75 3.54762 18.8554 3.29327 19.0429 3.10573C19.2304 2.91819 19.4848 2.81284 19.75 2.81284C20.0152 2.81284 20.2696 2.91819 20.4571 3.10573C20.6446 3.29327 20.75 3.54762 20.75 3.81284V4.81284C20.75 5.07805 20.6446 5.33241 20.4571 5.51995C20.2696 5.70748 20.0152 5.81284 19.75 5.81284Z"
          />
        </svg>
      }
    />
  </>

  return (
    <>
      <GlobalStyles />
      <div style={whiteBackground}>
        {element}
      </div>
      <div style={blackBackground}>
        {element}
      </div>
    </>
  );
}

// Chips button Example
export const BasicChipsButton = () => {
  const element = <Button
    text="Lorem ipsum"
    chipsButtonStyle={true}
    iconLeft={
      <Icon icon="LinkArrow" />
    }
  />;

  return (
    <>
      <GlobalStyles />
      <div style={whiteBackground}>
        {element}
      </div>
      <div style={blackBackground}>
        {element}
      </div>
    </>
  );
}
