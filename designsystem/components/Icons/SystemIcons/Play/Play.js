/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';

export default ({ className, style, title, ...otherAttr }) => {
  return (
    <svg 
      className={className} 
      css={style} 
      width="43px" 
      height="43px" 
      viewBox="0 0 496 496" 
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      {...otherAttr}>

      <title>{title}</title>

      <g>
        <path d="M248,0C111,0,0,111,0,248s111,248,248,248s248-111,248-248S385,0,248,0z"/>
        <path fill="#FFFFFF" d="M363.7,272l-176,101c-15.8,8.8-35.7-2.5-35.7-21V144c0-18.4,19.8-29.8,35.7-21l176,107 C380.1,239.2,380.1,262.9,363.7,272z"/>
      </g>

    </svg >
  )
}
