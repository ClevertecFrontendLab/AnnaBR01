import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { BurgerIcon, CrossMarkIcon, LogoIcon, LogoNameIcon } from '../../assets';
import avatar from '../../assets/images/avatar.png';
import { useOnClickOutside } from '../../hooks/use-on-click-outside';
import { ROUTE } from '../../routes/routes';
import { BurgerMenu } from '..';

import { Box, BurgerBox, Container, LogoContainer, StyledHeader, Text, Title, UserInfo } from './styles';

export const Header = () => {
  const [isMenuOpen, toggleMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

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
        <UserInfo>
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
    </StyledHeader>
  );
};
