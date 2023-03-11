import { InputMask } from 'primereact/inputmask';
import styled from 'styled-components';

import { Media } from '../../ui/media';

const InputWrapper = styled.div`
  position: relative;
`;

const StyledInputAuthPhone = styled(InputMask)<{ $errorInput: boolean }>`
  width: 100%;
  padding: 26px 12px 12px;
  margin-bottom: 36px;
  background: #f9f9fa;
  border-radius: 4px;
  outline: none;
  border: none;
  border-bottom: ${({ $errorInput }) => ($errorInput ? '1px solid  #F42C4F' : '1px solid #BFC4C9')};

  ${Media.SM} {
    margin-bottom: 44px;
  }
`;

const Placeholder = styled.p`
  position: absolute;
  left: 12px;
  pointer-events: none;
`;

export { StyledInputAuthPhone, Placeholder, InputWrapper };
