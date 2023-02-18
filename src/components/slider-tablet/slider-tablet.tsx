import { Navigation, Pagination } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';

import { Image, StyledSlider, StyledSwiper } from './styles';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface IProps {
  image: [{ url: string }];
  title: string;
}

export const SliderTablet = ({ image, title }: IProps) => (
  <StyledSlider>
    <StyledSwiper modules={[Navigation, Pagination]} pagination={{ clickable: true }} data-test-id='slide-big'>
      {image.map((picture) => (
        <SwiperSlide key={uuidv4()}>
          <Image src={`https://strapi.cleverland.by${picture.url}`} alt={title} />
        </SwiperSlide>
      ))}
    </StyledSwiper>
  </StyledSlider>
);
