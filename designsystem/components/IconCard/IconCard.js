/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { iconCardStyle, arrowStyle, iconStyle, iconText, noIcon } from './IconCard.css';
import Arrow from '../Icons/SystemIcons/Arrow/Arrow';


const IconCard = React.forwardRef(({ icon, text, url, style, onClick, id }, ref) => {
    const haveIcon = !icon ? noIcon : null
    return <a ref={ref} id={id} href={url} onClick={onClick} css={[iconCardStyle, style]} className="noStyle" >
        {icon && React.cloneElement(icon,{"aria-hidden":"true", style:iconStyle})}
        <span css={[iconText, haveIcon]} dangerouslySetInnerHTML={{__html: text}}></span>
        <Arrow aria-hidden="true" style={arrowStyle} />
    </a>
})

export { IconCard };