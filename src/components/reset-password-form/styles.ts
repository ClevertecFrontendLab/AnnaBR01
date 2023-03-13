import styled from 'styled-components';

import { Media } from '../../ui/media';

const StyledResetPasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #727272;

  ${Media.SM} {
    font-size: 15px;
    line-height: 20px;
  }
`;

export { StyledResetPasswordForm, InputWrapper, Text };
