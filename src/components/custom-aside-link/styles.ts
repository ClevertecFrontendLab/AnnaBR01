import { Link, PathMatch } from 'react-router-dom';
import styled from 'styled-components';

type RenderType = {
  $active: PathMatch<string> | null | 'primary' | 'secondary';
  $open?: boolean;
};

const StyledCustomLink = styled(Link)<RenderType>`
  display: inline-block;
  font-size: ${({ type }) => (type === 'secondary' ? '16px' : '18px')};
  line-height: ${({ type }) => (type === 'secondary' ? '24px' : '28px')};
  font-weight: ${({ type, $active }) => (type === 'primary' || $active ? '700' : '400')};
  color: ${({ $active }) => ($active ? 'none' : '#363636')};
  background: ${({ $active, $open }) =>
    $active || $open ? 'linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%)' : '#363636'};

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  padding-bottom: ${({ type }) => (type === 'primary' ? '8px' : '0px')};
  border-bottom: ${({ type, $active, $open }) =>
    type === 'primary' && ($active || $open) ? '1px solid #F83600' : 'none'};
`;

export { StyledCustomLink };
