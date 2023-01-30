import React from "react";
import estilos from "../styles/skills.module.css";
import TextShpere from "./TextShpere";

function Skills() {
  return (
    <div className={estilos.containerP}>
      <h1 className={estilos.titleSkill}>skills</h1>
      <div className={estilos.containerP_containerSphera}>
        <div className={estilos.containerTextoParrafo}>
          <p className={estilos.parrafoDescription}>
            Full Stack developer working in React.Js, Redux, Node.Js
            amoung other in the sector, I carried out projects where
            the Frontend with responsive pages could be observed, and
            the backend of the same.
          </p>
          {/* <p className={estilos.parrafoDescription}>
            I AM with good interpersonal relationships: Proactive
            Organize responsible person Good with personal
            relationships
          </p> */}
        </div>
        <TextShpere />
      </div>
    </div>
  );
  /*  return (
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
  ); */
}

export default Skills;
