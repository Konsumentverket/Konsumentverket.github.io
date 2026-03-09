/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { tagStyle } from './tag.css.js';

const Tag = ({ id, url, text, onClick }) => {
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
