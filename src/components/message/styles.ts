import styled from 'styled-components';

import { Media } from '../../ui/media';

const StyledMessage = styled.p`
  position: absolute;
  top: 56px;
  left: 12px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #a7a7a7;

  ${Media.SM} {
    margin-bottom: 10px;
  }
`;

export { StyledMessage };
