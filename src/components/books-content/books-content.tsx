import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { ROUTE } from '../../routes/routes';
import { useAppSelector } from '../../store/hooks';
import { getBooks } from '../../store/selectors/books-selectors';
import { HorizontalBookCard, VerticalBookCard } from '..';

import { StyledHorizontalBooksContent, StyledVerticalBooksContent, NoBooks } from './styles';

interface IProps {
  isColumn: boolean;
  isSquare: boolean;
}

export const BooksContent = ({ isColumn, isSquare }: IProps) => {
  const { displayedBooks } = useAppSelector(getBooks);
  const { state } = useLocation();

  const pathStateUrl = state && state.value && state.value.pathValue !== null ? state.value.pathValue : 'all';
  const nameStateCategory =
    state && state.value && state.value.nameValue !== null ? state.value.nameValue : 'Все книги';

  return displayedBooks.length > 0 ? (
    <React.Fragment>
      {isColumn && (
        <StyledHorizontalBooksContent>
          {displayedBooks.map((book) => (
            <Link
              to={`${ROUTE.BOOKS}/${pathStateUrl}/${book.id}`}
              key={book.id}
              state={{ nameCategory: nameStateCategory, nameBook: book.title, pathCategory: pathStateUrl }}
            >
              <HorizontalBookCard book={book} />
            </Link>
          ))}
        </StyledHorizontalBooksContent>
      )}
      {isSquare && (
        <StyledVerticalBooksContent>
          {displayedBooks.map((book) => (
            <Link
              to={`${ROUTE.BOOKS}/${pathStateUrl}/${book.id}`}
              key={book.id}
              state={{ nameCategory: nameStateCategory, nameBook: book.title, pathCategory: pathStateUrl }}
            >
              <VerticalBookCard book={book} />
            </Link>
          ))}
        </StyledVerticalBooksContent>
      )}
    </React.Fragment>
  ) : (
    <NoBooks data-test-id='empty-category'>В этой категории книг ещё нет</NoBooks>
  );
};
