/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';

export default ({ className, style, title, ...otherAttr }) => {
        return <svg className={className} css={style}  width="32px" height="32px" viewBox="0 0 32 32" {...otherAttr}>
                <title>{title}</title>
                <g stroke="none" strokeWidth="1">
        <g transform="translate(-1134.000000, -1648.000000)">
            <g transform="translate(1134.000000, 1648.000000)">
                <path d="M10,20.18165 L10,7.0004 C10,6.4504 9.55,6.0004 9,6.0004 C8.45,6.0004 8,6.4504 8,7.0004 L8,20.18165 C6.8375,20.59415 6,21.6940875 6,23.0004 C6,24.65665 7.34375,26.0004 9,26.0004 C10.65625,26.0004 12,24.65665 12,23.0004 C12,21.6940875 11.1625,20.59415 10,20.18165 L10,20.18165 Z M9,28.0004 C6.24375,28.0004 4,25.7565875 4,23.0004 C4,21.40665 4.7625,19.9440875 6,19.0129 L6,7.0004 C6,5.34415 7.34375,4.0004 9,4.0004 C10.65625,4.0004 12,5.34415 12,7.0004 L12,19.0129 C13.2375,19.9379 14,21.40665 14,23.0004 C14,25.7565875 11.75625,28.0004 9,28.0004 L9,28.0004 Z M16,7.0004 C16,3.13165 12.86875,0.0004 9,0.0004 C5.13125,0.0004 2,3.13165 2,7.0004 L2,17.40665 C0.76875,18.9504 0,20.8754 0,23.0004 C0,27.96915 4.03125,32.0004 9,32.0004 C13.96875,32.0004 18,27.96915 18,23.0004 C18,20.8754 17.23125,18.9440875 16,17.40665 L16,7.0004 Z M26,8.0004 C24.89375,8.0004 24,7.10665 24,6.0004 C24,4.8940875 24.89375,4.0004 26,4.0004 C27.10625,4.0004 28,4.8940875 28,6.0004 C28,7.10665 27.10625,8.0004 26,8.0004 L26,8.0004 Z M26,0.0004 C22.69375,0.0004 20,2.69415 20,6.0004 C20,9.30665 22.69375,12.0004 26,12.0004 C29.30625,12.0004 32,9.30665 32,6.0004 C32,2.69415 29.30625,0.0004 26,0.0004 L26,0.0004 Z" id="Fill-1"></path>
            </g>
        </g>
    </g>
        </svg>;
}




