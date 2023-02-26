/* eslint-disable @typescript-eslint/no-unused-expressions */

import { IBook, Rating } from '../types/types';

export const filterRating = (books: IBook[] | [], ratingType: Rating) => {
  const newbooks = books.slice();

  const changeNull = (rating: number | null) => {
    if (rating === null) {
      return -1;
    }

    return rating;
  };

  ratingType === 'down' && newbooks.sort((a, b) => changeNull(b.rating) - changeNull(a.rating));
  ratingType === 'up' && newbooks.sort((a, b) => changeNull(a.rating) - changeNull(b.rating));

  return newbooks;
};
