import { useEffect, useState } from 'react';
import { useMatch, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { ChevronBottomIcon, ChevronTopIcon } from '../../assets';
import { ROUTE } from '../../routes/routes';
import {
  changeBooksBySearch,
  changeDisplayedBooks,
  changeDisplayedBooksByCategory,
} from '../../store/features/books-slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getBooks } from '../../store/selectors/books-selectors';
import { getCategories } from '../../store/selectors/categories-selectors';
import { CustomAsidelink } from '../custom-aside-link/custom-aside-link';

import { Amount, CategoryBox, ChevronButton, Text, Wrapper, WrapperChevron } from './styles';

export const Menu = () => {
  const dispatch = useAppDispatch();
  const currentPath = useParams();
  const { categories } = useAppSelector(getCategories);
  const { books, countCategories, searchValue } = useAppSelector(getBooks);
  const [isOpen, setIsOpen] = useState(true);
  const currentPageHome = useMatch(ROUTE.HOME);
  const currentPageCategory = useMatch(ROUTE.CATEGORY);

  const handleCategories = (): void => {
    setIsOpen(!isOpen);
  };

  const closeCategories = (): void => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (currentPath.category === 'all' || undefined) {
      dispatch(changeDisplayedBooks());
    } else {
      const result = categories.find((item) => item.path === currentPath.category)?.name;

      if (result) dispatch(changeDisplayedBooksByCategory(result));
    }
  }, [categories, currentPath, dispatch, books]);

  useEffect(() => {
    dispatch(changeBooksBySearch(searchValue));
  }, [dispatch, currentPath, searchValue]);

  return (
    <Wrapper>
      <div>
        <CustomAsidelink to={ROUTE.AllBOOKS} type='primary' onClick={handleCategories} open={isOpen}>
          <WrapperChevron data-test-id='navigation-showcase'>
            <p>Витрина книг</p>
            <ChevronButton $iscurrentPageHome={!!currentPageHome || !!currentPageCategory} type='button'>
              {isOpen ? <ChevronTopIcon /> : <ChevronBottomIcon />}
            </ChevronButton>
          </WrapperChevron>
        </CustomAsidelink>
        {categories.length > 0 && books.length > 0 && (
          <CategoryBox $open={isOpen}>
            <CustomAsidelink to={ROUTE.AllBOOKS} type='secondary'>
              <Text $open={isOpen} data-test-id='navigation-books'>
                Все книги
              </Text>
            </CustomAsidelink>
            {categories.map(({ name, path }) => (
              <CustomAsidelink
                to={`${ROUTE.BOOKS}/${path}`}
                type='secondary'
                key={uuidv4()}
                state={{ nameValue: name, pathValue: path }}
              >
                <span data-test-id={`navigation-${path}`}>{name}</span>
                <Amount $isActive={currentPath.category === path} data-test-id={`navigation-book-count-for-${path}`}>
                  {countCategories[name] ? countCategories[name] : '0'}
                </Amount>
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
