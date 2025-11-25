import { IoClose } from "react-icons/io5";
import React from "react";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa6";

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
        <p className="text-xl max-md:text-base text-gray-900">
          $17,00
          <span className="line-through text-sm max-sm:text-xs text-gray-400 ml-2 max-sm:ml-1 font-normal">
            $48,00
          </span>
        </p>
      </td>

      <td className="md:px-10 max-md:px-2 max-sm:px-4 py-1 whitespace-nowrap">
        <div className="inline-flex p-2 border-2 border-gray-100 rounded-full items-center gap-x-3">
          <div className="p-2.5 text-lg rounded-full cursor-pointer bg-gray-50 flex items-center justify-center text-gray-600 transition-all duration-300 hover:text-gray-900">
            <FaMinus />
          </div>
          <p>5</p>
          <div className="p-2.5 text-lg rounded-full cursor-pointer bg-gray-50 flex items-center justify-center text-gray-600 transition-all duration-300 hover:text-gray-900">
            <FaPlus />
          </div>
        </div>
      </td>

      <td className="md:px-10 max-md:px-2 max-sm:px-4 py-1 text-sm text-gray-600 whitespace-nowrap">
        <p className="text-xl max-md:text-base text-gray-900">$80,00</p>
      </td>

      <td className="pl-4 text-sm text-gray-600 whitespace-nowrap max-sm:pr-3">
        <div className="flex items-center justify-center">
          <div className="p-1 max-lg:hidden border-2 max-sm:block border-gray-100 rounded-full cursor-pointer">
            <IoClose className="text-lg text-gray-900" />
          </div>
        </div>
      </td>
    </tr>
  );
}

export default Row;
