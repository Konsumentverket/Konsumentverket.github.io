/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react';
// import './Page.scss';

const pageStyle = css`

    font-family: "Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 1.5;
    color: #2a3039;
    max-width: 800px;
    margin: 0 auto;

    /* h2 {
        font-size: 24px;
        border-bottom: 1px solid rgba(0,0,0,.1);
        font-weight: 400;
    } */

    /* h3 {
        font-size: 20px;
        font-weight: 400;
    } */


    table {
        border-collapse: collapse;
        width: 100%;
    }

    td {
        padding: 16px;
        vertical-align: bottom;
        border: 0;
        border-bottom: 1px solid #e5ebed;
    }

    tr:last-child td {
        border-bottom: 0;
    }

    th {
        background: #f7f9fa;
        color: #8091a5;
        padding: 10px 16px;
        text-align: left;
    }


`

export default class Page extends React.Component {



    render() {
        return <div className='page' css={pageStyle}>
            {this.props.children}
        </div>
    }

}