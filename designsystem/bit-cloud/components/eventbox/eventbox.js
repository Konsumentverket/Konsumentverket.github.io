/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
//const moment = require("moment");

import {
  eventBoxWrapper,
  eventBoxInfo,
  eventBoxInfoContainer,
  eventBoxDisclaimer,
  eventBoxOverdue,
  eventBoxApply,
} from './eventbox.css.js';

import { SystemIcon } from '@konsumentverket-sverige/designsystem.icons-system';
import { Button } from '@konsumentverket-sverige/designsystem.button';

export const EventBox = ({
  date,
  time,
  latestApplicationDate,
  oldEvent,
  lastApplyDatePassed,
  subject,
  lecturers,
  text,
  url,
  listOption,
  contentfulName,
  contentfulId,
}) => {
  return (
    <div data-comp="event-box" css={eventBoxWrapper}>
      <div css={eventBoxInfoContainer}>
        {date && (
          <p
            css={eventBoxInfo}
            data-contentful-field-id="date"
            data-contentful-entry-id={contentfulId}
          >
            <span>Datum:</span> {date}
          </p>
        )}
        {time && !oldEvent && (
          <p
            css={eventBoxInfo}
            data-contentful-field-id="date"
            data-contentful-entry-id={contentfulId}
          >
            <span>Tid:</span> {time}
          </p>
        )}
        {subject && (
          <p
            css={eventBoxInfo}
            data-contentful-field-id="subject"
            data-contentful-entry-id={contentfulId}
          >
            <span>Ämne:</span> {subject.join(', ')}
          </p>
        )}

        {listOption && lecturers?.length > 0 && (
          <div
            css={eventBoxInfo}
            data-contentful-field-id="lecturers"
            data-contentful-entry-id={contentfulId}
          >
            <span>Föreläsare:</span>
            <ul>
              {lecturers.map((lecturer, index) => (
                <li key={index}>{lecturer}</li>
              ))}
            </ul>
          </div>
        )}
        {!listOption && lecturers?.length > 0 && (
          <p
            css={eventBoxInfo}
            data-contentful-field-id="lecturers"
            data-contentful-entry-id={contentfulId}
          >
            <span>Föreläsare:</span> {lecturers.join(', ')}
          </p>
        )}
        {text && (
          <p
            css={eventBoxInfo}
            data-contentful-field-id="text"
            data-contentful-entry-id={contentfulId}
          >
            <span>Övrigt:</span> {text}
          </p>
        )}
      </div>

      {!lastApplyDatePassed ? (
        <div
          css={eventBoxApply}
          data-contentful-field-id="link"
          data-contentful-entry-id={contentfulId}
        >
          {url && (
            <Button
              href={url}
              iconRight={<SystemIcon icon="External" />}
              text="Anmäl dig till webbinarium"
            />
          )}
          {latestApplicationDate && (
            <p
              css={eventBoxDisclaimer}
              data-contentful-field-id="latestApplicationDate"
              data-contentful-entry-id={contentfulId}
            >
              Sista dag för anmälan är den {latestApplicationDate}
            </p>
          )}
        </div>
      ) : (
        <>
          {!oldEvent && (
            <p css={eventBoxOverdue}>
              <SystemIcon icon="WarningCircle" /> Sista dag för anmälan har
              passerat
            </p>
          )}
        </>
      )}
    </div>
  );
};
