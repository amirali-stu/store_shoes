import Image from "next/image";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

function Article() {
  return (
    <a
      href="#"
      className="max-md:w-full md:w-full relative p-4 cursor-pointer rounded-lg border-2 border-gray-50 font-sans-medium transition-all duration-300 hover:border-green-400 overflow-hidden group"
    >
      <Image
        src={"/images/products/Image.png"}
        alt="blog"
        className="object-contain rounded-lg"
        width={550}
        height={550}
      />

      <h3 className="text-gray-900 text-xl max-w-74 truncate py-3">
        چطوری سایز خود را پیدا کنیم؟
      </h3>
      <p className="text-gray-400 line-clamp-5">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم...
      </p>

      {/* Overlay */}
      <div
        className="absolute w-full h-full z-10 right-0 -bottom-full group-hover:bottom-0 flex items-center justify-center gap-x-4 
                  bg-black/10 backdrop-blur-md 
                  opacity-0 group-hover:opacity-100 
                  transition-all duration-300
                  pointer-events-none"
      >
        <h1 className="text-green-700 text-2xl font-bold">ادامه مطالب</h1>
        <BiArrowBack size={22} className="text-green-700" />
      </div>
    </a>
  );
}

export default Article;
