/** @jsx jsx */
import React from 'react';
import {css, jsx} from '@emotion/core'
import {newColors} from './colors.js';
import {GlobalStyles, CompositionFonts} from "./globalstyles";
import {gridStyles, containerStyles} from "./grid";
import {breakpoints} from "./breakpoints";

import {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  h1Line,
  h2Line,
  h3Line,
  subHeading,
  subHeadingLine,
  h1Alt2,
  h1MediumAlt,
  h1Alt3,
  h1SmallAlt,
  h2Alt2,
  h2MediumAlt,
  h2Alt3,
  h2SmallAlt,
  subHeadingAltBig,
  subHeadingLarge,
  subHeadingAltMedium,
  subHeadingMedium,
  subHeadingAltSmall,
  subHeadingSmall,
  subHeadingAltMini,
  subHeadingXS,
  richTextHeadingBig,
  richTextHeadingMedium,
  richTextHeadingSmall,
  preamble,
  paragraph,
  paragraphStrong,
  textSmall,
  textSmallAlt,
  textMini,
  textMiniAlt,
  blockquoteText,
  ulStyling,
  olStyling,
  linkMini,
  linkSmall,
  linkTextSmall,
  link,
  linkParagraph,
  linkParagraphStrong,
  linkBodyMedium,
  linkLarge,
  linkHover,
  linkFocus,
  clickHover,
  clickFocus,
  navClick,
  clickMini,
  clickMiniUL,
  clickSmall,
  clickSmallUL,
  clickSmallAlt,
  clickMedium,
  clickMediumUL,
  clickMediumAlt,
  clickMediumAltUL,
  clickLarge,
  clickLargeUL,
} from "./typography"

const sectionTitle = {
  background: newColors.kovBlue,
  color: newColors.kovWhite,
  fontSize: '36px',
  padding: '20px',
  margin: '26px 0',
  lineHeight: '140%',
}

export const typography = () => {
  const spacing = {marginBottom: '20px'};

  const text = 'Varje år får vi in tusentals anmälningar från konsumenter som tycker att företag har fel i sin marknadsföring eller i sina avtalsvillkor.';

  return (
    <div style={{width: '500px', padding: '0 24px'}}>
      <CompositionFonts>
        <GlobalStyles/>
        <div style={sectionTitle}>Headings</div>
        <h1 css={h1} style={spacing}>H1 style</h1>
        <h2 css={h2} style={spacing}>H2 style</h2>
        <h3 css={h3} style={spacing}>H3 style</h3>
        <h4 css={h4} style={spacing}>H4 style</h4>
        <h5 css={h5} style={spacing}>H5 style</h5>
        <h6 css={h6} style={spacing}>H6 style</h6>
        <h4 css={subHeading} style={spacing}>SubHeading style (H4, H5, H6)</h4>
        <h1 css={h1Line} style={spacing}>H1 line style</h1>
        <h2 css={h2Line} style={spacing}>H2 line style</h2>
        <h3 css={h3Line} style={spacing}>H3 line style</h3>
        <h4 css={subHeadingLine} style={spacing}>SubHeading line style (H4, H5, H6)</h4>
        <h1 css={h1Alt2} style={spacing}>H1 - Alt 2</h1>
        <h1 css={h1MediumAlt} style={spacing}>H1 - Medium Alt (same as "H1 - Alt 2")</h1>
        <h1 css={h1Alt3} style={spacing}>H1 - Alt 3</h1>
        <h1 css={h1SmallAlt} style={spacing}>H1 - Small Alt (same as "H1 - Alt 3")</h1>
        <h2 css={h2Alt2} style={spacing}>H2 - Alt 2</h2>
        <h2 css={h2MediumAlt} style={spacing}>H2 - Medium Alt (same as "H2 - Alt 2")</h2>
        <h2 css={h2Alt3} style={spacing}>H2 - Alt 3</h2>
        <h2 css={h2SmallAlt} style={spacing}>H2 - Small Alt (same as "H2 - Alt 3")</h2>
        <h4 css={subHeadingAltBig} style={spacing}>Subheading Alt Big</h4>
        <h4 css={subHeadingLarge} style={spacing}>Subheading Large (same as "Subheading Alt Big")</h4>
        <h4 css={subHeadingAltMedium} style={spacing}>Subheading Alt Medium</h4>
        <h4 css={subHeadingMedium} style={spacing}>Subheading Medium (same as "Subheading Alt Medium")</h4>
        <h4 css={subHeadingAltSmall} style={spacing}>Subheading Alt Small</h4>
        <h4 css={subHeadingSmall} style={spacing}>Subheading Alt Small (same as "Subheading Alt Small")</h4>
        <h4 css={subHeadingAltMini} style={spacing}>Subheading Alt Mini</h4>
        <h4 css={subHeadingXS} style={spacing}>Subheading XS (same as "Subheading Alt Mini")</h4>
        <div style={sectionTitle}>Richtext headings</div>
        <h2 css={richTextHeadingBig} style={spacing}>Richtext Heading Big (h2)</h2>
        <h3 css={richTextHeadingMedium} style={spacing}>Richtext Heading Medium (h3)</h3>
        <h4 css={richTextHeadingSmall} style={spacing}>Richtext Heading Small (h4-h6)</h4>
        <div style={sectionTitle}>Text</div>
        <p css={preamble} className={'noStyle'}>Preamble<br/>{text}</p>
        <p css={paragraph} className={'noStyle'}>Paragraph<br/>{text}</p>
        <p css={paragraphStrong}>ParagraphStrong<br/>Varje år får vi in tusentals anmälningar från konsumenter som
          tycker att företag har fel i sin marknadsföring eller i sina avtalsvillkor.</p>
        <p css={textSmall}>TextSmall<br/>{text}</p>
        <p css={textSmallAlt}>TextSmallAlt<br/>Varje år får vi in tusentals anmälningar från konsumenter som tycker
          att företag har fel i sin marknadsföring eller i sina avtalsvillkor.</p>
        <p css={textMini}>TextMini<br/>{text}</p>
        <p css={textMiniAlt}>TextMiniAlt<br/>{text}</p>
        <blockquote css={blockquoteText}>Blockquote text<br/>{text}</blockquote>

        <div style={sectionTitle}>Unordered list</div>
        <ul css={ulStyling}>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
        </ul>

        <div style={sectionTitle}>Ordered list</div>
        <ol css={olStyling}>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
        </ol>

        <div style={sectionTitle}>Anchor links</div>
        <div style={{display: 'grid', gap: '20px', marginBottom: '36px', gridTemplateColumns: '1fr 1fr 1fr'}}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <p>Default</p>
            <a css={linkMini} style={{marginBottom: '12px', alignSelf: 'flex-start'}} className={'noStyle'} href="#">Link
              Mini</a>
            <a css={linkSmall} style={{marginBottom: '12px', alignSelf: 'flex-start'}} className={'noStyle'} href="#">Link
              Small</a>
            <a css={linkTextSmall} style={{marginBottom: '12px', alignSelf: 'flex-start'}} className={'noStyle'} href="#">Link
              Text Small</a>
            <a css={link} style={{marginBottom: '12px', alignSelf: 'flex-start'}} className={'noStyle'}
               href="#">Link</a>
            <a css={linkParagraph} style={{marginBottom: '12px', alignSelf: 'flex-start'}} className={'noStyle'}
               href="#">Link Paragraph</a>
            <a css={linkParagraphStrong} style={{marginBottom: '12px', alignSelf: 'flex-start'}} className={'noStyle'}
               href="#">Link Paragraph Strong</a>
            <a css={linkBodyMedium} style={{marginBottom: '12px', alignSelf: 'flex-start'}} className={'noStyle'}
               href="#">Link Body Medium</a>
            <a css={linkLarge} style={{marginBottom: '12px', alignSelf: 'flex-start'}} className={'noStyle'} href="#">Link
              Large</a>
          </div>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <p>Hover/Active</p>
            <a css={[linkMini, linkHover]} style={{marginBottom: '12px', alignSelf: 'flex-start'}} className={'noStyle'}
               href="#">Link Mini</a>
            <a css={[linkSmall, linkHover]} style={{marginBottom: '12px', alignSelf: 'flex-start'}}
               className={'noStyle'} href="#">Link Small</a>
            <a css={[linkTextSmall, linkHover]} style={{marginBottom: '12px', alignSelf: 'flex-start'}}
               className={'noStyle'} href="#">Link Text Small</a>
            <a css={[link, linkHover]} style={{marginBottom: '12px', alignSelf: 'flex-start'}} className={'noStyle'}
               href="#">Link</a>
            <a css={[linkParagraph, linkHover]} style={{marginBottom: '12px', alignSelf: 'flex-start'}}
               className={'noStyle'}
               href="#">Link Paragraph</a>
            <a css={[linkParagraphStrong, linkHover]} style={{marginBottom: '12px', alignSelf: 'flex-start'}}
               className={'noStyle'}
               href="#">Link Paragraph Strong</a>
            <a css={[linkBodyMedium, linkHover]} style={{marginBottom: '12px', alignSelf: 'flex-start'}}
               className={'noStyle'}
               href="#">Link Body Medium</a>
            <a css={[linkLarge, linkHover]} style={{marginBottom: '12px', alignSelf: 'flex-start'}}
               className={'noStyle'} href="#">Link Large</a>
          </div>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <p>Focus</p>
            <a css={[linkMini, linkFocus]} style={{marginBottom: '12px', alignSelf: 'flex-start'}} className={'noStyle'}
               href="#">Link Mini</a>
            <a css={[linkSmall, linkFocus]} style={{marginBottom: '12px', alignSelf: 'flex-start'}}
               className={'noStyle'} href="#">Link Small</a>
            <a css={[linkTextSmall, linkFocus]} style={{marginBottom: '12px', alignSelf: 'flex-start'}}
               className={'noStyle'} href="#">Link Text Small</a>
            <a css={[link, linkFocus]} style={{marginBottom: '12px', alignSelf: 'flex-start'}} className={'noStyle'}
               href="#">Link</a>
            <a css={[linkParagraph, linkFocus]} style={{marginBottom: '12px', alignSelf: 'flex-start'}}
               className={'noStyle'}
               href="#">Link Paragraph</a>
            <a css={[linkParagraphStrong, linkFocus]} style={{marginBottom: '12px', alignSelf: 'flex-start'}}
               className={'noStyle'}
               href="#">Link Paragraph Strong</a>
            <a css={[linkBodyMedium, linkFocus]} style={{marginBottom: '12px', alignSelf: 'flex-start'}}
               className={'noStyle'}
               href="#">Link Body Medium</a>
            <a css={[linkLarge, linkFocus]} style={{marginBottom: '12px', alignSelf: 'flex-start'}}
               className={'noStyle'} href="#">Link Large</a>
          </div>
        </div>
        <div style={sectionTitle}>Simple buttons/"Click" links</div>
        <div style={{display: 'grid', gap: '20px', marginBottom: '24px', gridTemplateColumns: '1fr 1fr 1fr'}}>
          <div>
            <p>Default</p>
            <button style={{marginBottom: '12px', display: 'block'}} css={navClick} className={'noStyle'}>Nav Click
            </button>
            <button style={{marginBottom: '12px', display: 'block'}} css={clickMini} className={'noStyle'}>Click Mini
            </button>
            <button style={{marginBottom: '12px', display: 'block'}} css={clickMiniUL} className={'noStyle'}>Click Mini
              UL
            </button>
            <button style={{marginBottom: '12px', display: 'block'}} css={clickSmall} className={'noStyle'}>Click
              Small
            </button>
            <button style={{marginBottom: '12px', display: 'block'}} css={clickSmallUL} className={'noStyle'}>Click
              Small UL
            </button>
            <button style={{marginBottom: '12px', display: 'block'}} css={clickSmallAlt} className={'noStyle'}>Click
              Small Alt
            </button>
            <button style={{marginBottom: '12px', display: 'block'}} css={clickMedium} className={'noStyle'}>Click
              Medium
            </button>
            <button style={{marginBottom: '12px', display: 'block'}} css={clickMediumUL} className={'noStyle'}>Click
              Medium UL
            </button>
            <button style={{marginBottom: '12px', display: 'block'}} css={clickMediumAlt} className={'noStyle'}>Click
              Medium Alt
            </button>
            <button style={{marginBottom: '12px', display: 'block'}} css={clickMediumAltUL} className={'noStyle'}>Click
              Medium Alt UL
            </button>
            <button style={{marginBottom: '12px', display: 'block'}} css={clickLarge} className={'noStyle'}>Click
              Large
            </button>
            <button style={{marginBottom: '12px', display: 'block'}} css={clickLargeUL} className={'noStyle'}>Click
              Large UL
            </button>
          </div>
          <div>
            <p>Hover/Active</p>
            <button style={{marginBottom: '12px', display: 'block'}} css={[navClick, clickHover]}
                    className={'noStyle'}>Nav Click
            </button>
            <button style={{marginBottom: '12px', display: 'block'}} css={[clickMini, clickHover]}
                    className={'noStyle'}>Click Mini
            </button>
            <button style={{marginBottom: '12px', display: 'block'}} css={[clickMiniUL, clickHover]}
                    className={'noStyle'}>Click Mini UL
            </button>
            <button style={{marginBottom: '12px', display: 'block'}} css={[clickSmall, clickHover]}
                    className={'noStyle'}>Click Small
            </button>
            <button style={{marginBottom: '12px', display: 'block'}} css={[clickSmallUL, clickHover]}
                    className={'noStyle'}>Click Small UL
            </button>
            <button style={{marginBottom: '12px', display: 'block'}} css={[clickSmallAlt, clickHover]}
                    className={'noStyle'}>Click Small Alt
            </button>
            <button style={{marginBottom: '12px', display: 'block'}} css={[clickMedium, clickHover]}
                    className={'noStyle'}>Click Medium
            </button>
            <button style={{marginBottom: '12px', display: 'block'}} css={[clickMediumUL, clickHover]}
                    className={'noStyle'}>Click Medium UL
            </button>
            <button style={{marginBottom: '12px', display: 'block'}} css={[clickMediumAlt, clickHover]}
                    className={'noStyle'}>Click Medium
              Alt
            </button>
            <button style={{marginBottom: '12px', display: 'block'}} css={[clickMediumAltUL, clickHover]}
                    className={'noStyle'}>Click Medium
              Alt UL
            </button>
            <button style={{marginBottom: '12px', display: 'block'}} css={[clickLarge, clickHover]}
                    className={'noStyle'}>Click Large
            </button>
            <button style={{marginBottom: '12px', display: 'block'}} css={[clickLargeUL, clickHover]}
                    className={'noStyle'}>Click Large UL
            </button>
          </div>
          <div>
            <p>Focus</p>
            <button style={{marginBottom: '12px', display: 'block'}} css={[navClick, clickFocus]}
                    className={'noStyle'}>Nav Click
            </button>
            <button style={{marginBottom: '12px', display: 'block'}} css={[clickMini, clickFocus]}
                    className={'noStyle'}>Click Mini
            </button>
            <button style={{marginBottom: '12px', display: 'block'}} css={[clickMiniUL, clickFocus]}
                    className={'noStyle'}>Click Mini UL
            </button>
            <button style={{marginBottom: '12px', display: 'block'}} css={[clickSmall, clickFocus]}
                    className={'noStyle'}>Click Small
            </button>
            <button style={{marginBottom: '12px', display: 'block'}} css={[clickSmallUL, clickFocus]}
                    className={'noStyle'}>Click Small UL
            </button>
            <button style={{marginBottom: '12px', display: 'block'}} css={[clickSmallAlt, clickFocus]}
                    className={'noStyle'}>Click Small Alt
            </button>
            <button style={{marginBottom: '12px', display: 'block'}} css={[clickMedium, clickFocus]}
                    className={'noStyle'}>Click Medium
            </button>
            <button style={{marginBottom: '12px', display: 'block'}} css={[clickMediumUL, clickFocus]}
                    className={'noStyle'}>Click Medium UL
            </button>
            <button style={{marginBottom: '12px', display: 'block'}} css={[clickMediumAlt, clickFocus]}
                    className={'noStyle'}>Click Medium
              Alt
            </button>
            <button style={{marginBottom: '12px', display: 'block'}} css={[clickMediumAltUL, clickFocus]}
                    className={'noStyle'}>Click Medium
              Alt UL
            </button>
            <button style={{marginBottom: '12px', display: 'block'}} css={[clickLarge, clickFocus]}
                    className={'noStyle'}>Click Large
            </button>
            <button style={{marginBottom: '12px', display: 'block'}} css={[clickLargeUL, clickFocus]}
                    className={'noStyle'}>Click Large UL
            </button>
          </div>
        </div>
      </CompositionFonts>
    </div>
  )
}

export const colors = () => {
  return (
    <div style={{padding: '0 24px'}}>
      <CompositionFonts>
        <div style={sectionTitle}>Primaries</div>
        {
          Object.entries(newColors.primaries).map(
            ([name, hexColor]) => colorItem(name, hexColor)
          )
        }
        <div style={sectionTitle}>Secondaries</div>
        {
          Object.entries(newColors.secondaries).map(
            ([name, hexColor]) => colorItem(name, hexColor)
          )
        }
        <div style={sectionTitle}>Shades</div>
        {
          Object.entries(newColors.shades).map(
            ([name, hexColor]) => colorItem(name, hexColor)
          )
        }
      </CompositionFonts>
    </div>
  )
}

const colorItem = (name, hexColor) => (
  <div key={name}
       style={{
         display: 'flex',
         gap: '12px',
         marginBottom: '8px'
       }}
  >
    <div
      style={{
        background: `${hexColor}`,
        width: '50px',
        height: '50px'
      }}>
    </div>
    <p><strong>{name}</strong> - {hexColor}</p>
  </div>
)

const redBorderStyle = css`
  border: 1px solid red;
`;

const halfContainerStyle = css`
  height: 20rem;
  border: 1px solid black;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const halfGridStyle = css`
  grid-column: span 2;
  height: 20rem;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${breakpoints.m}) {
    grid-column: span 4;
  }

  @media (min-width: ${breakpoints.l}) {
    grid-column: span 6;
  }
`;

export const gridAndContainer = () => {
  return (
    <div style={{padding: '0 24px'}}>
      <CompositionFonts>
        <GlobalStyles/>
        <div style={sectionTitle}>Grid</div>
        <div style={{width: '768px'}}>
          <div css={[gridStyles, redBorderStyle]}>
            <div css={[halfGridStyle]}>
              Half of columns
            </div>
          </div>
        </div>
        <div style={sectionTitle}>Container</div>
        <div style={{width: '768px'}}>
          <div css={[containerStyles, redBorderStyle]}>
            <div css={[halfContainerStyle]}>
              50%
            </div>
          </div>
        </div>
      </CompositionFonts>
    </div>
  )
}
