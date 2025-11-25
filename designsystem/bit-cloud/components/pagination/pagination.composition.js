import React from 'react';;

import { Pagination } from './pagination.js';
import {
  globalStyles as GlobalStyles, CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';

export const BasicPagination = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <Pagination
        total={100}
        currentPage={6}
        pageSize={10}
        baseUrl="#?page=2"
      />
    </CompositionFonts>
  );
}
