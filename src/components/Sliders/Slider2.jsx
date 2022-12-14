import React from "react";

const Slider2 = ({ myRef, moveForm, mobileRef }) => {
  const executeScroll = () => {
    window.innerWidth > 768
      ? myRef.current?.scrollIntoView({ behavior: "smooth" })
      : mobileRef.current?.scrollIntoView({ behavior: "smooth" });
    moveForm();
  };
  return (
    <div className="about sm:h-screen w-screen flex justify-center bg-yellow items-center">
      <div className="block sm:flex h-full sm:space-x-48 items-center">
        <div className=" relative m-auto sm:w-1/2 justify-center">
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
            <img src="img/arrow-orange.svg" />
          </div>
        </div>
        <div className="flex sm:w-1/2 relative justify-center sm:px-0 px-4">
          <div className="sm:w-full w-screen p-10 sm:p-0">
            <div className="h-[60px] w-40 bg-black rounded-tl-3xl rounded-br-3xl flex items-center relative m-auto mb-10">
              <p className="text-white m-auto text-center text-5xl font-black">
                TIP
              </p>
              <p className="absolute text-red font-black text-8xl ml-36">2</p>
            </div>
            <div className="fira-light mt-4 leading-3">
              <p className="text-center text-xl">Que pueda brindarte</p>
            </div>
            <div className="rubik font-bold text-xl lg:text-3xl text-center mt-4 leading-3">
              <p>APOYO ECONÓMICO</p>
            </div>
            <div className="h-1 w-20 bg-pinkButton m-auto mt-4"></div>
            <div className="sm:w-96 m-auto mt-4">
              <p className="fira-light">
                En estos tiempos es un factor fundamental, tener un soporte con
                beneficios, becas y financiamiento puede ayudarte a lograr tu
                meta.
              </p>
            </div>
            <div>
              <img
                src="img/about-tip2-2.webp"
                className="h-48 m-auto mt-4 cursor-pointer"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="fira-light text-center my-2">Vamos con fe </p>

              <div className="flex justify-center ml-20">
                <div
                  className="bg-dialog-button-2"
                  onClick={() => executeScroll()}
                >
                  <p className="text-center m-auto text-xl rubik text-white font-bold">
                    ¡Quiero inscribirme!
                  </p>
                </div>
                <img
                  src="/img/about-tip1-button-ship.svg"
                  className="w-24 h-full button-ship"
                />
              </div>
            </div>
          </div>
          <div className="">
            <img
              src="img/about-tip2.svg"
              className="sm:w-60 absolute sm:left-2/3 w-32 sm:right-auto right-2 top-10 sm:top-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider2;
