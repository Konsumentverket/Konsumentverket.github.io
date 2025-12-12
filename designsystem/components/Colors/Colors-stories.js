/** @jsx jsx */
import {css,jsx } from '@emotion/core'
import React from 'react';
import { storiesOf } from '@storybook/react';
import {colors} from './Colors'
import NotesLoader from '../NotesLoader';
import Page from '../../misc/Page/Page';
import { SubHeading } from '../SubHeading/SubHeading';

let name = 'Beskrivning av färger';


var ColorComponent = ({color,name,token}) => {

    var ColorComponentStyles = css`
        flex: 0 1 calc(33% - 20px);
        width: 100%;
        margin: 10px;
        border-radius: 5px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
        overflow:hidden;

        .color-preview{
            height: 100px;
            background-color: ${color};
            border-bottom: 1px solid ${colors.theme3.midLight};
        }
        .color-info{
            margin: 0 0 5px 5px;
            h3{
                margin: 0;
            }
            p{
                margin: 0;
                span{
                    font-weight:700;
                }
            }
        }
    `;

    return <div css={ColorComponentStyles}>
        <div className="color-preview"></div>
        <div className="color-info">
            <p><span>Token:</span> {token}</p>
            <p><span>Hex:</span> {color}</p>
        </div>
    </div>;
}
    
var wrapperStyles = css`
    display: flex;
    flex-flow: row wrap;
`;

storiesOf('Digitala produkter|Beskrivning av komponenter', module)
    .add(name, () =>
        <Page>
            
            <SubHeading level={1} text={"Färger"} />

            {Object.keys(colors).map(key => {
                return <>
                    <SubHeading style={css`margin-top:50px;`}>{key}</SubHeading>
                        <div css={wrapperStyles}>
                            {Object.keys(colors[key]).map(colorKey => {
                                return <ColorComponent color={colors[key][colorKey]} token={`${key}.${colorKey}`} />
                            })}
                        </div>
                    </>
            })}
 
        
        </Page>, { notes: NotesLoader(name) }
    );