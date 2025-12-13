import Image from "next/image";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

function Article() {
  return (
    <a
      href="#"
      className="max-md:w-full md:w-full relative cursor-pointer rounded-lg border-2 border-gray-100 dark:border-slate-800 font-sans-medium transition-all duration-300 hover:border-green-400 dark:hover:border-green-800 overflow-hidden group"
    >
      <Image
        src={"/images/banner.png"}
        alt="blog"
        className="object-cover h-80 max-md:h-60 transition-transform duration-500 group-hover:scale-110"
        width={550}
        height={550}
      />

      <div className="p-2">
        <h3 className="text-gray-900 dark:text-white text-xl max-w-74 truncate pb-2">
          چطوری سایز خود را پیدا کنیم؟
        </h3>
        <p className="text-gray-400 line-clamp-4">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن ساختگی
          با تولید سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
        </p>
      </div>

      {/* Overlay */}
      <div
        className="absolute w-full h-full z-10 right-0 -bottom-full group-hover:bottom-0 flex items-center justify-center gap-x-4 
                  bg-black/10 backdrop-blur-md 
                  opacity-0 group-hover:opacity-100 
                  transition-all duration-300
                  pointer-events-none"
      >
        <h1 className="text-green-900/70 text-shadow-md text-2xl">
          ادامه مطالب
        </h1>
        <BiArrowBack size={22} className="text-green-900/70 text-shadow-md" />
      </div>
    </a>
  );
}

export default Article;
