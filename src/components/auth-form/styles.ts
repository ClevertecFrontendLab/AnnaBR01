import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Media } from '../../ui/media';

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 16px;
  font-size: 16px;
  line-height: 24px;
  color: #727272;

  ${Media.SM} {
    flex-direction: column;
    align-items: flex-start;
    grid-gap: 7px;
    font-size: 15px;
    line-height: 20px;
  }
`;

const Text = styled.div`
  display: flex;
  justify-content: start;
  grid-gap: 15px;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  color: #363636;
`;

const Auth = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const ForgotPassword = styled(Link)`
  position: absolute;
  top: 76px;
  left: 12px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #a7a7a7;
`;

const ErrorAuthStatusWrapper = styled.div`
  position: absolute;
  top: 76px;
  left: 12px;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
`;

const ErrorAuthStatus = styled.p`
  color: #f42c4f;
`;

const TextLink = styled(Link)`
  color: #363636;
`;

export { Auth, InputWrapper, ForgotPassword, TextWrapper, Text, ErrorAuthStatusWrapper, ErrorAuthStatus, TextLink };
