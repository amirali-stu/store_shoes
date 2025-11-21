import Image from "next/image";
import React from "react";
import logo from "../../../svgs/fish.svg";

function Box({ title, count }) {
  return (
    <div className="max-md:w-full md:w-[260px] cursor-pointer font-sans-medium flex items-center justify-evenly flex-col border-2 border-gray-50 rounded-md py-6 transition-all duration-300 hover:shadow-[0_0_10px_-2px_#999999] hover:border-gray-400/70 lg:hover:-translate-y-1 group">
      <Image alt="logo" src={logo} width={80} height={80} />
      <div>
        <h4 className="text-gray-900 text-center text-lg transition-all duration-300 group-hover:text-success-dark">
          {title}
        </h4>
        <span className="text-gray-500">{count} محصول</span>
      </div>
    </div>
  );
}

export default Box;
