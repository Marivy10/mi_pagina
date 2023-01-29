import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import estilo from "../../styles/slider.module.css"
import { Pagination, Navigation } from 'swiper'
 
// COMO IMPORTAR TODAS LAS FOTOS QUE TENGO AQUI EN URL 

const Slider = () => {
  return (
    <div>
      <div className="s-container">
        <Swiper
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
        >
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>      
        </Swiper>
      </div> 


    </div>
  )
}

export default Slider
