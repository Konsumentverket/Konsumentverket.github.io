/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import * as css from './ValidationResponse.css'
import Check from '../Icons/SystemIcons/Check/Check'
import Clear from '../Icons/SystemIcons/Clear/Clear'

const ValidationResponse = ({ success = false, text = '',children }) =>
<div css={css.wrapper(success)}>
    {success ? <Check /> : <Clear />}
    {text}
    {children}
</div>

export { ValidationResponse }