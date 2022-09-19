import React from 'react';

const Slider3 = ({ myRef, moveForm, mobileRef }) => {
  const executeScroll = () => {
    window.innerWidth > 768
      ? myRef.current?.scrollIntoView({ behavior: 'smooth' })
      : mobileRef.current?.scrollIntoView({ behavior: 'smooth' });
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
                  {' '}
                  el mundo se ACELERÓ X10 y como el futuro de este país debes
                  estar a su ritmo.
                </span>
              </p>
            </div>
            <div className="flex m-auto gap-1 sm:max-w-xl">
              <div>
                <img
                  src="img/about-tip3-1.png"
                  className="h-20 sm:h-36 m-auto mt-4 cursor-pointer"
                />
                <p className="text-white text-center my-2">Aviónica y Mecánica Aeronáutica</p>
                <div
                  className="bg-dialog-button-3 text-center m-auto"
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

              <div className='hidden sm:block'>
                <img
                  src="img/about-tip3-2.png"
                  className="h-20 sm:h-36 m-auto mt-4 cursor-pointer"
                />
                <p className="text-white text-center my-2">Gestión y Mantenimiento de Maquinaría Pesada</p>
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
              <div>
                <img
                  src="img/about-tip3-3.png"
                  className="h-20 sm:h-36 m-auto mt-4 cursor-pointer"
                />
                <p className="text-white text-center my-2">Administración y Redes de Comunicaciones</p>
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
            </div>
          </div>
          <div className="">
            <img src="img/graduation.svg" className="sm:w-40 absolute sm:right-10 w-32 sm:top-auto top-0 right-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider3;
