import React from 'react';

const Slider1 = () => {
  return (
    <div className="about sm:h-screen w-screen flex justify-center">
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
                  <p className="text-center text-md sm:text-xl">Sobre Tecsup que </p>
                  <p className="text-center text-md sm:text-xl">te ayudarán a tomar</p>
                  <p className="text-center text-md sm:text-xl">la mejor decisión</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 hidden sm:block">
            <img src="img/arrow-orange.svg" />
          </div>
        </div>
        <div className="flex">
          <div>
            <div className="h-[68px] w-40 bg-black rounded-tl-3xl rounded-br-3xl flex items-center relative m-auto mt-10">
              <p className="text-white m-auto text-center text-6xl font-black">
                TIP
              </p>
              <p className="absolute text-red font-black text-8xl ml-36">2</p>
            </div>
            <div className="fira-light mt-4">
              <p className="text-center text-xl">Que pueda brindarte</p>
            </div>
            <div className="rubik font-bold text-3xl text-center mt-4">
              <p>APOYO ECONÓMICO</p>
            </div>
            <div className="h-1 w-20 bg-lightBlue m-auto mt-4"></div>
            <div className="w-96 m-auto mt-4">
              <p className="fira-light">
                En estos tiempos es un factor fundamental, tener un soporte con
                beneficios, becas y financiamiento puede ayudarte a lograr tu
                meta.
              </p>
            </div>
            <div>
              <img
                src="img/about-video1.png"
                className="h-48 m-auto mt-4 cursor-pointer"
              />
            </div>
            <div className='flex flex-col justify-center'>
              <p className="fira-light text-center">Vamos con fe </p>
              <div className="bg-pinkButton rounded h-15 w-fit px-10 py-2 m-auto">
                <p className="text-center m-auto text-xl rubik text-white font-bold cursor-pointer">
                  ¡Quiero inscribirme!
                </p>
              </div>
            </div>
          </div>
          <div className='items-start'>
            <img src="img/about-tip2.svg" className="w-60" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider1;
