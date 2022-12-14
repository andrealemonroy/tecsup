import React from 'react';

const CareerSlider = ({ myRef, name, img, moveForm, mobileRef }) => {
  const executeScroll = () => {
    window.innerWidth > 768
      ? myRef.current?.scrollIntoView({ behavior: 'smooth' })
      : mobileRef.current?.scrollIntoView({ behavior: 'smooth' });
    moveForm();
  };
  return (
    <div className="block">
      <img src={img} className="h-20 sm:h-36 m-auto mt-4 cursor-pointer" />
      <p className="text-white text-center my-2 text-sm w-44 h-10 leading-4 flex items-center justify-center">{name}</p>
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
  );
};

export default CareerSlider;
