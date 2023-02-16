import { v4 as uuidv4 } from 'uuid';

import { useAppSelector } from '../../store/hooks';
import { getBookDetails } from '../../store/selectors/book-details-selector';

import { BreadcrumbsContent, StyledBreadcrumbs, Text } from './styles';

export const Breadcrumbs = () => {
  const { book } = useAppSelector(getBookDetails);
  const { categories, title } = book;

  return (
    <StyledBreadcrumbs>
      <BreadcrumbsContent>
        {categories !== null &&
          (categories.length > 1 ? (
            <Text>
              {categories.map((categoryName) => (
                <span key={uuidv4()}>{categoryName}, </span>
              ))}
              / {book.title}
            </Text>
          ) : (
            <Text>
              {categories.map((categoryName) => (
                <span key={uuidv4()}>{categoryName} / </span>
              ))}
              {title}
            </Text>
          ))}
      </BreadcrumbsContent>
    </StyledBreadcrumbs>
  );
};
