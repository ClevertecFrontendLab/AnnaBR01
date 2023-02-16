import styled from 'styled-components';

import { ContainerFlexBeetween } from '../../ui/containers';
import { Media } from '../../ui/media';

const StyledError = styled(ContainerFlexBeetween)`
  position: absolute;
  top: 66px;
  left: 0;
  z-index: 3;
  width: 100%;

  ${Media.MD} {
    top: 62px;
    padding-inline: 64px;
  }

  ${Media.SM} {
    top: 56px;
    padding-inline: 20px;
  }
`;

const Container = styled(ContainerFlexBeetween)`
  max-width: 1110px;
  width: 1110px;
  grid-gap: 15px;
  margin: 0 auto;
  padding: 24px 32px;
  background: #feebea;
  border: 1.5px solid #f42c4f;
  border-radius: 5px;

  ${Media.MD} {
    padding: 24px 16px;
  }

  ${Media.SM} {
    align-items: flex-start;
    padding: 12px 16px;
  }
`;

const Text = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  ${Media.MD} {
    font-size: 14px;
    line-height: 18px;
  }
`;

export { StyledError, Text, Container };
