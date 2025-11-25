import React from 'react';

import {Heading} from './heading.js';
import {CompositionFonts, globalStyles as GlobalStyles} from "@konsumentverket-sverige/designsystem.utils";

export const BasicHeadings = () => {
  return (
    <>
      <div style={{width: '500px', padding: '0 24px'}}>
        <CompositionFonts>
          <GlobalStyles/>
          <Heading level={1} text="h1 Default" richText={false} />
          <Heading level={1} text="h1 with addsearch and nosnippet" richText={false} addSearch={"exclude"} noSnippet={"true"} />
          <Heading level={1} text="h1 with styleLevel 4" styleLevel={4} richText={false} />
          <Heading level={2} text="h2 Default" richText={false} />
          <Heading level={3} text="h3 Default" richText={false} />
          <Heading level={4} text="h4 Default" richText={false} />
          <Heading level={5} text="h5 Default" richText={false} />
          <Heading level={6} text="h6 Default" richText={false} />
          <Heading level={1} text="h1 with line" headingLine richText={false} />
          <Heading level={2} text="h2 with line" headingLine richText={false} />
          <Heading level={3} text="h3 with line" headingLine richText={false} />
          <Heading level={4} text="h4 with line" headingLine richText={false} />
          <Heading level={5} text="h5 with line" headingLine richText={false} />
          <Heading level={6} text="h6 with line" headingLine richText={false} />
          <Heading level={2} text="h2 Richtext" richText={true} />
          <Heading level={3} text="h3 Richtext" richText={true} />
          <Heading level={4} text="h4 Richtext" richText={true} />
        </CompositionFonts>
      </div>
    </>
  );
}
