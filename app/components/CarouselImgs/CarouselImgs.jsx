'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import c from './CarouselImgs.module.css';

export default function CarouselImgs() {
  return (
    <div className={c.cont}>
      <Swiper
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}

        spaceBetween={30}
        slidesPerView={1}
        effect={'fade'}
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper">
        <SwiperSlide>
          <img className={c.imgs} src="/blackb.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={c.imgs} src="/blueb.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={c.imgs} src="/orange.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={c.imgs} src="/whiteb.webp" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
