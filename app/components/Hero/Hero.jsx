'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import contactUs from '../../utils/whatsapp';	
import c from './Hero.module.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


export default function Hero() {
  return (
    <main className={c.cont}>
      <div className={c.contLeft} id='gobags'>
        <h2>GoBags</h2>
        <p className={c.textBox}>
          Fábrica, distribui e comercializa marcas próprias e licenciadas além
          de dar suporte a marcas e designers no Brasil, Europa e Ásia
          transformando desenhos, idéias ou conceitos em bolsas e acessórios de
          alto padrão. Fornecedora de marcas de alto luxo, a GO Bags desenvolve
          produtos com acabamento de alto valor agregado ao unir a técnica
          artesanal, tecnologia e equipamentos produtivos de última geração.
        </p>
        <button onClick={contactUs}>Fale conosco</button>
      </div>
      <div className={c.contRight}>
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={`mySwiper ${c.swiperCont}`}>
          <SwiperSlide>
            <img
              className={c.img}
              src="/bagorange-square.jpg"
              alt="orange bag"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img className={c.img} src="/yellowbag.jpg" alt="yellow bag" />
          </SwiperSlide>
          <SwiperSlide>
            <img className={c.img} src="/IMG_0489.jpg" alt="yellow bag" />
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
}
