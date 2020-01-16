/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { iconCardStyle, arrowStyle, iconStyle, iconText } from './IconCard.css';
import { Icon } from '../Icon/Icon.js';
import { EditorIcon } from '../Icon/EditorIcon.js';
import { SubHeading } from '../Headings/SubHeading';


const IconCard = React.forwardRef(({ icon, text, url, style }, ref) => {
    return <a ref={ref} href={url} css={[iconCardStyle, style]} >
        {icon && <EditorIcon aria-hidden="true" icon={icon} style={iconStyle}>Ikon</EditorIcon>}
        <span css={iconText}>{text}</span>
        <Icon aria-hidden="true" icon="Arrow" style={arrowStyle} />
    </a>
})

export { IconCard };