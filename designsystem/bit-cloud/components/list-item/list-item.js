/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import * as css from './list-item.css.js';
import { Icon } from '@konsumentverket-sverige/designsystem.icon';

export const ListItem = ({
  headline,
  children,
  preamble,
  type,
  updatedAt,
  publishedAt,
  webbinairDateStart,
  webbinairDateEnd,
  href,
  onClick,
  bottomText,
  linkComponent: LinkComponent = 'a',
  icon = 'MonoArrowRightSmall',
}) => (
  <LinkComponent
    css={[css.wrapper]}
    className="noStyle"
    href={href}
    onClick={onClick}
    data-comp="listitem"
    injected={true}
  >
    <p css={css.headline} className="listItemHeadline">
      {headline} {<Icon icon={icon} />}
    </p>
    {children && children}
    {preamble && (
      <p css={[css.preambleStyle, css.preambleMaxWidth]}>{preamble}</p>
    )}

    <div css={css.dateWrapper}>
      {type && <p css={css.typeStyle}>{type}</p>}
      {updatedAt && <p css={css.dateStyle}> Uppdaterad den {updatedAt}</p>}
      {!updatedAt && publishedAt && <p css={css.dateStyle}>{publishedAt}</p>}

      {webbinairDateStart && webbinairDateEnd && (
        <p css={css.dateStyle}>
          Kommande: {webbinairDateStart}, kl {webbinairDateEnd}
        </p>
      )}
      {webbinairDateStart && !webbinairDateEnd && (
        <p css={css.dateStyle}>Genomfört: {webbinairDateStart}</p>
      )}
    </div>
    {bottomText && <p css={css.bottomText}>{bottomText}</p>}
  </LinkComponent>
);
