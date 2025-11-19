"use client";

import { useState } from "react";
import Accordion from "./Accordion";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { FaFilter } from "react-icons/fa";

export default function ProductFilterBox() {
  const options = ["کتونی", "صندل", "دمپایی", "اسکیچرز", "کفش"];
  const [selected, setSelected] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [minValue, setMinValue] = useState(200_000);
  const [maxValue, setMaxValue] = useState(800_000);

  const MIN = 0;
  const MAX = 1_000_000;
  const GAP = 50_000;

  //   category select
  const handleToggle = (item) => {
    setSelected(item);
  };

  //   range input
  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - GAP);
    setMinValue(value);
  };

  //   rating select
  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + GAP);
    setMaxValue(value);
  };

  const handleRatingToggle = (rating) => {
    setSelectedRatings((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating]
    );
  };

  const minPercent = (minValue / MAX) * 100;
  const maxPercent = (maxValue / MAX) * 100;

  return (
    <div className="font-sans-medium px-2 py-4 overflow-y-auto sticky top-0 z-40 bg-transparent">
      <form>
        <button
          type="submit"
          className="bg-success flex items-center gap-x-1 text-white cursor-pointer rounded-full px-6 py-2"
        >
          فیلتر کردن <FaFilter />{" "}
        </button>

        <Accordion title="دسته بندی">
          <div className="pr-4 flex flex-col gap-y-3.5">
            {options.map((item) => (
              <label
                key={item}
                className="flex items-center gap-3 cursor-pointer select-none"
              >
                <input
                  type="radio"
                  name="category-filter"
                  checked={selected.includes(item)}
                  onChange={() => handleToggle(item)}
                  className={`w-3 h-3 p-2 rounded-full border transition-all duration-300 border-gray-600 appearance-none cursor-pointer
    ${
      selected.includes(item)
        ? "bg-blue-500 ring-2 ring-blue-500 border-white"
        : "bg-white border-gray-600"
    }`}
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.1, 1, 1, 1)",
                  }}
                />
                <span className="text-gray-700">
                  {item} <span className="text-gray-400 text-sm">(120)</span>
                </span>
              </label>
            ))}
          </div>
        </Accordion>

        <Accordion title="قیمت">
          <div className="px-4">
            <div className="relative w-full h-10">
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1.5 bg-gray-300 rounded-full"></div>

              <div
                className="absolute top-1/2 -translate-y-1/2 h-1.5 bg-blue-500 rounded-full transition-all duration-300"
                style={{
                  left: `${minPercent}%`,
                  right: `${100 - maxPercent}%`,
                }}
              />

              <input
                type="range"
                min={MIN}
                max={MAX}
                step="1000"
                value={minValue}
                onChange={handleMinChange}
                className="absolute w-full h-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-blue-500 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-blue-500 [&::-moz-range-thumb]:cursor-pointer"
              />

              <input
                type="range"
                min={MIN}
                max={MAX}
                step="1000"
                value={maxValue}
                onChange={handleMaxChange}
                className="absolute w-full h-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-blue-500 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-blue-500 [&::-moz-range-thumb]:cursor-pointer"
              />
            </div>

            <div className="flex gap-x-1 justify-between items-center mt-4 text-sm font-medium text-gray-700">
              <div className="bg-gray-100 px-2 py-2 rounded-lg text-nowrap">
                حداقل:{" "}
                <span className="text-blue-600 font-bold">
                  {minValue.toLocaleString("fa-IR")}
                </span>{" "}
                تومان
              </div>
              <span className="text-gray-500">تا</span>
              <div className="bg-gray-100 px-2 py-2 rounded-lg text-nowrap">
                حداکثر:{" "}
                <span className="text-blue-600 font-bold">
                  {maxValue.toLocaleString("fa-IR")}
                </span>{" "}
                تومان
              </div>
            </div>

            <div className="text-center text-xs text-gray-500 mt-2">
              فاصله انتخابی: {(maxValue - minValue).toLocaleString("fa-IR")}{" "}
              تومان
            </div>
          </div>
        </Accordion>

        <Accordion title="امتازدهی">
          <div className="px-4 pb-4 space-y-3">
            {[5, 4, 3, 2, 1].map((rating) => (
              <label
                key={rating}
                className={`flex items-center gap-3 cursor-pointer select-none rounded-lg px-3 py-2 transition-all ${
                  selectedRatings.includes(rating)
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "hover:bg-gray-50"
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedRatings.includes(rating)}
                  onChange={() => handleRatingToggle(rating)}
                  className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 accent-blue-600"
                />

                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, index) => {
                    const starPosition = index + 1; // 1,2,3,4,5 از چپ
                    return starPosition <= rating ? (
                      <IoIosStar
                        key={index}
                        className="w-5 h-5 text-yellow-400 drop-shadow-sm"
                      />
                    ) : (
                      <IoIosStarOutline
                        key={index}
                        className="w-5 h-5 text-gray-300"
                      />
                    );
                  })}
                  <span className="text-sm mr-2">
                    {rating === 5 ? "۵ ستاره" : `${rating} ستاره و بالاتر`}
                  </span>
                </div>
              </label>
            ))}
          </div>
        </Accordion>
      </form>
    </div>
  );
}
