import { ReactNode } from 'react';

import { Logo, StyledAuthLayout, StyledForm, Title } from './styles';

interface IProps {
  children: ReactNode;

  gapLg?: number;
  gapSm?: number;
  title: string;
}

export const AuthLayout = ({ children, gapLg = 46, gapSm = 8, title }: IProps) => (
  <StyledAuthLayout gapLg={gapLg} gapSm={gapSm} data-test-id='auth'>
    <Logo>Cleverland</Logo>
    <StyledForm>
      <Title>{title}</Title>
      {children}
    </StyledForm>
  </StyledAuthLayout>
);
