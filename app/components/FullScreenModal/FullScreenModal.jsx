import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import c from './FullScreenModal.module.css';
import React from 'react';

export default function FullScreenModal({  images, initialIndex, onClose, isOpen, fullScreenModalImagesText }) {
  if (!isOpen) return null;
  return (
    <div className={c.cont}>
      <div className={c.wrapper}>
        <div className={c.leftBlock}>
          <Swiper
            pagination={{
              clickable: true,
            }}
            initialSlide={initialIndex} // Set the initial slide to the index passed as a prop
            modules={[Pagination]}
            className={`mySwiper ${c.swiperCont}`}>
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img className={c.img} src={image} alt={`image ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={c.rightBlock}>
          <p>{fullScreenModalImagesText}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
