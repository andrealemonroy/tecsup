import React from "react";

const Slider1 = () => {
  return (
    <div className="about h-screen">
      <div className="flex h-full">
        <div className=" relative m-auto">
          <div className="flex justify-center items-center">
            <img src="img/about-ship.svg" className="h-40" />
            <div className="flex flex-col m-auto">
              <div className="m-auto">
                <h3 className="text-2xl text-lightBlue font-bold text-center">
                  AQUÍ VAN
                </h3>
                <h3 className="text-6xl font-bold text-lightBlue text-center">
                  5 DATOS
                </h3>
                <div className="fira-light">
                  <p className="text-center text-xl">Sobre Tecsup que </p>
                  <p className="text-center text-xl">te ayudarán a tomar</p>
                  <p className="text-center text-xl">la mejor decisión</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <img src="img/body-arrows.svg" />
          </div>
        </div>
        <div className="flex">
          <div>
            <div className="h-[68px] w-40 bg-black rounded-tl-3xl rounded-br-3xl flex items-center relative m-auto mt-10">
              <p className="text-white m-auto text-center text-6xl font-black">
                TIP
              </p>
              <p className="absolute text-lightBlue font-black text-8xl ml-36">
                1
              </p>
            </div>
            <div className="fira-light mt-4">
              <p className="text-center text-xl">Asegúrate de que la</p>
              <p className="text-center text-xl">
                institución que elijas cuente con
              </p>
            </div>
            <div className="rubik font-bold text-3xl text-center mt-4">
              <p>PRESTIGIO, RESPALDO</p>
              <p>Y EXPERIENCIA</p>
            </div>
            <div className="h-1 w-20 bg-lightBlue m-auto mt-4"></div>
            <div className="w-96 m-auto mt-4">
              <p className="fira-light">
                Es muy importante conocer todas las ventajasde la institución
                donde vas a estudiar, así comosi está{" "}
                <span className="fira-medium">licenciada</span>, si tiene
                <span className="fira-medium">convenios</span> y cuál essu
                enfoque o la{" "}
                <span className="fira-medium">visión a futuro.</span>
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
                  ¡Dame info!
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src="img/about-books.svg" className="w-40" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider1;
