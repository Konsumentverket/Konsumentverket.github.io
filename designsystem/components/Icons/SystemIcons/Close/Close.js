/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

export const closePath = "M15.5696544,12.005 L23.6488809,3.92612623 C24.1160647,3.45888353 24.1160647,2.70064538 23.6488809,2.23265269 L21.7715207,0.355432024 C21.304262,-0.111810675 20.5460727,-0.111810675 20.077989,0.355432024 L11.9995875,8.43505578 L3.92043601,0.356182013 C3.45317725,-0.111060687 2.69491303,-0.111060687 2.22697926,0.356182013 L0.350444071,2.23265269 C-0.11681469,2.69989539 -0.11681469,3.45813354 0.350444071,3.92612623 L8.42952055,12.005 L0.350444071,20.0838738 C-0.11681469,20.5511165 -0.11681469,21.3093546 0.350444071,21.7773473 L2.22765427,23.654568 C2.69491303,24.1218107 3.45317725,24.1218107 3.92118602,23.654568 L11.9995875,15.5749442 L20.078739,23.653818 C20.5460727,24.1210607 21.304262,24.1210607 21.7722707,23.653818 L23.6495559,21.7765973 C24.1168147,21.3093546 24.1168147,20.5511165 23.6495559,20.0831238 L15.5696544,12.005 Z";

export default ({ className, style, title, ...otherAttr }) => {
	return (
		<svg className={className} css={style} width="24px" height="24px" viewBox="-2 -2 28 28" {...otherAttr}>
			<title>{title}</title>
			<path d={closePath}></path>
		</svg>
	);
};
