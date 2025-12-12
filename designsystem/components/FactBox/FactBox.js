/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { wrapper, secondaryColorStyle } from './FactBox.css'
import { SubHeading } from '../SubHeading/SubHeading'
import { LinkWrapperInvertedColorStyle } from '../GlobalStyles/globalStyles'

export const FactBox = ({ children, headline, headlineLevel = 2, content, secondaryColor, style }) => {
    if (!content && !children) return null;

    return <div css={[wrapper, LinkWrapperInvertedColorStyle, secondaryColor && secondaryColorStyle, style]}>
        {headline && <SubHeading level={headlineLevel} text={headline} styleLevel={3} />}
        {children}
        {content}
    </div>
}