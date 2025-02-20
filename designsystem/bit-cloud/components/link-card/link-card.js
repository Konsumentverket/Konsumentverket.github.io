/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import {
    wrapper,
    mainLinkStyle,
    childrenWrapper,
    showAllLink,
    customFontSize,
    heading,
    border
} from './link-card.css.js';
import { SubHeading } from '@konsumentverket-sverige/designsystem.sub-heading';
import { Icon } from '@konsumentverket-sverige/designsystem.icon';

const LinkCard = React.forwardRef(({
    text,
    href,
    expandText = "Visa alla",
    numResults,
    children,
    id,
    icon,
    headingLevel = 2,
    onClick,
    beforeToggleCount = 4,
    childrenWrapperStyle,
    linkComponent: LinkComponent = 'a'
}, ref) => {

    const childrenArray = React.Children.toArray(children);
    let itemsToShow = [];
    let className = 'noLinkChildren';
    let num = null;

    if (childrenArray && childrenArray.length > 0) {
        itemsToShow = childrenArray.slice(0, beforeToggleCount).filter(Boolean)
        if (childrenArray.length > 1) className = '';
        num = numResults ?? childrenArray.length;
    }
    const singleItemClass = itemsToShow.length === 1 ? "singleItem" : "";

  const InnerLink = () => (
    <span css={heading}>
      {icon}
      <span css={customFontSize} dangerouslySetInnerHTML={{__html: text}}></span>
      <Icon icon="MonoArrowRight"/>
    </span>
  )

  return (
    <div id={id} css={[wrapper]} className={className} data-comp="link-card">
      <LinkComponent
        ref={ref}
        href={href}
        css={mainLinkStyle}
        onClick={onClick}
        injected={true}
      >
        {itemsToShow.length > 0
          ? (
            <>
              <SubHeading level={headingLevel} styleLevel={3}>
                <InnerLink/>
              </SubHeading>
              <div className="linkCardBorder" css={border}></div>
            </>

          ) : (
            <InnerLink/>
          )}

      </LinkComponent>

      {itemsToShow.length > 0 && (
        itemsToShow.length === 1 ? (
          <div css={[childrenWrapper, childrenWrapperStyle]} className={singleItemClass}>
            {itemsToShow}
          </div>
        ) : (
          <ul css={[childrenWrapper, childrenWrapperStyle]}>
            {itemsToShow.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}
          </ul>
        )
      )}

      {childrenArray.length > beforeToggleCount &&
        <LinkComponent
          css={showAllLink}
          href={href}
          onClick={onClick}
          injected={true}
        >
          {expandText} ({num}) <Icon icon="MonoArrowRight"/>
        </LinkComponent>
      }
    </div>
  )
})

LinkCard.displayName = "LinkCard"
export {LinkCard}
