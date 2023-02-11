import { useState } from 'react';
import { useMatch } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { ChevronBottomIcon, ChevronTopIcon } from '../../assets';
import { ROUTE } from '../../routes/routes';
import { CustomAsidelink } from '../custom-aside-link/custom-aside-link';

import { Amount, CategoryBox, ChevronButton, Wrapper, WrapperChevron, Text } from './styles';

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

export const Menu = () => {
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

        <CategoryBox $open={isOpen}>
          <CustomAsidelink to={ROUTE.HOME} type='secondary'>
            <Text $open={isOpen} data-test-id='navigation-books'>
              Все книги
            </Text>
          </CustomAsidelink>
          {dataCategories.map(({ category, name, amount }) => (
            <CustomAsidelink to={`${ROUTE.BOOKS}/${category}`} type='tertiary' key={uuidv4()}>
              <p>
                {name}
                <Amount>{amount}</Amount>
              </p>
            </CustomAsidelink>
          ))}
        </CategoryBox>
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
