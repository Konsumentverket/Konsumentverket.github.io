/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import { text, boolean } from '@storybook/addon-knobs';
import { InputText } from './InputText';
import { css } from '@emotion/core';
import { ValidationResponse } from '../ValidationResponse/ValidationResponse';



let name = 'Input text';
storiesOf('Digitala Produkter|Komponenter/Formulärfält', module)
    .add(name, () => {
                    return <>
                    <div css={css`max-width: 80%; margin-left: 2%; p{font-size: 1.8rem;}`}>
                    <p>Typ "text"</p>
                    <br />
                    <InputText 
                        placeholder={text("placeholder","Skriv ditt namn")} 
                        id="text"
                        onChange={(e) => console.log(e.target.value)}
                    />
                    <br />
                    <p>Typ "search"</p>
                    <InputText 
                        placeholder={text("placeholder2","Skriv för att söka")} 
                        id="search2"
                        type="search"
                        onChange={(e) => console.log(e.target.value)}
                    />
                    
                    <br />
                    <p>Typ "search" med label</p>
                    
                    <InputText 
                        placeholder={text("placeholder3","Skriv för att söka")}
                        label={"Jag är en label"}
                        id="search3"
                        type="search"
                        onChange={(e) => console.log(e.target.value)}
                    />
                    <br />
                    <p>Typ "search" med dold label</p>
                    <InputText 
                        placeholder={text("placeholder3","Skriv för att söka")}
                        label={"Jag är en label"}
                        hideLabel={true}
                        id="search3"
                        type="search"
                        onChange={(e) => console.log(e.target.value)}
                    />
                    <br />
                    <p>Med valideringsfel</p>
                    <InputText 
                        placeholder={text("placeholder4","Skriv för att söka")}
                        label={"Jag är en label"}
                        id="search4"
                        type="search"
                        validationError={<ValidationResponse>Ajdå!</ValidationResponse>}
                        onChange={(e) => console.log(e.target.value)}
                    />
                    </div>


                    </>
    }
        , { notes: NotesLoader(name) }
    );