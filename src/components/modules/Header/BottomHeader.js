import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

function BottomHeader() {
  return (
    <div className="container w-full h-[56px] bg-gray-50 flex items-center justify-between font-sans-medium !px-[200px]">
      <div>
        <ul className="flex items-center gap-x-4">
          <li>
            <a href="#">خانه</a>
          </li>

          <li>
            <div className="flex relative group transition-all items-center cursor-pointer gap-x-1">
              <span>محصولات</span>
              <IoIosArrowDown size={20} />

              {/* منوی بازشونده */}
              <ul className="absolute w-40 right-5 flex flex-col gap-y-4 bg-white shadow-xl rounded-lg p-2 opacity-0 top-0 transition-all delay-75 duration-300 group-hover:opacity-100 group-hover:top-6 pointer-events-none group-hover:pointer-events-auto">
                <li>
                  <a href="#">لینک اول</a>
                </li>
                <li>
                  <a href="#">لینک دوم</a>
                </li>
                <li>
                  <a href="#">لینک سوم</a>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <div className="flex relative group items-center cursor-pointer gap-x-1">
              <span>وبلاگ</span>
              <IoIosArrowDown size={20} />

              <ul className="absolute w-40 right-5 flex flex-col gap-y-4 bg-white shadow-xl rounded-lg p-2 opacity-0 top-0 transition-all delay-75 duration-300 group-hover:opacity-100 group-hover:top-6 pointer-events-none group-hover:pointer-events-auto">
                <li>
                  <a href="#">لینک اول</a>
                </li>
                <li>
                  <a href="#">لینک دوم</a>
                </li>
                <li>
                  <a href="#">لینک سوم</a>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <a href="#">درباره ی ما</a>
          </li>

          <li>
            <a href="#">ارتباط باما</a>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-x-1 transition-all hover:text-green-700 cursor-pointer">
        <span>09054073722</span>
        <BiPhoneCall size={22} />
      </div>
    </div>
  );
}

export default BottomHeader;
