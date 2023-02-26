import { IBook } from '../types/types';

export const getCountCategories = (books: IBook[]) => {
  let arrayBookCategories: string[] = [];

  books.forEach((book) => {
    if (book.categories !== null) {
      arrayBookCategories = [...arrayBookCategories, ...book.categories];
    }
  });

  const countCategories: { [key: string]: number } = {};

  arrayBookCategories.forEach((elem) => {
    const result = arrayBookCategories.reduce((sum, current) => (elem === current ? sum + 1 : sum + 0), 0);

    countCategories[elem] = result;
  });

  return countCategories;
};
