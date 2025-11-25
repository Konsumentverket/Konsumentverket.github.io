import React from 'react';;

import { TagBlock } from './tag-block.js';

import {
  globalStyles as GlobalStyles, CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';

export const BasicTagBlock = () => {
  return (
    <div style={{ maxWidth: "700px" }}>
      <CompositionFonts>
        <GlobalStyles />
        <TagBlock
          heading="Lorem ipsum dolor sit amet"
          icon="SalesLaw"
          headingUrl="#"
          tags={[
            { titleInNavigation: "Cras nec ipsum egestas turpis", url: "#1" },
            { titleInNavigation: "Phasellus non velit", url: "#2" },
            { titleInNavigation: "Curabitur vitae volutpat orci", url: "#3" },
            { titleInNavigation: "Sed euismod", url: "#4" },
            { titleInNavigation: "Cras nec ipsum egestas turpis", url: "#5" },
            { titleInNavigation: "Curabitur vitae volutpat orci", url: "#6" },
            { titleInNavigation: "Phasellus non velit", url: "#7" },
          ]}
        />
      </CompositionFonts>
    </div>
  );
}

export const BasicNonHeaderLinkTagBlock = () => {
  return (
    <div style={{ maxWidth: "700px" }}>
      <CompositionFonts>
        <GlobalStyles />
        <TagBlock
          heading="Lorem ipsum dolor sit amet"
          tags={[
            { titleInNavigation: "Curabitur vitae volutpat orci", url: "#1" },
            { titleInNavigation: "Sed euismod", url: "#2" },
            { titleInNavigation: "Cras nec ipsum egestas turpis", url: "#3" },
            { titleInNavigation: "Curabitur vitae volutpat orci", url: "#4" },
            { titleInNavigation: "Phasellus non velit", url: "#5" },
          ]}
        />
      </CompositionFonts>
    </div>
  );
}


export const BasicTransparentTagBlock = () => {
  return (
    <div style={{ maxWidth: "700px" }}>
      <CompositionFonts>
        <GlobalStyles />
        <TagBlock
          heading="Lorem ipsum dolor sit amet"
          transparent={true}
          tags={[
            { titleInNavigation: "Curabitur vitae volutpat orci", url: "#1" },
            { titleInNavigation: "Sed euismod", url: "#2" },
            { titleInNavigation: "Cras nec ipsum egestas turpis", url: "#3" },
            { titleInNavigation: "Curabitur vitae volutpat orci", url: "#4" },
            { titleInNavigation: "Phasellus non velit", url: "#5" },
          ]}
        />
      </CompositionFonts>
    </div>
  );
}

export const BasicEmptyTagBlock = () => {
  return (
    <div style={{ maxWidth: "700px" }}>
      <CompositionFonts>
        <GlobalStyles />
        <TagBlock
          heading="Lorem ipsum dolor sit amet"
          alternativeTagText="Curabitur vitae volutpat orci cras nec ipsum egestas turpis"
        />
      </CompositionFonts>
    </div>
  );
}

export const BasicEmptyTagWithHeaderLinkBlock = () => {
  return (
    <div style={{ maxWidth: "700px" }}>
      <CompositionFonts>
        <GlobalStyles />
        <TagBlock
          heading="Lorem ipsum dolor sit amet"
          headingUrl="#"
          alternativeTagText="Curabitur vitae volutpat orci cras nec ipsum egestas turpis"
        />
      </CompositionFonts>
    </div>
  );
}
