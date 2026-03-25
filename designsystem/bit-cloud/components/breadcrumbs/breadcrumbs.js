/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import {
  breadcrumbStyle,
  breadcrumbTextStyle,
  breadcrumbLinkStyle,
} from './Breadcrumbs.css.js';
import { SystemIcon } from '@konsumentverket-sverige/designsystem.icons-system';

export const Breadcrumbs = ({
  items = [],
  linkComponent: LinkComponent = 'a',
  ignoreInSearch = false,
}) => {
  return (
    <nav aria-label="breadcrumb" css={breadcrumbStyle} data-comp="breadcrumbs" className={ignoreInSearch ? 'addsearch-ignore' : undefined}>
      <p>
        {items.map((crumb, idx) => {
          return (
            <React.Fragment key={`bread${idx}`}>
              {idx !== 0 && (
                <SystemIcon
                  aria-hidden="true"
                  icon="ArrowFat"
                  title={crumb.url}
                />
              )}

              {idx === items.length - 1 ? (
                <span
                  aria-current="page"
                  dir={crumb.isRtl ? 'rtl' : null}
                  css={breadcrumbTextStyle}
                  lang={crumb.lang ? crumb.lang : null}
                >
                  {crumb.title}
                </span>
              ) : (
                <LinkComponent
                  href={crumb.url}
                  css={breadcrumbLinkStyle}
                  dir={crumb.isRtl ? 'rtl' : null}
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
