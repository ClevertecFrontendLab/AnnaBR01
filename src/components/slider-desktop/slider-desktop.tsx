import { useState } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperClass from 'swiper/types/swiper-class';
import { v4 as uuidv4 } from 'uuid';

import { Image, ImagePreview, StyledSlider, SwiperMini } from './styles';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

interface IProps {
  image: [{ url: string }];
  title: string;
}

export const SliderDesktop = ({ image, title }: IProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();

  return (
    <StyledSlider>
      <Swiper
        loop={true}
        spaceBetween={10}
        slidesPerView={1}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        data-test-id='slide-big'
      >
        {image.map((picture) => (
          <SwiperSlide key={uuidv4()}>
            <Image src={`https://strapi.cleverland.by${picture.url}`} alt={title} />
          </SwiperSlide>
        ))}
      </Swiper>

      <SwiperMini
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={30}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {image.map((picture) => (
          <SwiperSlide data-test-id='slide-mini' key={uuidv4()}>
            <ImagePreview src={`https://strapi.cleverland.by${picture.url}`} alt={title} />
          </SwiperSlide>
        ))}
      </SwiperMini>
    </StyledSlider>
  );
};
