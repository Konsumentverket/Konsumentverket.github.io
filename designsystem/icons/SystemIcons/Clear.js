


/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';

export default ({ className, style, title, ...otherAttr }) => {

    return <svg aria-hidden="true" className={className} css={style} width="24px" height="24px" viewBox="0 0 24 24" {...otherAttr}>
        <title>{title}</title>
        <path d="M15.9225806,14.1 C16.0741935,14.2516129 16.0741935,14.4968065 15.9225806,14.6483871 L14.6451613,15.9225806 C14.4935484,16.0741935 14.2484194,16.0741935 14.0967742,15.9225806 L12,13.8064516 L9.9,15.9225806 C9.74841935,16.0741935 9.50322581,16.0741935 9.3516129,15.9225806 L8.07741935,14.6451613 C7.92583871,14.4935484 7.92583871,14.2484194 8.07741935,14.0967742 L10.1935484,12 L8.07741935,9.9 C7.92583871,9.74841935 7.92583871,9.50322581 8.07741935,9.3516129 L9.35483871,8.07419355 C9.50648387,7.92258065 9.7516129,7.92258065 9.90322581,8.07419355 L12,10.1935484 L14.1,8.07741935 C14.2516129,7.92583871 14.4968065,7.92583871 14.6483871,8.07741935 L15.9258387,9.35483871 C16.0774516,9.50648387 16.0774516,9.7516129 15.9258387,9.90322581 L13.8064516,12 L15.9225806,14.1 Z M12,4 C7.58064516,4 4,7.58064516 4,12 C4,16.4193548 7.58064516,20 12,20 C16.4193548,20 20,16.4193548 20,12 C20,7.58064516 16.4193548,4 12,4 L12,4 Z"></path>
    </svg>
}