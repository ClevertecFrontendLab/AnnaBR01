import styled from 'styled-components';

import { ContainerFlex } from '../../ui/containers';
import { Media } from '../../ui/media';

const Wrapper = styled(ContainerFlex)`
  max-width: 1110px;
  width: 1110px;
  margin: 0px auto;
  min-height: 100vh;

  ${Media.MD} {
    width: 100%;
  }
`;

const ContentBox = styled.div`
  width: 100%;
  max-height: 100%;
  margin-left: 6px;

  ${Media.MD} {
    margin-left: 0px;
  }
`;

export { ContentBox, Wrapper };
