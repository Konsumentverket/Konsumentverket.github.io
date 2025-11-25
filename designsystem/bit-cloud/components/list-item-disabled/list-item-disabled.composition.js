import React from 'react';
import { ListItemDisabled } from './list-item-disabled.js';

export const BasicListItemDisabled = () => {
  return (
    <ListItemDisabled
      type="Lorem"
      reviewedDate={new Date().toISOString()}
      href="#"
      headline="Lorem ipsum"
      preamble="Lorem ipsum dolor sit amet"
      bottomText="Lorem: lorem ipsum"
    >
      <p>Lorem ipsum</p>
    </ListItemDisabled>
  );
}
