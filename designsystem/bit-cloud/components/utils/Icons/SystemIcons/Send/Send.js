/** @jsx jsx */
import { jsx } from "@emotion/core";

export default ({ className, style, title, ...otherAttr }) => {
  return (
    <svg
      className={className}
      css={style}
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...otherAttr}
    >
      <title>{title}</title>
      <path d="M22.3144203,0.151456604 L0.585529016,12.6871751 C-0.262999426,13.1747274 -0.15517537,14.356104 0.68866507,14.7123922 L5.67201167,16.8032413 L19.1406427,4.93321909 C19.3984828,4.70350698 19.764147,5.05510716 19.5438109,5.3223233 L8.25041301,19.0816105 L8.25041301,22.8554524 C8.25041301,23.961821 9.58649371,24.3978052 10.242814,23.5961568 L13.2196956,19.9723309 L19.0609466,22.4194682 C19.726643,22.7007484 20.4860994,22.2835161 20.6079874,21.5662518 L23.9833492,1.31408121 C24.1427413,0.367104716 23.1254448,-0.31734364 22.3144203,0.151456604 Z"></path>
    </svg>
  );
};
