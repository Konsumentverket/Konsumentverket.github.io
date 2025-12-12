/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import { Icon, iconDefinitions } from './Icon';
import { select, text } from '@storybook/addon-knobs';
import css from '@emotion/css';
import { editorIconDefinitions, EditorIcon } from './EditorIcon';

var clickToDownload = (e, key) => {
    e.preventDefault();
    var svg = e.target.closest("svg")
    var svgAsXML = (new XMLSerializer).serializeToString(svg);
    var dataURL = "data:image/svg+xml," + encodeURIComponent(svgAsXML);
    var dl = document.createElement("a");
    document.body.appendChild(dl); // This line makes it work in Firefox.
    dl.setAttribute("href", dataURL);
    dl.setAttribute("download", key + ".svg");
    dl.click();
}

const iconStyle = css`
    width: 40px;
    height: 40px;
`;
const iconsWrapper = css`
    display: flex;
    flex-wrap: wrap;
    max-width: 960px;
`
const iconWrapper = css`

    width: 20%;
    display:flex;
    flex-direction:column;
    align-items:center;
    
    margin-bottom: 2.6rem;
`

const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

let name = 'Ikon';
storiesOf('Digitala Produkter|Komponenter/Ikoner', module)
    .add(name, () => {
        var selectedDefinition = select("icon", Object.keys(iconDefinitions), Object.keys(iconDefinitions)[0]);
        return <a onClick={(e) => clickToDownload(e, selectedDefinition)}>
            <Icon
                icon={selectedDefinition}
                className={text("className", "")}
                title={text("title", "")}
                style={iconStyle}
            />
        </a>
    }, { notes: NotesLoader(name) }
    ).add("Alla ikoner", () => {

        const [colors,setColor] = useState({})

        let icons = Object.keys(iconDefinitions).map((key) => (
            <div css={iconWrapper} key={key} onClick={(e) => {
                setColor({...colors,[key]:getRandomColor()})
                e.preventDefault();
            }}>
                <span>{key}</span>
                <Icon icon={key} style={{ fill: (colors[key] || '#000'),marginTop:'10px' }} />
            </div>
        ));
        return <div css={iconsWrapper}>
            {icons}
        </div>
    }).add("Alla 'Redaktörs' ikoner",() => {

        let icons = Object.keys(editorIconDefinitions).map((key) => (
            <div css={iconWrapper} key={key}>
                <span>{key}</span>
                <EditorIcon icon={key} style={{ fill: '#000',marginTop:'10px' }} />
            </div>
        ));
        return <div css={iconsWrapper}>
            {icons}
        </div>

        // let icons = Object.keys(editorIconDefinitions).map((key) => (<><div key={key}><span>{key}</span><EditorIcon icon={key} style={{ fill: '#000',marginTop:'8px' }} /></div></>));
        // return icons;
    });


