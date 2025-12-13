import Image from "next/image";
import React from "react";
import logo from "../../../svgs/fish.svg";

function Box({ title, count }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer font-sans-medium">
      <Image
        src="/images/banner.png"
        width={250}
        height={250}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      <span className="absolute bottom-4 right-4 text-white text-lg">
        {title}
      </span>
    </div>
  );
}

export default Box;
