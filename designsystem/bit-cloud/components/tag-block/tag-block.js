/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { Tag } from '@konsumentverket-sverige/designsystem.tag';
import { ArrowFat } from '@konsumentverket-sverige/designsystem.utils';
import {
  headerStyle,
  wrapperStyle,
  wrapperTransparentStyle,
  headingLinkStyle,
  tagListStyle,
  headingStyle,
  tagListItemStyle,
  noItemsStyle,
} from './tag-block.css.js';

const TagBlock = React.forwardRef(({
  heading,
  headingUrl,
  tags,
  alternativeTagText,
  transparent = false,
  onClick = () => { },
  linkComponent: LinkComponent = 'a',
}, ref) => (
  <div
    data-comp="tag-block"
    css={[wrapperStyle, transparent && wrapperTransparentStyle]}
  >
    <div css={headerStyle}>
      {headingUrl ? (
        <LinkComponent
          injected={true}
          ref={ref}
          href={headingUrl}
          css={headingLinkStyle}
          className="noStyle"
          onClick={onClick}
        >
          <h2 css={headingStyle}>{heading}</h2>
          <ArrowFat />
        </LinkComponent>
      ) : (
        <h2 css={headingStyle}>{heading}</h2>
      )}
    </div>

    {tags && tags.length > 0 ? (
      <ul css={tagListStyle}>
        {tags.map((tag, index) => (
          <li key={index} css={tagListItemStyle}>
            <Tag
              id={index}
              onClick={onClick}
              url={tag.url}
              text={tag.titleInNavigation || tag.title || tag.headline}
            />
          </li>
        ))}
      </ul>
    ) : (
      <p css={noItemsStyle}>{alternativeTagText}</p>
    )}
  </div>
));

export { TagBlock };
