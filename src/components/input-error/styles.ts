import styled from 'styled-components';

import { Media } from '../../ui/media';

const StyledInputError = styled.p`
  position: absolute;
  top: 56px;
  left: 12px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #f42c4f;

  ${Media.SM} {
    margin-bottom: 10px;
  }
`;

export { StyledInputError };
