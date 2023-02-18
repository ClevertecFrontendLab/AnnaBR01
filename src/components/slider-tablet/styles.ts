import styled, { css } from 'styled-components';
import { Swiper } from 'swiper/react';

import { Media } from '../../ui/media';

const StyledSlider = styled.div`
  width: 136px;

  ${Media.SM} {
    width: 188px;
  }
`;

const Image = styled.img`
  width: 136px;
  height: 198px;
  margin-bottom: 15px;
  object-fit: cover;
  border: 1px solid #a7a7a7;
  border-radius: 3px;

  ${Media.SM} {
    width: 188px;
    height: 260px;
    border-radius: 10px;
  }
`;

const StyledSwiperStyles = css`
  .swiper-wrapper {
    padding-bottom: 25px;
  }

  /* .swiper-pagination {
    bottom: 0px;
  } */

  .swiper-pagination-bullet {
    width: 7px;
    height: 7px;
    background: #363636;
    border-radius: 50%;
  }
`;

const StyledSwiper = styled(Swiper)`
  ${StyledSwiperStyles}
`;

export { StyledSlider, Image, StyledSwiper };
