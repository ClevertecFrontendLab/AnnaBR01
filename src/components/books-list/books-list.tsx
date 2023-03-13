/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from 'react';

import { useWindowSize } from '../../hooks/use-window-size';
import { useAppSelector } from '../../store/hooks';
import { getBooks } from '../../store/selectors/books-selectors';
import { getCategories } from '../../store/selectors/categories-selectors';
import { Breackpoint } from '../../ui/media';
import { BooksContent, Error, Loader, Navigation } from '..';

import { StyledBooklist } from './styles';

export interface IView {
  isColumn: boolean;
  isSquare: boolean;
}

export const BooksList = () => {
  const { width = 0 } = useWindowSize();
  const { isLoadingBooks, errorBooks, books } = useAppSelector(getBooks);
  const { isLoadingCategories, errorCategories, categories } = useAppSelector(getCategories);

  const [isColumn, setIsColumn] = useState(false);

  const [isSquare, setIsSquare] = useState(true);

  const handleColumnView = () => {
    setIsColumn(!isColumn);
  };

  const handleSquareView = () => {
    setIsSquare(!isSquare);
  };

  return (
    <StyledBooklist>
      {(isLoadingCategories || isLoadingBooks) &&
        (width < Breackpoint.SM ? <Loader size={42} /> : width < Breackpoint.MD ? <Loader size={64} /> : <Loader />)}

      {!isLoadingCategories && !isLoadingBooks && (errorBooks || errorCategories) && (
        <Error>Что-то пошло не так. Обновите страницу через некоторое время.</Error>
      )}

      {categories.length > 0 && books.length > 0 && !errorBooks && !errorCategories && (
        <React.Fragment>
          <Navigation
            isColumn={isColumn}
            handleColumnView={handleColumnView}
            isSquare={isSquare}
            handleSquareView={handleSquareView}
          />
          <BooksContent isColumn={isColumn} isSquare={isSquare} />
        </React.Fragment>
      )}
    </StyledBooklist>
  );
};
