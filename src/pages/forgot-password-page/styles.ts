import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Media } from '../../ui/media';

const BackToAuth = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  grid-gap: 12px;
  padding: 20px 16px;
  background: #f9f9fa;
  border-radius: 16px 16px 0px 0px;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  color: #727272;

  ${Media.SM} {
  }
`;

export { BackToAuth };
