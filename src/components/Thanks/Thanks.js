import logo from "../../logo.svg";
import "./Thanks.css";
import Input from "../Input";
import Sliders from "../Sliders/Sliders";
import Footer from "../Footer";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
function Thanks() {
  const myRef = useRef(null);
  const formRef = useRef(null);
  const directForm = useRef(null);
  // form states
  const [nombres, setNombres] = useState("");
  const [paterno, setPaterno] = useState("");
  const [materno, setMaterno] = useState("");
  const [correo, setCorreo] = useState("");
  const [celular, setCelular] = useState("");
  const [dni, setDni] = useState("");
  const [carrera, setCarrera] = useState("");
  const [modalidad, setModalidad] = useState("");
  const [acepta, setAcepta] = useState("");
  const [openCarreras, setOpenCarreras] = useState(false);
  const [openModalidad, setOpenModalidad] = useState(false);
  const [form, setForm] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const executeScroll = () => {
    myRef.current?.scrollIntoView({ behavior: "smooth" });
    setForm(true);
  };
  const executeScrollMobile = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
    setForm(true);
  };

  const moveForm = () => {
    setForm(true);
  };

  const saveFile = () => {
    window.open("/files/politicas_privacidad.pdf");
  };

  useEffect(() => {
    document.getElementById("vid1").addEventListener(
      "loadedmetadata",
      function () {
        this.currentTime = 4;
      },
      false
    );
    document.getElementById("vid2").addEventListener(
      "loadedmetadata",
      function () {
        this.currentTime = 4;
      },
      false
    );
  }, []);

  return (
    <div className="bg-white sm:m-auto relative" ref={myRef}>
      <div className="sm:h-20 flex justify-center align-middle items-center py-4">
        <img className="h-12" src="/img/logo.svg" />
      </div>
      <div className="header height-header">
        <div className="sm:max-w-[1440px] height-header sm:flex relative m-auto">
          <img
            src="/img/header-face.png"
            className="hidden sm:block absolute left-1/2 ml-20 h-12 mt-28 animationRectangleText"
          />
          <img
            src="/img/header-face.png"
            className="hidden sm:block absolute left-80 mt-96 h-16 animationRectangleText"
          />
          <div className="sm:w-3/5 flex">
            <div className="inherit z-10">
              <img
                src="/img/header-plane.png"
                className="absolute top-20 left-96 hidden sm:block animationRectangleText"
              />
              <div className="sm:m-20 p-10 sm:p-0 animationText">
                <h1 className="text-white font-medium sm:text-3xl text-xl">
                  ÚNETE A GRACIAS LA
                </h1>
                <h1 className="text-yellow font-black text-5xl">MEJOR</h1>
                <div className="flex">
                  <div>
                    <h1 className="text-yellow font-black text-5xl">PARTE</h1>
                  </div>
                  <div className="ml-5">
                    <img src="/img/header-arrow.svg" className="h-12" />
                  </div>
                </div>
                <h1 className="text-white font-medium sm:text-3xl text-xl">
                  DE LA TECNOLOGÍA
                </h1>
                <div className="h-0.5 bg-white w-10 sm:my-10"></div>
                <h1 className="text-yellow font-black sm:text-4xl text-2xl sm:w-full w-40 sm:mt-0 mt-20">
                  ADMISIÓN 2023-01
                </h1>
                <div className="block sm:hidden mt-2">
                  <div
                    className="cursor-pointer border-2 border-white rounded text-white px-2 py-1 w-fit"
                    onClick={() => executeScrollMobile()}
                  >
                    Postula a Tecsup
                  </div>
                </div>
              </div>
              <div className="sm:flex absolute bottom-0 left-36 rubik hidden">
                <img
                  src="/img/header-rectangle.svg"
                  className="h-40 animationRectangle"
                />
                <div className="absolute left-44 font-semibold text-xl mt-4 animationRectangleText">
                  Postula a TECSUP
                </div>
                <div className="absolute left-36 top-1/3 border-2 border-white rounded px-8 py-2 font-semibold text-xl animationRectangleText">
                  ADMISIÓN 23-01
                </div>
              </div>
            </div>
            <div className="sm:w-1/5 sm:flex items-end hidden">
              <img
                src="/img/header-person.png"
                className="absolute img-person animationRectangleText z-1 md:z-10 sm:z-20"
              />
            </div>
            <div>
              <img
                src="img/header-person-mobile.svg"
                className="sm:hidden block top-80 animationRectangleText"
              />
            </div>
          </div>
          <div className=" sm:w-2/5 sm:flex sm:flex-col sm:ml-20 mx-4 sm:mx-0 sm:pb-0 pb-4 sm:px-20 z-10 relative">
            <div className="bg-white p-4 sm:flex sm:flex-col space-y-4 h-3/4 md:h-2/4   rounded-2xl sm:w-[440px] w-fit mt-20">
              <div className="text-center font-bold futura text-3xl leading-5 leading-9 items-center sm:pt-16 pt-1.5 ">
                <p>GRACIAS POR</p>
                <p>REGISTRARTE</p>
              </div>
              <p className="px-20 text-center avenir text-base sm:text-xl">
                Pronto uno de nuestros asesores se pondrán en contacto contigo.
              </p>
            </div>
            <div>
              <img
                src="/img/header-face.png"
                className="absolute mt-4 h-20 hidden sm:block animationRectangleText"
              />
            </div>
          </div>
          <img
            src="/img/header-person-mobile_1.png"
            className="absolute bottom-0 h-5/6 sm:hidden z-0 right-0 animationRectangleText"
          />
        </div>
      </div>
      <Sliders myRef={myRef} moveForm={moveForm} mobileRef={formRef} />
      <div className="testimonies sm:h-screen bg-lightBlack">
        <div className="sm:flex h-full justify-center">
          <div className="sm:w-5/12 sm:mt-40">
            <h3 className="text-2xl sm:text-4xl text-white rubik font-bold text-center pt-8 sm:pt-0">
              ¿QUÉ DICEN
            </h3>
            <h3 className="text-2xl sm:text-4xl text-white rubik font-bold text-center">
              NUESTROS EGRESADOS?
            </h3>
            <div className="sm:flex justify-center mt-4">
              <Swiper
                centeredSlides={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                slidesPerView={1}
                paused={true}
                modules={[Autoplay, Pagination, Navigation]}
              >
                <SwiperSlide>
                  <div className="pb-8">
                    <video
                      width="320"
                      controls
                      id="vid1"
                      className="rounded-xl"
                    >
                      <source
                        src="/videos/4-ENTREVISTA.mp4"
                        className="rounded-xl"
                      />
                    </video>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="pb-8">
                    <video
                      width="320"
                      controls
                      id="vid2"
                      className="rounded-xl"
                    >
                      <source
                        src="/videos/11-ENTREVISTA.mp4"
                        className="rounded-xl"
                      />
                    </video>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="pb-8">
                    <video
                      width="320"
                      controls
                      id="vid2"
                      className="rounded-xl"
                    >
                      <source
                        src="/videos/11-ENTREVISTA.mp4"
                        className="rounded-xl"
                      />
                    </video>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="sm:w-5/12 flex justify-end">
            <div className="sm:w-3/12 sm:flex sm:flex-col-reverse items-end mb-20 flex flex-col-reverse">
              <div
                className="bg-yellow h-30 w-40 sm:w-60 px-4 rounded-xl text-center py-2 cursor-pointer"
                onClick={executeScroll}
              >
                <p className="avenir sm:text-lg text-xs">Este es mi momento</p>
                <p className="futura font-bold text-md sm:text-xl">
                  ¡Quiero inscribirme!
                </p>
              </div>
              <img
                src="/img/testimonies-face.png"
                className="w-20 sm:w-44 h-auto"
              />
            </div>
            <div className="sm:flex items-end justify-end">
              <img src="/img/testimonies-person.png" className="sm:h-3/4" />
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <Footer />
      <img
        src="/img/curves.png"
        className="absolute bottom-12 right-0 z-10 curve w-40 hidden sm:block"
      />
    </div>
  );
}

export default Thanks;
