/** @jsx jsx */
import { jsx } from '@emotion/core';

export const MonoArrowSmall = ({ className, style, title, ...otherAttr }) => {
	return (
    <svg className={className} width="9" height="13" fill="none">
      <title>{title}</title>
      <path d="m12.727 9.637-5.266 5.099a.947.947 0 0 1-1.313 0l-.875-.848a.876.876 0 0 1 0-1.27l3.733-3.614L5.273 5.39a.876.876 0 0 1 0-1.271l.871-.855a.947.947 0 0 1 1.313 0l5.267 5.099a.877.877 0 0 1 .003 1.274z" transform="translate(-4.881 -2.822)" />
	  </svg>
	);
};
