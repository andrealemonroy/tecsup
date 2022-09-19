import React from "react";
import { Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { SwiperSlide } from "swiper/react";

import CareerSlider from "../CareerSlider";

const Slider3 = ({ myRef, moveForm, mobileRef }) => {
  const ArrayImage = [
    {
      nombre: "img/TIP3/Administración de Datos_2 años_DESKTOP.png",
      descripcion: "Administración de Datos - 2 años",
    },
    {
      nombre: "img/TIP3/Administración y Redes de Comunicaciones_DESKTOP.png",
      descripcion: "Administración y Redes de Comunicaciones",
    },
    {
      nombre: "img/TIP3/Aviónica y Mecánica Aeronáutica_DESKTOP.png",
      descripcion: "Aviónica y Mecánica Aeronáutica",
    },
    {
      nombre: "img/TIP3/Big Data y Ciencia de Datos_DESKTOP.png",
      descripcion: "Big Data y Ciencia de Datos",
    },
    {
      nombre: "img/TIP3/Diseño Industrial_DESKTOP.png",
      descripcion: "Diseño Industrial",
    },
    {
      nombre:
        "img/TIP3/Diseño y Desarrollo de Simuladores y Videojuegos_DESKTOP.png",
      descripcion: "Diseño y Desarrollo de Simuladores y Videojuegos",
    },
    {
      nombre: "img/TIP3/Diseño y Desarrollo de Software_DESKTOP.png",
      descripcion: "Diseño y Desarrollo de Software",
    },
    {
      nombre: "img/TIP3/Electricidad Industrial_DESKTOP.png",
      descripcion: "Electricidad Industrial",
    },
    {
      nombre: "img/TIP3/Electrónica y Automatización Industrial_DESKTOP.png",
      descripcion: "Electrónica y Automatización Industrial",
    },
    {
      nombre:
        "img/TIP3/Gestión y Mantenimiento de Maquinaría Industrial_DESKTOP.png",
      descripcion: "Gestión y Mantenimiento de Maquinaría Industrial",
    },
    {
      nombre:
        "img/TIP3/Gestión y Mantenimiento de Maquinaría Pesada_DESKTOP.png",
      descripcion: "Gestión y Mantenimiento de Maquinaría Pesada",
    },
    {
      nombre: "img/TIP3/Logística Digital Integrada_DESKTOP.png",
      descripcion: "Logística Digital Integrada",
    },
    {
      nombre: "img/TIP3/Mantenimiento de Equipo Pesado_DESKTOP.png",
      descripcion: "Mantenimiento de Equipo Pesado",
    },
    {
      nombre: "img/TIP3/Mecatrónica Industrial_DESKTOP.png",
      descripcion: "Mecatrónica Industrial",
    },
    {
      nombre: "img/TIP3/Modelado y Animación Digital_DESKTOP.png",
      descripcion: "Modelado y Animación Digital",
    },
    {
      nombre: "img/TIP3/Operaciones Mineras_DESKTOP.png",
      descripcion: "Operaciones Mineras",
    },
    {
      nombre: "img/TIP3/Procesos Químicos y Metalúrgicos_DESKTOP.png",
      descripcion: "Procesos Químicos y Metalúrgicos",
    },
    {
      nombre: "img/TIP3/Producción y Gestión Industrial_DESKTOP.png",
      descripcion: "Producción y Gestión Industrial",
    },
  ];

  const executeScroll = () => {
    window.innerWidth > 768
      ? myRef.current?.scrollIntoView({ behavior: "smooth" })
      : mobileRef.current?.scrollIntoView({ behavior: "smooth" });
    moveForm();
  };
  return (
    <div className="about bg-green w-screen flex justify-center items-center h-fit">
      <div className="block sm:flex h-full items-center">
        <div className=" relative m-auto sm:w-1/2 justify-center">
          <div className="block sm:flex justify-center items-center sm:ml-10">
            <img src="img/about-ship.svg" className="h-40 hidden sm:block" />
            <div className="flex flex-col sm:mx-8">
              <div className="">
                <h3 className="text-lg sm:text-2xl text-white font-bold text-center">
                  AQUÍ VAN
                </h3>
                <h3 className="text-4xl sm:text-6xl font-bold text-white text-center">
                  5 DATOS
                </h3>
                <div className="fira-light text-white">
                  <p className="text-center text-md sm:text-xl">
                    Sobre Tecsup que{" "}
                  </p>
                  <p className="text-center text-md sm:text-xl">
                    te ayudarán a tomar
                  </p>
                  <p className="text-center text-md sm:text-xl">
                    la mejor decisión
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 hidden sm:flex sm:ml-32">
            <img src="img/arrow-green.svg" />
          </div>
        </div>
        <div className="flex sm:w-1/2 relative justify-center sm:pr-10">
          <div className="sm:w-full w-screen p-7 sm:p-0">
            <div className="h-[60px] w-40 bg-black rounded-tl-3xl rounded-br-3xl flex items-center relative m-auto mb-10">
              <p className="text-white m-auto text-center text-5xl font-black">
                TIP
              </p>
              <p className="absolute text-white font-black text-8xl ml-36">3</p>
            </div>
            <div className="text-white rubik font-bold text-3xl text-center mt-4 ">
              <p>Cuente con CARRERAS CON FUTURO</p>
              <p>y alta demanda laboral</p>
            </div>
            <div className="h-1 w-20 bg-black m-auto mt-4"></div>
            <div className="w-full m-auto mt-4">
              <p className="fira-light text-white sm:w-10/12 m-auto">
                Estamos viviendo lo nunca antes pensado,
                <span className="fira-medium">
                  {" "}
                  el mundo se ACELERÓ X10 y como el futuro de este país debes
                  estar a su ritmo.
                </span>
              </p>
            </div>
            <div className="flex m-auto gap-1 sm:max-w-xl">
              <Swiper
                centeredSlides={true}
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                  240: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    centeredSlides: false,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                }}
              >
                {ArrayImage.map((item) => (
                  <SwiperSlide>
                    <CareerSlider
                      myRef={myRef}
                      img={item.nombre}
                      name={item.descripcion}
                      moveForm={moveForm}
                      mobileRef={mobileRef}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="">
            <img
              src="img/graduation.svg"
              className="sm:w-40 absolute sm:right-10 w-32 sm:top-auto top-0 right-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider3;
