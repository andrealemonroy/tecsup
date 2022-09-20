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

const Sliders = ({ myRef, moveForm, mobileRef }) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      slidesPerView={1}
      loop={true}
      effect="fade"
      fadeEffect={{
        crossFade: true,
      }}
    >
      <SwiperSlide>
        <Slider1 myRef={myRef} moveForm={moveForm} mobileRef={mobileRef} />
      </SwiperSlide>
      <SwiperSlide>
        <Slider2 myRef={myRef} moveForm={moveForm} mobileRef={mobileRef} />
      </SwiperSlide>
      <SwiperSlide>
        <Slider3 myRef={myRef} moveForm={moveForm} mobileRef={mobileRef} />
      </SwiperSlide>
      <SwiperSlide>
        <Slider4 myRef={myRef} moveForm={moveForm} mobileRef={mobileRef} />
      </SwiperSlide>
      <SwiperSlide>
        <Slider5 myRef={myRef} moveForm={moveForm} mobileRef={mobileRef} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Sliders;
