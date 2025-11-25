import React from 'react';

;

import {SubHeading} from './sub-heading.js';
import {CompositionFonts, globalStyles as GlobalStyles} from "@konsumentverket-sverige/designsystem.utils";

export const BasicSubHeading = () => {
  return (
    <div style={{width: '500px', padding: '0 24px'}}>
      <CompositionFonts>
        <GlobalStyles/>
        <SubHeading level={1} text="h1 Default" richText={false}/>
        <SubHeading level={1} text="h1 with styleLevel 4" styleLevel={4} richText={false}/>
        <SubHeading level={2} text="h2 Default" richText={false}/>
        <SubHeading level={3} text="h3 Default" richText={false}/>
        <SubHeading level={4} text="h4 Default" richText={false}/>
        <SubHeading level={5} text="h5 Default" richText={false}/>
        <SubHeading level={6} text="h6 Default" richText={false}/>
        <SubHeading level={1} text="h1 with line" headingLine richText={false}/>
        <SubHeading level={2} text="h2 with line" headingLine richText={false}/>
        <SubHeading level={3} text="h3 with line" headingLine richText={false}/>
        <SubHeading level={4} text="h4 with line" headingLine richText={false}/>
        <SubHeading level={5} text="h5 with line" headingLine richText={false}/>
        <SubHeading level={6} text="h6 with line" headingLine richText={false}/>
        <SubHeading level={2} text="h2 Richtext" richText={true}/>
        <SubHeading level={2} text="h2 Richtext with stylelevel 5" richText={true} styleLevel={5}/>
        <SubHeading level={3} text="h3 Richtext" richText={true}/>
        <SubHeading level={4} text="h4 Richtext" richText={true}/>
        <SubHeading level={5} text="h5 Richtext" richText={true}/>
        <SubHeading level={6} text="h6 Richtext" richText={true}/>
      </CompositionFonts>
    </div>
  );
}

export const SubHeadingWithCustomColor = () => {
  return (
    <div style={{width: '500px', padding: '0 24px'}}>
      <CompositionFonts>
        <GlobalStyles/>
        <SubHeading level={2} text="h2 color kovBlack" richText={true} color={'kovBlack'} />
        <SubHeading level={2} text="h2 stylelevel 5 color kovBlack" richText={true} styleLevel={5} color={'kovBlack'} />
        <SubHeading level={3} text="h3 color kovBlue" richText={true} color={'kovBlue'} />
      </CompositionFonts>
    </div>
  );
}
