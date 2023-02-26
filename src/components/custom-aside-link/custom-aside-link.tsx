import { ReactNode } from 'react';
import { useMatch } from 'react-router-dom';

import { ROUTE } from '../../routes/routes';

import { StyledCustomLink } from './styles';

interface IProps {
  to: ROUTE | string;
  children: ReactNode;
  onClick?: () => void;
  type: 'primary' | 'secondary';
  open?: boolean;
  state?: { nameValue: string; pathValue: string };
}

export const CustomAsidelink = ({ to, children, onClick, type, open, state }: IProps) => {
  const isActive = useMatch(to);

  return (
    <StyledCustomLink $active={isActive} $open={open} type={type} to={to} onClick={onClick} state={{ value: state }}>
      {children}
    </StyledCustomLink>
  );
};
