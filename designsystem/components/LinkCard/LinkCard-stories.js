/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, color } from '@storybook/addon-knobs';
import NotesLoader from '../NotesLoader';
import { LinkCard } from './LinkCard';
import { LinkTextCard } from '../LinkTextCard/LinkTextCard';
import { colors } from '../Colors/Colors';
import { css } from '@emotion/core';
import { linkCardFrame } from './LinkCard.css';

let name = 'Länkkort';


storiesOf('Digitala Produkter|Komponenter/Kort', module)
    .add(name, () =>  {

        var linkCardStyle = css`
            width: 32%;
            flex-grow: 0;
        `
        var linkContentStyle = css`
            font-size: 16px;
            font-weight: bold;
            margin-bottom: .8rem;
            padding-left: 1.6rem;
            line-height: 2.4rem;
            .tabnav &:focus{
                outline: none;
                span{
                    outline: 4px solid ${colors.states.focus};
                    outline-offset: 6px;
                }
            }
        `

        return <div style={{backgroundColor: colors.theme3.xLight,height: "100vh",padding:"50px", }}>
            <div style={{maxWidth:"960px", display:"flex", justifyContent:"space-between"}}>
                <div css={linkCardStyle}>
                    <LinkCard id="one" href="http://www.google.se" text="Inför att köpa eller leasa en bil">
                        <p css={css`font-size: 16px; line-height: 2.4rem; margin-left: 1.6rem;`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </p>
                    </LinkCard>
                </div>
                <div css={linkCardStyle}>
                    <LinkCard id="two" href="http://www.google.com" text="Problem och vanliga frågor om bil" >
                        <a css={linkContentStyle} href={`/long`}><span>Föremål i listan som är väldigt långt och radbryts:</span></a>
                        {[1,2,3,4,5].map(n =>
                            <a css={linkContentStyle} key={n} href={`/${n}`}><span>Föremål i listan: {n}</span></a>
                        )}

                    </LinkCard>
                </div>
                <div css={linkCardStyle}>
                    <LinkCard id="three" href="http://www.google.com" text="Problem och vanliga frågor om bil" >
                        <a css={linkContentStyle} href={`/langt`}><span>Föremål i listan som är väldigt långt och radbryts:</span></a>
                        {[1,2,3].map(n =>
                            <a key={n} css={linkContentStyle} href={`/${n}`}><span>Föremål i listan: {n}</span></a>
                        )}
                    </LinkCard>
                </div>
            </div>
            <div style={{maxWidth:"960px", marginTop: "20px"}}>
                <LinkCard text="Helbreddskort" href="#" />
                <br />
                <LinkCard text="Helbreddskort med text" href="#">
                    <p cs4s={css`font-size: 16px; line-height: 2.4rem; max-width: 80%; margin-left: 1.6rem;`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </p>
                </LinkCard>
                <br />
                <LinkCard style={linkCardFrame} text="Helbreddskort med text sekudär pil" secondaryArrowStyle={true} href="#">
                    <p css={css`font-size: 16px; line-height: 2.4rem; max-width: 80%; margin-left: 1.6rem;`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </p>
                </LinkCard>
                <br />
                <LinkCard style={linkCardFrame} text="Helbreddskort med text och ram" href="#">
                    <p css={css`font-size: 16px; line-height: 2.4rem; max-width: 80%; margin-left: 1.6rem;`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </p>
                </LinkCard>
                <br />
                <LinkTextCard style={linkCardFrame} text="Länktexts kort med ram" href="#">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </LinkTextCard>
                <br />
                <LinkTextCard style={linkCardFrame} text="Länktexts kort med ram och utan text" href="#" />

                <br />
                <LinkTextCard style={linkCardFrame} dir="rtl" text="Hallå konsument ستهلكين. يمكنك ستهلكين" href="#">
                يجيبك المستشارون على أسئلتك و يساعدونك في الاتصال باختصاصيين في سلطات أخرى، بمكاتب المستهلكين أو خدمات المستهلكين في البلديات. يمكنك الاتصال بنا عبر الهاتف، الشات، الفيس بوك أو البريد الالكتروني إذا لم تجد المعلومات التي تحتاج إليها على موقع hallakonsument.se.
                </LinkTextCard>

            </div>
        </div>
    }

    , { notes: NotesLoader(name) }
    );