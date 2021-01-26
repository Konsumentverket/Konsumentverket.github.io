/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';

export default ({ className, style, title, ...otherAttr }) => {
    return <svg className={className} css={style} width="32px" height="28px" viewBox="0 0 32 28" {...otherAttr}>
        <title>{title}</title>
        <g stroke="none" strokeWidth="1">
            <g transform="translate(-697.000000, -2158.000000)">
                <g transform="translate(697.000000, 2158.000000)">
                    <path 
                        d="M19.8716424,9.89424093 C21.8016229,10.4019992 23.9648978,8.6186074 24.7034553,5.91014737 C25.4420751,3.20168733 24.4763987,0.594903701 22.5464806,0.0865216343 C20.6164377,-0.421860432 18.4532252,1.36215516 17.7146677,4.0706152 C16.9760479,6.77907524 17.9417243,9.38648265 19.8716424,9.89424093 M29.619541,8.06406549 C27.8030264,7.62991345 25.8050537,9.02967953 25.155697,11.191083 C24.5070264,13.3524865 25.4532408,15.4565021 27.2697555,15.8906542 C29.0862077,16.3248062 31.084118,14.9250402 31.7334748,12.7636366 C32.3822701,10.6022331 31.4359933,8.49821754 29.619541,8.06406549 M12.0668861,9.89424093 C13.9968666,9.38648265 14.9624806,6.77907524 14.2239231,4.0706152 C13.485428,1.36215516 11.3220907,-0.42123665 9.39217261,0.0865216343 C7.46219211,0.594279919 6.49657807,3.20168733 7.2350732,5.91014737 C7.9736307,8.6186074 10.1375293,10.402623 12.0668861,9.89424093 M6.78227008,11.1904593 C6.13347476,9.02905575 4.13487827,7.62928967 2.3184884,8.06344171 C0.501973782,8.49759376 -0.444240643,10.6016094 0.204429923,12.7630129 C0.853162866,14.9244164 2.85175936,16.3242448 4.66827398,15.8900928 C6.48472622,15.4558784 7.43100302,13.3518628 6.78227008,11.1904593 M15.9692642,11.977048 C11.0158139,11.977048 3.99265604,19.6345918 3.99265604,24.468276 C3.99265604,26.6453364 5.6650771,27.9458589 8.46772817,27.9458589 C11.5142779,27.9458589 13.5259738,26.3814144 15.9692642,26.3814144 C18.4338256,26.3814144 20.4511356,27.9458589 23.4708627,27.9458589 C26.2735761,27.9458589 27.9458724,26.6453364 27.9458724,24.468276 C27.9458724,19.6345918 20.9227769,11.977048 15.9692642,11.977048" 
                        id={title != null ? `pets-${title}` : null}
                    ></path>
                </g>
            </g>
        </g>
    </svg>;
}



