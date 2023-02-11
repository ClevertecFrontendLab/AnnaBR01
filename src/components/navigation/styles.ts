import styled from 'styled-components';

import background from '../../assets/icons/background.svg';
import { ContainerFlex, ContainerFlexBeetween } from '../../ui/containers';
import { Media } from '../../ui/media';

const StyledNavigation = styled(ContainerFlexBeetween)`
  margin-bottom: 32px;

  ${Media.MD} {
    margin-bottom: 24px;
  }

  ${Media.SM} {
    margin-bottom: 16px;
  }
`;

const WrapperInputs = styled(ContainerFlexBeetween)<{ $isSearchOpen: boolean }>`
  ${Media.SM} {
    width: ${({ $isSearchOpen }) => ($isSearchOpen ? '100%' : '80px')};
  }
`;

const WrapperSorting = styled(ContainerFlexBeetween)<{ $isSearchOpen: boolean }>`
  display: ${({ $isSearchOpen }) => ($isSearchOpen ? 'none' : 'flex')};
  grid-gap: 16px;
`;

const Search = styled(ContainerFlex)<{ $isSearchOpen: boolean }>`
  padding: 10px 120px 10px 16px;
  box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18),
    0px 1px 5px rgba(191, 196, 201, 0.24);
  border-radius: 599px;
  margin-right: 16px;

  ${Media.MD} {
    padding: 10px 44px 10px 16px;
  }

  ${Media.SM} {
    width: ${({ $isSearchOpen }) => ($isSearchOpen ? '100%' : '32px')};
    justify-content: space-between;
    padding: 8px;
    border-radius: ${({ $isSearchOpen }) => ($isSearchOpen ? '599px' : '50%')};
    padding-inline: ${({ $isSearchOpen }) => ($isSearchOpen ? '16px' : '8px')};
  }
`;

const Filter = styled(ContainerFlex)<{ $isSearchOpen: boolean }>`
  padding: 8px 15px;
  box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18),
    0px 1px 5px rgba(191, 196, 201, 0.24);
  border-radius: 599px;

  ${Media.SM} {
    display: ${({ $isSearchOpen }) => ($isSearchOpen ? 'none' : 'flex')};
    padding: 8px;
    border-radius: 50%;
  }
`;

const SearchButton = styled.button<{ $isSearchOpen: boolean }>`
  margin-right: 8px;

  ${Media.SM} {
    display: ${({ $isSearchOpen }) => ($isSearchOpen ? 'none' : 'flex')};
    margin-right: 0;
  }
`;

const SearchInput = styled.input<{ $isSearchOpen: boolean }>`
  border: none;
  color: #a7a7a7;

  ${Media.SM} {
    display: ${({ $isSearchOpen }) => ($isSearchOpen ? 'flex' : 'none')};
  }
`;

const ButtonSquare = styled.button<{ $isSquare: boolean }>`
  padding: 10px;
  background: ${({ $isSquare }) => ($isSquare ? `no-repeat url(${background})` : 'none')};
  box-shadow: ${({ $isSquare }) =>
    $isSquare
      ? 'none'
      : '0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18),0px 1px 5px rgba(191, 196, 201, 0.24)'};
  border-radius: 50%;
`;

const ButtonColumn = styled.button<{ $isColumn: boolean }>`
  padding: 10px;
  background: ${({ $isColumn }) => ($isColumn ? `no-repeat url(${background})` : 'none')};
  box-shadow: ${({ $isColumn }) =>
    $isColumn
      ? 'none'
      : '0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18),0px 1px 5px rgba(191, 196, 201, 0.24)'};
  border-radius: 50%;
`;

const StyledSelect = styled.select`
  border: none;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  letter-spacing: 0.1px;
  color: #a7a7a7;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;

  &::-ms-expands {
    display: none;
  }

  ${Media.SM} {
    max-width: 1px;
    visibility: hidden;
  }
`;
const SelectOption = styled.option`
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  font-family: 'Montserrat';
  letter-spacing: 0.1px;
  color: #a7a7a7;
`;

const SortIconContainer = styled(ContainerFlex)`
  width: 100%;
  height: 100%;
  margin-right: 8px;

  ${Media.SM} {
    margin-right: 0px;
  }
`;

const CloseSearchButton = styled.button<{ $isSearchClose: boolean }>`
  display: none;

  ${Media.SM} {
    display: ${({ $isSearchClose }) => ($isSearchClose ? `none` : 'flex')};
  }
`;

export {
  StyledNavigation,
  WrapperInputs,
  WrapperSorting,
  Search,
  Filter,
  SearchButton,
  SearchInput,
  ButtonSquare,
  ButtonColumn,
  StyledSelect,
  SelectOption,
  SortIconContainer,
  CloseSearchButton,
};
