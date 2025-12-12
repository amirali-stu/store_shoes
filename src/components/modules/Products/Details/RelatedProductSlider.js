"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import ProductBox from "../ProductBox";
import { IoIosArrowDown } from "react-icons/io";

export default function RelatedProductSlider() {
  return (
    <div className="w-full relative">
      {/* دکمه قبل */}
      <button className="swiper-button-prev-custom text-lg -rotate-90 absolute -top-8 cursor-pointer border-2 border-gray-100 left-12 z-10 bg-white/70 transition-all duration-300 hover:bg-gray-100/20 backdrop-blur-md p-2 rounded-full shadow-md">
        <IoIosArrowDown />
      </button>

      {/* دکمه بعد */}
      <button className="swiper-button-next-custom text-lg rotate-90 absolute -top-8 cursor-pointer border-2 border-gray-100 left-2 z-10 bg-white/70 transition-all duration-300 hover:bg-gray-100/20 backdrop-blur-md p-2 rounded-full shadow-md">
        <IoIosArrowDown />
      </button>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        spaceBetween={5}
        loop={true}
        slidesPerView={2}
        speed={500}
        breakpoints={{
          580: {
            slidesPerView: 2,
          },
          680: {
            slidesPerView: 3,
          },
          780: {
            slidesPerView: 4,
          },
          980: {
            slidesPerView: 5,
          },
        }}
        className="!py-5"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <SwiperSlide key={item}>
            <ProductBox />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
