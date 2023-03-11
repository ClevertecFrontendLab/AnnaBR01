import styled from 'styled-components';

import { ContainerFlexColumn } from '../../ui/containers';
import { Media } from '../../ui/media';

interface IProps {
  gapLg: number;
  gapSm: number;
}

const StyledAuthLayout = styled(ContainerFlexColumn).attrs<IProps>((props) => ({
  gapLg: `${props.gapLg}px`,
  gapSm: `${props.gapSm}px`,
}))<IProps>`
  height: 100vh;
  align-items: center;
  grid-gap: ${({ gapLg }) => gapLg};
  padding-top: 180px;
  background: linear-gradient(231.58deg, #f83600 -53.35%, #f9d423 297.76%);

  ${Media.SM} {
    grid-gap: ${({ gapSm }) => gapSm};
    padding-top: 16px;
    padding-inline: 16px;
  }
`;

const Logo = styled.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.1px;
  color: #ffffff;

  ${Media.SM} {
    font-size: 18px;
    line-height: 28px;
  }
`;

const StyledForm = styled.div`
  max-width: 528px;
  width: 100%;
  padding: 48px 56px;
  background: #ffffff;
  border-radius: 16px;

  ${Media.SM} {
    max-width: 100%;
    padding: 24px 16px;
  }
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
`;

export { StyledAuthLayout, Logo, StyledForm, Title };
