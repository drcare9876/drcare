import React from 'react'
import "./Slider1.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper/modules";
export default function Slider1() {
  return (
    <>
          <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dofhvhvnf/image/upload/v1719130626/Aseets/10775755-removebg-preview_vhfnma.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dofhvhvnf/image/upload/v1719340225/Aseets/isometric-clip-art-style-hospital-modern-building-images-with-ai-generated_545052-3934.jpg_mdlb51-removebg-preview_omvtec.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dofhvhvnf/image/upload/v1719340379/Aseets/3d-human-body-parts-background_23-2151525646.jpg_aea14l-removebg-preview_zxdzjm.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dofhvhvnf/image/upload/v1719340580/Aseets/human-organs-character-composition_23-2150610255.jpg_goq6hw-removebg-preview_cabtyv.png" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
