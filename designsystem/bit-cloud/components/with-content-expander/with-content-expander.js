/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { useState, useRef, useEffect } from "react";
import { Typography } from '@konsumentverket-sverige/designsystem.typography';
import { MonoArrowDown, MonoArrowDownSmall } from '@konsumentverket-sverige/designsystem.utils';
import { EditorIcon } from '@konsumentverket-sverige/designsystem.editor-icon';

import {
  containerStyle,
  scrollDiv,
  containerAlternativeStyle,
  containerLightBlueAlternativeStyle,
  noLeftBorderRadiusStyling,
  iconStyle,
  headerStyle,
  headerProcessStepStyle,
  innerHeaderStyle,
  innerHeaderTextStyle,
  titleStyle,
  titleAlternativeStyle,
  titleLightBlueAlternativeStyle,
  titleProcessStepStyle,
  preambleStyle,
  linkStyle,
  linkAlternativeStyle,
  linkLightBlueAlternativeStyle,
  linkStyleExpanded,
  linkStyleAlternativeExpanded,
  linkStyleLightBlueAlternativeExpanded,
  linkStyleLightBlueAlternativeExpandedWithNoBorderLeftRadius,
  chevronStyle,
  chevronExpandedStyle,
  expandedAreaStyle,
  expandedAreaAlternativeStyle,
  expandedAreaLightBlueAlternativeStyle,
  expandedAreaExpandedStyle,
  headerLightBlueAlternativeStyle,
} from "./with-content-expander.css.js";

export const WithContentExpander = ({
  wrappedComponent,
  text,
  preamble,
  icon,
  wrapperId,
  show = true,
  scrollIntoView = true,
  open = false,
  linkHref = "",
  disabled = false,
  useAlternativeStyling = false,
  useLightBlueAlternativeStyling = false,
  useProcessStepStyling = false,
  contentfulId = null,
  contentfulName = '',
  contentfulTextName = '',
  level = 3,
}) => {
  useEffect(() => {
    const handleHashChange = () => {
      if (!location || !location.hash) return;

      const split = location.hash.split(",");
      const shouldOpen = split.some((x) => x === `#${wrapperId}`);

      if (shouldOpen) {
        scrollIntoView=true;
      }
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [wrapperId])

  const [expanded, setExpanded] = useState(open);
  const linkContainerRef = useRef();
  const linkRef = useRef();
  const topOfComponent = useRef();

  const handleExpansionOnClick = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (disabled) return false;

    setExpanded(!expanded);
    return false;
  };

  useEffect(() => {
    setExpanded(open);
  }, [open]);

  useEffect(() => {
    if (scrollIntoView && topOfComponent.current && expanded) {
      topOfComponent.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [expanded]);

  if (!show) return null;

  if (!linkHref || linkHref == "") linkHref = `#${wrapperId}`;

  const HeadingLevel = `h${level}`;

  const containerStyles = [
    containerStyle,
    useAlternativeStyling && containerAlternativeStyle,
    useLightBlueAlternativeStyling && containerLightBlueAlternativeStyle,
    useProcessStepStyling && noLeftBorderRadiusStyling,
  ];

  const linkStyles = [
    linkStyle,
    expanded && linkStyleExpanded,
    (useAlternativeStyling && expanded && !useProcessStepStyling) &&
      linkStyleAlternativeExpanded,
    useAlternativeStyling && linkAlternativeStyle,
    useLightBlueAlternativeStyling && linkLightBlueAlternativeStyle,
    (useLightBlueAlternativeStyling && expanded && !noLeftBorderRadiusStyling) &&
      linkStyleLightBlueAlternativeExpanded,
    (useLightBlueAlternativeStyling && expanded && noLeftBorderRadiusStyling) &&
      linkStyleLightBlueAlternativeExpandedWithNoBorderLeftRadius,
    useProcessStepStyling && noLeftBorderRadiusStyling,
  ];

  const headerStyles = [
    headerStyle,
    useProcessStepStyling && headerProcessStepStyle,
    useLightBlueAlternativeStyling && headerLightBlueAlternativeStyle,
  ];

  const titleStyles = [
    titleStyle,
    useAlternativeStyling && titleAlternativeStyle,
    useLightBlueAlternativeStyling && titleLightBlueAlternativeStyle,
    useProcessStepStyling && titleProcessStepStyle,
  ];

  const chevronStyles =[
    chevronStyle,
    expanded && chevronExpandedStyle
  ];

  const expandedAreaStyles = [
    expandedAreaStyle,
    expanded && expandedAreaExpandedStyle,
    (expanded && useAlternativeStyling) &&
      expandedAreaAlternativeStyle,
    (expanded && useLightBlueAlternativeStyling) &&
      expandedAreaLightBlueAlternativeStyle,
    useProcessStepStyling && noLeftBorderRadiusStyling,
  ];

  return (
    <div
      data-comp="with-content-expander"
      data-contentful-field-id={contentfulName}
      data-contentful-entry-id={contentfulId}
      className={`withContentExpander ${expanded ? "expanded" : ""}`}
      id={wrapperId}
      css={containerStyles}
    >
      <div ref={topOfComponent} css={scrollDiv}></div>
      <div className="link-element noStyle" onClick={(e) => handleExpansionOnClick(e)}>
        <a
          href={linkHref}
          ref={linkRef}
          onClick={(e) => e.preventDefault()}
          aria-haspopup="true"
          aria-expanded={expanded ? "true" : "false"}
          aria-label={text}
          className="noStyle accordion"
          aria-controls={`${wrapperId}-content`}
          css={linkStyles}
        >
          <div
            css={headerStyles}
            className="link-element-container"
            ref={linkContainerRef}
          >
            <div css={innerHeaderStyle}>
              {icon && <EditorIcon icon={icon} css={iconStyle}/>}
              <div css={innerHeaderTextStyle}>
                <HeadingLevel
                  className="noStyle"
                  css={titleStyles}
                >
                  {text}
                </HeadingLevel>
                {preamble && <p css={preambleStyle} data-contentful-field-id={contentfulTextName}
                                data-contentful-entry-id={contentfulId}>{preamble}</p>}
              </div>
            </div>
            {(!disabled && !useLightBlueAlternativeStyling) && (
              <MonoArrowDown
                aria-hidden="true"
                className="expand-icon"
                style={chevronStyles}
              />
            )}
            {(!disabled && useLightBlueAlternativeStyling) && (
              <MonoArrowDownSmall
                aria-hidden="true"
                className="expand-icon"
                style={chevronStyles}
              />
            )}
          </div>
        </a>
      </div>
      <div
        id={`${wrapperId}-content`}
        css={expandedAreaStyles}
        className={`expand-section ${expanded ? "expanded" : ""} ${disabled ? "expanded" : ""}`}
      >
        <Typography
          useProcessStepStyling={useProcessStepStyling}
          small={useLightBlueAlternativeStyling}
        >
          {wrappedComponent}
        </Typography>
      </div>
    </div>
  );
};
