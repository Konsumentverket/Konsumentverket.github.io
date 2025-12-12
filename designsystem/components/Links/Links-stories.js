/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react';
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import { colors } from '../Colors/Colors';

let name = 'Länkar';


storiesOf('Digitala Produkter|Komponenter', module)
    .add(name, () =>  {
         
        const linkWrapper = css`padding: 20px;`
    
        return <div style={{maxWidth:"960px", margin: '20px'}}>
                <p css={linkWrapper}>
                    <a href="#">Standard länk</a>
                </p>
                
                <p css={css`${linkWrapper} background-color: ${colors.theme1.light}; border-radius: .8rem;`}>
                    <a className="invertedStyle" href="#">Länk med state för ljust färgade bakgrunder</a>
                </p>
                
                <p css={linkWrapper}>
                <a className="noStyle" href="#">Länk utan states</a>
                </p>
                
                <p css={linkWrapper}>
                    <a href="https://www.hallakonsument.se/fakeFile.pdf">pdf länk (Portable Document Format)</a>
                </p>
                
                <p css={linkWrapper}>
                    <a href="https://www.hallakonsument.se/fakeFile.doc">doc länk (Document)</a>
                </p>

                <p css={linkWrapper}>
                    <a href="https://www.hallakonsument.se/fakeFile.docx">docx länk (Document)</a>
                </p>

                <p css={linkWrapper}>
                    <a href="https://www.hallakonsument.se/fakeFile.ppt">ppt länk (PowerPoint Presentation)</a>
                </p>

                <p css={linkWrapper}>
                    <a href="https://www.hallakonsument.se/fakeFile.pptx">pptx länk (PowerPoint Presentation)</a>
                </p>

                <p css={linkWrapper}>
                    <a href="https://www.hallakonsument.se/fakeFile.txt">txt länk (Text Dokument)</a>
                </p>

                <p css={linkWrapper}>
                    <a href="https://www.hallakonsument.se/fakeFile.xlt">xlt länk (Excel fil)</a>
                </p>

                <p css={linkWrapper}>
                    <a href="https://www.hallakonsument.se/fakeFile.xltx">xltx länk (Excel fil)</a>
                </p>
            </div>
        
    }
        
    , { notes: NotesLoader(name) }
    );