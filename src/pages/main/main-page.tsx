import { useEffect } from 'react';

import { BooksList } from '../../components';
import { fetchBooks } from '../../store/features/books-slice';
import { useAppDispatch } from '../../store/hooks';

export const MainPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return <BooksList />;
};
