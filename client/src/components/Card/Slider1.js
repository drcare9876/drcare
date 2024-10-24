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
          <img src="https://res.cloudinary.com/dofhvhvnf/image/upload/v1729775833/HEART_1_l3p0jl.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dofhvhvnf/image/upload/v1729775833/DOCTOR_hxgmm9.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dofhvhvnf/image/upload/v1729775594/HEART_fz0gga.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
