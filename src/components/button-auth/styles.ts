import styled from 'styled-components';

import { Media } from '../../ui/media';

interface IProps {
  marginTopLg?: number;
  marginBottom?: number;
  marginTopSm?: number;
}

const StyledButtonAuth = styled.button.attrs<IProps>((props) => ({
  marginTopLg: `${props.marginTopLg}px`,
  marginBottom: `${props.marginBottom}px`,
  marginTopSm: `${props.marginTopSm}px`,
}))<IProps>`
  width: 100%;
  padding: 14px;
  margin-top: ${({ marginTopLg }) => marginTopLg};
  margin-bottom: ${({ marginBottom }) => marginBottom};
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
    margin-top: ${({ marginTopSm }) => marginTopSm};
    font-size: 12px;
    line-height: 18px;
  }
`;

export { StyledButtonAuth };
