/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';

export default ({ className, style, title }) => {
  return <svg className={className} css={style} classwidth="30px" height="29px" viewBox="0 0 30 29" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
    <title>{title}</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g transform="translate(-258.000000, -5918.000000)">
        <g transform="translate(259.000000, 5919.000000)">
          <g fill="#FFFFFF" stroke="#B50255" stroke-width="2">
            <g>
              <g>
                <ellipse id="Oval" cx="14" cy="13.5" rx="14" ry="13.5"></ellipse>
              </g>
            </g>
          </g>
          <g id="binoculars" transform="translate(6.000000, 6.000000)" fill="#B50156" fill-rule="nonzero">
            <path d="M13,0.5 C13,0.22375 12.77625,0 12.5,0 L10.5,0 C10.22375,0 10,0.22375 10,0.5 L10,2 L13,2 L13,0.5 Z M1.9971875,3.9996875 C1.91875,6.9325 0.108125,7.569375 0,11.625 L0,13 C0,13.5521875 0.4478125,14 1,14 L4,14 C4.5521875,14 5,13.5521875 5,13 L5,8 L6,8 L6,3 L2.995,3 C2.4440625,3 2.0121875,3.4490625 1.9971875,3.9996875 Z M14.0028125,3.9996875 C13.9878125,3.4490625 13.5559375,3 13.005,3 L10,3 L10,8 L11,8 L11,13 C11,13.5521875 11.4478125,14 12,14 L15,14 C15.5521875,14 16,13.5521875 16,13 L16,11.625 C15.891875,7.569375 14.08125,6.9325 14.0028125,3.9996875 Z M5.5,0 L3.5,0 C3.22375,0 3,0.22375 3,0.5 L3,2 L6,2 L6,0.5 C6,0.22375 5.77625,0 5.5,0 Z M7,8 L9,8 L9,3 L7,3 L7,8 Z" id="Shape"></path>
          </g>
        </g>
      </g>
    </g>
  </svg>;
}