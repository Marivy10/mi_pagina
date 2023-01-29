import React from "react";
import estilos from "../styles/home.module.css";
import video from "../video/fondo.mp4";
import { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Title from "./Title";
import Icons from "./Icons";

function Home() {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className={estilos.contenedor_principal}>
      <div className={estilos.contenedor_fondo}>
        <Navbar></Navbar>
        <Title></Title>
        <Icons ></Icons>


        <video
          className={estilos.video}
          playsInline
          loop
          alt="All Projects"
          src={video}
          ref={videoEl}
        />
      </div>
    </div>
  );
}

export default Home;
