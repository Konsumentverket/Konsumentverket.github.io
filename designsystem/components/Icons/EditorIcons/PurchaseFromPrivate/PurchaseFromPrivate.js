/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';

export default ({ className, style, title, ...otherAttr }) => {
    return <svg className={className} css={style} width="32px" height="32px" viewBox="0 0 32 32" {...otherAttr}>
        <title>{title}</title>
        <g stroke="none" strokeWidth="1">
            <g transform="translate(-912.000000, -1463.000000)">
                <g transform="translate(912.000000, 1463.000000)">
                    <path 
                        d="M16,18 C20.96875,18 25,13.96875 25,9 C25,4.03125 20.96875,0 16,0 C11.03125,0 7,4.03125 7,9 C7,13.96875 11.03125,18 16,18 Z M24,20 L20.55625,20 C19.16875,20.6375 17.625,21 16,21 C14.375,21 12.8375,20.6375 11.44375,20 L8,20 C3.58125,20 0,23.58125 0,28 L0,29 C0,30.65625 1.34375,32 3,32 L29,32 C30.65625,32 32,30.65625 32,29 L32,28 C32,23.58125 28.41875,20 24,20 Z" 
                        id={title != null ? `privatepurchase-${title}` : null}
                    ></path>
                </g>
            </g>
        </g>
    </svg>;
}




