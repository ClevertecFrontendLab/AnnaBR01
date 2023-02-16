import { useState } from 'react';
import { BooksContent, Navigation } from '..';

import { StyledBooklist } from './styles';

export interface IView {
  isColumn: boolean;
  isSquare: boolean;
}

export const BooksList = () => {
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
      <Navigation
        isColumn={isColumn}
        handleColumnView={handleColumnView}
        isSquare={isSquare}
        handleSquareView={handleSquareView}
      />
      <BooksContent isColumn={isColumn} isSquare={isSquare} />
    </StyledBooklist>
  );
};
