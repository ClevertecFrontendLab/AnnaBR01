import { ReactNode } from 'react';

import { StyledMessage } from './styles';

interface IProps {
  children: ReactNode;
}

export const Message = ({ children }: IProps) => <StyledMessage data-test-id='hint'>{children}</StyledMessage>;
