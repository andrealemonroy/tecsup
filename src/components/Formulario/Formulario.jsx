import React from "react";

const Formulario = () => {
  const unidad = "Pregrado";
  const familia = "Formaci%C3%B3n%20Regular";
  const sede = "Lima";
  const proceso = "PROCESO%20DE%20ADMISION%202023-1";
  const source =
    "https://www.tecsup.edu.pe/landings/crmtivenos.html?unidad=" +
    unidad +
    "&familia=" +
    familia +
    "&sede=" +
    sede +
    "&proceso=" +
    proceso;
  console.log(source);
  return (
    <div>
      <iframe
        id="inlineFrameExample"
        title="Inline Frame Example"
        width="100%"
        height="550px"
        src={source}
      ></iframe>
    </div>
  );
};

export default Formulario;
