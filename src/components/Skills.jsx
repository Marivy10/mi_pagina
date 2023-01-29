import React from "react";
import estilo from "../styles/skills.module.css";
import TextShpere from "./TextShpere";

function Skills() {
  return (
    <div className={estilo.contenedorMayor}>
      <div className={estilo.contenedorSecundario}>
        <div className={estilo.posicion}>
            <TextShpere />
          <h1 className={estilo.skills}>Skills</h1>

        </div>
        <div className={estilo.segundaPosicion}>
        </div>
        <div className={estilo.tercerPosicion}>
          <h3 className={estilo.hardSkills}> Hard-Skills</h3>
        </div>
        <ul className={estilo.segundoContenido}>
            <li>JavaScript</li>
            <li>ReactJs</li> 
            <li>Figma</li> 
            <li>Bootstrap</li>  
            <li>HTML</li>  
            <li>CSS</li>  
            <li>Redux</li>
            <li>Node.Js</li>
            <li>Express.Js</li>
            <li>Mongo </li>
            <li>posgresSQL</li>
            <li>mySQL</li> 
          
        </ul>
      </div>
    </div>
  );
}

export default Skills;
