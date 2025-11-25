import React from 'react';;

import { FocusPuff } from './focus-puff.js';

export const BasicFocusPuff = () => {
  return (
    <FocusPuff
      headline="Lorem ipsum"
      text="Lorem ipsum dolor sit amet"
      isExternalLink={true}
      url="#"
      // image="https://picsum.photos/600/400"
    />
  );
}
