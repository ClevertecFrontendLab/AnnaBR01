import styled from 'styled-components';

import { ContainerFlexRowCenter} from '../../ui/containers';

const StaledLoader = styled(ContainerFlexRowCenter)`
  position: absolute;
  top:0;
  left:0;
  height: 100vh;
  width: 100%;
  z-index: 3;

  background: rgba(54, 54, 54, 0.3);
backdrop-filter: blur(10px);
`;

export { StaledLoader };