/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';

export default ({ className, style, title, ...otherAttr }) => {
    return <svg className={className} css={style} width="32px" height="26px" viewBox="0 0 32 26" {...otherAttr}>
        <title>{title}</title>
        <g stroke="none" strokeWidth="1">
            <g transform="translate(-880.000000, -1650.000000)">
                <path 
                    d="M883.2,1667.6 L908.8,1667.6 L908.8,1653.2 L883.2,1653.2 L883.2,1667.6 Z M909.6,1650 L882.4,1650 C881.0745,1650 880,1651.0745 880,1652.4 L880,1668.4 C880,1669.7255 881.0745,1670.8 882.4,1670.8 L909.6,1670.8 C910.9255,1670.8 912,1669.7255 912,1668.4 L912,1652.4 C912,1651.0745 910.9255,1650 909.6,1650 L909.6,1650 Z M906,1672.4 L886,1672.4 C885.33725,1672.4 884.8,1672.93725 884.8,1673.6 L884.8,1674.4 C884.8,1675.06275 885.33725,1675.6 886,1675.6 L906,1675.6 C906.66275,1675.6 907.2,1675.06275 907.2,1674.4 L907.2,1673.6 C907.2,1672.93725 906.66275,1672.4 906,1672.4 L906,1672.4 Z" 
                    id={title != null ? `compTvConsole-${title}` : null}
                ></path>
            </g>
        </g>
    </svg>;
}




