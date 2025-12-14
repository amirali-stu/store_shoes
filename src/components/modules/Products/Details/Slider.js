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
    <div dir="rtl" className="flex flex-col lg:flex-row gap-4">
      {/*  Thumbnail در دسکتاپ ها */}
      <div className="hidden relative lg:block w-22 shrink-0">
        <Swiper
          onSwiper={setThumbsSwiper}
          direction="vertical"
          slidesPerView={4}
          spaceBetween={10}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="h-[460px] !pt-7 !pb-6"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div
                className={`rounded-lg overflow-hidden flex items-center justify-center cursor-pointer transition-all ${
                  activeIndex === index
                    ? "w-full h-full border-2 border-gray-100"
                    : "w-full h-full grayscale"
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  width={400}
                  height={400}
                  className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal"
                />
              </div>
            </SwiperSlide>
          ))}

          {images.length > 1 && (
            <>
              <button className="custom-next absolute left-1/4 -bottom-4 z-10 w-10 h-10 rounded-full text-xl text-gray-400 dark:text-slate-400 flex items-center justify-center cursor-pointer">
                <IoIosArrowDown size={24} />
              </button>

              <button className="custom-prev absolute -top-3 left-1/4 z-10 w-10 h-10 rounded-full text-xl text-gray-400 dark:text-slate-400 flex items-center justify-center cursor-pointer">
                <IoIosArrowDown className="rotate-180" size={24} />
              </button>
            </>
          )}
        </Swiper>
      </div>

      {/* اسلایدر اصلی */}
      <div className="aspect-square bg-gray-100 dark:bg-slate-800 rounded-3xl overflow-hidden relative">
        <Swiper
          modules={[Navigation, Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={images.length > 1}
          onSlideChange={(s) => setActiveIndex(s.realIndex)}
          className="w-full h-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="w-full h-full">
              <div className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal">
                <Image
                  src={src}
                  alt={`عکس ${index + 1}`}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
            <SwiperSlide key={index} className="!h-[80px]">
              <div
                className={`rounded-lg overflow-hidden flex items-center justify-center cursor-pointer transition-all ${
                  activeIndex === index
                    ? "w-full h-full border-2 border-gray-100"
                    : "w-full h-full  grayscale"
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  width={300}
                  height={300}
                  className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* دکمه‌ها */}
        <button className="custom-next absolute left-1 top-1/2 -translate-y-1/2 z-50 w-10 h-10 bg-black/20 dark:bg-slate-600/20 text-white rounded-full shadow-lg flex items-center justify-center">
          <IoIosArrowBack size={22} />
        </button>

        <button className="custom-prev absolute right-1 top-1/2 -translate-y-1/2 z-50 w-10 h-10 bg-black/20 dark:bg-slate-600/20 text-white rounded-full shadow-lg flex items-center justify-center">
          <IoIosArrowForward size={22} />
        </button>
      </div>
    </div>
  );
}
