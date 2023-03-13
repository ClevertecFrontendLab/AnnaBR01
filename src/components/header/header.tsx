import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { BurgerIcon, CrossMarkIcon, LogoIcon, LogoNameIcon } from '../../assets';
import avatar from '../../assets/images/avatar.png';
import { useOnClickOutside } from '../../hooks/use-on-click-outside';
import { ROUTE } from '../../routes/routes';
import { logout } from '../../store/features/user-slice';
import { useAppDispatch } from '../../store/hooks';
import { BurgerMenu, CustomAsidelink } from '..';

import { Box, BurgerBox, Container, LogoContainer, StyledHeader, Text, Title, UserBurger, UserInfo } from './styles';

export const Header = () => {
  const [isMenuOpen, toggleMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenUserBurger, setIsOpenUserBurger] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  useOnClickOutside(ref, () => toggleMenu(false));

  const toggleMenuMode = (): void => {
    toggleMenu(!isMenuOpen);
  };

  const handleCategories = (): void => {
    setIsOpen(!isOpen);
  };

  const closeCategories = (): void => {
    setIsOpen(false);
  };

  return (
    <StyledHeader>
      <Link to={ROUTE.HOME}>
        <LogoContainer>
          <Box>
            <LogoIcon />
          </Box>
          <LogoNameIcon />
        </LogoContainer>
      </Link>
      <BurgerBox onClick={toggleMenuMode} data-test-id='button-burger'>
        {isMenuOpen ? <CrossMarkIcon /> : <BurgerIcon />}
      </BurgerBox>
      <Container>
        <Title>Бибилиотека</Title>
        <UserInfo
          onClick={() => {
            setIsOpenUserBurger(!isOpenUserBurger);
          }}
        >
          <Text>Привет, Анна!</Text>
          <img src={avatar} alt='avatar' />
        </UserInfo>
      </Container>
      <div ref={ref}>
        {isMenuOpen && (
          <BurgerMenu
            toggleMenuMode={toggleMenuMode}
            handleCategories={handleCategories}
            closeCategories={closeCategories}
            menuOpen={isMenuOpen}
            isOpen={isOpen}
            data-test-id='burger-navigation'
          />
        )}
      </div>
      {isOpenUserBurger && (
        <UserBurger>
          <CustomAsidelink to='account' type='primary'>
            Профиль
          </CustomAsidelink>

          <CustomAsidelink
            to={ROUTE.AUTH}
            type='primary'
            onClick={() => {
              dispatch(logout());
            }}
          >
            <p data-test-id='exit-button'> Выход</p>
          </CustomAsidelink>
        </UserBurger>
      )}
    </StyledHeader>
  );
};
