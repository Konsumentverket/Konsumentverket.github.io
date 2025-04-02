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
        <img
          src='https://www.hallakonsument.se/images/thumbs-down.svg'
          alt=''
        ></img>
      }
    />

    <Button
      text="Ja, jag godkänner"
      isCookie={true}
      iconLeft={
        <img
          src='https://www.hallakonsument.se/images/thumbs-up.svg'
          alt=''
        ></img>
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
