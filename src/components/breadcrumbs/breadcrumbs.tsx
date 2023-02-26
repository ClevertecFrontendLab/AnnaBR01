import { Link, useLocation } from 'react-router-dom';

import { ROUTE } from '../../routes/routes';
import { useAppSelector } from '../../store/hooks';
import { getBookDetails } from '../../store/selectors/book-details-selector';

import { BreadcrumbsContent, StyledBreadcrumbs, Text, Wrapper } from './styles';

export const Breadcrumbs = () => {
  const { errorBookDetails } = useAppSelector(getBookDetails);
  const { state } = useLocation();

  return (
    <StyledBreadcrumbs>
      <BreadcrumbsContent>
        {!errorBookDetails && (
          <Wrapper>
            <Link to={`${ROUTE.BOOKS}/${state.pathCategory}`}>
              <Text data-test-id='breadcrumbs-link'>{state.nameCategory}</Text>
            </Link>
            / <Text data-test-id='book-name'>{state.nameBook}</Text>
          </Wrapper>
        )}

        {errorBookDetails && (
          <Wrapper>
            <Link to={`${ROUTE.BOOKS}/${state.pathCategory}`}>
              <Text data-test-id='breadcrumbs-link'>{state.nameCategory}</Text>
            </Link>
            /
          </Wrapper>
        )}

        {!state && (
          <Wrapper>
            <Link to={`${ROUTE.BOOKS}/all`}>
              <Text data-test-id='breadcrumbs-link'>Все книги</Text>
            </Link>
            /
          </Wrapper>
        )}
      </BreadcrumbsContent>
    </StyledBreadcrumbs>
  );
};
