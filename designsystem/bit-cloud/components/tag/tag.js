/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import { tagStyle } from './tag.css.js';

const Tag = ({ id, url, text, onClick }) => {
  // document.documentElement.setAttribute('data-theme', 'dark');
  return (
    <a
      data-comp="tag"
      key={id}
      href={url}
      css={[tagStyle.style]}
      onClick={onClick}
      className="noStyle"
    >
      {text}
    </a>
  );
};

export { Tag };
