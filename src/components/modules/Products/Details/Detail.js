"use client";
import { FaStar } from "react-icons/fa";
import { FaMinus, FaPlus, FaBasketShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import ProductGallery from "./Slider";
import React, { useEffect, useState } from "react";
import ShowColors from "./ShowColors";
import ShowSizes from "./ShowSizes";
import { toast } from "react-toastify";
import { errorStyle, successStyle } from "@/app/ToastStyles";
import AddProductToWishlist from "../AddProductToWishlist";

let userProduct = {
  productId: "",
  colorId: "",
  size: "",
  variantId: "",
  quantity: 1,
};

export default function Detail({
  id,
  title,
  images,
  price,
  colors,
  sizeRange,
}) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [inventory, setInventory] = useState(0);
  const [selectedColorId, setSelectedColorId] = useState("");
  const [quantityProduct, setQuantityProduct] = useState(1);

  // ساختن سایز رنج
  const sizeRangeArray = React.useMemo(() => {
    if (!sizeRange?.from || !sizeRange?.to) return [];
    return Array.from(
      { length: sizeRange.to - sizeRange.from + 1 },
      (_, i) => sizeRange.from + i
    );
  }, [sizeRange?.from, sizeRange?.to]);

  // پیدا کردن رنگ انتخاب شده
  const selectedColor = React.useMemo(() => {
    return colors?.find((c) => String(c.value) === String(selectedColorId));
  }, [colors, selectedColorId]);

  // فانکشن کمکی
  const selectedSizeInfo = selectedColor?.sizes.find(
    (s) => String(s.value) === String(selectedSize)
  );

  // ساختن حلقه برای انتخاب سایز های اون رنگ
  const sizeInfoByValue = React.useMemo(() => {
    const m = new Map();
    (selectedColor?.sizes ?? []).forEach((s) => {
      m.set(String(s.value), s); // value تو دیتات string هست
    });
    return m;
  }, [selectedColor]);

  useEffect(() => {
    if (!selectedSize) return;

    const info = sizeInfoByValue.get(String(selectedSize));
    if (!info || info.count < 1) {
      setSelectedSize(null);
      setInventory(0);
    }
  }, [selectedColorId, sizeInfoByValue]);

  // انتخاب اولین رنگ موقع لود اولیه سایت
  useEffect(() => {
    if (colors?.length > 0 && !selectedColorId) {
      setSelectedColorId(colors[0].value);
    }
  }, [colors, selectedColorId]);

  // افزایش تعداد محصول
  const increaseProductQuantity = () => {
    setQuantityProduct((prev) => prev + 1);
  };

  // کاهش تعداد محصول
  const decreaseProductQuantity = () => {
    setQuantityProduct((prev) => Math.max(1, prev - 1));
  };

  // ساخت اطلاعات محصول هنگام افزودن به سبد خرید کاربر
  const createUserProduct = () => {
    if (!selectedColor) {
      console.log("false 1");
      toast.error("لطفاً رنگ را انتخاب کنید", errorStyle);
      return;
    }

    if (!selectedSizeInfo) {
      console.log("false 2");
      toast.error("لطفاً سایز را انتخاب کنید", errorStyle);
      return;
    }

    if (selectedSizeInfo.count < quantityProduct) {
      console.log("false 3");
      toast.error("این تعداد سایز در انبار موجود نیست", errorStyle);
      return;
    }

    userProduct = {
      productId: id,
      colorId: selectedColorId,
      size: String(selectedSize),
      variantId: String(selectedSizeInfo.variantId),
      quantity: quantityProduct,
    };

    console.log("success");
    toast.success("محصول با موفقیت به سبدخرید اضافه شد", successStyle);
  };

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
              <h2 className="text-3xl font-bold dark:text-gray-300">{title}</h2>
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
                {Number(price).toLocaleString()}ت
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

              <ShowColors
                colors={colors}
                selectedColorId={selectedColorId}
                setSelectedColorId={setSelectedColorId}
              />
            </div>

            {/* select size */}
            <div>
              <p className="mb-2">انتخاب سایز</p>

              <ShowSizes
                selectedSize={selectedSize}
                setInventory={setInventory}
                setSelectedSize={setSelectedSize}
                sizeInfoByValue={sizeInfoByValue}
                sizeRangeArray={sizeRangeArray}
              />

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
                <button
                  onClick={decreaseProductQuantity}
                  className="p-2.5 cursor-pointer bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-slate-400 rounded-full transition-all duration-300"
                >
                  <FaMinus />
                </button>
                <span className="text-lg font-medium">{quantityProduct}</span>
                <button
                  onClick={increaseProductQuantity}
                  className="p-2.5 cursor-pointer bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-slate-400 rounded-full transition-all duration-300"
                >
                  <FaPlus />
                </button>
              </div>

              <button
                className="flex-1 max-sm:hidden bg-success dark:bg-success-dark text-white rounded-full py-4 px-6 flex items-center justify-center gap-3 text-lg font-medium hover:bg-success-dark dark:hover:bg-success/80 transition-all duration-300 cursor-pointer"
                onClick={createUserProduct}
              >
                <FaBasketShopping />
                افزودن به سبد خرید
              </button>

              <button
                onClick={() => AddProductToWishlist({ id })}
                className="p-4 rounded-full bg-success-dark/20 dark:hover:bg-success/50 text-success-dark hover:bg-success hover:text-white transition-all duration-300 cursor-pointer"
              >
                <FaRegHeart className="w-6 h-6" />
              </button>
            </div>

            <button
              className="flex-1 sm:hidden bg-success dark:bg-success-dark text-white rounded-full py-4 px-6 flex items-center justify-center gap-3 text-lg font-medium hover:bg-success-dark transition-all duration-300 cursor-pointer"
              onClick={createUserProduct}
            >
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
