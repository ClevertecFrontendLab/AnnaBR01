import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { fetchCategories } from '../../store/features/categories-slice';
import { useAppDispatch } from '../../store/hooks';
import { Footer, Header } from '..';

import { StyledMainTemplate, StyledOutlet } from './styles';

export const MainTemplate = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledMainTemplate>
      <Header />

      <StyledOutlet>
        <Outlet />
      </StyledOutlet>

      <Footer />
    </StyledMainTemplate>
  );
};
