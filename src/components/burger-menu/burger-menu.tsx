import { useMatch } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { ChevronBottomIcon, ChevronTopIcon } from '../../assets';
import { ROUTE } from '../../routes/routes';
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

interface ICategory {
  category: string;
  name: string;
  amount: number;
}

const dataCategories: ICategory[] = [
  {
    category: 'business',
    name: 'Бизнес-книги',
    amount: 5,
  },
  {
    category: 'detective',
    name: 'Детективы',
    amount: 3,
  },
  {
    category: 'children',
    name: 'Детские книги',
    amount: 15,
  },
  {
    category: 'foreign',
    name: 'Зарубежная литература',
    amount: 1,
  },
  {
    category: 'history',
    name: 'История',
    amount: 21,
  },
  {
    category: 'classic',
    name: 'Классическая литература',
    amount: 17,
  },
  {
    category: 'psychology',
    name: 'Книги по психологии',
    amount: 55,
  },
  {
    category: 'computers',
    name: 'Компьютерная литература',
    amount: 18,
  },
  {
    category: 'culture',
    name: 'Культура и искусство',
    amount: 1,
  },
  {
    category: 'science',
    name: 'Наука и образование',
    amount: 62,
  },
  {
    category: 'publicistic',
    name: 'Публицистическая литература',
    amount: 8,
  },
  {
    category: 'references',
    name: 'Справочники',
    amount: 5,
  },
  {
    category: 'scifi',
    name: 'Фантастика',
    amount: 4,
  },
  {
    category: 'humor',
    name: 'Юмористическая литература',
    amount: 0,
  },
];

interface IProps {
  menuOpen: boolean;
  isOpen: boolean;
  toggleMenuMode: () => void;
  handleCategories: () => void;
  closeCategories: () => void;
}

export const BurgerMenu = ({ toggleMenuMode, handleCategories, closeCategories, menuOpen, isOpen }: IProps) => {
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

          <CategoryBox $open={isOpen}>
            <CustomAsidelink to={ROUTE.HOME} type='secondary' onClick={toggleMenuMode}>
              <Text $open={isOpen} ata-test-id='burger-books'>
                Все книги
              </Text>
            </CustomAsidelink>
            {dataCategories.map(({ category, name, amount }) => (
              <CustomAsidelink
                to={`${ROUTE.BOOKS}/${category}`}
                type='tertiary'
                onClick={toggleMenuMode}
                key={uuidv4()}
              >
                <p>
                  {name}
                  <Amount>{amount}</Amount>
                </p>
              </CustomAsidelink>
            ))}
          </CategoryBox>
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
