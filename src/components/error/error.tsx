import { ReactNode } from 'react';
import { CloseErrorIcon, WarningIcon } from '../../assets';

import { StyledError, Text, Container } from './styles';

interface IProps {
  children: ReactNode;
}

export const Error = ({ children }: IProps) => (
  <StyledError>
    <Container>
      <WarningIcon />
      <Text> {children}</Text>
      <CloseErrorIcon />
    </Container>
  </StyledError>
);
