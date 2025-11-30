"use client";

import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

function AddressInfo() {
  const [selectedCity, setSelectedCity] = useState("");
  const [openCitySelector, setOpenCitySelector] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [openProvinceSelector, setOpenProvinceSelector] = useState(false);

  const cities = ["تهران", "مشهد", "اصفهان", "شیراز"];
  const province = ["تهران", "مشهد", "اصفهان", "شیراز"];

  return (
    <div className="border-2 border-gray-100 rounded-lg px-5">
      <h2 className="py-4 border-b-2 border-b-gray-100 text-xl font-sans-bold">
        تنظمات آدرس
      </h2>
      <div className="p-5 max-md:p-2">
        <form className="w-full flex flex-col gap-y-4 justify-between">
          <div className="flex-1 flex flex-col gap-y-4">
            <div className="w-full flex flex-col gap-y-2">
              <label htmlFor="street_address" className="text-gray-900">
                آدرس خیابان
              </label>
              <input
                type="text"
                id="street_address"
                className="border-2 w-full outline-0  border-gray-100 transition-all duration-300 focus:ring-1 focus:border-success focus:ring-success bg-white rounded-md py-2 pr-4 text-gray-600"
                placeholder="مثال: تهران ، ولیعصر"
              />
            </div>
          </div>
          <div className="flex items-center max-md:flex-col max-md:gap-y-4 justify-between gap-x-4">
            <div className="w-[50%] max-md:w-full flex flex-col gap-y-2 relative">
              <label className="text-gray-900">انتخاب شهر</label>
              <div
                className="border-2 w-full border-gray-100 rounded-md bg-white py-2 pr-4 pl-3 text-gray-600 flex justify-between items-center cursor-pointer transition-all duration-300 focus-within:ring-1 focus-within:ring-success"
                onClick={() => setOpenCitySelector(!openCitySelector)}
              >
                <span>{selectedCity || "مثال: تهران"}</span>
                <BiChevronDown
                  size={20}
                  className={`transition-all duration-300 ${
                    openCitySelector ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>

              <ul
                className={`absolute top-full transition-all duration-300 left-0 w-full mt-1 bg-white border-2 border-gray-100 rounded-md shadow-lg z-50 max-h-40 overflow-auto ${
                  openCitySelector
                    ? "translate-y-0 opacity-100 visible pointer-events-auto"
                    : "translate-y-3 opacity-0 invisible pointer-events-none"
                }`}
              >
                {cities.map((opt) => (
                  <li
                    key={opt}
                    className="px-3 py-2 hover:bg-green-200/30 cursor-pointer"
                    onClick={() => {
                      setSelectedCity(opt);
                      setOpenCitySelector(false);
                    }}
                  >
                    {opt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-[50%] max-md:w-full flex flex-col gap-y-2 relative">
              <label className="text-gray-900">انتخاب استان</label>
              <div
                className="border-2 w-full border-gray-100 rounded-md bg-white py-2 pr-4 pl-3 text-gray-600 flex justify-between items-center cursor-pointer transition-all duration-300 focus-within:ring-1 focus-within:ring-success"
                onClick={() => setOpenProvinceSelector(!openProvinceSelector)}
              >
                <span>{selectedProvince || "مثال: تهران"}</span>
                <BiChevronDown
                  size={20}
                  className={`transition-all duration-300 ${
                    openProvinceSelector ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>

              <ul
                className={`absolute top-full transition-all duration-300 left-0 w-full mt-1 bg-white border-2 border-gray-100 rounded-md shadow-lg z-50 max-h-40 overflow-auto ${
                  openProvinceSelector
                    ? "translate-y-0 opacity-100 visible pointer-events-auto"
                    : "translate-y-3 opacity-0 invisible pointer-events-none"
                }`}
              >
                {province.map((opt) => (
                  <li
                    key={opt}
                    className="px-3 py-2 hover:bg-green-200/30 cursor-pointer"
                    onClick={() => {
                      setSelectedProvince(opt);
                      setOpenProvinceSelector(false);
                    }}
                  >
                    {opt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center max-md:flex-col max-md:gap-y-4 justify-between gap-x-4">
            <div className="w-[50%] max-md:w-full flex flex-col gap-y-2">
              <label htmlFor="email_address" className="text-gray-900">
                آدرس ایمیل
              </label>
              <input
                type="text"
                id="email_address"
                className="border-2 w-full outline-0  border-gray-100 transition-all duration-300 focus:ring-1 focus:border-success focus:ring-success bg-white rounded-md py-2 pr-4 text-gray-600"
                placeholder="مثال: example@gmail.com"
              />
            </div>
            <div className="w-[50%] max-md:w-full flex flex-col gap-y-2">
              <label htmlFor="phone_number" className="text-gray-900">
                شماره تماس
              </label>
              <input
                type="tel"
                id="phone_number"
                className="border-2 w-full outline-0  border-gray-100 transition-all duration-300 focus:ring-1 focus:border-success focus:ring-success bg-white rounded-md py-2 px-4 text-gray-600"
                placeholder="0912 345 6789"
              />
            </div>
          </div>
          <button className="text-white bg-success border-2 transition-all duration-300 p-2 md:w-40 rounded-full cursor-pointer hover:bg-white hover:border-success hover:text-success">
            ذخیره تغییرات
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddressInfo;
