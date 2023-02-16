import { useState } from 'react';
import { useMatch } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { ChevronBottomIcon, ChevronTopIcon } from '../../assets';
import { ROUTE } from '../../routes/routes';
import { useAppSelector } from '../../store/hooks';
import { getBooks } from '../../store/selectors/books-selectors';
import { getCategories } from '../../store/selectors/categories-selectors';
import { CustomAsidelink } from '../custom-aside-link/custom-aside-link';

import { Amount, CategoryBox, ChevronButton, Text, Wrapper, WrapperChevron } from './styles';

export const Menu = () => {
  const { categories } = useAppSelector(getCategories);
  const { books } = useAppSelector(getBooks);
  const [isOpen, setIsOpen] = useState(true);
  const currentPageHome = useMatch(ROUTE.HOME);
  const currentPageCategory = useMatch(ROUTE.CATEGORY);

  const handleCategories = (): void => {
    setIsOpen(!isOpen);
  };

  const closeCategories = (): void => {
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <div>
        <CustomAsidelink to={ROUTE.HOME} type='primary' onClick={handleCategories} open={isOpen}>
          <WrapperChevron data-test-id='navigation-showcase'>
            <p>Витрина книг</p>
            <ChevronButton $iscurrentPageHome={!!currentPageHome || !!currentPageCategory} type='button'>
              {isOpen ? <ChevronTopIcon /> : <ChevronBottomIcon />}
            </ChevronButton>
          </WrapperChevron>
        </CustomAsidelink>
        {categories.length > 0 && books.length > 0 && (
          <CategoryBox $open={isOpen}>
            <CustomAsidelink to={ROUTE.HOME} type='secondary'>
              <Text $open={isOpen} data-test-id='navigation-books'>
                Все книги
              </Text>
            </CustomAsidelink>
            {categories.map(({ name, path }) => (
              <CustomAsidelink to={`${ROUTE.BOOKS}/${path}`} type='tertiary' key={uuidv4()}>
                <p>
                  {name}
                  {/* <Amount>{amount}</Amount> */}
                </p>
              </CustomAsidelink>
            ))}
          </CategoryBox>
        )}
      </div>
      <CustomAsidelink to={ROUTE.OFFER} type='primary' onClick={closeCategories}>
        <p data-test-id='navigation-terms'>Правила пользования</p>
      </CustomAsidelink>
      <CustomAsidelink to={ROUTE.RULES} type='primary' onClick={closeCategories}>
        <p data-test-id='navigation-contract'> Договор оферты</p>
      </CustomAsidelink>
    </Wrapper>
  );
};
