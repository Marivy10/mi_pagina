import React from "react";
import estilos from "../styles/title.module.css";

function Title() {
  return (
    <div>
      <div className={estilos.contenedor_titulo}>
        <div className={estilos.titulo}>
          <h1 className={estilos.nombre}>
          <span>A</span>
          <span>L</span>
          <span>O</span>
          <span>N</span>
          <span>D</span>
          <span>R</span>
          <span>A.</span>
          <span>H</span>
          <span>E</span>
          <span>R</span>
          <span>N</span>
          <span>A</span>
          <span>N</span>
          <span>D</span>
          <span>E</span>
          <span>Z</span>
          
          </h1>
        </div>
        <div className={estilos.contenedor_subtitulo}>
          <div className={estilos.subtitulo}>
          <h3>FRONT-END DEVELOPER</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
