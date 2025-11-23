import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { BsBasket } from "react-icons/bs";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";

function ProductBox() {
  return (
    <div className="w-full md:w-auto flex items-center flex-col border-2 border-gray-100 rounded-lg group transition-all duration-400 hover:shadow-[0_0_10px_-2px_#999999] hover:border-gray-400/70 lg:hover:-translate-y-1 relative overflow-hidden font-sans-medium">
      <div className="relative h-full w-full">
        <Image
          src="/images/products/Image.png"
          alt="Product image"
          className="object-contain max-lg:w-full sm:h-[200px] md:h-[246px] max-sm:h-[239px]"
          width={246}
          height={246}
        />
      </div>
      <div className="w-full p-4 flex items-center font-sans-medium justify-between">
        <div>
          <h4 className="text-gray-700 text-xl font-sans-regular">ذرت</h4>
          <p className="text-gray-900 text-lg"> ت14.99</p>
          <div className="flex items-center text-yellow-600">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <div className="bg-gray-50 transition-all duration-400 group-hover:text-white group-hover:bg-success flex items-center justify-center rounded-full p-2 cursor-pointer">
          <BsBasket size={22} />
        </div>
      </div>
      {/* Offer box */}
      <div
        className="hidden absolute top-3 right-[-30px] bg-red-500 text-white py-1 px-6 
                  rotate-45 shadow-md text-sm font-semibold"
      >
        50% <span className="font-medium">تخفیف</span>
      </div>
      {/* hidden box */}
      <div className="max-lg:hidden absolute bg-white border-2 border-gray-50 flex items-center justify-center p-1 rounded-full w-9 h-9 top-5 right-70 transition-all duration-300 group-hover:right-50 group-hover:z-10 -z-20 cursor-pointer">
        <IoMdHeartEmpty size={28} />
      </div>
      <div className="max-lg:hidden absolute bg-white border-2 border-gray-50 flex items-center justify-center p-1 rounded-full w-9 h-9 top-15 right-70 transition-all duration-300 delay-100 group-hover:right-50 group-hover:z-10 -z-20 cursor-pointer">
        <MdOutlineRemoveRedEye size={28} />
      </div>
    </div>
  );
}

export default ProductBox;
