"use client";

import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { BsBasket } from "react-icons/bs";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { toast } from "react-toastify";
import { errorStyle, successStyle } from "@/app/ToastStyles";

function ProductRow() {
  const addToLocalStorage = () => {
    const productDetails = {
      id: crypto.randomUUID(),
      title: "ذرت",
      count: 1,
      price: 14.99,
      img: "/images/banner.png",
    };

    const existingBasket = JSON.parse(localStorage.getItem("basket") || "[]");

    const isAlreadyInBasket = existingBasket.some(
      (item) => item.id === productDetails.id
    );

    if (isAlreadyInBasket) {
      return toast.error("محصول در سبد خرید شما وجود دارد", errorStyle);
    }

    const updatedBasket = [...existingBasket, productDetails];
    localStorage.setItem("basket", JSON.stringify(updatedBasket));

    // آپدیت در dom
    window.dispatchEvent(new Event("basketUpdated"));
    toast.success("محصول با موفقیت اضافه شد", successStyle);

    // فرستادن کاربر به اول صفحه
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="sm:w-[312px] w-full flex items-center border-2 border-gray-100 dark:border-slate-800 rounded-lg group transition-all duration-400 justify-between hover:shadow-[0_0_10px_-2px_#999999] hover:border-gray-400/70 lg:hover:-translate-y-1 relative overflow-hidden">
      <div className="relative h-full w-full">
        <Image
          src="/images/products/Image.png"
          alt="Product image"
          className="object-contain sm:w-[102px] h-[102px] max-sm:w-[200px]"
          width={102}
          height={102}
        />
      </div>
      <div className="w-full p-4 flex items-center font-sans-medium justify-between">
        <div>
          <h4 className="text-success-dark text-xl font-sans-regular">ذرت</h4>
          <p className="text-gray-900 text-lg"> ت14.99</p>
          <div className="flex items-center text-yellow-600">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
      </div>
      {/* hidden box */}
      <div className="bg-white w-40 max-sm:hidden absolute transition-all duration-300 left-0 -bottom-10 group-hover:bottom-4 h-10 block">
        <div className="max-sm:hidden absolute bg-white border-2 border-gray-50 flex items-center justify-center p-1 rounded-full w-9 h-9 right-0 -bottom-20 transition-all duration-300 group-hover:bottom-1 group-hover:z-10 hover:bg-success hover:text-white -z-20 cursor-pointer">
          <IoMdHeartEmpty size={28} />
        </div>
        <div className="max-sm:hidden absolute bg-white border-2 border-gray-50 flex items-center justify-center p-1 rounded-full w-9 h-9 right-10 -bottom-20 transition-all duration-300 delay-100 group-hover:bottom-1 group-hover:z-10 hover:bg-success hover:text-white -z-20 cursor-pointer">
          <MdOutlineRemoveRedEye size={28} />
        </div>
        <div
          className="max-sm:hidden absolute bg-white border-2 border-gray-50 flex items-center justify-center p-1 rounded-full w-9 h-9 right-20 -bottom-20 transition-all duration-300 delay-150 group-hover:bottom-1 group-hover:z-10 hover:bg-success hover:text-white -z-20 cursor-pointer"
          onClick={addToLocalStorage}
        >
          <BsBasket size={22} />
        </div>
      </div>
    </div>
  );
}

export default ProductRow;
