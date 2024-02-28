

/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';

export const filePowerpointPath = "M12.10625,16.95 C12.65625,16.95 13.075,17.11875 13.375,17.45625 C13.975,18.1375 13.9875,19.5 13.3625,20.2125 C13.05625,20.5625 12.61875,20.74375 12.04375,20.74375 L10.3625,20.74375 L10.3625,16.95 L12.10625,16.95 L12.10625,16.95 Z M23.5625,6.5625 L17.4375,0.4375 C17.15625,0.15625 16.775,0 16.375,0 L16,0 L16,8 L24,8 L24,7.61875 C24,7.225 23.84375,6.84375 23.5625,6.5625 Z M14,8.5 L14,0 L1.5,0 C0.66875,0 0,0.66875 0,1.5 L0,30.5 C0,31.33125 0.66875,32 1.5,32 L22.5,32 C23.33125,32 24,31.33125 24,30.5 L24,10 L15.5,10 C14.675,10 14,9.325 14,8.5 Z M17.3125,18.825 C17.3125,24.46875 11.7625,23.675 10.36875,23.675 L10.36875,27.25 C10.36875,27.6625 10.03125,28 9.61875,28 L7.69375,28 C7.28125,28 6.94375,27.6625 6.94375,27.25 L6.94375,14.7625 C6.94375,14.35 7.28125,14.0125 7.69375,14.0125 L12.75625,14.0125 C15.5375,14.0125 17.3125,16.0625 17.3125,18.825 Z"

export const FilePowerpoint = ({ className, style, title, ...otherAttr }) => {
    return <svg className={className} css={style} width="24px" height="32px" viewBox="0 0 24 32" {...otherAttr}>
        <title>{title}</title>
        <path d={filePowerpointPath}></path>
    </svg>;
}