import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { BookDescription, BookDetails, Breadcrumbs, Error } from '../../components';
import { Loader } from '../../components/loader/loader';
import { useWindowSize } from '../../hooks/use-window-size';
import { fetchBookDetails } from '../../store/features/book-details-slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getBookDetails } from '../../store/selectors/book-details-selector';
import { Breackpoint } from '../../ui/media';

export const BookPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { isLoadingBookDetails, errorBookDetails, book } = useAppSelector(getBookDetails);
  const { width = 0 } = useWindowSize();

  useEffect(() => {
    if (id) {
      dispatch(fetchBookDetails(id));
    }
  }, [dispatch, id]);

  return (
    <React.Fragment>
      <Breadcrumbs />
      {isLoadingBookDetails &&
        (width < Breackpoint.SM ? <Loader size={22} /> : width < Breackpoint.MD ? <Loader size={44} /> : <Loader />)}

      {!isLoadingBookDetails && errorBookDetails && <Error>{errorBookDetails}</Error>}

      {book && !errorBookDetails && (
        <React.Fragment>
          <BookDetails />
          <BookDescription />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
