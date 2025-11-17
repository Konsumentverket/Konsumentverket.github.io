/** @jsx jsx */
import {jsx} from '@emotion/core';

export const MonoArrowRightSmall = ({className, style, title, ...otherAttr}) => {
  return (
    <svg className={className} css={style} width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M12.7275 9.6373L7.46094 14.7357C7.09693 15.0881 6.50832 15.0881 6.14818 14.7357L5.27301 13.8885C4.909 13.5361 4.909 12.9663 5.27301 12.6176L9.00605 9.00375L5.27301 5.38988C4.909 5.03749 4.909 4.46767 5.27301 4.11903L6.14431 3.26429C6.50832 2.9119 7.09693 2.9119 7.45707 3.26429L12.7236 8.3627C13.0915 8.71509 13.0915 9.28491 12.7275 9.6373Z"
        />
    </svg>
  );
};
