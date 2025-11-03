"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Banner() {
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        rewind={true}
        navigation={true}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          clickable: true,
          bulletClass:
            "swiper-pagination-bullet w-4 h-4 bg-red-500 rounded-full mx-1 transition-all duration-300",
          bulletActiveClass:
            "swiper-pagination-bullet-active w-4 h-4 bg-black rounded-full transition-all duration-300",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper w-full h-[700px] relative banner-slider"
      >
        <SwiperSlide className="h-full flex items-center justify-center bg-green-200">
          <h1 className="text-4xl font-bold text-white">اسلاید اول</h1>
        </SwiperSlide>
        <SwiperSlide className="h-full flex items-center justify-center bg-blue-400">
          <h1 className="text-4xl font-bold text-white">اسلاید دوم</h1>
        </SwiperSlide>
        <SwiperSlide className="h-full flex items-center justify-center bg-purple-400">
          <h1 className="text-4xl font-bold text-white">اسلاید سوم</h1>
        </SwiperSlide>
        <SwiperSlide className="h-full flex items-center justify-center bg-rose-400">
          <h1 className="text-4xl font-bold text-white">اسلاید چهارم</h1>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Banner;
