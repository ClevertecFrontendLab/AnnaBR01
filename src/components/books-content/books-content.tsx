import React from 'react';
import { Link } from 'react-router-dom';

import { useViewContext } from '../../context/button-view-context/button-view-context';
import { useWindowSize } from '../../hooks/use-window-size';
import { ROUTE } from '../../routes/routes';
import { useAppSelector } from '../../store/hooks';
import { getBooks } from '../../store/selectors/books-selectors';
import { getCategories } from '../../store/selectors/categories-selectors';
import { Breackpoint } from '../../ui/media';
import { Loader } from '../loader/loader';
import { Error, HorizontalBookCard, VerticalBookCard } from '..';

import { StyledHorizontalBooksContent, StyledVerticalBooksContent } from './styles';

export const BooksContent = () => {
  const { width = 0 } = useWindowSize();
  const { view } = useViewContext();
  const { isLoadingBooks, errorBooks, books } = useAppSelector(getBooks);
  const { isLoadingCategories, errorCategories, categories } = useAppSelector(getCategories);
  const { isSquare } = view;
  const { isColumn } = view;

  return (
    <React.Fragment>
      {(isLoadingCategories || isLoadingBooks) &&
        (width < Breackpoint.SM ? <Loader size={22} /> : width < Breackpoint.MD ? <Loader size={44} /> : <Loader />)}

      {errorBooks && <Error>{errorBooks}</Error>}

      {errorBooks && errorCategories && <Error>{`${errorBooks}, ${errorCategories}`}</Error>}

      {categories.length > 0 && books.length > 0 && (
        <React.Fragment>
          {isColumn && (
            <StyledHorizontalBooksContent>
              {books.map((book) => (
                <Link to={`/${ROUTE.DETAILS}${book.id}`} key={book.id}>
                  <HorizontalBookCard book={book} />
                </Link>
              ))}
            </StyledHorizontalBooksContent>
          )}
          {isSquare && (
            <StyledVerticalBooksContent>
              {books.map((book) => (
                <Link to={`/${ROUTE.DETAILS}${book.id}`} key={book.id}>
                  <VerticalBookCard book={book} />
                </Link>
              ))}
            </StyledVerticalBooksContent>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
