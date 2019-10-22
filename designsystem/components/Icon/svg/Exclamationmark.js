/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';

export default ({ className, style, title }) => {
    return <svg className={className} css={style} width="43px" height="43px" viewBox="0 0 43 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
        <title>{title}</title>
        <defs>
            <polygon points="0.0210622444 0 5.97895118 0 5.97895118 11.999985 0.0210622444 11.999985"></polygon>
        </defs>
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="UX/UI-Master" transform="translate(-250.000000, -2242.000000)">
                <g id="utropstecken" transform="translate(251.000000, 2243.000000)">
                    <g>
                        <g fill="#FFFFFF" stroke="#B50255" stroke-width="2">
                            <circle id="Oval" cx="20.5" cy="20.5" r="20.5"></circle>
                        </g>
                        <g transform="translate(21.000000, 20.500000) scale(-1, 1) translate(-21.000000, -20.500000) translate(18.000000, 10.000000)">
                            <path d="M3,14 C1.34315217,14 0,15.5670109 0,17.5 C0,19.4329891 1.34315217,21 3,21 C4.65684783,21 6,19.4329891 6,17.5 C6,15.5670109 4.65684783,14 3,14" fill="#B50255"></path>
                            <g>
                                <mask fill="white">
                                    <use href="#path-1"></use>
                                </mask>
                                <g></g>
                                <path d="M0.0223022727,0.949035 L0.528075,11.149035 C0.551734091,11.626335 0.910506818,11.999985 1.34502955,11.999985 L4.65498409,11.999985 C5.08943864,11.999985 5.44827955,11.626335 5.47193864,11.149035 L5.97771136,0.949035 C6.00327955,0.433485 5.63012045,-1.5e-05 5.16075682,-1.5e-05 L0.839188636,-1.5e-05 C0.369825,-1.5e-05 -0.00326590909,0.433485 0.0223022727,0.949035" fill="#B50255" mask="url(#mask-2)"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg >;
}