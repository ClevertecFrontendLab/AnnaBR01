import styled from 'styled-components';

import { ContainerFlexColumn } from '../../ui/containers';
import { Media } from '../../ui/media';

const Step = styled.p`
  margin-block: 8px 32px;
  font-weight: 600;
`;

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
  }
`;

const Text = styled.div`
  display: flex;
  grid-gap: 15px;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  color: #363636;
`;

const RegistrationForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputError = styled.p`
  margin-top: -34px;
  margin-left: 12px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #f42c4f;
`;

const Message = styled.p`
  margin-top: -34px;
  margin-left: 12px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #a7a7a7;
`;

export { Step, TextWrapper, Text, RegistrationForm, InputError, Message };
