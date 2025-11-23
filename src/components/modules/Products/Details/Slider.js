"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import Image from "next/image";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
} from "react-icons/io";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

export default function ProductGallery({ images = [] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="text-center flex items-center justify-center h-full text-xl text-gray-500">
        هیچ عکسی برای این محصول ذخیره نشده ):
      </div>
    );
  }

  return (
    <div
      dir="rtl"
      className="flex flex-col lg:flex-row gap-4 max-w-[650px] mx-auto"
    >
      {/*  Thumbnail در دسکتاپ ها */}
      <div className="hidden relative lg:block w-22 shrink-0">
        <Swiper
          onSwiper={setThumbsSwiper}
          direction="vertical"
          slidesPerView={4}
          spaceBetween={0}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="h-[460px] !pt-7"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div
                className={`rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                  activeIndex === index
                    ? "border-blue-500 shadow-md"
                    : "border-gray-300 hover:border-gray-500"
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  width={64}
                  height={64}
                  className="w-full h-20 object-cover"
                />
              </div>
            </SwiperSlide>
          ))}

          {images.length > 1 && (
            <>
              <button className="custom-next absolute left-1/4 -bottom-4 z-10 w-10 h-10 rounded-full text-xl text-gray-400 flex items-center justify-center cursor-pointer">
                <IoIosArrowDown size={24} />
              </button>

              <button className="custom-prev absolute -top-3 left-1/4 z-10 w-10 h-10 rounded-full text-xl text-gray-400 flex items-center justify-center cursor-pointer">
                <IoIosArrowDown className="rotate-180" size={24} />
              </button>
            </>
          )}
        </Swiper>
      </div>

      {/* اسلایدر اصلی */}
      <div className="flex-1 w-full">
        <div className="relative 2xl:max-w-[524px] max-2xl:w-[422px] max-xl:w-[380px] max-lg:w-full bg-white rounded-xl shadow-md overflow-hidden max-h-[480px]">
          <Swiper
            modules={[Navigation, Thumbs]}
            thumbs={{ swiper: thumbsSwiper }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            loop={images.length > 1}
            onSlideChange={(s) => setActiveIndex(s.realIndex)}
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center w-full h-full">
                  <Image
                    src={src}
                    alt={`عکس ${index + 1}`}
                    width={500}
                    height={500}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Thumbnail در موبایل ها */}
      <div className="lg:hidden relative w-full overflow-hidden py-3">
        <Swiper
          onSwiper={setThumbsSwiper}
          direction="horizontal"
          slidesPerView={4}
          spaceBetween={10}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs, Navigation]}
          className="!py-2 !px-2"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div
                className={`rounded-lg overflow-hidden flex items-center justify-center cursor-pointer border-2 transition-all ${
                  activeIndex === index
                    ? "border-gray-700 shadow-lg scale-105"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  width={72}
                  height={72}
                  className="w-18 h-18 object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* دکمه‌ها */}
        <button className="custom-next absolute left-1 top-1/2 -translate-y-1/2 z-50 w-10 h-10 bg-black/20 hover:bg-black/40 text-white rounded-full shadow-lg flex items-center justify-center">
          <IoIosArrowBack size={22} />
        </button>

        <button className="custom-prev absolute right-1 top-1/2 -translate-y-1/2 z-50 w-10 h-10 bg-black/20 hover:bg-black/40 text-white rounded-full shadow-lg flex items-center justify-center">
          <IoIosArrowForward size={22} />
        </button>
      </div>
    </div>
  );
}
