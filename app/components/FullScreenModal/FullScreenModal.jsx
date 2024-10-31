import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import c from './FullScreenModal.module.css';
import { IoCloseOutline } from "react-icons/io5";
import React from 'react';

export default function FullScreenModal({ images, initialIndex, onClose, isOpen, fullScreenModalImagesText }) {
  const [textIndex, setTextIndex] = useState(initialIndex);

  // tracks the slide index so I can use it for the text
  const handleSlideChange = (swiper) => {
    setTextIndex(swiper.activeIndex);
  };


  if (!isOpen) return null;

  return (
    <div className={c.cont}>
      <div className={c.wrapper}>
        
        <div className={c.leftBlock}>
          <div className={c.swiperContainer}>
            <Swiper
              pagination={{ clickable: true }}
              navigation // Enable navigation
              initialSlide={initialIndex}
              loop={true}
              spaceBetween={30}
              grabCursor={true}
              modules={[Pagination, Navigation]}
              className={`mySwiper ${c.swiperCont}`}
              onSlideChange={handleSlideChange}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img className={c.img} src={image} alt={`image ${index + 1}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className={c.rightBlock}>
          <p className={c.text}>{fullScreenModalImagesText[textIndex]}</p>
          <button className={c.closeBtn} onClick={onClose}><IoCloseOutline className={c.icon} /></button>
        </div>
      </div>
    </div>
  );
}
