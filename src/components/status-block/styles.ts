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

const StyledStatusBlock = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: 32px;
  padding: 48px 96px;
  background: #ffffff;
  border-radius: 16px;

  ${Media.SM} {
    max-width: 100%;
    padding: 42px 16px 32px;
    grid-gap: 24px;
  }
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;

  ${Media.SM} {
    font-size: 18px;
    line-height: 28px;
  }
`;

const Message = styled.p`
  text-align: center;
  font-size: 16px;
  line-height: 24px;

  ${Media.SM} {
    font-size: 15px;
    line-height: 20px;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 14px;
  background: linear-gradient(231.58deg, #f83600 -53.35%, #f9d423 297.76%);
  border-radius: 30px;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  color: #ffffff;

  ${Media.SM} {
    padding: 11px;

    font-size: 12px;
    line-height: 18px;
  }
`;

export { StyledAuthLayout, Logo, StyledStatusBlock, Title, Message, Button };
