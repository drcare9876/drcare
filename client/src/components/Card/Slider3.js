import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider3.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider3 = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://mercury.akamaized.net/i/b79d8a68a76733a021171f7c7e41330b_263859_0.jpg" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mercury.akamaized.net/i/df0f88cb31b322849ba366d9a5d0ab15_232025_0.jpg" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mercury.akamaized.net/i/e973c55db1133eeac6faa5511bad720b_55445_0.png" alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mercury.akamaized.net/i/fe07f52df87be7c2dea7754c242f28fc_271469_0.png" alt="Slide 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mercury.akamaized.net/i/8e065d21bf593d718235532d11f278e0_55448_0.gif" alt="Slide 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mercury.akamaized.net/i/a923f985a42f5d331fc6ef69ed777365_247824_0.jpg" alt="Slide 6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mercury.akamaized.net/i/14d7051747719e750e87e510836e2e8d_232035_0.jpg" alt="Slide 7" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mercury.akamaized.net/i/e79da7dbff64419b203841851de70768_201575_0.jpg" alt="Slide 8" />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Slider3;
