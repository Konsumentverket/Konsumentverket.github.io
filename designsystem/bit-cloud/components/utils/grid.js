/** @jsx jsx */
import React from 'react';
import {css, jsx} from '@emotion/core';
import {breakpoints} from './breakpoints';
import {spacing} from './spacing';

const maxWidthGrid = '960px'

export const containerStyles = css`
  width: 100%;
  padding-left: ${spacing.s};
  padding-right: ${spacing.s};

  @media (min-width: ${breakpoints.ml}) {
    margin-left: auto;
    margin-right: auto;
    max-width: ${maxWidthGrid};
    padding-left: 0;
    padding-right: 0;
  }
`;

export const gridStyles = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${spacing.xs};
  margin-left: auto;
  margin-right: auto;
  padding-left: ${spacing.xs};
  padding-right: ${spacing.xs};

  @media (min-width: ${breakpoints.m}) {
    grid-template-columns: repeat(8, 1fr);
    gap: ${spacing.s};
    padding-left: ${spacing.l};
    padding-right: ${spacing.l};
  }

  @media (min-width: ${breakpoints.l}) {
    grid-template-columns: repeat(12, 1fr);
    gap: ${spacing.l};
    max-width: ${maxWidthGrid};
    padding-left: 0;
    padding-right: 0;
  }
`;
