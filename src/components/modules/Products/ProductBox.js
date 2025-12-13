"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { BsBasket } from "react-icons/bs";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import Link from "next/link";
import { toast } from "react-toastify";
import { errorStyle, successStyle } from "@/app/ToastStyles";

function ProductBox() {
  const addToLocalStorage = () => {
    const productDetails = {
      id: crypto.randomUUID(),
      title: "ذرت",
      count: 1,
      price: 14.99,
      img: "/images/products/Image.png",
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
    <div className="md:max-w-[220px] max-md:w-full flex items-center flex-col border-2 border-gray-100 dark:border-slate-800 rounded-lg group transition-all duration-400 hover:shadow-[0_0_10px_-2px_#999999] hover:border-gray-400/70 lg:hover:-translate-y-1 relative overflow-hidden font-sans-medium">
      <div className="relative h-full w-full m-0 p-0">
        <Image
          src="/images/banner.png"
          alt="Product image"
          className="w-full h-full xl:h-[200px] lg:h-[200px] md:h-full"
          width={200}
          height={200}
        />
      </div>
      <div className="w-full p-4 flex items-center font-sans-medium justify-between">
        <div>
          <h4 className="text-gray-700 dark:text-white text-xl font-sans-regular">
            ذرت
          </h4>
          <p className="text-gray-900 dark:text-white text-lg"> ت14.99</p>
          <div className="flex items-center text-yellow-600 dark:text-yellow-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <div
          className="bg-gray-50 dark:bg-slate-800 dark:text-gray-100 transition-all duration-400 group-hover:text-white group-hover:bg-success dark:group-hover:bg-slate-700 flex items-center justify-center rounded-full p-2 cursor-pointer"
          onClick={addToLocalStorage}
        >
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
      <Link href={"/wishlist"}>
        <div className="max-lg:hidden absolute bg-white dark:bg-slate-800 border-2 border-gray-50 dark:border-slate-700 flex items-center justify-center p-1 rounded-full w-9 h-9 top-5 right-70 transition-all duration-300 group-hover:right-42 group-hover:z-10 -z-20 cursor-pointer">
          <IoMdHeartEmpty size={28} />
        </div>
      </Link>
      <Link href={"/product/1"}>
        <div className="max-lg:hidden absolute bg-white dark:bg-slate-800 border-2 border-gray-50 dark:border-slate-700 flex items-center justify-center p-1 rounded-full w-9 h-9 top-15 right-70 transition-all duration-300 delay-100 group-hover:right-42 group-hover:z-10 -z-20 cursor-pointer">
          <MdOutlineRemoveRedEye size={28} />
        </div>
      </Link>
    </div>
  );
}

export default ProductBox;
