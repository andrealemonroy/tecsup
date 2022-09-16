import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import Sliders from './components/Sliders/Sliders';
import Footer from './components/Footer';

function App() {
  const submit = (value) => {
    console.log(value);
  };
  return (
    <div className="bg-white sm:max-w-[1440px] sm:m-auto">
      <div className="sm:h-20 flex justify-center align-middle items-center">
        <img className="h-12" src="/img/logo.svg" />
      </div>
      <div className="header sm:flex relative">
        <img
          src="/img/header-face.png"
          className="hidden sm:block absolute left-1/2 ml-20 h-12 mt-28"
        />
        <img
          src="/img/header-face.png"
          className="hidden sm:block absolute left-80 mt-96 h-16"
        />
        <div className="sm:w-3/5 flex">
          <div className="">
            <img
              src="/img/header-plane.png"
              className="absolute top-20 left-96 hidden sm:block "
            />
            <div className="sm:m-20 p-10 sm:p-0">
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
            </div>
            <div className="sm:flex absolute bottom-0 left-36 rubik hidden">
              <img src="/img/header-rectangle.svg" className="h-40" />
              <div className="absolute left-44 font-semibold text-xl mt-4">
                Postula a TECSUP
              </div>
              <div className="absolute left-36 top-1/3 border-2 border-white rounded px-8 py-2 font-semibold text-xl">
                ADMISIÓN 23-01
              </div>
            </div>
          </div>
          <div className="sm:w-1/5 sm:flex items-end hidden">
            <img src="/img/header-person.png" className="absolute img-person" />
          </div>
        </div>
        <div className="sm:w-2/5 sm:flex sm:flex-col sm:ml-20 mx-4 sm:mx-0 sm:pb-0 pb-4">
          <div className="bg-white p-4 sm:flex sm:flex-col space-y-4 h-fit rounded-2xl w-fit mt-20">
            <div className="text-center text-lg font-bold futura">
              <p>Inscríbete AHORA y</p>
              <p>obtén BENEFICIOS ÚNICOS</p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submit(e.target[0].value);
              }}
              className="sm:flex sm:flex-col space-y-4"
            >
              <input
                className="w-full border appearance-none border-lightBlue rounded py-2 px-4"
                type="text"
                placeholder="Nombres*"
              />
              <div className="flex space-x-2">
                <Input placeholder="Apellido paterno*" />
                <Input placeholder="Apellido materno*" />
              </div>
              <Input placeholder="Correo electrónico*" />
              <div className="flex space-x-2">
                <Input placeholder="Celular*" />
                <Input placeholder="DNI*" />
              </div>
              <div className="flex space-x-2">
                <Input placeholder="Carrera*" />
                <Input placeholder="Modalidad*" />
              </div>
              <div class="item_seleccion flex">
                <input
                  type="radio"
                  checked={false}
                  onChange={() => {}}
                  name="radio"
                  id="radio-one"
                  class="w-4 h-4 bg-pink-300 checked:bg-rose-500 cursor-pointer"
                />
                <label
                  for="radio-one"
                  class="ml-2 text-gray-400 text-sm avenir m-auto items-center"
                >
                  He leído y acepto la políticas de privacidad
                </label>
              </div>
              <button
                type="submit"
                className="bg-lightBlue text-white font-bold py-2 px-4 rounded"
              >
                Inscríbete aquí
              </button>
            </form>
          </div>
          <div>
            <img
              src="/img/header-face.png"
              className="absolute mt-4 h-20 hidden sm:block"
            />
          </div>
        </div>
      </div>
      <Sliders />
      <div className="testimonies sm:h-screen bg-lightBlack">
        <div className="sm:flex h-full justify-center">
          <div className="sm:w-5/12 sm:mt-40">
            <h3 className="text-2xl sm:text-4xl text-white rubik font-bold text-center pt-8 sm:pt-0">
              ¿QUÉ DICEN
            </h3>
            <h3 className="text-2xl sm:text-4xl text-white rubik font-bold text-center">
              NUESTROS EGRESADOS?
            </h3>
            <div className="sm:flex justify-center">
              <img src="/img/testimonies-video.png" className="sm:h-72" />
            </div>
          </div>
          <div className="sm:w-5/12 flex justify-end">
            <div className="sm:w-3/12 sm:flex sm:flex-col-reverse items-end mb-20 flex flex-col-reverse">
              <div className="bg-yellow h-30 w-40 sm:w-60 px-4 rounded-xl text-center py-2 cursor-pointer">
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
    </div>
  );
}

export default App;
