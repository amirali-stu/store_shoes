import React from "react";
import { BsBasket } from "react-icons/bs";
import { IoIosSearch, IoMdHeartEmpty } from "react-icons/io";

function MiddleHeader() {
  return (
    <div className="container w-full flex items-center justify-between font-sans-medium !py-5 !px-[200px]">
      <h3 className="text-4xl">کفش تک</h3>

      <div className="w-[400px] h-[50px] rounded-md flex items-center border-2 border-gray-100 pr-4 overflow-hidden">
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
        <IoMdHeartEmpty className="cursor-pointer" size={28} />
        <span className="bg-gray-200 w-[1.5px] h-8" />
        <div className="relative">
          <BsBasket className="cursor-pointer" size={28} />
          <span className="absolute w-5.5 rounded-full text-sm -top-2.5 right-3 border-2 border-white bg-green-600 text-white text-center flex items-center justify-center">
            1
          </span>
        </div>
      </div>
    </div>
  );
}

export default MiddleHeader;
