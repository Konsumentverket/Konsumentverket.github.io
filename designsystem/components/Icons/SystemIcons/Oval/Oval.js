/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';

export default ({ className, style, title, ...otherAttr }) => {

    return <svg aria-hidden="true" className={className} css={style} width="9px" height="9px" viewBox="0 0 9 9" {...otherAttr}>
        <title>{title}</title>
        <g transform="translate(-250.000000, -2077.000000)" fill="#B50255">
            <circle cx="254.5" cy="2081.5" r="4.5"></circle>
        </g>
    </svg>

}


