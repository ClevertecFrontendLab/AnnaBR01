import { Outlet } from 'react-router-dom';

import { Menu } from '..';

import { ContentBox, Wrapper } from './styles';

export const SecondTemplate = () => (
  <Wrapper>
    <Menu />
    <ContentBox>
      <Outlet />
    </ContentBox>
  </Wrapper>
);
