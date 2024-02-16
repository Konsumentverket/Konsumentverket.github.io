/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';

export const Pen = ({ className, style, title, ...otherAttr }) => {
        return <svg className={className} css={style} width="31px" height="32px" viewBox="0 0 31 32" {...otherAttr}>
                <title>{title}</title>
                <path d="M30.1462496,8.87691571 L27.3549094,11.7582804 C27.0703259,12.052042 26.6101484,12.052042 26.3255649,11.7582804 L19.6045507,4.82050431 C19.3199673,4.52674262 19.3199673,4.05172372 19.6045507,3.75796203 L22.3958909,0.876597379 C23.5281698,-0.292199126 25.36888,-0.292199126 26.507214,0.876597379 L30.1462496,4.63299685 C31.2845835,5.80179335 31.2845835,7.70186895 30.1462496,8.87691571 Z M17.2067835,6.23306051 L1.30643829,22.6462136 L0.0227851346,30.2402657 C-0.152808929,31.2653065 0.713051455,32.1528418 1.70606616,31.9778349 L9.06285194,30.6465319 L24.9631972,14.2333788 C25.2477807,13.9396172 25.2477807,13.4645983 24.9631972,13.1708366 L18.242183,6.23306051 C17.9515446,5.93929882 17.491367,5.93929882 17.2067835,6.23306051 Z M7.51278021,21.2399076 C7.17975698,20.8961439 7.17975698,20.3461221 7.51278021,20.0023584 L16.8374305,10.3769754 C17.1704537,10.0332117 17.7032909,10.0332117 18.0363141,10.3769754 C18.3693373,10.7207391 18.3693373,11.270761 18.0363141,11.6145246 L8.71166382,21.2399076 C8.37864059,21.5836713 7.84580343,21.5836713 7.51278021,21.2399076 L7.51278021,21.2399076 Z M5.32693686,26.4963668 L8.23332137,26.4963668 L8.23332137,28.7652071 L4.32786718,29.4714852 L2.44477222,27.5276578 L3.12898358,23.4962474 L5.32693686,23.4962474 L5.32693686,26.4963668 Z"></path>
        </svg>;
}
