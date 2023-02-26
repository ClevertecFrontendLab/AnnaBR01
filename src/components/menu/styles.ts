import styled from 'styled-components';

import { ContainerFlexBeetween, ContainerFlexColumn } from '../../ui/containers';
import { Media } from '../../ui/media';

const Wrapper = styled(ContainerFlexColumn)`
  align-self: flex-start;
  grid-gap: 42px;
  height: 75%;
  width: 279px;
  max-width: 279px;

  ${Media.MD} {
    display: none;
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

const Text = styled.p<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? 'block' : 'none')};
`;

export { Wrapper, CategoryBox, Amount, WrapperChevron, ChevronButton, Text };
