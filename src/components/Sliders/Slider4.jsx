import React from "react";

const Slider1 = () => {
  return (
    <div className="about h-screen bg-pink w-screen flex justify-center w-fit">
      <div className="flex h-full">
        <div className=" relative m-auto">
          <div className="flex justify-center items-center">
            <img src="img/about-ship.svg" className="h-40" />
            <div className="flex flex-col m-auto">
              <div className="m-auto">
                <h3 className="text-2xl font-bold text-center">AQUÍ VAN</h3>
                <h3 className="text-6xl font-bold  text-center">5 DATOS</h3>
                <div className="fira-light">
                  <p className="text-center text-xl">Sobre Tecsup que </p>
                  <p className="text-center text-xl">te ayudarán a tomar</p>
                  <p className="text-center text-xl">la mejor decisión</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20">
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
            <div className="h-1 w-20 bg-orangeDark m-auto mt-4"></div>
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
            <div>
              <p className="fira-light text-center pt-10">
                Nuestros egresados trabajan en:
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider1;
