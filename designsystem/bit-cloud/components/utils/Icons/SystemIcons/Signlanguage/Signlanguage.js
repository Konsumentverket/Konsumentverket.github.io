/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';

export const Signlanguage = ({ className, style, title, ...otherAttr }) => {
    return <svg className={className} css={style} width="18px" height="18px" viewBox="0 0 18 18" {...otherAttr}>
        <title>{title}</title>
        <path id="1711464248285-2477850_Union" fillRule="evenodd" clipRule="evenodd" d="M14.5571 6.56257C14.0666 6.32482 13.5232 6.16807 12.9641 6.18945C11.7532 6.23557 10.6279 6.8022 9.77061 8.05095C9.53548 8.3937 9.45561 8.88345 9.74323 9.2547C9.80398 9.33345 9.87636 9.41445 9.96186 9.4947C10.0166 9.54607 10.0747 9.58469 10.1351 9.61244C10.0463 9.62403 9.95871 9.64348 9.87336 9.67057C9.55161 9.77257 9.35961 10.0328 9.28911 10.3216C9.21992 10.6224 9.26793 10.9383 9.42336 11.2051C9.93336 12.0818 10.7205 12.7519 11.6081 13.0411C11.0989 13.2953 10.5739 13.4824 10.0519 13.5706C9.75898 13.6201 9.40686 13.7716 9.27411 14.1282C9.11323 14.5591 9.20398 14.8969 9.32398 15.1126C9.45523 15.3477 9.70273 15.4306 9.90786 15.4452C10.791 15.5089 11.5436 15.4332 12.2074 15.2517C12.0761 15.3713 11.9441 15.4778 11.8147 15.5697C11.6385 15.6949 11.43 15.8866 11.3824 16.1697C11.2905 16.7149 11.5672 17.0783 11.7911 17.2722C11.9996 17.4533 12.2786 17.4766 12.5141 17.3854C13.1524 17.1391 13.9042 16.5702 14.6246 15.8206C15.4029 15.0057 16.0654 14.0876 16.5934 13.0921C17.2035 11.9333 17.4502 10.9343 17.4371 9.81832C17.4285 9.09344 17.1296 8.40382 16.5971 7.92645C15.9835 7.37971 15.2969 6.92046 14.5571 6.56257ZM10.9046 9.99382C10.8116 9.87307 10.6826 9.73882 10.5184 9.66344C10.542 9.65969 10.5656 9.65557 10.5889 9.64995C10.7917 9.60269 10.9826 9.48195 11.13 9.34057C11.7037 8.79157 12.4687 8.7537 12.8914 9.21644C12.9795 9.33307 13.0541 9.47707 13.1149 9.6237C13.2469 9.94245 13.1599 10.3039 12.9109 10.4817C12.5902 10.7108 12.2452 10.7824 11.9096 10.7082C11.5702 10.6332 11.2196 10.4044 10.9046 9.99382Z"/>
        <path id="1711464248285-2477850_Union_2" fillRule="evenodd" clipRule="evenodd" d="M3.443 11.4372C3.9335 11.6753 4.47687 11.8317 5.03637 11.8107C6.24687 11.7645 7.37262 11.1975 8.2295 9.94916C8.46462 9.60641 8.5445 9.11666 8.25687 8.74504C8.19048 8.65936 8.11738 8.57911 8.03825 8.50504C7.98717 8.45687 7.92867 8.41724 7.865 8.38766C7.9538 8.3761 8.0414 8.35665 8.12675 8.32954C8.4485 8.22754 8.64087 7.96729 8.711 7.67816C8.78008 7.37742 8.73208 7.06166 8.57675 6.79504C8.06675 5.91829 7.27962 5.24779 6.39237 4.95866C6.90125 4.70441 7.42625 4.51766 7.94862 4.42916C8.24112 4.37966 8.59287 4.22816 8.726 3.87191C8.88687 3.44066 8.79612 3.10316 8.67612 2.88716C8.54525 2.65241 8.29737 2.56954 8.09225 2.55491C7.20912 2.49116 6.4565 2.56691 5.79275 2.74841C5.924 2.62879 6.056 2.52191 6.18537 2.43041C6.36162 2.30479 6.57012 2.11354 6.61775 1.83041C6.70962 1.28516 6.43287 0.921789 6.209 0.727914C6.0005 0.546414 5.7215 0.523539 5.486 0.614289C4.84775 0.861039 4.09587 1.42954 3.3755 2.17916C2.59716 2.99402 1.93469 3.91214 1.40675 4.90766C0.796621 6.06679 0.549871 7.06579 0.562996 8.18141C0.571621 8.90666 0.870496 9.59591 1.403 10.0733C2.01658 10.6202 2.70314 11.0792 3.443 11.4372ZM7.0955 8.00591C7.1885 8.12666 7.3175 8.26091 7.48175 8.33666C7.45812 8.34004 7.43487 8.34416 7.41125 8.34979C7.20837 8.39741 7.0175 8.51816 6.87012 8.65916C6.29637 9.20816 5.53175 9.24641 5.10875 8.78366C5.01765 8.65771 4.94257 8.52091 4.88525 8.37641C4.75325 8.05766 4.84025 7.69616 5.08925 7.51804C5.40987 7.28929 5.75487 7.21729 6.09087 7.29191C6.43025 7.36691 6.78087 7.59566 7.09587 8.00629L7.0955 8.00591Z"/>
    </svg>;
}
