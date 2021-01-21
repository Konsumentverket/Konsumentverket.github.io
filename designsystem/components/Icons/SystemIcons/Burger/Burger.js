/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

export default ({ className, style, title, ...otherAttr }) => (
	<svg width="24" height="21" viewBox="0 0 24 21" className={className} css={style} {...otherAttr}>
		<title>{title}</title>
		<path d="M0.857142857,3.5 L23.1428571,3.5 C23.6162679,3.5 24,3.15179861 24,2.72222222 L24,0.777777778 C24,0.348201389 23.6162679,0 23.1428571,0 L0.857142857,0 C0.383732143,0 0,0.348201389 0,0.777777778 L0,2.72222222 C0,3.15179861 0.383732143,3.5 0.857142857,3.5 Z M0.857142857,11.6666667 L23.1428571,11.6666667 C23.6162679,11.6666667 24,11.3184653 24,10.8888889 L24,8.94444444 C24,8.51486806 23.6162679,8.16666667 23.1428571,8.16666667 L0.857142857,8.16666667 C0.383732143,8.16666667 0,8.51486806 0,8.94444444 L0,10.8888889 C0,11.3184653 0.383732143,11.6666667 0.857142857,11.6666667 Z M0.857142857,21 L23.1428571,21 C23.6162679,21 24,20.6517986 24,20.2222222 L24,18.2777778 C24,17.8482014 23.6162679,17.5 23.1428571,17.5 L0.857142857,17.5 C0.383732143,17.5 0,17.8482014 0,18.2777778 L0,20.2222222 C0,20.6517986 0.383732143,21 0.857142857,21 Z"/>
	</svg>
);
