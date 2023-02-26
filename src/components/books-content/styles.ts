import styled from 'styled-components';

import { ContainerFlexColumn } from '../../ui/containers';
import { Media } from '../../ui/media';

const StyledVerticalBooksContent = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(auto-fill, minmax(190px, 190px));
  grid-gap: 21.5px;

  ${Media.MD} {
    grid-gap: 35px;
  }

  ${Media.SM} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledHorizontalBooksContent = styled(ContainerFlexColumn)`
  grid-gap: 16px;
`;

const NoBooks = styled.p`
  margin-top: 200px;
  text-align: center;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.1px;
  color: #a7a7a7;

  ${Media.MD} {
    margin-top: 226px;
  }

  ${Media.SM} {
    margin-top: 137px;
    font-size: 18px;
    line-height: 28px;
  }
`;

export { StyledVerticalBooksContent, StyledHorizontalBooksContent, NoBooks };
