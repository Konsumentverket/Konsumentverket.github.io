/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import {
  buttonIconLeft,
  buttonIconRight,
  buttonStyle
} from "./megamenu-button.css";

const MegamenuButton = ({
  text,
  id,
  type = "submit",
  iconLeft,
  iconRight,
  onClick,
  reference,
  href,
  className,
  linkComponent: LinkComponent = 'a',
  handleLinkOnClick,
  ...other
}) => {
  const styles = [buttonStyle];
  const cssClass = [className];

  href && cssClass.push("noStyle");
  iconLeft && styles.push(buttonIconLeft);
  iconRight && styles.push(buttonIconRight);

  const ariaAttrs = {};
  Object.keys(other).filter(x => x.startsWith("aria-")).forEach(x => ariaAttrs[x] = other[x]);

  const props = {
    "id": id,
    "className": cssClass.join(" "),
    "onClick": handleLinkOnClick ?? onClick,
    "ref": reference,
    "css": styles,
    "type": href !== null ? null : type,
    "href": href || null,
    ...ariaAttrs,
  };

  return href ? (
    <LinkComponent
      {...props}
      injected={true}
    >
      {iconLeft}
      {text}
      {iconRight}
    </LinkComponent>
  ) : (
    <button {...props}>
      {iconLeft}
      {text}
      {iconRight}
    </button>
  );
};

export { MegamenuButton };
