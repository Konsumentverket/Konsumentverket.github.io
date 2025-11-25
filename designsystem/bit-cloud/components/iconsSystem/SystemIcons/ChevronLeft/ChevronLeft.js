/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';

export const ChevronLeft = ({ className, style, title, ...otherAttr }) => {
    return <svg className={className} css={style} {...otherAttr} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="m 15.388487,12.806792 -5.26653,5.0984 c -0.3640101,0.3524 -0.9526201,0.3524 -1.3127601,0 l -0.875172,-0.8472 c -0.364011,-0.3524 -0.364011,-0.92224 0,-1.27088 L 11.667067,12.173242 7.9340249,8.5593715 c -0.364011,-0.35239 -0.364011,-0.92221 0,-1.27085 l 0.871302,-0.854738 c 0.36401,-0.3523895 0.95262,-0.3523895 1.3127601,0 l 5.26653,5.0984085 c 0.36788,0.35239 0.36788,0.92221 0.0039,1.2746 z" />
    </svg>
}
