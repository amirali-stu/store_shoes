"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsBasket } from "react-icons/bs";
import { IoIosSearch, IoMdHeartEmpty } from "react-icons/io";

function MiddleHeader({ setIsOpenBasket }) {
  const [basketLength, setBasketLength] = useState(0);

  useEffect(() => {
    const handleBasketUpdate = () => {
      const basket = JSON.parse(localStorage.getItem("basket") || "[]");
      setBasketLength(basket.length);
    };

    handleBasketUpdate();

    window.addEventListener("basketUpdated", handleBasketUpdate);

    return () => {
      window.removeEventListener("basketUpdated", handleBasketUpdate);
    };
  }, []);

  return (
    <div className="container-custom w-full flex items-center justify-between font-sans-medium bg-white !py-5 lg:!px-[200px] max-lg:!px-[80px] max-sm:!px-[40px]">
      <h3 className="lg:text-4xl max-lg:text-2xl">کفش تک</h3>

      <div className="w-[400px] hidden xl:inline-flex h-[50px] rounded-md items-center border-2 border-gray-100 pr-4 overflow-hidden">
        <IoIosSearch size={28} />
        <input
          className="w-full h-full placeholder:text-gray-500 pr-2 outline-0 text-gray-600"
          placeholder="جست و جو کنید..."
        />
        <button className="text-white bg-success w-40 cursor-pointer h-full">
          جست و جو
        </button>
      </div>

      <div className="flex items-center gap-x-3">
        <Link href={"/wishlist"}>
          <IoMdHeartEmpty className="cursor-pointer" size={28} />
        </Link>
        <span className="bg-gray-200 w-[1.5px] h-8" />
        <div className="relative" onClick={() => setIsOpenBasket(true)}>
          <BsBasket className="cursor-pointer" size={28} />
          {basketLength > 0 && (
            <span className="absolute w-5.5 rounded-full text-sm -top-2.5 right-3 border-2 border-white bg-green-600 text-white text-center flex items-center justify-center">
              {basketLength}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default MiddleHeader;
