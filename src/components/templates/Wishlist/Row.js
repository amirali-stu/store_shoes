import { IoClose } from "react-icons/io5";
import { BsBasket } from "react-icons/bs";
import React from "react";
import Image from "next/image";

function Row() {
  return (
    <tr className="hover:bg-gray-100/20 relative transition-all duration-300">
      <td className="md:px-10 max-md:px-5 py-1 max-lg:py-8 flex items-center gap-x-2 text-sm text-gray-600 whitespace-nowrap">
        <Image
          src="/images/products/image.png"
          className="lg:block hidden"
          width={100}
          height={100}
          alt="wishlist-list"
        />
        <p className="text-base text-gray-900">کتونی نایکی</p>
      </td>

      <td className="md:px-10 max-md:px-2 max-sm:px-4 py-1 text-sm text-gray-600 whitespace-nowrap">
        <p className="text-xl max-sm:text-lg font-bold text-gray-900">
          $17,00
          <span className="line-through text-sm max-sm:text-xs text-gray-400 ml-2 max-sm:ml-1 font-normal">
            $48,00
          </span>
        </p>
      </td>

      <td className="md:px-10 max-md:px-2 max-sm:px-4 py-1 text-sm text-gray-600 whitespace-nowrap">
        <p className="text-sm max-sm:text-xs p-2 inline rounded-md text-success-dark bg-success-dark/18">
          موجود در انبار
        </p>
      </td>

      <td className="pl-4 text-sm text-gray-600 whitespace-nowrap max-sm:pr-3">
        <div className="flex items-center justify-end max-md:justify-start md:gap-x-8 max-sm:gap-x-3">
          <button className="bg-success max-lg:px-3 max-lg:text-xs max-lg:rounded-md text-white px-6 py-3 transition-all duration-300 hover:bg-success-dark text-center rounded-full cursor-pointer sm:block hidden">
            افزودن به سبد خرید
          </button>
          <button className="bg-success rounded-md text-white text-xl px-2 py-2 cursor-pointer sm:hidden block">
            <BsBasket />
          </button>
          <div className="p-1 max-lg:hidden border-2 max-sm:block border-gray-100 rounded-full cursor-pointer">
            <IoClose className="text-lg text-gray-900" />
          </div>
          <div className="p-1 absolute top-2 right-2 lg:hidden max-sm:hidden">
            <IoClose className="text-lg text-gray-900" />
          </div>
        </div>
      </td>
    </tr>
  );
}

export default Row;
