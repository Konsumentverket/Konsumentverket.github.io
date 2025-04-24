/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import {
  breadcrumbStyle,
  breadcrumbTextStyle,
  breadcrumbLinkStyle
} from './Breadcrumbs.css.js';
import { Icon } from '@konsumentverket-sverige/designsystem.icon';

export const Breadcrumbs = ({
  items = [],
  linkComponent: LinkComponent = 'a'
}) => {
  return (
    <nav aria-label="breadcrumb" css={breadcrumbStyle} data-comp="breadcrumbs">
      <p>
        {items.map((crumb, idx) => {
          return (
            <React.Fragment key={`bread${idx}`}>
              {idx !== 0 && (
                <Icon
                  aria-hidden="true"
                  icon="ArrowFat"
                  title={crumb.url}
                />
              )}

              {idx === items.length - 1 ? (
                <span
                  aria-current="page"
                  dir={crumb.isRtl ? "rtl" : null}
                  css={breadcrumbTextStyle}
                  lang={crumb.lang ? crumb.lang : null}
                >
                  {crumb.title}
                </span>
              ) : (
                <LinkComponent
                  href={crumb.url}
                  css={breadcrumbLinkStyle}
                  dir={crumb.isRtl ? "rtl" : null}
                  lang={crumb.lang ? crumb.lang : null}
                  injected={true}
                >
                  {crumb.title}
                </LinkComponent>
              )}
            </React.Fragment>
          );
        })}
      </p>
    </nav>
  );
};
