import React from 'react';

import { FormSearchField } from './form-search-field.js';

export const BasicFormSearchField = () => {
  return (
    <FormSearchField
      fieldtext="Lorem ipsum"
      labeltext="Lorem ipsum"
      buttontext="Lorem"
    />
  );
};

export const AdvancedFormSearchField = () => {
  const [query, setQuery] = React.useState('');
  return (
    <FormSearchField
      id="forum-search-field"
      fieldtext="Sök bland tidigare inlägg"
      buttontext={'Sök'}
      value={query || ''}
      onChange={(e) => setQuery(e.target.value)}
      onClear={() => {
        setQuery('');
      }}
    />
  );
};
