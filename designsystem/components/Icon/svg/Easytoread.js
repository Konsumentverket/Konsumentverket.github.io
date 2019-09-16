/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';

export default ({className,style,title}) => {

    return <svg className={className} css={style} width="24px" height="24px" viewBox="0 0 24 24">
                <title>{title}</title>
                <path d="M10.7133001,17.8758145 C10.1705634,17.3491759 9.89919509,16.7259486 9.89919509,15.9992334 L9.89919509,0 L14.0364124,0 L14.0364124,15.3323112 L20.9356075,15.3323112 L20.9356075,18.6646225 L12.6565734,18.6646225 C11.9068609,18.6646225 11.2560368,18.402453 10.7133001,17.8758145 M3.81410502,23.220391 C3.27136834,22.7029513 3,22.0728248 3,21.3323112 L3,5.33077808 L7.13721732,5.33077808 L7.13721732,20.665389 L14.0364124,20.665389 L14.0364124,24 L5.75737831,24 C5.00766577,24 4.3568417,23.7401303 3.81410502,23.220391"></path>
            </svg>;

}


