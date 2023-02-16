import { ReactNode } from 'react';

import { CloseErrorIcon, WarningIcon } from '../../assets';

import { Container, StyledError, Text } from './styles';

interface IProps {
  children: ReactNode;
}

export const Error = ({ children }: IProps) => (
  <StyledError data-test-id='error'>
    <Container>
      <WarningIcon />
      <Text> {children}</Text>
      <CloseErrorIcon />
    </Container>
  </StyledError>
);
