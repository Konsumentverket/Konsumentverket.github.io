import { css,Global } from '@emotion/core'
import {GlobalStyles} from '../../components/GlobalStyles/globalStyles'
import React from 'react';
import ReactDOM from 'react-dom';

var id = window.createGlobalStyleLoadingElement();

ReactDOM.render(
    <div>
        <GlobalStyles />
        <Global styles={css`
            .sb-show-main{
                padding: 10px;
            }
        `} />
    </div>,
    document.getElementById(id)
  );