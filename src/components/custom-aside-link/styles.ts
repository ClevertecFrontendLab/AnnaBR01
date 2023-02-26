import { Link, PathMatch } from 'react-router-dom';
import styled from 'styled-components';

type RenderType = {
  $active: PathMatch<string> | null | 'primary' | 'secondary';
  $open?: boolean;
};

const StyledCustomLink = styled(Link)<RenderType>`
  display: ${({ type }) => (type === 'secondary' ? 'inline-block' : 'flex')};
  font-size: ${({ type }) => (type === 'secondary' ? '16px' : '18px')};
  line-height: ${({ type }) => (type === 'secondary' ? '24px' : '28px')};
  font-weight: ${({ type, $active }) => (type === 'primary' || $active ? '700' : '400')};
  color: ${({ $active, $open }) => ($active || $open ? '#f86700' : '#363636')};
  background-clip: text;
  padding-bottom: ${({ type }) => (type === 'primary' ? '8px' : '0px')};
  border-bottom: ${({ type, $active, $open }) =>
    type === 'primary' && ($active || $open) ? '1px solid #f86700' : 'none'};
`;

export { StyledCustomLink };
