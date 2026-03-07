/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import React from 'react'
import * as css from './skeleton.css.js'

export const Skeleton = ({
  rows = 8,
  height = 48
}) => <div css={css.wrapper(rows, height)}></div>
