/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';

export default ({ className, style, title, ...otherAttr }) => {
        return <svg className={className} css={style}   width="32px" height="26px" viewBox="0 0 32 26" {...otherAttr}>
                <title>{title}</title>
                <g fillRule="evenodd">
        <g transform="translate(-489.000000, -1647.000000)" fill="inherit">
            <path d="M520.2,1667.8 L508.077,1667.8 C508.04,1668.7905 507.3415,1669.4 506.44,1669.4 L503.4,1669.4 C502.4655,1669.4 501.75,1668.5265 501.7615,1667.8 L489.8,1667.8 C489.3582,1667.8 489,1668.15815 489,1668.6 L489,1669.4 C489.0052,1671.16515 490.43485,1672.5948 492.2,1672.6 L517.8,1672.6 C519.56515,1672.5948 520.9948,1671.16515 521,1669.4 L521,1668.6 C521,1668.15815 520.64185,1667.8 520.2,1667.8 L520.2,1667.8 Z M495.4,1663 L514.6,1663 L514.6,1650.2 L495.4,1650.2 L495.4,1663 Z M517.8,1649.4 C517.79615,1648.0761 516.7239,1647.00385 515.4,1647 L494.6,1647 C493.2761,1647.00385 492.20385,1648.0761 492.2,1649.4 L492.2,1666.2 L517.8,1666.2 L517.8,1649.4 Z M500.6,1658.2 L503.4,1658.2 L503.4,1661 C503.4,1661.2209 503.5791,1661.4 503.8,1661.4 L506.2,1661.4 C506.4209,1661.4 506.6,1661.2209 506.6,1661 L506.6,1658.2 L509.4,1658.2 C509.6209,1658.2 509.8,1658.0209 509.8,1657.8 L509.8,1655.4 C509.8,1655.1791 509.6209,1655 509.4,1655 L506.6,1655 L506.6,1652.2 C506.6,1651.9791 506.4209,1651.8 506.2,1651.8 L503.8,1651.8 C503.5791,1651.8 503.4,1651.9791 503.4,1652.2 L503.4,1655 L500.6,1655 C500.3791,1655 500.2,1655.1791 500.2,1655.4 L500.2,1657.8 C500.2,1658.0209 500.3791,1658.2 500.6,1658.2 L500.6,1658.2 Z"></path>
        </g>
    </g>
        </svg>;
}




