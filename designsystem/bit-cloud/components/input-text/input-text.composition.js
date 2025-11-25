import React from 'react';
import { InputText } from './input-text.js';

export const BasicInputText = () => {
  return (
    <InputText
      label="Lorem ipsum"
      placeholder="Lorem ipsum"
      onChange={(e) => console.log("Onchange event: ", e.target.value)}
    />
  );
}
