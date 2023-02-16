import { useMatch } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { ChevronBottomIcon, ChevronTopIcon } from '../../assets';
import { ROUTE } from '../../routes/routes';
import { useAppSelector } from '../../store/hooks';
import { getBooks } from '../../store/selectors/books-selectors';
import { getCategories } from '../../store/selectors/categories-selectors';
import { CustomAsidelink } from '../custom-aside-link/custom-aside-link';

import {
  Amount,
  CategoryBox,
  ChevronButton,
  Separator,
  StyledBurgerMenu,
  Text,
  Wrapper,
  WrapperChevron,
} from './styles';

interface IProps {
  menuOpen: boolean;
  isOpen: boolean;
  toggleMenuMode: () => void;
  handleCategories: () => void;
  closeCategories: () => void;
}

export const BurgerMenu = ({ toggleMenuMode, handleCategories, closeCategories, menuOpen, isOpen }: IProps) => {
  const { categories } = useAppSelector(getCategories);
  const { books } = useAppSelector(getBooks);
  const currentPageHome = useMatch(ROUTE.HOME);
  const currentPageCategories = useMatch(ROUTE.CATEGORY);

  const closeBurgerMenu = (): void => {
    closeCategories();

    toggleMenuMode();
  };

  return (
    <StyledBurgerMenu $menuOpen={menuOpen}>
      <Wrapper>
        <div>
          <CustomAsidelink to={ROUTE.HOME} type='primary' onClick={handleCategories} open={isOpen}>
            <WrapperChevron data-test-id='burger-showcase'>
              <p>Витрина книг</p>
              <ChevronButton $iscurrentPageHome={!!currentPageHome || !!currentPageCategories} type='button'>
                {isOpen ? <ChevronTopIcon /> : <ChevronBottomIcon />}
              </ChevronButton>
            </WrapperChevron>
          </CustomAsidelink>

          {categories.length > 0 && books.length > 0 && (
            <CategoryBox $open={isOpen}>
              <CustomAsidelink to={ROUTE.HOME} type='secondary' onClick={toggleMenuMode}>
                <Text $open={isOpen} ata-test-id='burger-books'>
                  Все книги
                </Text>
              </CustomAsidelink>
              {categories.map(({ name, path }) => (
                <CustomAsidelink to={`${ROUTE.BOOKS}/${path}`} type='tertiary' onClick={toggleMenuMode} key={uuidv4()}>
                  <p>
                    {name}
                    {/* <Amount>{amount}</Amount> */}
                  </p>
                </CustomAsidelink>
              ))}
            </CategoryBox>
          )}
        </div>
        <CustomAsidelink to={ROUTE.OFFER} type='primary' onClick={closeBurgerMenu}>
          <p data-test-id='burger-terms'>Правила пользования</p>
        </CustomAsidelink>
        <CustomAsidelink to={ROUTE.RULES} type='primary' onClick={closeBurgerMenu}>
          <p data-test-id='burger-contract'>Договор оферты</p>
        </CustomAsidelink>
      </Wrapper>

      <Separator />

      <Wrapper>
        <CustomAsidelink to='account' type='primary' onClick={closeBurgerMenu}>
          Профиль
        </CustomAsidelink>
        <CustomAsidelink to='example' type='primary' onClick={closeBurgerMenu}>
          Выход
        </CustomAsidelink>
      </Wrapper>
    </StyledBurgerMenu>
  );
};
