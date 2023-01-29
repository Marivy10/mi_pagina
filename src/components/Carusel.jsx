import React, { useState } from 'react';
import imagen1 from "../imagenes/projects/imagen1.png"
import imagen2 from "../imagenes/projects/imagen2.png"
import imagen3 from "../imagenes/projects/imagen3.png"
import imagen4 from "../imagenes/projects/imagen4.png"
import imagen5 from "../imagenes/projects/imagen5.png"
import imagen6 from "../imagenes/projects/imagen6.png"
import imagen7 from "../imagenes/projects/imagen7.png"

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    imagen1.png,imagen2.png,imagen3.png,imagen4.png,imagen5.png,imagen6.png,imagen7.png
  ];

  const previous = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? images.length - 1 : newIndex);
  };

  const next = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex === images.length ? 0 : newIndex);
  };

  return (
    <div>
      <button onClick={previous}>Anterior</button>
      <img src={images[currentIndex]} alt="Carousel" />
      <button onClick={next}>Siguiente</button>
    </div>
  );
}

export default Carousel;
