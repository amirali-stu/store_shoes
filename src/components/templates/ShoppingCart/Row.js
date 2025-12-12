"use client";

import { IoClose } from "react-icons/io5";
import React, { useState } from "react";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { toast } from "react-toastify";
import { errorStyle } from "@/app/ToastStyles";

function Row({
  id,
  img,
  title,
  price,
  count,
  removeProductInBasket,
  onChangeCounter,
}) {
  const [counter, setCounter] = useState(count || 1);

  const plusCounter = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
    onChangeCounter(id, newCounter);
  };

  const minesCounter = () => {
    if (counter === 1) {
      return toast.error("تعداد محصول نمی تواند کمتر از 1 باشد", errorStyle);
    }
    const newCounter = counter - 1;
    setCounter(newCounter);
    onChangeCounter(id, newCounter);
  };

  return (
    <div className="bg-gray-50 flex h-34 items-center gap-x-4 p-3 rounded-xl relative transition-all duration-300">
      <div className="w-34 h-full">
        <Image
          src={img}
          className="w-full h-full rounded-[15px_50px_30px] min-w-[100px] min-h-[100px]"
          width={100}
          height={100}
          alt="wishlist-list"
        />
      </div>

      <div className="w-full h-full flex flex-col justify-between md:mr-10">
        <div className="flex items-center gap-x-10">
          <h2 className="md:text-xl text-lg">کتونی نایک ...</h2>
        </div>

        <div className="flex items-center gap-x-2">
          <p className="text-xl max-md:text-base text-gray-900">
            ${price}
            <span className="line-through text-sm max-sm:text-xs text-gray-400 ml-2 max-sm:ml-1 font-normal">
              $48,00
            </span>
          </p>
        </div>

        <div className="inline-flex rounded-full items-center md:gap-x-3 gap-x-2">
          <div
            className="md:p-2 p-1.5 md:text-lg text-base rounded-full cursor-pointer bg-gray-50 flex items-center justify-center text-gray-600 transition-all duration-300 hover:text-gray-900"
            onClick={minesCounter}
          >
            <FaMinus />
          </div>
          <p className="text-xl">{counter}</p>
          <div
            className="md:p-2 p-1.5 md:text-lg text-base rounded-full cursor-pointer bg-gray-50 flex items-center justify-center text-gray-600 transition-all duration-300 hover:text-gray-900"
            onClick={plusCounter}
          >
            <FaPlus />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="p-1 border-2 border-gray-100 rounded-full cursor-pointer">
          <IoClose
            className="text-lg text-gray-900"
            onClick={() => removeProductInBasket(id)}
          />
        </div>
      </div>
    </div>
  );
}

export default Row;
