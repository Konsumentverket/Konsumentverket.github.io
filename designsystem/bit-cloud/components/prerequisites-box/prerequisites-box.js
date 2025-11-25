/** @jsx jsx */
import { jsx } from '@emotion/core'
import { wrapperStyling, titleStyling } from './prerequisites-box.css.js'


export const PrerequisitesBox = ({
  text,
  children,
  contentfulName,
  contentfulId
}) => {
  if (children == null) {
    return null;
  }

  return (
    <div css={[wrapperStyling]} data-comp="prerequisites" data-contentful-field-id={contentfulName} data-contentful-entry-id={contentfulId}>
      {text && (
        <h2 css={titleStyling}>{text}</h2>
      )}
      {children}
    </div>
  )
}
