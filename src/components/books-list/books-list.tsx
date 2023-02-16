import { useState } from 'react';
import { BooksContent, Navigation } from '..';

import { StyledBooklist } from './styles';

export const BooksList = () => {
  const [isMenuOpen, toggleMenu] = useState(false);

  return (
    <StyledBooklist>
      <Navigation />
      <BooksContent />
    </StyledBooklist>
  );
};
