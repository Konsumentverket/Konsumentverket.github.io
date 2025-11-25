/** @jsx jsx */
import {jsx} from '@emotion/core';

export const MonoArrowDown = ({className, style, title, ...otherAttr}) => {
  return (
  <svg className={className} css={style} width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path
        d="M8.04405 14.5912L0.396438 6.69141C-0.132147 6.1454 -0.132147 5.26248 0.396439 4.72227L1.66729 3.40951C2.19588 2.8635 3.05061 2.8635 3.57357 3.40951L8.99437 9.00907L14.4152 3.40951C14.9438 2.8635 15.7985 2.8635 16.3215 3.40951L17.6036 4.71646C18.1321 5.26248 18.1321 6.1454 17.6036 6.6856L9.95595 14.5854C9.42736 15.1372 8.57263 15.1372 8.04405 14.5912Z"
      />
  </svg>
  );
};
