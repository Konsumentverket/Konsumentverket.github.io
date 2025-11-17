/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

export const Warn = ({ className, style, title, ...otherAttr }) => {
	return (
		<svg
			aria-hidden="true"
			className={className}
			css={style}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			{...otherAttr}
		>
			<title>{title}</title>
			<path d="M14.4 3.22a2.96 2.96 0 0 0-4.8 0c-1.23 1.61-3 4.2-5.13 8.13a51.42 51.42 0 0 0-3.58 7.78c-.31.92-.16 1.83.34 2.53.5.69 1.3 1.13 2.23 1.22 1.92.18 4.83.37 8.54.37 3.7 0 6.62-.2 8.54-.37a3.07 3.07 0 0 0 2.23-1.22c.5-.7.65-1.61.34-2.53a51.38 51.38 0 0 0-3.57-7.78 62.12 62.12 0 0 0-5.14-8.13Z" fill="#F4CFE0" /><path d="M10.08 9.58c-.05-.67.26-1.33.92-1.48a4.65 4.65 0 0 1 2 0c.66.15.97.8.92 1.48a70.4 70.4 0 0 1-.45 4.5c-.07.44-.35.8-.8.87a4.6 4.6 0 0 1-1.35 0c-.44-.06-.72-.43-.79-.88a70.4 70.4 0 0 1-.45-4.49ZM10.25 18.25a1.75 1.75 0 1 0 3.5 0 1.75 1.75 0 0 0-3.5 0Z" fill="#B50156" />
		</svg>
	);
};
