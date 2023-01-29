import React from "react";
import estilos from "../styles/TextShpere.module.css"
import { TagCloud } from "@frank-mayer/react-tag-cloud";
// same as: import TagCloud from "@frank-mayer/react-tag-cloud"



const TextShpere = () => (
  <div className={estilos.contendorPrincipal}>
    <div className={estilos.contenedorSecundario}>
      <div className={estilos.esfera}>
        <TagCloud className={estilos.tam}
        /*  options={(w: Window & typeof globalThis): TagCloudOptions => ({
            radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
            maxSpeed: "fast",
        })} */
        /*   onClick={(tag: string, ev: MouseEvent) => alert(tag)} */
        /*   onClickOptions={{ passive: true }} */
/*         options={radius= "200"} */
        >

          {[
          
            "JavaScript",
            "ReactJs",
            "Figma",
            "Bootstrap",
            "HTML",
            "CSS",
            "Redux",
            "Node",
            "Express.Js",
            "mongo",
            "posgresSQL",
            "mySQL",
          ]}
        </TagCloud>
      </div>
    </div>
  </div>
);

export default TextShpere;
