/** @jsx jsx */
import {jsx} from '@emotion/react'
import React from "react"
import * as styles from "./list-item-slim.css.js"
import { SystemIcon } from '@konsumentverket-sverige/designsystem.icons-system';

export const ListItemSlim = ({
 headline = '',
 href = '',
 disabled = false,
 preamble = '',
 linkComponent: LinkComponent = 'a',
}) => {

  if (!headline) {
    return;
  }

  return (
    disabled ? (
      <li css={[styles.listItemSlim, styles.disabled]}>
          <p
            className={'noStyle'}
            css={styles.headlineDisabled}
          >
            {headline}
          </p>
          <p
            css={styles.preamble}
            className={'noStyle'}
          >
            {preamble}
          </p>
      </li>
    ) : (
      <li css={styles.listItemSlim}>
        <LinkComponent
          css={styles.link}
          className='noStyle'
          href={href}
          data-comp='list-item-slim'
        >
          <span css={styles.headline}>
            {headline}
          </span>
          <SystemIcon icon={'ChevronRight'} css={styles.chevronStyle}/>
        </LinkComponent>
      </li>
    )
  )
}
