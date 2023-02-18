import styled, { css } from 'styled-components';
import { Swiper } from 'swiper/react';

import { Media } from '../../ui/media';

const StyledSlider = styled.div`
  width: 445px;
`;

const Image = styled.img`
  width: 445px;
  height: 593px;
  margin-bottom: 17px;
  object-fit: cover;
  border: 1px solid #a7a7a7;
  border-radius: 10px;
`;

const ImagePreview = styled.img`
  width: 65px;
  height: 86px;
  object-fit: cover;
  border: 1px solid #a7a7a7;
  border-radius: 3px;
`;

const SwiperMiniStyles = css`
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    width: 6px;
    height: 6px;
    background: white;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    width: 190px;
    border-radius: 5px;
    background: #a7a7a7;
  }
`;

const SwiperMini = styled(Swiper)`
  ${SwiperMiniStyles}
  overflow-x: scroll;
`;

export { StyledSlider, Image, ImagePreview, SwiperMini };
