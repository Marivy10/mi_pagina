import React from "react";
import estilos from "../styles/navbar.module.css";
//import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={estilos.contenedorPrincipal}>
      <nav className={estilos.Navbar}>
        <ul className={estilos.ul}>
          <li className={estilos.b}>Projects</li>
          <li className={estilos.b}>Skills</li>
          <li className={estilos.b}>About me</li>
          <li className={estilos.b}>HELLO</li>
          <li className={estilos.b}>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
