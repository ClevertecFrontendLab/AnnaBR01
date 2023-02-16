import React, { useState } from 'react';

import { useWindowSize } from '../../hooks/use-window-size';
import { useAppSelector } from '../../store/hooks';
import { getBooks } from '../../store/selectors/books-selectors';
import { getCategories } from '../../store/selectors/categories-selectors';
import { Breackpoint } from '../../ui/media';
import { Loader } from '../loader/loader';
import { BooksContent, Error, Navigation } from '..';

import { StyledBooklist } from './styles';

export interface IView {
  isColumn: boolean;
  isSquare: boolean;
}

export const BooksList = () => {
  const { width = 0 } = useWindowSize();

  const { isLoadingBooks, errorBooks, books } = useAppSelector(getBooks);
  const { isLoadingCategories, errorCategories, categories } = useAppSelector(getCategories);
  const [isColumn, setIsColumn] = useState(true);

  const [isSquare, setIsSquare] = useState(false);

  const handleColumnView = () => {
    setIsColumn(!isColumn);
  };

  const handleSquareView = () => {
    setIsSquare(!isSquare);
  };

  return (
    <StyledBooklist>
      {(isLoadingCategories || isLoadingBooks) &&
        (width < Breackpoint.SM ? <Loader size={22} /> : width < Breackpoint.MD ? <Loader size={44} /> : <Loader />)}

      {!isLoadingCategories && !isLoadingBooks && errorBooks && <Error>{errorBooks}</Error>}

      {!isLoadingCategories && !isLoadingBooks && errorCategories && <Error>{errorCategories}</Error>}

      {!isLoadingCategories && !isLoadingBooks && errorBooks && errorCategories && (
        <Error>{`${errorBooks}, ${errorCategories}`}</Error>
      )}

      {categories.length > 0 && books.length > 0 && !errorBooks && !errorCategories && (
        <React.Fragment>
          <Navigation
            isColumn={isColumn}
            handleColumnView={handleColumnView}
            isSquare={isSquare}
            handleSquareView={handleSquareView}
          />
          <BooksContent isColumn={isColumn} isSquare={isSquare} />{' '}
        </React.Fragment>
      )}
    </StyledBooklist>
  );
};
