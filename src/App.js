import logo from './logo.svg';
import './App.css';
import Input from './components/Input';

function App() {
  const submit = (value) => {
    console.log(value);
  };
  return (
    <div className="bg-white">
      <div className="h-20 flex justify-center align-middle items-center">
        <img className="h-12" src="/img/logo.svg" />
      </div>
      <div className="header flex relative">
        <img
          src="/img/header-face.png"
          className="absolute left-1/2 ml-20 h-12 mt-28"
        />
        <img
          src="/img/header-face.png"
          className="absolute left-80 mt-96 h-16"
        />

        <div className="w-2/5">
          <img
            src="/img/header-plane.png"
            className="absolute top-20 left-96"
          />
          <div className="m-20">
            <h1 className="text-white font-medium text-3xl">ÚNETE A LA</h1>
            <h1 className="text-yellow font-black text-5xl">MEJOR</h1>
            <div className="flex">
              <div>
                <h1 className="text-yellow font-black text-5xl">PARTE</h1>
              </div>
              <div className="ml-5">
                <img src="/img/header-arrow.svg" className="h-12" />
              </div>
            </div>
            <h1 className="text-white font-medium text-3xl">
              DE LA TECNOLOGÍA
            </h1>
            <div className="h-0.5 bg-white w-10 my-10"></div>
            <h1 className="text-yellow font-black text-4xl">
              ADMISIÓN 2023-01
            </h1>
          </div>
          <div className="flex absolute bottom-0 left-36 rubik">
            <img src="/img/header-rectangle.svg" className="h-40" />
            <div className="absolute left-44 font-semibold text-xl mt-4">
              Postula a TECSUP
            </div>
            <div className="absolute left-36 top-1/3 border-2 border-white rounded px-8 py-2 font-semibold text-xl">
              ADMISIÓN 23-01
            </div>
          </div>
        </div>
        <div className="w-1/5 flex items-end">
          <img src="/img/header-person.png" className="absolute img-person" />
        </div>
        <div className="w-2/5 flex flex-col ml-20">
          <div className="bg-white p-4 flex flex-col space-y-4 h-fit rounded-2xl w-fit mt-20">
            <div className="text-center text-lg font-bold futura">
              <p>Inscríbete AHORA y</p>
              <p>obtén BENEFICIOS ÚNICOS</p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submit(e.target[0].value);
              }}
              className="flex flex-col space-y-4"
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
              <div class="item_seleccion">
                <input
                  type="radio"
                  checked={false}
                  onChange={() => {}}
                  name="radio"
                  id="radio-one"
                  class="w-4 h-4 bg-pink-300 checked:bg-rose-500 cursor-pointer"
                />
                <label for="radio-one" class="ml-2">
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
            <img src="/img/header-face.png" className="absolute mt-4 h-20" />
          </div>
        </div>
      </div>
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
                  donde vas a estudiar, así comosi está{' '}
                  <span className="fira-medium">licenciada</span>, si tiene
                  <span className="fira-medium">convenios</span> y cuál essu
                  enfoque o la{' '}
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
      <div className="testimonies h-screen bg-lightBlack">
        <div className="flex h-full">
          <div className="w-1/2">
            <h3 className='text-4xl text-white rubik font-bold text-center'>¿QUÉ DICEN</h3>
            <h3 className='text-4xl text-white rubik font-bold text-center'>NUESTROS EGRESADOS?</h3>
          </div>
          <div className='w-1/2 flex items-end'>
            <img src="/img/testimonies-person.png" className="h-3/4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
