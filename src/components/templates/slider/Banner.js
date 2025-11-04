"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Banner() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);
  const swiperRef = useRef(null);
  const [initSwiper, setInitSwiper] = useState(false);

  const slides = [
    {
      id: 1,
      title: "محصول 1",
      subtitle: "بهترین انتخاب",
      image: "/images/products/Image.png",
      bg: "bg-gray-50",
    },
    {
      id: 2,
      title: "محصول 2",
      subtitle: "جدیدترین‌ها",
      image: "/images/products/Image.png",
      bg: "bg-gray-50",
    },
    {
      id: 3,
      title: "محصول 3",
      subtitle: "پر فروش",
      image: "/images/products/Image.png",
      bg: "bg-gray-50",
    },
  ];

  useEffect(() => {
    setInitSwiper(true);
  }, []);

  useEffect(() => {
    if (!initSwiper) return;
    const swiper = swiperRef.current;
    if (!swiper) return;

    if (prevRef.current && nextRef.current && paginationRef.current) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.params.pagination.el = paginationRef.current;
      swiper.params.pagination.clickable = true;

      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();

      swiper.pagination.destroy();
      swiper.pagination.init();
      swiper.pagination.render();
      swiper.pagination.update();

      swiper.update();
    }
  }, [initSwiper]);

  return (
    <div className="relative w-full">
      <Swiper
        speed={1000}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`my-slider relative flex flex-col sm:flex-row lg:h-[700px] max-lg:h-[500px] w-full items-center justify-between p-8 rounded-2xl ${slide.bg}`}
            >
              <div className="sm:w-1/2 text-center sm:text-left">
                <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
                <p className="text-lg text-gray-700">{slide.subtitle}</p>
              </div>
              <div className="sm:w-1/2 mt-4 sm:mt-0 flex justify-center">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-48 h-48 object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* دکمه‌ها */}

      <div
        ref={prevRef}
        className="custom-next absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer z-20 p-2 bg-white rounded-full text-gray-900 border-2 transition-all hover:border-gray-400 border-gray-100 duration-300"
      >
        <IoArrowForwardOutline size={20} />
      </div>
      <div
        ref={nextRef}
        className="custom-prev absolute top-1/2 left-2 -translate-y-1/2 cursor-pointer z-20 p-2 bg-white rounded-full text-gray-900 border-2 transition-all hover:border-gray-400 border-gray-100 duration-300"
      >
        <IoArrowForwardOutline size={20} className="rotate-180" />
      </div>

      {/* pagination container */}
      <div
        ref={paginationRef}
        className="custom-pagination absolute xl:!bottom-[80px] left-0 right-0 flex justify-center gap-0 z-10"
      ></div>
    </div>
  );
}
