/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { sourceStyle, secondRow, rightAlign, sourceLink } from "./Source.css";
import isExternal from "./isExternalUrl";
import External from "../Icons/SystemIcons/External/External";

export const Source = ({
  baseUrl,
  sourcesCollection,
  markdownText,
  reviewedDate,
  reviewedDateText,
  style,
  english,
  bottomContent,
  sourceText
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
    <div css={[sourceStyle, style]}>
      <div id="mtmFeedBackForm" className="feedbackForm"></div>
      <div css={secondRow}>
        {sourcesCollection && sourcesCollection.items.length > 0 && (
          <p>
            {sourceText ? `${sourceText} ` : "Källa: "}
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
                    <External title="Extern länk" className="external" />
                  )}
                </a>
              );
            })}
          </p>
        )}
        {markdownText}
        {reviewed && (
          <div css={rightAlign}>
            <p>{`${
              reviewedDateText || english == true ? "Proofread: " : "Granskad: "
            }${reviewed.getDate()} ${
              english
                ? monthsEn[reviewed.getMonth()]
                : monthsSv[reviewed.getMonth()]
            } ${reviewed.getFullYear()}`}</p>
          </div>
        )}
      </div>
      {bottomContent && <div>{bottomContent}</div>}
    </div>
  );
};
