import React from 'react';

const Slider1 = () => {
  return (
    <div className="about h-screen bg-green w-screen flex justify-center w-fit">
      <div className="block sm:flex h-full sm:space-x-60">
        <div className=" relative m-auto">
          <div className="flex justify-center items-center">
          <img src="img/about-ship.svg" className="h-40 hidden sm:block" />
            <div className="flex flex-col m-auto">
              <div className="m-auto">
                <h3 className="text-lg sm:text-2xl text-lightBlue font-bold text-center">
                  AQUÍ VAN
                </h3>
                <h3 className="text-4xl sm:text-6xl font-bold text-lightBlue text-center">
                  5 DATOS
                </h3>
                <div className="fira-light">
                  <p className="text-center text-md sm:text-xl">
                    Sobre Tecsup que{' '}
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
          <div className="mt-20 hidden sm:block">
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
            <div className="flex space-x-4">
              <div>
                <img
                  src="img/about-tip3-1.svg"
                  className="h-20 sm:h-48 m-auto mt-4 cursor-pointer"
                />
                <p className="text-white text-center my-2">Carrera 1</p>
                <div className="bg-black h-15 w-fit sm:w-48 px-2 py-2 rounded m-auto cursor-pointer">
                  <p className="text-white text-xs text-center">Más info plz</p>
                  <p className="text-center m-auto text-md sm:text-lg fira text-white font-bold ">
                    ¡Esta es mi carrera!
                  </p>
                </div>
              </div>

              <div>
                <img
                  src="img/about-tip3-2.svg"
                  className="h-20 sm:h-48 m-auto mt-4 cursor-pointer"
                />
                <p className="text-white text-center my-2">Carrera 2</p>
                <div className="bg-black h-15 w-fit sm:w-48 px-2 py-2 rounded m-auto cursor-pointer">
                  <p className="text-white text-xs text-center">Más info plz</p>
                  <p className="text-center m-auto text-md sm:text-lg fira text-white font-bold ">
                    ¡Esta es mi carrera!
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="img/about-tip3-3.svg"
                  className="h-20 sm:h-48 m-auto mt-4 cursor-pointer"
                />
                <p className="text-white text-center my-2">Carrera 3</p>
                <div className="bg-black h-15 w-fit sm:w-48 px-2 py-2 rounded m-auto cursor-pointer">
                  <p className="text-white text-xs text-center">Más info plz</p>
                  <p className="text-center m-auto text-md sm:text-lg fira text-white font-bold ">
                    ¡Esta es mi carrera!
                  </p>
                </div>
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
