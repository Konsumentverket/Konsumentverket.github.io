/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { storiesOf } from "@storybook/react";
import { text, color, boolean } from "@storybook/addon-knobs";
import { Source } from "./Source";
import NotesLoader from "../NotesLoader";

let name = "Källa";

const sourceCollection = {
  items: [
    {
      linkUrl: "/",
      linkText: "Konsumentverket",
      occupationId: "fda16320-2da2-e411-9405-000d3a200e7c"
    }
  ]
};
const date = new Date();
const sourceText = "Källa";

storiesOf("Digitala Produkter|Komponenter/Källa", module).add(
  name,
  () => {
    return (
      <div
        css={css`
          max-width: 960px;
          margin-left: 2%;
          p {
            font-size: 1.8rem;
          }
        `}
      >
        <Source
          baseUrl={text("Base Url", "Gå till konsumentverket.se")}
          sourceText={text("Källa Rubrik", "Källa")}
          sourcesCollection={sourceCollection}
          markdownText={text("MarkdownText", "")}
          reviewedDate={text("Granskningsdatum", date)}
          style=""
          english={boolean("Engelska", false)}
          bottomContent={text("Extra content", "Granskad")}
        />
        <br />
      </div>
    );
  },

  { notes: NotesLoader(name) }
);
