"use client";
import { FaStar } from "react-icons/fa";
import { FaMinus, FaPlus, FaBasketShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import ProductGallery from "./Slider";
import { useEffect, useState } from "react";

const colors = [
  { name: "آبی", value: "blue", class: "bg-blue-500", disabled: false },
  { name: "قرمز", value: "red", class: "bg-red-500", disabled: false },
  { name: "سبز", value: "green", class: "bg-green-500", disabled: false },
];

const images = [
  "/images/banner.png",
  "/images/banner.png",
  "/images/banner.png",
  "/images/banner.png",
];

const sizes = [
  { value: 40, count: 10 },
  { value: 41, count: 9 },
  { value: 42, count: 2 },
  { value: 43, count: 0 },
  { value: 44, count: 1 },
  { value: 45, count: 0 },
];

export default function Detail() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [inventory, setInventory] = useState(0);

  useEffect(() => {
    console.log(selectedSize);
  }, [selectedSize]);

  return (
    <div className="lg:px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* گالری عکس */}
        <div className="flex-1 w-full lg:w-1/2">
          <ProductGallery images={images} />
        </div>

        {/* اطلاعات محصول */}
        <div className="w-full lg:w-1/2 flex flex-col gap-y-6">
          <div className="border-b-2 pb-4 border-gray-100 dark:border-slate-700 space-y-4">
            <div className="flex items-center gap-x-2">
              <h2 className="text-3xl font-bold dark:text-gray-300">
                بوراک 367
              </h2>
              <span className="px-3 py-1 text-sm rounded-lg text-success-dark dark:text-success bg-success-dark/20">
                موجود در انبار
              </span>
            </div>

            <div className="flex items-center gap-x-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-warning w-5 h-5" />
              ))}
              <span className="text-gray-600 dark:text-slate-400 text-sm mr-2">
                5 نقد و بررسی.
              </span>
            </div>

            <div className="flex items-center gap-x-3">
              <p className="text-2xl font-bold text-success-dark">
                $17,00
                <span className="line-through text-sm text-gray-400 ml-2 font-normal">
                  $48,00
                </span>
              </p>
              <span className="text-error text-sm bg-error/20 rounded-full px-3 py-1">
                34% تخفیف
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {/* select color */}
            <div>
              <p className="mb-2 font-medium">
                رنگ مورد نظر خود را انتخاب کنید
              </p>

              <div className="flex items-center gap-3">
                {colors.map((color) => {
                  const isSelected = selectedColor === color.value;

                  return (
                    <button
                      key={color.value}
                      type="button"
                      disabled={color.disabled}
                      onClick={() => setSelectedColor(color.value)}
                      aria-label={color.name}
                      className={`
                relative w-9 h-9 rounded-full transition
                flex items-center justify-center
                ${
                  color.disabled
                    ? "opacity-40 cursor-not-allowed"
                    : "cursor-pointer hover:scale-105"
                }
                ${
                  isSelected
                    ? "ring-2 ring-white ring-offset-2 ring-offset-slate-900"
                    : "ring-1 ring-zinc-500 dark:ring-slate-700"
                }
              `}
                    >
                      <span
                        className={`
                  absolute inset-1 rounded-full
                  ${color.class}
                `}
                      />

                      {isSelected && (
                        <span className="relative z-10 text-white text-sm font-bold">
                          ✓
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* select size */}
            <div>
              <p className="mb-2">انتخاب سایز</p>

              <div className="flex items-center gap-2">
                {sizes.map((size) => {
                  const isSelected = selectedSize === size.value;

                  return (
                    <button
                      key={size.value}
                      disabled={size.count >= 1 ? false : true}
                      onClick={() => {
                        setSelectedSize(size.value);
                        setInventory(size.count);
                      }}
                      className={`
                flex-1 py-2 rounded-lg font-medium transition
                border 
                ${
                  size.count < 1
                    ? "bg-gray-50 dark:bg-slate-900 cursor-not-allowed text-gray-400 dark:text-slate-500 border-gray-200 dark:border-slate-800"
                    : isSelected
                    ? "border-slate-900 shadow-lg shadow-slate-900/20 dark:border-gray-300 bg-slate-900 dark:bg-white text-white dark:text-black"
                    : "bg-transparent cursor-pointer text-black dark:text-gray-300 border-gray-200 dark:border-slate-700  hover:border-slate-900 dark:hover:border-gray-200 dark:hover:text-white"
                }
              `}
                    >
                      {size.value}
                    </button>
                  );
                })}
              </div>

              {selectedSize && (
                <p className="mt-2 text-sm text-zinc-400">
                  موجود در انبار:{" "}
                  <span className="text-black dark:text-white">
                    {inventory}
                  </span>
                </p>
              )}
            </div>
          </div>

          <div className="flex sm:items-center max-sm:flex-col gap-4 py-6 max-sm:justify-between border-t-2 border-gray-100 dark:border-slate-700">
            <div className="flex items-center gap-4 max-sm:justify-between w-full">
              <div className="flex gap-x-3 items-center border-2 p-2 border-gray-200 dark:border-slate-700 rounded-full">
                <button className="p-2.5 cursor-pointer bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-slate-400 rounded-full transition-all duration-300">
                  <FaMinus />
                </button>
                <span className="text-lg font-medium">5</span>
                <button className="p-2.5 cursor-pointer bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-slate-400 rounded-full transition-all duration-300">
                  <FaPlus />
                </button>
              </div>

              <button className="flex-1 max-sm:hidden bg-success dark:bg-success-dark text-white rounded-full py-4 px-6 flex items-center justify-center gap-3 text-lg font-medium hover:bg-success-dark dark:hover:bg-success/80 transition-all duration-300 cursor-pointer">
                <FaBasketShopping />
                افزودن به سبد خرید
              </button>

              <button className="p-4 rounded-full bg-success-dark/20 dark:hover:bg-success/50 text-success-dark hover:bg-success hover:text-white transition-all duration-300 cursor-pointer">
                <FaRegHeart className="w-6 h-6" />
              </button>
            </div>

            <button className="flex-1 sm:hidden bg-success dark:bg-success-dark text-white rounded-full py-4 px-6 flex items-center justify-center gap-3 text-lg font-medium hover:bg-success-dark transition-all duration-300 cursor-pointer">
              <FaBasketShopping />
              افزودن به سبد خرید
            </button>
          </div>

          <p className="text-gray-700 dark:text-gray-300">
            دسته بندی: <span className="text-gray-500">کتونی، نایک، اسپرت</span>
          </p>
        </div>
      </div>
    </div>
  );
}
