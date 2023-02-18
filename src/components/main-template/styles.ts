import styled from 'styled-components';

import { ContainerFlexColumn } from '../../ui/containers';
import { Media } from '../../ui/media';

const StyledMainTemplate = styled(ContainerFlexColumn)`
  max-width: 1110px;
  width: 1110px;
  margin: 0px auto;
  min-height: 100vh;

  ${Media.MD} {
    width: 100%;
    padding: 0px 64px;
  }

  ${Media.SM} {
    padding: 0px 16px;
  }
`;

const StyledOutlet = styled.main`
  flex-grow: 1;
`;

export { StyledMainTemplate, StyledOutlet };
