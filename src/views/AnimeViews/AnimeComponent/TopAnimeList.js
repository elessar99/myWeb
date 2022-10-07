import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "./Css/TopAnimeList.css"
// import required modules
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper";
import AnimeCard from "./AnimeCard";
const TopAnimeList = () =>{
    return (
      <>
      <div className="aFullTopAnime">
      <Swiper
        freeMode={true}
        loop={true}
        slidesPerView={4}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide><AnimeCard/></SwiperSlide>
        <SwiperSlide><AnimeCard/></SwiperSlide>
        <SwiperSlide><AnimeCard/></SwiperSlide>
        <SwiperSlide><AnimeCard/></SwiperSlide>
        <SwiperSlide><AnimeCard/></SwiperSlide>
        <SwiperSlide><AnimeCard/></SwiperSlide>
        <SwiperSlide><AnimeCard/></SwiperSlide>
        <SwiperSlide><AnimeCard/></SwiperSlide>
        <SwiperSlide><AnimeCard/></SwiperSlide>
        <SwiperSlide><AnimeCard/></SwiperSlide>
        <SwiperSlide><AnimeCard/></SwiperSlide>
        <SwiperSlide><AnimeCard/></SwiperSlide>
        <SwiperSlide><AnimeCard/></SwiperSlide>
        <SwiperSlide><AnimeCard/></SwiperSlide>
        <SwiperSlide><AnimeCard/></SwiperSlide>
        <SwiperSlide><AnimeCard/></SwiperSlide>
      </Swiper>
      </div>
      </>
    );
  }
  
  export default TopAnimeList ;
  

