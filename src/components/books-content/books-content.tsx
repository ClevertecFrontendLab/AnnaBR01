import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { ROUTE } from '../../routes/routes';
import { useAppSelector } from '../../store/hooks';
import { getBooks } from '../../store/selectors/books-selectors';
import { HorizontalBookCard, VerticalBookCard } from '..';

import { StyledHorizontalBooksContent, StyledVerticalBooksContent } from './styles';

interface IProps {
  isColumn: boolean;
  isSquare: boolean;
}

export const BooksContent = ({ isColumn, isSquare }: IProps) => {
  const { books } = useAppSelector(getBooks);
  const { state } = useLocation();

  return (
    <React.Fragment>
      {isColumn && (
        <StyledHorizontalBooksContent>
          {books.map((book) => (
            <Link
              to={`/${ROUTE.DETAILS}${book.id}`}
              key={book.id}
              state={{ nameCategory: state, nameBook: book.title }}
            >
              <HorizontalBookCard book={book} />
            </Link>
          ))}
        </StyledHorizontalBooksContent>
      )}
      {isSquare && (
        <StyledVerticalBooksContent>
          {books.map((book) => (
            <Link
              to={`/${ROUTE.DETAILS}${book.id}`}
              key={book.id}
              state={{ nameCategory: state, nameBook: book.title }}
            >
              <VerticalBookCard book={book} />
            </Link>
          ))}
        </StyledVerticalBooksContent>
      )}
    </React.Fragment>
  );
};
