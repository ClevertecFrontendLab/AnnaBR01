import { ReactNode } from 'react';

import { Logo, StyledAuthLayout, StyledForm, Title } from './styles';

interface IProps {
  children: ReactNode;
  paddingTop?: number;
  gapLg?: number;
  gapSm?: number;
  title: string;
}

export const AuthLayout = ({ children, gapLg = 46, gapSm = 8, title, paddingTop = 48 }: IProps) => (
  <StyledAuthLayout gapLg={gapLg} gapSm={gapSm} data-test-id='auth'>
    <Logo>Cleverland</Logo>
    <StyledForm paddingTop={paddingTop}>
      <Title>{title}</Title>
      {children}
    </StyledForm>
  </StyledAuthLayout>
);
