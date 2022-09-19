import React from "react";
import { SwiperSlide } from "swiper/react";

const CareerSlider = ({ myRef, name, img, moveForm, mobileRef }) => {
  const executeScroll = () => {
    window.innerWidth > 768
      ? myRef.current?.scrollIntoView({ behavior: "smooth" })
      : mobileRef.current?.scrollIntoView({ behavior: "smooth" });
    moveForm();
  };
  console.log(myRef, name, img, moveForm, mobileRef);
  return (
    <SwiperSlide>
      <div className="block">
        <img src={img} className="h-20 sm:h-36 m-auto mt-4 cursor-pointer" />
        <p className="text-white text-center my-2 text-sm w-44">{name}</p>
        <div
          className="bg-dialog-button-3 text-center"
          onClick={() => executeScroll()}
        >
          <div className="m-auto">
            <p className="text-white text-xs text-center leading-4">
              Más info plz
            </p>
            <p className="text-center text-md fira text-white font-bold leading-4">
              ¡Esta es mi carrera!
            </p>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default CareerSlider;
