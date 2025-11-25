/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import {
  sourceWrapperStyle,
  topWrapperStyle,
  rightAlign,
  sourceLink,
  sourceTitle,
  sourceItemsContainer,
  reviewText,
  bottomTextStyle,
  bottomBorderStyle,
} from "./sourcs.css.js";
import isExternal from "./isExternalUrl";
import { External } from '@konsumentverket-sverige/designsystem.utils';

export const Source = ({
  baseUrl,
  sourcesCollection,
  reviewedDate,
  reviewedDateText,
  english,
  bottomContent,
  sourceText,
  bottomBorder = true,
}) => {
  const reviewed = reviewedDate ? new Date(reviewedDate) : null;

  const monthsSv = [
    "januari",
    "februari",
    "mars",
    "april",
    "maj",
    "juni",
    "juli",
    "augusti",
    "september",
    "oktober",
    "november",
    "december"
  ];

  const monthsEn = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  return (
    <div
      data-comp="source"
      css={[sourceWrapperStyle, bottomBorder && bottomBorderStyle]}
    >
      <div id="mtmFeedBackForm" className="feedbackForm"></div>
      <div css={topWrapperStyle}>
        {sourcesCollection && sourcesCollection.items.length > 0 && (
          <p css={sourceItemsContainer}>
            <span css={sourceTitle}>
              {sourceText ? `${sourceText} ` : "Källa: "}
            </span>
            {sourcesCollection.items.map((item, idx) => {
              return (
                <a
                  href={item.linkUrl}
                  key={"link-" + idx}
                  css={sourceLink}
                  className={
                    isExternal(baseUrl, item.linkUrl) ? "external" : null
                  }
                >
                  {item.linkText}
                  {isExternal(baseUrl, item.linkUrl) && (
                    <External title="Extern länk" className="external"/>
                  )}
                </a>
              );
            })}
          </p>
        )}
        {reviewed && (
          <div css={rightAlign}>
            <p css={reviewText}>{
                `
                  ${reviewedDateText || english == true ? "Proofread: " : "Granskad: "}
                  ${reviewed.getDate()}
                  ${english
                    ? monthsEn[reviewed.getMonth()]
                    : monthsSv[reviewed.getMonth()]
                  } ${reviewed.getFullYear()}
                `
              }
            </p>
          </div>
        )}
      </div>
      {bottomContent && <p css={bottomTextStyle}>{bottomContent}</p>}
    </div>
  );
};
