/** @jsx jsx */
import {css,jsx } from '@emotion/core'
import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from '../../misc/Page/Page';
import {spacing} from './Spacing'
import NotesLoader from '../NotesLoader';
import {colors} from '../Colors/Colors'


const baseSize = 10;
let name = 'Beskrivning av grid och struktur';
storiesOf('Digitala produkter|Beskrivning av komponenter', module)
    .add(name, () =>
        <Page>
            <h1>Avstånd med {baseSize} pixlars root</h1>
            <table>
                <thead>
                    <tr>
                        <th>Token</th>
                        <th>Värde (rem)</th>
                        <th>Värde (px)</th>
                        <th>Exempel</th>
                    </tr>
                </thead>
                <tbody>
                {Object.keys(spacing).map(token => {
                    const value = spacing[token];
                    const valuePx = 1 * parseFloat(value) * baseSize;
                    return (<tr>
                                <td>{token}</td>
                                <td>{value}</td>
                                <td>{valuePx}</td>
                                <td><div css={{
                                        width:value,
                                        height:value,
                                        backgroundColor:colors.theme1.mid}}>
                                    </div>
                                </td>
                            </tr>);
                })}
                </tbody>

            </table>
        </Page>, { notes: NotesLoader(name) }
    );