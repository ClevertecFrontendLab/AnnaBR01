import { CloseSearchIcon, ColumnIcon, FilterIcon, SearchIcon, SquareIcon } from '../../assets';
import { useViewContext } from '../../context/button-view-context/button-view-context';
import { useToggle } from '../../hooks/use-toggle';
import { useWindowSize } from '../../hooks/use-window-size';
import { Breackpoint } from '../../ui/media';

import {
  ButtonColumn,
  ButtonSquare,
  CloseSearchButton,
  Filter,
  Search,
  SearchButton,
  SearchInput,
  SelectOption,
  SortIconContainer,
  StyledNavigation,
  StyledSelect,
  WrapperInputs,
  WrapperSorting,
} from './styles';

export const Navigation = () => {
  const { width = 0 } = useWindowSize();
  const { view, setView } = useViewContext();
  const [isSearchOpen, toggleIsSearchOpen] = useToggle(false);

  const handleSquareView = () => {
    setView(view);
  };

  const handleColumnView = () => {
    setView(view);
  };

  const handleSearchView = () => {
    if (width < Breackpoint.SM) {
      toggleIsSearchOpen();
    }
  };

  return (
    <StyledNavigation>
      <WrapperInputs $isSearchOpen={isSearchOpen}>
        <Search $isSearchOpen={isSearchOpen}>
          <SearchButton onClick={handleSearchView} $isSearchOpen={isSearchOpen} data-test-id='button-search-open'>
            <SearchIcon />
          </SearchButton>

          <SearchInput
            placeholder='Поиск книги или автора…'
            type='text'
            $isSearchOpen={isSearchOpen}
            data-test-id='input-search'
          />
          <CloseSearchButton
            $isSearchClose={!isSearchOpen}
            onClick={handleSearchView}
            data-test-id='button-search-close'
          >
            <CloseSearchIcon />
          </CloseSearchButton>
        </Search>

        <Filter $isSearchOpen={isSearchOpen}>
          <SortIconContainer>
            <FilterIcon />
          </SortIconContainer>
          <StyledSelect name='sort' id='sort-select' defaultValue='DEFAULT'>
            <SelectOption value='DEFAULT'>По рейтингу</SelectOption>
            <SelectOption value='date'>По дате</SelectOption>
            <SelectOption value='price'>По цене</SelectOption>
          </StyledSelect>
        </Filter>
      </WrapperInputs>

      <WrapperSorting $isSearchOpen={isSearchOpen}>
        <ButtonSquare
          onClick={handleSquareView}
          $isSquare={view.isSquare}
          type='button'
          data-test-id='button-menu-view-window'
        >
          <SquareIcon fill={view.isSquare ? '#FFFFFF' : '#A7A7A7'} />
        </ButtonSquare>
        <ButtonColumn
          onClick={handleColumnView}
          $isColumn={view.isColumn}
          type='button'
          data-test-id='button-menu-view-list'
        >
          <ColumnIcon fill={view.isColumn ? '#FFFFFF' : '#A7A7A7'} />
        </ButtonColumn>
      </WrapperSorting>
    </StyledNavigation>
  );
};
