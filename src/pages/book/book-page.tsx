import React from 'react';

import { BookDescription, BookDetails, Breadcrumbs } from '../../components';

export const BookPage = () => (
  <React.Fragment>
    <Breadcrumbs />
    <BookDetails />
    <BookDescription />
  </React.Fragment>
);
