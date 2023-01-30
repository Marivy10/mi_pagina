import React from "react";
import estilos from "../styles/TextShpere.module.css";
import { TagCloud } from "@frank-mayer/react-tag-cloud";
// same as: import TagCloud from "@frank-mayer/react-tag-cloud"

const TextShpere = () => {
  const data = [
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
  ];

  return (
    <div className={estilos.contenedorPrincipal}>
      <TagCloud
      className={estilos.spheraStyle}
        options={(w) => ({
          radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
          maxSpeed: "fast",
        })}
        onClick={(tag, ev) => alert(tag)}
        onClickOptions={{ passive: true }}>
        {data}
      </TagCloud>
    </div>
  );
};

export default TextShpere;
