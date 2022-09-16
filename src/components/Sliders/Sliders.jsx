import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css/autoplay";
import "./styles.css";

// import required modules

import Slider1 from "./Slider1";
import Slider2 from "./Slider2";
import Slider3 from "./Slider3";
import Slider4 from "./Slider4";
import Slider5 from "./Slider5";

const Sliders = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      slidesPerView={1}
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
