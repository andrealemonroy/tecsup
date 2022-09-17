import React from 'react';

const Slider1 = () => {
  return (
    <div className="about bg-pink w-screen flex justify-center sm:h-screen items-center">
      <div className="block sm:flex h-full sm:space-x-60">
        <div className=" relative m-auto">
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
            <img src="img/arrow-pink.svg" />
          </div>
        </div>
        <div className="flex">
          <div>
            <div className="h-[68px] w-40 bg-black rounded-tl-3xl rounded-br-3xl flex items-center relative m-auto mt-10">
              <p className="text-white m-auto text-center text-6xl font-black">
                TIP
              </p>
              <p className="absolute text-white font-black text-8xl ml-36">4</p>
            </div>
            <div className="rubik font-bold text-3xl text-center mt-4">
              <p>Que POTENCIEN</p>
              <p>tu CARRERA PROFESIONAL</p>
            </div>
            <div className="h-1 w-20 bg-black m-auto my-4"></div>
            <div className="w-96 bg-gray-50 rounded-b-2xl h-32 px-4 py-6 m-auto">
              <p className="fira">
                <span className="font-semibold">
                  En Tecsup potenciamos tu talento,
                </span>{' '}
                ayudando a que te insertes en el mundo laboral desde 4to ciclo y
                eres asesorado por un docente.
              </p>
            </div>
            <div>
              <p className="fira-light text-center">De aquí soy</p>
              <div className="bg-pinkButton rounded h-15 w-fit px-10 py-2 m-auto cursor-pointer">
                <p className="text-center m-auto text-xl rubik text-white font-bold">
                  ¡Quiero inscribirme YA!
                </p>
              </div>
            </div>
            <div>
              <p className="fira-light text-center pt-10">
                Nuestros egresados trabajan en:
              </p>
            </div>
            {/* <section className="customer-logos slider">
              <div className="slide">
                <img src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg" />
              </div>
              <div className="slide">
                <img src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg" />
              </div>
              <div className="slide">
                <img src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg" />
              </div>
              <div className="slide">
                <img src="https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg" />
              </div>
              <div className="slide">
                <img src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg" />
              </div>
              <div className="slide">
                <img src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg" />
              </div>
              <div className="slide">
                <img src="https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg" />
              </div>
            </section> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider1;
