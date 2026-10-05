/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useState, useRef, useEffect } from 'react';
import { Typography } from '@konsumentverket-sverige/designsystem.typography';
import { MonoArrowBend } from '@konsumentverket-sverige/designsystem.icons-system/dist/SystemIcons/MonoArrowBend/MonoArrowBend.js';
import { MonoArrowDown } from '@konsumentverket-sverige/designsystem.icons-system/dist/SystemIcons/MonoArrowDown/MonoArrowDown.js';
import { MonoArrowDownSmall } from '@konsumentverket-sverige/designsystem.icons-system/dist/SystemIcons/MonoArrowDownSmall/MonoArrowDownSmall.js';
import { EditorIcon } from '@konsumentverket-sverige/designsystem.icons-editor';

import {
  containerStyle,
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
  buttonResetStyle,
  containerPanelStyle,
  linkPanelStyle,
  expandedAreaPanelStyle,
  titlePanelStyle,
  indentArrowPanelStyle,
  headerPanelStyle,
  expandedAreaExpandedPanelStyle,
  linkExpandedPanelStyle,
  headerExpandedPanelStyle,
  panelStyleWrapper
} from './with-content-expander.css.js';

/**
 * Event som fäller ut eller ihop samtliga expandrar på sidan samtidigt.
 */
export const EXPAND_ALL_EVENT = 'kov:expand-all';

export const WithContentExpander = ({
  wrappedComponent,
  text,
  preamble,
  icon,
  wrapperId,
  linkHref = '',
  show = true,
  scrollIntoView = true,
  open = false,
  disabled = false,
  useAlternativeStyling = false,
  useLightBlueAlternativeStyling = false,
  useProcessStepStyling = false,
  usePanelStyling = false,
  contentfulId = null,
  contentfulName = '',
  contentfulTextName = '',
  level = 3,
}) => {
  const [expanded, setExpanded] = useState(open);
  // Sätts när utfällningen kommer från EXPAND_ALL_EVENT. Utan den skulle varje
  // expander försöka scrolla sig själv i bild
  const skipScrollOnce = useRef(false);
  const linkContainerRef = useRef();
  const linkRef = useRef();
  const topOfComponent = useRef();

  const handleExpansionOnClick = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (disabled) return false;

    const newExpandedState = !expanded;
    setExpanded(newExpandedState);

    const hasHashLinkHref =
      linkHref && linkHref !== '' && linkHref.startsWith('#');

    // Update URL hash when expanding so agents can copy the URL in the browser
    // Not using window.location.hash since we already handle scrolling with React.
    // If linkHref is set and starts with # we use that, otherwise we use the wrapperId
    if (newExpandedState && (wrapperId || hasHashLinkHref)) {
      const hash = hasHashLinkHref ? linkHref : `#${wrapperId}`;
      window.history.replaceState(null, null, hash);
    }

    return false;
  };

  useEffect(() => {
    setExpanded(open);
  }, [open]);

  /*
   * Fäller ut expandern när sidans hash pekar på den.
   *
   * Tidigare tilldelade den här effekten propen `open`, vilket inte gör någonting:
   * useState har redan läst sitt startvärde när effekten körs. Hash-öppningen har
   * därför aldrig fungerat via komponenten, bara genom att anroparen själv räknat ut
   * `open` före första renderingen.
   *
   * Hashen kan också peka på den utfällbara ytan i stället för på expandern, eftersom
   * dess id är `${wrapperId}-content`. Länkar som genereras från sidans innehåll gör
   * det. Suffixet tas därför bort före jämförelsen så att båda varianterna träffar.
   *
   * Kontrollen måste köras om vid navigering, inte bara vid mount. Mount täcker
   * direktladdning och sidbyten som monterar om komponenten, medan hashchange och
   * popstate täcker klick inom samma sida och bakåtknappen.
   */
  useEffect(() => {
    if (typeof window === 'undefined' || !wrapperId) return undefined;

    const openIfTargeted = () => {
      const { hash } = window.location;
      if (!hash) return;

      const targets = hash
        .split(',')
        .map((part) => part.replace(/-content$/, ''));

      if (targets.includes(`#${wrapperId}`)) setExpanded(true);
    };

    openIfTargeted();
    window.addEventListener('hashchange', openIfTargeted);
    window.addEventListener('popstate', openIfTargeted);

    return () => {
      window.removeEventListener('hashchange', openIfTargeted);
      window.removeEventListener('popstate', openIfTargeted);
    };
  }, [wrapperId]);

  useEffect(() => {
    const onExpandAll = (event) => {
      skipScrollOnce.current = true;
      setExpanded(event?.detail?.expanded !== false);
    };
    window.addEventListener(EXPAND_ALL_EVENT, onExpandAll);
    return () => window.removeEventListener(EXPAND_ALL_EVENT, onExpandAll);
  }, []);

  useEffect(() => {
    let timeout;
    if (skipScrollOnce.current) {
      skipScrollOnce.current = false;
      return undefined;
    }
    if (scrollIntoView && topOfComponent.current && expanded) {
      topOfComponent.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    return () => clearTimeout(timeout);
  }, [expanded]);

  if (!show) return null;

  const HeadingLevel = `h${level}`;

  const containerStyles = [
    containerStyle,
    useAlternativeStyling && containerAlternativeStyle,
    useLightBlueAlternativeStyling && containerLightBlueAlternativeStyle,
    useProcessStepStyling && noLeftBorderRadiusStyling,
    usePanelStyling && containerPanelStyle,
  ];

  const buttonStyles = [
    buttonResetStyle,
    linkStyle,
    expanded && linkStyleExpanded,
    useAlternativeStyling &&
      expanded &&
      !useProcessStepStyling &&
      linkStyleAlternativeExpanded,
    useAlternativeStyling && linkAlternativeStyle,
    useLightBlueAlternativeStyling && linkLightBlueAlternativeStyle,
    useLightBlueAlternativeStyling &&
      expanded &&
      !noLeftBorderRadiusStyling &&
      linkStyleLightBlueAlternativeExpanded,
    useLightBlueAlternativeStyling &&
      expanded &&
      noLeftBorderRadiusStyling &&
      linkStyleLightBlueAlternativeExpandedWithNoBorderLeftRadius,
    useProcessStepStyling && noLeftBorderRadiusStyling,
    usePanelStyling && linkPanelStyle,
    expanded && usePanelStyling && linkExpandedPanelStyle,
  ];

  const headerStyles = [
    headerStyle,
    useProcessStepStyling && headerProcessStepStyle,
    useLightBlueAlternativeStyling && headerLightBlueAlternativeStyle,
    usePanelStyling && headerPanelStyle,
    expanded && usePanelStyling && headerExpandedPanelStyle,
  ];

  const titleStyles = [
    titleStyle,
    useAlternativeStyling && titleAlternativeStyle,
    useLightBlueAlternativeStyling && titleLightBlueAlternativeStyle,
    useProcessStepStyling && titleProcessStepStyle,
    usePanelStyling && titlePanelStyle,
  ];

  const chevronStyles = [chevronStyle, expanded && chevronExpandedStyle];

  const expandedAreaStyles = [
    expandedAreaStyle,
    expanded && expandedAreaExpandedStyle,
    expanded && useAlternativeStyling && expandedAreaAlternativeStyle,
    expanded &&
      useLightBlueAlternativeStyling &&
      expandedAreaLightBlueAlternativeStyle,
    useProcessStepStyling && noLeftBorderRadiusStyling,
    usePanelStyling && expandedAreaPanelStyle,
    expanded && usePanelStyling && expandedAreaExpandedPanelStyle,
  ];

  return (
    <div
      data-comp="with-content-expander"
      data-contentful-field-id={contentfulName}
      data-contentful-entry-id={contentfulId}
      className={`withContentExpander ${expanded ? 'expanded' : ''}`}
      id={wrapperId}
      css={containerStyles}
      ref={topOfComponent}
    >
      <div
        className="link-element noStyle"
        onClick={(e) => handleExpansionOnClick(e)}
      >
        <button
          type="button"
          ref={linkRef}
          onClick={(e) => e.preventDefault()}
          aria-haspopup="true"
          aria-expanded={expanded ? 'true' : 'false'}
          aria-label={text}
          className="noStyle accordion"
          aria-controls={`${wrapperId}-content`}
          css={buttonStyles}
        >
          <div
            css={headerStyles}
            className="link-element-container"
            ref={linkContainerRef}
          >
            <div css={innerHeaderStyle}>
              {icon && <EditorIcon icon={icon} css={iconStyle} />}
              <div css={innerHeaderTextStyle}>
                <HeadingLevel className="noStyle" css={titleStyles}>
                  {text}
                </HeadingLevel>
                {preamble && (
                  <p
                    css={preambleStyle}
                    data-contentful-field-id={contentfulTextName}
                    data-contentful-entry-id={contentfulId}
                  >
                    {preamble}
                  </p>
                )}
              </div>
            </div>
            {!disabled && !useLightBlueAlternativeStyling && (
              <MonoArrowDown
                aria-hidden="true"
                className="expand-icon"
                css={chevronStyles}
              />
            )}
            {!disabled && useLightBlueAlternativeStyling && (
              <MonoArrowDownSmall
                aria-hidden="true"
                className="expand-icon"
                css={chevronStyles}
              />
            )}
          </div>
        </button>
      </div>
      <div
        id={`${wrapperId}-content`}
        css={expandedAreaStyles}
        className={`expand-section ${expanded ? 'expanded' : ''} ${
          disabled ? 'expanded' : ''
        }`}
      >
        {usePanelStyling && (
          <MonoArrowBend
            aria-hidden="true"
            className="expand-indent-icon"
            css={indentArrowPanelStyle}
          />
        )}
        <div css={usePanelStyling && panelStyleWrapper }>
          <Typography
            useProcessStepStyling={useProcessStepStyling}
            small={useLightBlueAlternativeStyling}
          >
            {wrappedComponent}
          </Typography>
        </div>
      </div>
    </div>
  );
};
