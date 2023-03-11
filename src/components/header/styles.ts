import styled from 'styled-components';

import { ContainerFlex, ContainerFlexBeetween } from '../../ui/containers';
import { Media } from '../../ui/media';

const StyledHeader = styled.header`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 32px 0px 15px;
  margin-bottom: 47px;
  background: white;

  ${Media.MD} {
    padding: 32px 0px 22px;
    margin-bottom: 32px;
  }

  ${Media.SM} {
    padding: 24px 0px;
    margin-bottom: 8px;
  }
`;

const BurgerBox = styled.button`
  display: none;
  background: none;

  ${Media.MD} {
    display: flex;
    align-items: center;
    min-width: 32px;
    min-height: 32px;
  }

  ${Media.SM} {
    min-width: 24px;
    min-height: 24px;
    max-width: 24px;
    max-height: 24px;
  }
`;
const Container = styled(ContainerFlexBeetween)`
  width: 100%;
`;
const Title = styled.h1`
  margin-left: 30px;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #363636;

  ${Media.MD} {
    margin-left: 26px;
  }

  ${Media.SM} {
    margin-left: 24px;
    font-size: 18px;
    line-height: 28px;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #6e76f1;
`;

const LogoContainer = styled(ContainerFlex)`
  align-items: center;
  grid-gap: 8px;
  min-width: 255px;

  ${Media.MD} {
    display: none;
  }
`;

const UserInfo = styled(ContainerFlex)`
  grid-gap: 16px;
  cursor: pointer;

  ${Media.MD} {
    display: none;
  }
`;

const Text = styled.p`
  font-weight: 600;
  color: #363636;
`;

const UserBurger = styled.div`
  position: absolute;
  z-index: 1;
  right: 0;
  top: 116px;
  width: 270px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  grid-gap: 32px;
  padding: 32px 24px;
  box-shadow: 4px 4px 4px rgba(54, 54, 54, 0.05), -4px 4px 4px rgba(54, 54, 54, 0.05);
  border-radius: 0px 0px 10px 10px;
  background: #ffffff;
`;

export { Title, Box, LogoContainer, UserInfo, Text, Container, StyledHeader, BurgerBox, UserBurger };
