/** @jsx jsx */
import { jsx } from '@emotion/react';
import { typography } from '@konsumentverket-sverige/designsystem.utils';
import {
  kovBlackStyle,
  kovBlueStyle,
  visuallyHiddenStyle,
} from './sub-heading.css';

export const SubHeading = ({
  children = null,
  text = '',
  level = 2,
  styleLevel = null,
  headingLine = false,
  richText = true,
  contentfulId = null,
  contentfulName = '',
  color = '',
  visuallyHidden = false,
  addSearch = null,
  noSnippet = null,
}) => {
  const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

  const acceptedColors = {
    kovBlack: kovBlackStyle,
    kovBlue: kovBlueStyle,
  };

  let customColor = null;

  if (acceptedColors.hasOwnProperty(color)) {
    customColor = acceptedColors[color];
  }

  const richTextHeadingStyling = [
    typography.richTextH2,
    typography.richTextH2,
    typography.richTextH3,
    typography.richTextH4,
    typography.richTextH5,
    typography.richTextH6,
  ];

  const regularHeadingStyling = [
    typography.h1,
    typography.h2,
    typography.h3,
    typography.subHeading,
    typography.subHeading,
    typography.subHeading,
  ];

  const styling = richText ? richTextHeadingStyling : regularHeadingStyling;

  const SelectedHeading = headings[level - 1] || 'h2';
  const selectedStyling = styling[styleLevel ? styleLevel - 1 : level - 1];

  return (
    <SelectedHeading
      css={[
        selectedStyling,
        headingLine ? typography.headingLine : null,
        customColor ? customColor : null,
        visuallyHidden ? visuallyHiddenStyle : null,
      ]}
      data-contentful-field-id={contentfulName}
      data-contentful-entry-id={contentfulId}
      data-addsearch={addSearch}
      data-nosnippet={noSnippet}
    >
      {children}
      {text}
    </SelectedHeading>
  );
};
