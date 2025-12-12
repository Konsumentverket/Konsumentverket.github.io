/** @jsx jsx */
import { jsx,css } from '@emotion/core'
import React, { useLayoutEffect, useState } from 'react'
import { storiesOf } from '@storybook/react'
import NotesLoader from '../NotesLoader'
import { Heading } from './Heading'
import { SubHeading } from '../SubHeading/SubHeading'
import { text, select } from '@storybook/addon-knobs';
import { colors } from '../Colors/Colors'




let name = 'Rubriker'
storiesOf('Digitala Produkter|Komponenter/Rubriker', module)
    .add(name, () =>{
    
    const dokumentationDiv = css`
        display: flex;
        align-items: center;
        border-bottom: 1px solid ${colors.theme3.mid};
        min-height: 80px;
        pre{
            margin-left: 20px;
            line-height: 20px;
        }
        h1,h2,h3,h4,h5,h6{
            margin-bottom: 0;
        }
    `

    return <>
        <div id="headings">
            <div css={dokumentationDiv}>
                <Heading text="Rubrik h1" /> <pre>Mobil: 28px/32px<br/>Desktop: 48px/56px</pre>
            </div>
            <div css={dokumentationDiv}>
                <SubHeading text="Rubrik h2" /><pre>Mobil: 24px/32px<br/>Desktop: 34px/48px</pre>
            </div>
            <div css={dokumentationDiv}>
                <SubHeading text="Rubrik h3" level="3" /><pre>Mobil: 20px/32px<br/>Desktop: 28px/32px</pre>
            </div>
            <div css={dokumentationDiv}>
                <SubHeading text="Rubrik h4" level="4" /><pre>Mobil: 18px/32px<br/>Desktop: 24px/32px</pre>
            </div>
            <div css={dokumentationDiv}>
                <SubHeading text="Rubrik h5" level="5" /><pre>Mobil: 18px/32px<br/>Desktop: 20px/32px</pre>
            </div>
            <div css={dokumentationDiv}>
                <SubHeading text="Rubrik h6" level="6" /><pre>Mobil: 16px/24px<br/>Desktop: 18px/24px</pre>
            </div>
            <div css={dokumentationDiv}>
                <SubHeading text="Rubrik h7" level="7" /><pre>Mobil: 16px/24px<br/>Desktop: 16px/24px</pre>
            </div>
            <p css={css`margin-top: 50px;`}>Custom sizes:</p>
            <SubHeading text="Rubrik h1 with h2 styling" level="1" styleLevel="2" />
            <SubHeading text="Rubrik h2 with h3 styling" level="2" styleLevel="3" />
            <SubHeading text="Rubrik h3 with h4 styling" level="3" styleLevel="4" />
            <SubHeading text="Rubrik h4 with h5 styling" level="4" styleLevel="5" />
        </div>
            
    </>}
        , { notes: NotesLoader(name) }
    ).add("Rubrik",() => <>
        <SubHeading text={text("text","Lorem ipsum")} 
                    level={select("level",[1,2,3,4,5,6],1)} 
                    styleLevel={select("styleLevel",[1,2,3,4,5,6],1)} 
        />
    </>);

    
