import React from "react";

const Slider1 = () => {
  return (
    <div className="about h-screen bg-green">
      <div className="flex h-full">
        <div className=" relative m-auto">
          <div className="flex justify-center items-center">
            <img src="img/about-ship.svg" className="h-40" />
            <div className="flex flex-col m-auto">
              <div className="m-auto">
                <h3 className="text-2xl text-white font-bold text-center">
                  AQUÍ VAN
                </h3>
                <h3 className="text-6xl font-bold text-white text-center">
                  5 DATOS
                </h3>
                <div className="fira-light text-white">
                  <p className="text-center text-xl">Sobre Tecsup que </p>
                  <p className="text-center text-xl">te ayudarán a tomar</p>
                  <p className="text-center text-xl">la mejor decisión</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <img src="img/arrow-green.svg" />
          </div>
        </div>
        <div className="flex">
          <div>
            <div className="h-[68px] w-40 bg-black rounded-tl-3xl rounded-br-3xl flex items-center relative m-auto mt-10">
              <p className="text-white m-auto text-center text-6xl font-black">
                TIP
              </p>
              <p className="absolute text-white font-black text-8xl ml-36">3</p>
            </div>
            <div className="text-white rubik font-bold text-3xl text-center mt-4">
              <p>Cuente con CARRERAS CON FUTURO</p>
              <p>y alta demanda laboral</p>
            </div>
            <div className="h-1 w-20 bg-black m-auto mt-4"></div>
            <div className="w-96 m-auto mt-4">
              <p className="fira-light text-white ">
                Estamos viviendo lo nunca antes pensado, el mundo se ACELERÓ X10
                y como el futuro de este país debes estar a su ritmo.
              </p>
            </div>
            <div>
              <img
                src="img/about-video1.png"
                className="h-48 m-auto mt-4 cursor-pointer"
              />
            </div>
            <div>
              <p className="fira-light text-center">De aquí soy</p>
              <div className="bg-dialog-button">
                <p className="text-center m-auto text-xl rubik text-white font-bold">
                  ¡Quiero inscribirme YA!
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src="img/graduation.svg" className="w-40" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider1;
