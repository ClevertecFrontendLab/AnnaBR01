import { ReactNode } from 'react';

import { Logo, StyledAuthLayout, StyledForm, Title } from './styles';

interface IProps {
  children: ReactNode;
  paddingSmBottom?: number;
  gapLg?: number;
  gapSm?: number;
  title: string;
}

export const AuthLayout = ({ children, paddingSmBottom = 52, gapLg = 46, gapSm = 8, title }: IProps) => (
  <StyledAuthLayout paddingSmBottom={paddingSmBottom} gapLg={gapLg} gapSm={gapSm}>
    <Logo>Cleverland</Logo>
    <StyledForm>
      <Title>{title}</Title>
      {children}
    </StyledForm>
  </StyledAuthLayout>
);
