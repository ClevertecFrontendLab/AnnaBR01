import { useLocation } from 'react-router-dom';

import { useAppSelector } from '../../store/hooks';
import { getBookDetails } from '../../store/selectors/book-details-selector';

import { BreadcrumbsContent, StyledBreadcrumbs, Text } from './styles';

export const Breadcrumbs = () => {
  const { errorBookDetails } = useAppSelector(getBookDetails);
  const { state } = useLocation();

  return (
    <StyledBreadcrumbs>
      <BreadcrumbsContent>
        {!errorBookDetails && state && state.nameCategory && (
          <Text>
            {state.nameCategory.value} / {state.nameBook}
          </Text>
        )}

        {errorBookDetails && state && state.nameCategory && <Text>{state.nameCategory.value} /</Text>}

        {!errorBookDetails && state && state.nameCategory === null && <Text>Все книги / {state.nameBook}</Text>}

        {errorBookDetails && state && state.nameCategory === null && <Text>Все книги / </Text>}

        {state === null && <Text>Все книги / </Text>}
      </BreadcrumbsContent>
    </StyledBreadcrumbs>
  );
};
