import React from 'react';
import { Link } from 'react-router-dom';

import books from '../../books.json';
import { useViewContext } from '../../context/button-view-context/button-view-context';
import { ROUTE } from '../../routes/routes';
import { HorizontalBookCard, VerticalBookCard } from '..';

import { StyledHorizontalBooksContent, StyledVerticalBooksContent } from './styles';

export const BooksContent = () => {
  const { view } = useViewContext();
  const businessbooks = books.business;

  const { isSquare } = view;
  const { isColumn } = view;

  return (
    <React.Fragment>
      {isColumn && (
        <StyledHorizontalBooksContent>
          {businessbooks.map((book) => (
            <Link to={`/${ROUTE.DETAILS}${book.id}`} key={book.id}>
              <HorizontalBookCard book={book} />
            </Link>
          ))}
        </StyledHorizontalBooksContent>
      )}

      {isSquare && (
        <StyledVerticalBooksContent>
          {businessbooks.map((book) => (
            <Link to={`/${ROUTE.DETAILS}${book.id}`} key={book.id}>
              <VerticalBookCard book={book} />
            </Link>
          ))}
        </StyledVerticalBooksContent>
      )}
    </React.Fragment>
  );
};
