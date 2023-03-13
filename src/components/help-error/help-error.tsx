import { ReactNode } from 'react';

import { StyledHelpError } from './styles';

interface IProps {
  children: ReactNode;
  error: boolean;
}

export const HelpError = ({ children, error }: IProps) => <StyledHelpError $error={error}>{children}</StyledHelpError>;
