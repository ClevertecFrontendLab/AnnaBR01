import styled from 'styled-components';

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

const Registration = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  position: relative;
`;

export { Step, TextWrapper, Text, Registration, InputWrapper };
