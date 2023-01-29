import React from "react";
import estilos from "../styles/icons.module.css";
import Linkedin from "../img/icons/linkedin.png";
import Gmail from "../img/icons/Gmail.png";
import Github from "../img/icons/git.png";

const Icons = () => {
  return (
    <div className={estilos.contenedor_principal}>
      <div className={estilos.contenedor_iconos}>
        <div className={estilos.iconos}>
          <ul className={estilos.iconitos}>
            <div className={estilos.rayaArriba}></div>
            <li className={estilos.img_Linkedin}>
            <a className={estilos.re} href="https://www.linkedin.com/in/alondra-hern%C3%A1ndez-a0a967241/" >
              <img className={estilos.imgenes} src={Linkedin} alt="Linkedin"/>
            </a>
              
            </li>

            <li className={estilos.c}>
              <img className={estilos.imgenes} src={Gmail} alt="Gmail" />
            </li>

            <li className={estilos.c}>
              <img className={estilos.imgenes} src={Github} alt="Github" />
            </li>
            <div className={estilos.rayaAbajo}></div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Icons;
