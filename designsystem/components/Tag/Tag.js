/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { tagStyle } from './Tag.css';

const Tag = ({ id, url, text, style, onClick }) => {
    return <a key={id} href={url} css={[tagStyle, style]} onClick={onClick} className="noStyle">
            {text}
        </a>
}

export { Tag };