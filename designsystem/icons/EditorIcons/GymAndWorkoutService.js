/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';

export default ({ className, style, title, ...otherAttr }) => {
        return <svg className={className} css={style}  width="32px" height="23px" viewBox="0 0 32 23" {...otherAttr}>
                <title>{title}</title>
                <g stroke="none" strokeWidth="1">
        <g transform="translate(-905.000000, -2019.000000)">
            <path d="M927.8,2019 L925.4,2019 C924.735,2019 924.2,2019.535 924.2,2020.2 L924.2,2028.6 L917.8,2028.6 L917.8,2020.2 C917.8,2019.535 917.265,2019 916.6,2019 L914.2,2019 C913.535,2019 913,2019.535 913,2020.2 L913,2040.2 C913,2040.865 913.535,2041.4 914.2,2041.4 L916.6,2041.4 C917.265,2041.4 917.8,2040.865 917.8,2040.2 L917.8,2031.8 L924.2,2031.8 L924.2,2040.2 C924.2,2040.865 924.735,2041.4 925.4,2041.4 L927.8,2041.4 C928.465,2041.4 929,2040.865 929,2040.2 L929,2020.2 C929,2019.535 928.465,2019 927.8,2019 M936.6,2028.6 L935.4,2028.6 L935.4,2023.4 C935.4,2022.735 934.865,2022.2 934.2,2022.2 L931.8,2022.2 C931.135,2022.2 930.6,2022.735 930.6,2023.4 L930.6,2037 C930.6,2037.665 931.135,2038.2 931.8,2038.2 L934.2,2038.2 C934.865,2038.2 935.4,2037.665 935.4,2037 L935.4,2031.8 L936.6,2031.8 C936.82,2031.8 937,2031.62 937,2031.4 L937,2029 C937,2028.78 936.82,2028.6 936.6,2028.6 M910.2,2022.2 L907.8,2022.2 C907.135,2022.2 906.6,2022.735 906.6,2023.4 L906.6,2028.6 L905.4,2028.6 C905.18,2028.6 905,2028.78 905,2029 L905,2031.4 C905,2031.62 905.18,2031.8 905.4,2031.8 L906.6,2031.8 L906.6,2037 C906.6,2037.665 907.135,2038.2 907.8,2038.2 L910.2,2038.2 C910.865,2038.2 911.4,2037.665 911.4,2037 L911.4,2023.4 C911.4,2022.735 910.865,2022.2 910.2,2022.2" id="Fill-1"></path>
        </g>
    </g>
        </svg>;
}




