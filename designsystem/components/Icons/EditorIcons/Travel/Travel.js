/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';

export default ({ className, style, title, ...otherAttr }) => {
    return <svg className={className} css={style} width="32px" height="29px" viewBox="0 0 32 29" {...otherAttr}>
        <title>{title}</title>
        <g stroke="none" strokeWidth="1">
            <g transform="translate(-584.000000, -533.000000)">
                <g transform="translate(584.000000, 533.000000)">
                    <path 
                        d="M6,29 L26,29 L26,6.21428571 L24,6.21428571 L24,3.10714286 C24,1.39109375 22.656875,0 21,0 L11,0 C9.343125,0 8,1.39109375 8,3.10714286 L8,6.21428571 L6,6.21428571 L6,29 Z M12,4.14285714 L20,4.14285714 L20,6.21428571 L12,6.21428571 L12,4.14285714 Z M32,9.32142857 L32,25.8928571 C32,27.6089062 30.656875,29 29,29 L28,29 L28,6.21428571 L29,6.21428571 C30.656875,6.21428571 32,7.60537946 32,9.32142857 Z M4,29 L3,29 C1.343125,29 0,27.6089062 0,25.8928571 L0,9.32142857 C0,7.60537946 1.343125,6.21428571 3,6.21428571 L4,6.21428571 L4,29 Z" 
                        id={title != null ? `travel-${title}` : null}
                    ></path>
                </g>
            </g>
        </g>
    </svg>;
}




