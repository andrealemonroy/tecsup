import React from "react";

const Footer = () => {
  return (
    <div className="footer bg-lightBlue">
      <div className="flex items-center gap-5">
        <p className="text-footer">
          © 2020 TECSUP - Todos los derechos reservados.
        </p>
        <div>
          <img className="logowa" src="/img/wp-logo.svg" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
