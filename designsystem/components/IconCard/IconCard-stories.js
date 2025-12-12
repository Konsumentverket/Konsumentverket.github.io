/** @jsx jsx */
import { jsx } from '@emotion/core'
import { css } from '@emotion/core';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import NotesLoader from '../NotesLoader';
import { IconCard } from './IconCard';
import { colors } from '../Colors/Colors';
import Cars from '../Icons/EditorIcons/Cars/Cars';
import ConsumerRights from '../Icons/EditorIcons/ConsumerRights/ConsumerRights';
import GymAndWorkoutService from '../Icons/EditorIcons/GymAndWorkoutService/GymAndWorkoutService';

let name = 'Ikonkort';
storiesOf('Digitala Produkter|Komponenter/Kort', module)
    .add(name, () => {

        var linkCardStyle = css`
            width 32%;
            flex-grow: 0;
        `
        return <div style={{backgroundColor: colors.theme3.xLight,height: "100vh",padding:"50px", }}>
            <div style={{maxWidth:"960px", display:"flex", justifyContent:"space-between"}}>
                <div css={linkCardStyle}>
                    <IconCard 
                        url={text("Url", "https://www.hallakonsument.se")}
                        icon={<Cars />}
                        text={text("Text", "Ikonkort")} />
                </div>
                <div css={linkCardStyle}>
                    <IconCard 
                        url={text("Url", "https://www.hallakonsument.se")}
                        icon={<ConsumerRights />}
                        text={"Ansök om hjälp"} />
                </div>
                <div css={linkCardStyle}>
                    <IconCard 
                        url={text("Url", "https://www.hallakonsument.se")}
                        icon={<GymAndWorkoutService />}
                        text={"Hjälp med gymkort"} />
                </div>
            </div>
        </div>
    }


    );