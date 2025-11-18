"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TopComment from "@/components/modules/Comments/TopComment";

export default function Comment() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);
  const swiperRef = useRef(null);
  const [initSwiper, setInitSwiper] = useState(false);

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
        speed={800}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 }, // 💻 تبلت‌ها
          1024: { slidesPerView: 3 }, // 🖥 دسکتاپ‌ها
        }}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <TopComment />
        </SwiperSlide>
        <SwiperSlide>
          <TopComment />
        </SwiperSlide>
        <SwiperSlide>
          <TopComment />
        </SwiperSlide>
        <SwiperSlide>
          <TopComment />
        </SwiperSlide>
        <SwiperSlide>
          <TopComment />
        </SwiperSlide>
        <SwiperSlide>
          <TopComment />
        </SwiperSlide>
        <SwiperSlide>
          <TopComment />
        </SwiperSlide>
        <SwiperSlide>
          <TopComment />
        </SwiperSlide>
        <SwiperSlide>
          <TopComment />
        </SwiperSlide>
      </Swiper>

      {/* دکمه‌ها */}

      <div
        ref={prevRef}
        className="custom-next max-md:hidden absolute left-14 -top-14 cursor-pointer z-20 p-2 bg-white rounded-full text-gray-900 border-2 transition-all hover:border-gray-400 border-gray-100 duration-300"
      >
        <IoArrowForwardOutline size={20} />
      </div>
      <div
        ref={nextRef}
        className="custom-prev max-md:hidden absolute left-2 -top-14 cursor-pointer z-20 p-2 bg-white rounded-full text-gray-900 border-2 transition-all hover:border-gray-400 border-gray-100 duration-300"
      >
        <IoArrowForwardOutline size={20} className="rotate-180" />
      </div>

      {/* pagination container */}
      <div
        ref={paginationRef}
        className="custom-pagination-comment !mt-10 flex justify-center z-10"
      ></div>
    </div>
  );
}
