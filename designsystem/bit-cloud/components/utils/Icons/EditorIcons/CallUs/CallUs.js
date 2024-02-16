/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';

export const CallUs = ({ className, style, title, ...otherAttr }) => {
        return <svg className={className} css={style} width="31px" height="32px" viewBox="0 0 31 32" {...otherAttr}>
                <title>{title}</title>
                <path
                        d="M29.8736456,1.53840565 L23.5767658,0.0385915824 C22.891738,-0.124596088 22.1915128,0.241841795 21.9143896,0.909279993 L19.0081374,7.90909981 C18.7531083,8.52337623 18.922527,9.23771889 19.4236103,9.66091414 L23.093783,12.7606674 C20.9157287,17.5528599 17.1033918,21.5424266 12.3619018,23.838679 L9.35901673,20.050175 C8.94904644,19.5329275 8.25702719,19.3580437 7.66194708,19.6212996 L0.880873555,22.6213027 C0.234474626,22.9072405 -0.12075416,23.6299912 0.0373943974,24.3373045 L1.49033886,30.8373113 C1.64134288,31.5127495 2.22495466,32 2.90622861,32 C18.411508,32 31,19.0292364 31,2.99996968 C31,2.30146895 30.5329411,1.69540581 29.8736456,1.53840565 Z"
                ></path>
        </svg>;
}
