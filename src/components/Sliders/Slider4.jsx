import React from "react";

const Slider4 = ({ myRef, moveForm, mobileRef }) => {
  const executeScroll = () => {
    window.innerWidth > 768
      ? myRef.current?.scrollIntoView({ behavior: "smooth" })
      : mobileRef.current?.scrollIntoView({ behavior: "smooth" });
    moveForm();
  };
  return (
    <div className="about bg-pink w-screen flex justify-center sm:h-screen items-center">
      <div className="block sm:flex h-full sm:space-x-40 items-center">
        <div className="relative m-auto sm:w-1/2">
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
            <img src="img/arrow-pink.svg" />
          </div>
        </div>
        <div className="relative flex sm:w-1/2">
          <div>
            <div className="h-[60px] w-40 bg-black rounded-tl-3xl rounded-br-3xl flex items-center relative m-auto">
              <p className="text-white m-auto text-center text-5xl font-black">
                TIP
              </p>
              <p className="absolute text-white font-black text-8xl ml-36">4</p>
            </div>
            <div className="rubik font-bold text-3xl text-center mt-8">
              <p>Que POTENCIEN</p>
              <p>tu CARRERA PROFESIONAL</p>
            </div>
            <div className="h-1 w-20 bg-black m-auto my-4"></div>
            <div className="flex flex-col">
              <div className="w-full sm:w-96 flex items-end justify-center m-auto">
                <div className="h-8 bg-green w-3/5 rounded-t-lg">
                  <p className="font-bold text-md text-white text-center mt-1">
                    Programa de PASANTÍAS
                  </p>
                </div>
                <div className="h-4 bg-pinkButton w-1/5 rounded-tr-lg"></div>
                <div className="h-4 bg-orange w-1/5 rounded-tr-lg"></div>
              </div>
              <div className="sm:w-96 bg-gray-50 rounded-b-2xl h-28 px-4 py-6 m-auto leading-5">
                <p className="fira">
                  <span className="font-semibold">
                    En Tecsup potenciamos tu talento,
                  </span>{" "}
                  ayudando a que te insertes en el mundo laboral desde 4to ciclo
                  y eres asesorado por un docente.
                </p>
              </div>
            </div>

            <div className="flex justify-center ml-20 mt-2">
              <div
                className="bg-dialog-button-4"
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
            <div>
              <p className="fira-light text-center pt-10 sm:pt-4">
                Nuestros egresados trabajan en:
              </p>
            </div>
            <section className="logos-container">
              <div class="tech-slideshow">
                <div class="mover-1"></div>
                <div class="mover-2"></div>
              </div>
            </section>
          </div>
          <div className="absolute right-0">
            <img
              src="img/about-tip3-plane.webp"
              className="h-20 sm:h-32 m-auto sm:mt-4 cursor-pointer z-0 mt-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider4;
