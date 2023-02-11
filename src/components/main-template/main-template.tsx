import { Outlet } from 'react-router-dom';

import { Footer, Header } from '..';

import { StyledMainTemplate, StyledOutlet } from './styles';

export const MainTemplate = () => (
  <StyledMainTemplate>
    <Header />

    <StyledOutlet>
      <Outlet />
    </StyledOutlet>

    <Footer />
  </StyledMainTemplate>
);
