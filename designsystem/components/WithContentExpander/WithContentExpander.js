/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

import {
  ComponentWrapperStyle,
  IconExpandedStyle,
  IconFullWidth,
  IconStyle,
  collapseButtonStyle,
  baseLinkStyle
} from "./WithContentExpander.css";
import Arrow from "../Icons/SystemIcons/Arrow/Arrow";

const measureElement = element => {
  const DOMNode = ReactDOM.findDOMNode(element);
  return (
    DOMNode &&
    DOMNode.childNodes[0] &&
    window
      .getComputedStyle(
        DOMNode.querySelectorAll("h1, h2, h3, h4, h5, h6")[0] ||
          DOMNode.childNodes[0],
        null
      )
      .getPropertyValue("line-height")
  );
};

export const WithContentExpander = ({
  wrappedComponent,
  linkElement,
  linkStyle,
  isFullWidth = true,
  hasCollapseButton = false,
  show = true,
  scrollIntoView = false,
  wrapperStyle,
  open = false,
  wrapperId,
  linkHref = "",
  disabled = false
}) => {
  const [expanded, setExpanded] = useState(open);
  const [linkElementFontSize, setLinkElementFontSize] = useState("16px");
  const linkContainerRef = useRef();
  const linkRef = useRef();
  const topOfComponent = useRef();

  const doExpansion = e => {
    if (disabled) {
      return false;
    }

    setExpanded(!expanded);

    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    return false;
  };

  useEffect(() => {
    setExpanded(open);
  }, [open]);

  useEffect(() => {
    setLinkElementFontSize(measureElement(linkContainerRef.current));
  }, []);

  useEffect(() => {
    if (scrollIntoView && topOfComponent.current && expanded) {
      const DOMNode = ReactDOM.findDOMNode(topOfComponent.current);
      DOMNode.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [expanded]);

  if (!show) return null;

  return (
    <div
      className={`withContentExpander ${isFullWidth ? "full-width" : null} ${
        expanded ? "expanded" : null
      }`}
      id={wrapperId}
      css={[ComponentWrapperStyle, wrapperStyle]}
      ref={topOfComponent}
    >
      <div className="link-element" onClick={e => doExpansion(e)}>
        <a
          href={linkHref}
          ref={linkRef}
          onClick={e => e.preventDefault()}
          aria-haspopup="true"
          aria-expanded={expanded ? "true" : "false"}
          aria-label={linkElement.props.children || ""}
          className="noStyle accordion"
          css={[baseLinkStyle, linkStyle]}
        >
          <div className="link-element-container" ref={linkContainerRef}>
            {linkElement}
            {!disabled && (
              <Arrow
                aria-hidden="true"
                className="expand-icon"
                style={[
                  IconStyle(linkElementFontSize),
                  expanded ? IconExpandedStyle : null,
                  isFullWidth ? IconFullWidth : null
                ]}
              />
            )}
          </div>
        </a>
      </div>
      <div
        className={`expand-section ${expanded && "expanded"} ${disabled &&
          "expanded"}`}
      >
        {wrappedComponent}
        {hasCollapseButton && !disabled && (
          <div
            tabIndex="0"
            onClick={e => {
              const DOMNode = ReactDOM.findDOMNode(linkRef.current);
              DOMNode.scrollIntoView({ behavior: "smooth", block: "center" });
              doExpansion(e);
              DOMNode.focus({ preventScroll: true });
            }}
            onKeyDown={e => {
              if (e.key === "Enter") {
                const DOMNode = ReactDOM.findDOMNode(linkRef.current);
                DOMNode.scrollIntoView({ behavior: "smooth", block: "center" });
                doExpansion(e);
                DOMNode.focus({ preventScroll: true });
              }
            }}
            css={collapseButtonStyle}
          >
            Fäll ihop <Arrow />
          </div>
        )}
      </div>
    </div>
  );
};
