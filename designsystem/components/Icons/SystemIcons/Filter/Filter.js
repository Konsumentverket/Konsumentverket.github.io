/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

export default ({ className, style, title, ...otherAttr }) => {
	return (
		<svg className={className} css={style} width="24px" height="24px" viewBox="0 0 24 24" {...otherAttr}>
			<title>{title}</title>
			<defs>
				<path
					d="M22.8738303,0 L1.12627192,0 C0.126990862,0 -0.377196542,1.21246835 0.330850198,1.92051499 L8.99995792,10.5909809 L8.99995792,20.2499933 C8.99995792,20.6170713 9.17906726,20.9610868 9.4798172,21.1716493 L13.2298634,23.7957109 C13.9696445,24.3135857 14.9999568,23.7887265 14.9999568,22.8740549 L14.9999568,10.5909809 L23.6693926,1.92051499 C24.3759862,1.2138746 23.8751738,0 22.8738303,0"
					id="icon-filter"
				></path>
			</defs>
			<g stroke="none" strokeWidth="1" fill="inherit" fillRule="evenodd">
				<g>
					<g>
						<mask id="mask-2-filter">
							<use href="#icon-filter"></use>
						</mask>
						<use href="#icon-filter"></use>
						<g mask="url(#mask-2-filter)">
							<rect x="0" y="0" width="24" height="24"></rect>
						</g>
					</g>
				</g>
			</g>
		</svg>
	);
};
