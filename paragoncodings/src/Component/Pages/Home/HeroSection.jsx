import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Hero1 from './Hero1';
import Hero2 from './Hero2';
import Hero3 from './Hero3';

const HeroSection = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <Hero1 />
      </SwiperSlide>
      <SwiperSlide>
        <Hero2 />
      </SwiperSlide>
      <SwiperSlide>
        <Hero3 />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSection;