import logo from "./logo.svg";
import "./App.css";
import Input from "./components/Input";
import Sliders from "./components/Sliders/Sliders";
import Footer from "./components/Footer";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Nombres: nombres,
      Paterno: paterno,
      Materno: materno,
      Correo: correo,
      Celular: celular,
      DNI: dni,
      Carrera: carrera,
      Modalidad: modalidad,
      Aceptacion_politicas_privacidad: acepta,
    };

    axios
      .post(
        "https://sheet.best/api/sheets/af09fd96-e7a2-4dcf-84d0-c0f30a7b03ff",
        data
      )
      .then((response) => {
        console.log(response);
        setNombres("");
        setPaterno("");
        setMaterno("");
        setCorreo("");
        setCelular("");
        setDni("");
        setCarrera("");
        setModalidad("");
        setAcepta("");
        setEnviado(true);
        toast("Gracias por registrarse.");
      });
  };
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
      <ToastContainer autoClose={1000} />
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
                  ÚNETE A LA
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
            <div
              className={`${
                form ? "form" : ""
              } bg-white p-4 sm:flex sm:flex-col space-y-4 h-fit rounded-2xl sm:w-[440px] w-fit mt-20`}
              ref={formRef}
            >
              <div className="text-center text-lg font-bold futura leading-5">
                <p>Inscríbete AHORA y</p>
                <p>obtén BENEFICIOS ÚNICOS</p>
              </div>
              <form
                onSubmit={handleSubmit}
                className="sm:flex sm:flex-col space-y-4"
                ref={directForm}
              >
                <input
                  className="w-full border appearance-none border-lightBlue rounded py-2 px-4"
                  type="text"
                  placeholder="Nombres*"
                  onChange={(e) => setNombres(e.target.value)}
                  value={nombres}
                />
                <div className="flex space-x-2">
                  <input
                    className="w-full border appearance-none border-lightBlue rounded py-2 px-4"
                    type="text"
                    placeholder="Apellido paterno*"
                    onChange={(e) => setPaterno(e.target.value)}
                    value={paterno}
                  />
                  <input
                    className="w-full border appearance-none border-lightBlue rounded py-2 px-4"
                    type="text"
                    placeholder="Apellido materno*"
                    onChange={(e) => setMaterno(e.target.value)}
                    value={materno}
                  />
                </div>
                <input
                  className="w-full border appearance-none border-lightBlue rounded py-2 px-4"
                  type="text"
                  placeholder="Correo electrónico*"
                  onChange={(e) => setCorreo(e.target.value)}
                  value={correo}
                />
                <div className="flex space-x-2">
                  <input
                    className="w-full border appearance-none border-lightBlue rounded py-2 px-4"
                    type="text"
                    placeholder="Celular*"
                    onChange={(e) => setCelular(e.target.value)}
                    value={celular}
                  />
                  <input
                    className="w-full border appearance-none border-lightBlue rounded py-2 px-4"
                    type="text"
                    placeholder="DNI*"
                    onChange={(e) => setDni(e.target.value)}
                    value={dni}
                  />
                </div>
                <div className="flex space-x-2">
                  <div className="w-full">
                    <input
                      className="select cursor-pointer w-full h-10 pl-3 pr-6 text-base placeholder-gray-400 border border-lightBlue rounded appearance-none focus:shadow-outline"
                      type="text"
                      placeholder="Seleccione Carrera*"
                      onClick={() => setOpenCarreras(!openCarreras)}
                      value={carrera.replace(/_/g, " ")}
                    ></input>
                    {openCarreras && (
                      <div className="w-full absolute  max-w-[200px] z-50 overflow-scroll h-40">
                        <div
                          className="bg-white px-4 py-2 cursor-pointer text-sm hover:bg-gray-50 border border-lightBlue text-gray-800"
                          onClick={(e) => {
                            setOpenCarreras(false);
                            setCarrera("Administración_de_datos");
                          }}
                        >
                          Administración de datos
                        </div>
                        <div
                          className="bg-white px-4 py-2 cursor-pointer text-sm hover:bg-gray-50 border border-lightBlue text-gray-800"
                          onClick={(e) => {
                            setOpenCarreras(false);
                            setCarrera(
                              "Administración_de_Redes_y_Comunicaciones"
                            );
                          }}
                        >
                          Administración de Redes y Comunicaciones
                        </div>
                        <div
                          className="bg-white px-4 py-2 cursor-pointer text-sm hover:bg-gray-50 border border-lightBlue text-gray-800"
                          onClick={(e) => {
                            setOpenCarreras(false);
                            setCarrera("Big_Data_y_Ciencia_de_Datos");
                          }}
                        >
                          Big Data y Ciencia de Datos
                        </div>
                        <div
                          className="bg-white px-4 py-2 cursor-pointer text-sm hover:bg-gray-50 border border-lightBlue text-gray-800"
                          onClick={(e) => {
                            setOpenCarreras(false);
                            setCarrera(
                              "Diseño_y_Desarrollo_de_Simuladores_y_Videojuegos"
                            );
                          }}
                        >
                          Diseño y Desarrollo de Simuladores y Videojuegos
                        </div>
                        <div
                          className="bg-white px-4 py-2 cursor-pointer text-sm hover:bg-gray-50 border border-lightBlue text-gray-800"
                          onClick={(e) => {
                            setOpenCarreras(false);
                            setCarrera("Diseño_y_Desarrollo_de_Software");
                          }}
                        >
                          Diseño y Desarrollo de Software
                        </div>
                        <div
                          className="bg-white px-4 py-2 cursor-pointer text-sm hover:bg-gray-50 border border-lightBlue text-gray-800"
                          onClick={(e) => {
                            setOpenCarreras(false);
                            setCarrera("Modelado_y_Animación_Digital");
                          }}
                        >
                          Modelado y Animación Digital
                        </div>
                        <div
                          className="bg-white px-4 py-2 cursor-pointer text-sm hover:bg-gray-50 border border-lightBlue text-gray-800"
                          onClick={(e) => {
                            setOpenCarreras(false);
                            setCarrera("Operaciones_Mineras");
                          }}
                        >
                          Operaciones Mineras
                        </div>
                        <div
                          className="bg-white px-4 py-2 cursor-pointer text-sm hover:bg-gray-50 border border-lightBlue text-gray-800"
                          onClick={(e) => {
                            setOpenCarreras(false);
                            setCarrera("Procesos_Químicos_y_Metalúrgicos");
                          }}
                        >
                          Procesos Químicos y Metalúrgicos
                        </div>
                        <div
                          className="bg-white px-4 py-2 cursor-pointer text-sm hover:bg-gray-50 border border-lightBlue text-gray-800"
                          onClick={(e) => {
                            setOpenCarreras(false);
                            setCarrera("Producción_y_Gestión_Industrial");
                          }}
                        >
                          Producción y Gestión Industrial
                        </div>
                        <div
                          className="bg-white px-4 py-2 cursor-pointer text-sm hover:bg-gray-50 border border-lightBlue text-gray-800"
                          onClick={(e) => {
                            setOpenCarreras(false);
                            setCarrera("Logística_Digital_Integrada");
                          }}
                        >
                          Logística Digital Integrada
                        </div>
                        <div
                          className="bg-white px-4 py-2 cursor-pointer text-sm hover:bg-gray-50 border border-lightBlue text-gray-800"
                          onClick={(e) => {
                            setOpenCarreras(false);
                            setCarrera("Diseño_Industrial");
                          }}
                        >
                          Diseño Industrial{" "}
                        </div>
                        <div
                          className="bg-white px-4 py-2 cursor-pointer text-sm hover:bg-gray-50 border border-lightBlue text-gray-800"
                          onClick={(e) => {
                            setOpenCarreras(false);
                            setCarrera("Aviónica_y_Mecánica_Aeronáutica");
                          }}
                        >
                          Aviónica y Mecánica Aeronáutica
                        </div>
                        <div
                          className="bg-white px-4 py-2 cursor-pointer text-sm hover:bg-gray-50 border border-lightBlue text-gray-800"
                          onClick={(e) => {
                            setOpenCarreras(false);
                            setCarrera(
                              "Gestión_y_Mantenimiento_de_Maquinaria_Industrial"
                            );
                          }}
                        >
                          Gestión y Mantenimiento de Maquinaria Industrial
                        </div>
                        <div
                          className="bg-white px-4 py-2 cursor-pointer text-sm hover:bg-gray-50 border border-lightBlue text-gray-800"
                          onClick={(e) => {
                            setOpenCarreras(false);
                            setCarrera(
                              "Gestión_y_Mantenimiento_de_Maquinaria_Pesada"
                            );
                          }}
                        >
                          Gestión y Mantenimiento de Maquinaria Pesada
                        </div>
                        <div
                          className="bg-white px-4 py-2 cursor-pointer text-sm hover:bg-gray-50 border border-lightBlue text-gray-800"
                          onClick={(e) => {
                            setOpenCarreras(false);
                            setCarrera("Mantenimiento_de_Equipo_Pesado");
                          }}
                        >
                          Mantenimiento de Equipo Pesado
                        </div>
                        <div
                          className="bg-white px-4 py-2 cursor-pointer text-sm hover:bg-gray-50 border border-lightBlue text-gray-800"
                          onClick={(e) => {
                            setOpenCarreras(false);
                            setCarrera("Mecatrónica_Industrial");
                          }}
                        >
                          Mecatrónica Industrial
                        </div>
                        <div
                          className="bg-white px-4 py-2 cursor-pointer text-sm hover:bg-gray-50 border border-lightBlue text-gray-800"
                          onClick={(e) => {
                            setOpenCarreras(false);
                            setCarrera("Electricidad_Industrial");
                          }}
                        >
                          Electricidad Industrial
                        </div>
                        <div
                          className="bg-white px-4 py-2 cursor-pointer text-sm hover:bg-gray-50 border border-lightBlue text-gray-800"
                          onClick={(e) => {
                            setOpenCarreras(false);
                            setCarrera(
                              "Electrónica_y_Automatización_Industrial"
                            );
                          }}
                        >
                          Electrónica y Automatización Industrial
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="w-full">
                    <input
                      className="select cursor-pointer w-full h-10 pl-3 pr-6 text-base placeholder-gray-400 border border-lightBlue rounded appearance-none focus:shadow-outline"
                      type="text"
                      placeholder="Modalidad*"
                      value={modalidad}
                      onClick={(e) => setOpenModalidad(!openModalidad)}
                    ></input>
                    {openModalidad && (
                      <div className="w-full absolute max-w-[200px] z-50">
                        <div
                          className="bg-white px-4 py-2 cursor-pointer text-sm hover:bg-gray-50 border border-lightBlue text-gray-800"
                          onClick={() => {
                            setModalidad("Alumno_Talento");
                            setOpenModalidad(false);
                          }}
                        >
                          Alumno Talento
                        </div>
                        <div
                          className="bg-white px-4 py-2 cursor-pointer text-sm hover:bg-gray-50 border border-lightBlue text-gray-800"
                          onClick={() => {
                            setModalidad("Examen_de_Admisión");
                            setOpenModalidad(false);
                          }}
                        >
                          Examen de Admisión
                        </div>
                        <div
                          className="bg-white px-4 py-2 cursor-pointer text-sm hover:bg-gray-50 border border-lightBlue text-gray-800"
                          onClick={() => {
                            setModalidad("Tec_Gym");
                            setOpenModalidad(false);
                          }}
                        >
                          Tec Gym
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex">
                  <input
                    type="radio"
                    checked={acepta}
                    onClick={(e) => setAcepta(!acepta)}
                    name="radio"
                    id="radio-one"
                    className="w-4 h-4 bg-pink-300 checked:bg-rose-500 cursor-pointer"
                  />
                  <label className="ml-2 text-gray-400 text-xs avenir m-auto items-center">
                    He leído y acepto las{" "}
                    <span
                      className="cursor-pointer hover:underline hover:font-bold"
                      onClick={() => saveFile()}
                    >
                      políticas de privacidad
                    </span>
                  </label>
                </div>
                <button
                  type="submit"
                  className="sm:w-52 m-auto bg-lightBlue text-white font-bold py-2 px-4 rounded w-full"
                >
                  Inscríbete aquí
                </button>
              </form>
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

export default App;
