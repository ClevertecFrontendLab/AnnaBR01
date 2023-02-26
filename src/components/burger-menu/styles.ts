import styled from 'styled-components';

import { ContainerFlexBeetween, ContainerFlexColumn } from '../../ui/containers';
import { Media } from '../../ui/media';

const StyledBurgerMenu = styled.div<{ $menuOpen: boolean }>`
  top: ${({ $menuOpen }) => ($menuOpen ? '94px' : '-100%')};
  left: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  max-height: 100vh;
  overflow-y: auto;
  width: 78%;
  min-width: 502px;
  background: #f9f9fa;
  box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18),
    0px 1px 5px rgba(191, 196, 201, 0.24);

  ${Media.SM} {
    top: 76px;
    width: 100%;
    min-width: 288px;
  }
`;

const Wrapper = styled(ContainerFlexColumn)`
  align-self: flex-start;
  grid-gap: 42px;
  width: 65%;
  min-width: 319px;
  padding: 32px 32px 52px;

  ${Media.SM} {
    grid-gap: 42px;
    width: 100%;
    min-width: 288px;
    padding: 32px 16.5px 52px;
  }
`;
const CategoryBox = styled(ContainerFlexColumn)<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? 'flex' : 'none')};
  grid-gap: 16px;
  margin-top: 16px;
  padding-left: 20px;
`;

const Amount = styled.span<{ $isActive: boolean }>`
  padding-left: 6px;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: ${({ $isActive }) => ($isActive ? '#363636' : '#a7a7a7')};
`;

const WrapperChevron = styled(ContainerFlexBeetween)`
  width: 100%;
`;

const ChevronButton = styled.button<{ $iscurrentPageHome: boolean }>`
  display: ${({ $iscurrentPageHome }) => ($iscurrentPageHome ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  padding: 8px 5px 12px;
`;

const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: #bfc4c9;
`;

const Text = styled.p<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? 'block' : 'none')};
`;

export { Wrapper, CategoryBox, Amount, WrapperChevron, ChevronButton, StyledBurgerMenu, Separator, Text };
