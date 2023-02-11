import { BooksContent, Navigation } from '..';

import { StyledBooklist } from './styles';

export const BooksList = () => (
  <StyledBooklist>
    <Navigation />
    <BooksContent />
  </StyledBooklist>
);
