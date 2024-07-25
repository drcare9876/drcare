import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Slider2.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

 const Slider2=()=> {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dofhvhvnf/image/upload/v1719340580/Aseets/human-organs-character-composition_23-2150610255.jpg_goq6hw-removebg-preview_cabtyv.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dofhvhvnf/image/upload/v1719340379/Aseets/3d-human-body-parts-background_23-2151525646.jpg_aea14l-removebg-preview_zxdzjm.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dofhvhvnf/image/upload/v1719340225/Aseets/isometric-clip-art-style-hospital-modern-building-images-with-ai-generated_545052-3934.jpg_mdlb51-removebg-preview_omvtec.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dofhvhvnf/image/upload/v1719130626/Aseets/10775755-removebg-preview_vhfnma.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dofhvhvnf/image/upload/v1719040240/Aseets/user_mzqnny.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dofhvhvnf/image/upload/v1719040220/Aseets/store_voo2mo.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dofhvhvnf/image/upload/v1719040234/Aseets/location_doru0c.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dofhvhvnf/image/upload/v1719130626/Aseets/10775755-removebg-preview_vhfnma.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dofhvhvnf/image/upload/v1719040234/Aseets/location_doru0c.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider2;
