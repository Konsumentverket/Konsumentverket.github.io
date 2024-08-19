/** @jsx jsx */
import {jsx} from '@emotion/core';

export const MonoArrowRight = ({className, style, title, ...otherAttr}) => {
  return (
    <svg className={className} css={style} width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M14.5912 9.95595L6.69141 17.6036C6.1454 18.1321 5.26248 18.1321 4.72227 17.6036L3.40951 16.3327C2.8635 15.8041 2.8635 14.9494 3.40951 14.4264L9.00907 9.00562L3.40951 3.58482C2.8635 3.05623 2.8635 2.2015 3.40951 1.67854L4.71646 0.396439C5.26248 -0.132146 6.1454 -0.132146 6.6856 0.396439L14.5854 8.04405C15.1372 8.57263 15.1372 9.42737 14.5912 9.95595Z"
      />
    </svg>
  );
};