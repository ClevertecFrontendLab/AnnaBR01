import { ReactNode } from 'react';

import { StyledInputError } from './styles';

interface IProps {
  children: ReactNode;
}

export const InputError = ({ children }: IProps) => <StyledInputError data-test-id='hint'>{children}</StyledInputError>;
