import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import Slider1 from "./Slider1";
import Slider2 from "./Slider2";
import Slider3 from "./Slider3";
import Slider4 from "./Slider4";
import Slider5 from "./Slider5";

const Sliders = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Slider1 />
      </SwiperSlide>
      <SwiperSlide>
        <Slider2 />
      </SwiperSlide>
      <SwiperSlide>
        <Slider3 />
      </SwiperSlide>
      <SwiperSlide>
        <Slider4 />
      </SwiperSlide>
      <SwiperSlide>
        <Slider5 />
      </SwiperSlide>
    </Swiper>
  );
};

export default Sliders;
