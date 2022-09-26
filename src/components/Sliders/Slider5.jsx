import React from "react";

const Slider5 = ({ myRef, moveForm, mobileRef }) => {
  const executeScroll = () => {
    window.innerWidth > 768
      ? myRef.current?.scrollIntoView({ behavior: "smooth" })
      : mobileRef.current?.scrollIntoView({ behavior: "smooth" });
    moveForm();
  };
  return (
    <div className="about bg-orange w-screen flex justify-center sm:h-screen items-center">
      <div className="block sm:flex h-full sm:space-x-40 items-center">
        <div className=" relative m-auto sm:w-1/2">
          <div className="flex justify-center items-center">
            <img src="img/about-ship.svg" className="h-40 hidden sm:block" />
            <div className="flex flex-col m-auto">
              <div className="m-auto">
                <h3 className="text-lg sm:text-2xl text-black font-bold text-center">
                  AQUÍ VAN
                </h3>
                <h3 className="text-4xl sm:text-6xl font-bold text-black text-center">
                  5 DATOS
                </h3>
                <div className="fira-light">
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
          <div className="mt-20 hidden sm:block">
            <img src="img/arrow-orange-dark.svg" />
          </div>
        </div>
        <div className="flex sm:w-1/2 relative">
          <div>
            <div className="h-[60px] w-40 bg-black rounded-tl-3xl rounded-br-3xl flex items-center relative m-auto mt-4">
              <p className="text-white m-auto text-center text-5xl font-black">
                TIP
              </p>
              <p className="absolute text-white font-black text-8xl ml-36">5</p>
            </div>
            <div className="fira-light mt-4 leading-5">
              <p className="text-center sm:text-xl text-md mx-10 lg:mx-0">
                Que cuente con las{" "}
                <span className="fira-medium">herramientas, laboratorios,</span>
              </p>
              <p className="text-center sm:text-xl text-md">
                <span className="fira-medium">
                  talleres y tecnología que impulsen tu carrera.
                </span>
              </p>
            </div>
            <div className="rubik font-bold text-2xl lg:text-3xl text-center mt-4">
              <p>INFRAESTRUCTURA</p>
            </div>
            <div className="h-1 w-20 bg-orangeButton m-auto mt-4"></div>
            <div className="w-96 m-auto mt-4">
              <p className="fira-light mx-8 lg:m-auto">
                Un buen profesional no solo necesita de TEORÍA, debe de
                prepararse con la tecnología con la que actualmente trabajan las
                empresas.
              </p>
            </div>
            <div>
              <img
                src="img/about-tip5-img.webp"
                className="h-48 m-auto mt-4 cursor-pointer"
              />
            </div>
            <div>
              <p className="fira-light text-center mt-2">¡Lo decidí!</p>
              <div className="flex justify-center ml-20 mt-2">
                <div
                  className="bg-dialog-button-5"
                  onClick={() => executeScroll()}
                >
                  <p className="text-center text-xl rubik text-white font-bold leading-6 mt-4">
                    ¡Quiero
                  </p>
                  <p className="text-center text-xl rubik text-white font-bold leading-6">
                    inscribirme YA!
                  </p>
                </div>
                <img
                  src="/img/about-tip1-button-ship.svg"
                  className="w-28 h-full button-ship-4"
                />
              </div>
            </div>
          </div>
          <div className="sm:block hidden">
            <img src="img/rocket.svg" className="w-24 absolute top-40" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider5;
