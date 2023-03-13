import styled from 'styled-components';

import { ContainerFlexColumn } from '../../ui/containers';
import { Media } from '../../ui/media';

interface IPropsAuth {
  gapLg: number;
  gapSm: number;
}

interface IPropsForm {
  paddingTop: number;
}

const StyledAuthLayout = styled(ContainerFlexColumn).attrs<IPropsAuth>((props) => ({
  gapLg: `${props.gapLg}px`,
  gapSm: `${props.gapSm}px`,
}))<IPropsAuth>`
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

const Title = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
`;

const StyledForm = styled.div.attrs<IPropsForm>((props) => ({
  paddingTop: `${props.paddingTop}px`,
}))<IPropsForm>`
  position: relative;
  max-width: 528px;
  width: 100%;
  padding-top: ${({ paddingTop }) => paddingTop};
  padding-bottom: 48px;
  padding-inline: 56px;
  background: #ffffff;
  border-radius: 16px;

  ${Media.SM} {
    max-width: 100%;
    padding-bottom: 24px;
    padding-inline: 16px;
  }
`;

export { StyledAuthLayout, Logo, StyledForm, Title };
