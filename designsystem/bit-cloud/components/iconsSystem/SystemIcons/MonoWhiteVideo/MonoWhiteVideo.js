/** @jsx jsx */
import {jsx} from '@emotion/core'
import React from 'react';

export const MonoWhiteVideo = ({className, style, title, ...otherAttr}) => {
  return (
      <svg className={className} css={style} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...otherAttr}>
        <path d="M7.328 3.17278C5.5296 2.55678 3.8452 3.65118 3.5328 5.45078C3.264 7.00238 3 9.23038 3 12.0008C3 14.7712 3.264 16.9992 3.5332 18.5512C3.8452 20.3512 5.53 21.4452 7.3276 20.8288C8.7116 20.354 10.7176 19.5248 13.5184 18.0764C16.2676 16.654 18.246 15.4296 19.6164 14.4868C20.5148 13.8688 21 12.9524 21 12.0008C21 11.0496 20.5148 10.1328 19.616 9.51518C18.246 8.57238 16.2676 7.34758 13.5184 5.92558C10.7176 4.47678 8.712 3.64758 7.328 3.17278Z" fill="white"/>
      </svg>
      )
}
