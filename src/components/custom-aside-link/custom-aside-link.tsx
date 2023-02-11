import { ReactNode } from 'react';
import { useMatch } from 'react-router-dom';

import { ROUTE } from '../../routes/routes';

import { StyledCustomLink } from './styles';

interface IProps {
  to: ROUTE | string;
  children: ReactNode;
  onClick?: () => void;
  type: 'primary' | 'secondary' | 'tertiary';
  open?: boolean;
}

export const CustomAsidelink = ({ to, children, onClick, type, open }: IProps) => {
  const isActive = useMatch(to);

  return (
    <StyledCustomLink $active={isActive} $open={open} type={type} to={to} onClick={onClick}>
      {children}
    </StyledCustomLink>
  );
};
