"use client";

import { successStyle } from "@/app/ToastStyles";
import Image from "next/image";
import Link from "next/link";
import { Activity, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";

export default function BasketBox({ onCloseBasket }) {
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const updateBasket = () => {
      const localStorageBasket = JSON.parse(
        localStorage.getItem("basket") || "[]"
      );
      setBasket(localStorageBasket);

      const totalAmount = localStorageBasket.reduce(
        (sum, item) => sum + item.price,
        0
      );
      setTotal(totalAmount);
    };

    updateBasket();
    window.addEventListener("basketUpdated", updateBasket);

    return () => window.removeEventListener("basketUpdated", updateBasket);
  }, []);

  const removeProductInBasket = (id) => {
    const newBasket = basket.filter((item) => item.id !== id);

    setBasket(newBasket);

    localStorage.setItem("basket", JSON.stringify(newBasket));

    window.dispatchEvent(new Event("basketUpdated"));

    toast.success("محصول از سبد خرید حذف شد", successStyle);
    onCloseBasket();
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="w-full flex items-center justify-between border-b-2 border-b-gray-100 pb-3">
        <h4 className="lg:text-3xl text-xl text-gray-900">
          سبد خرید {basket.length >= 1 ? `(${basket?.length})` : null}
        </h4>
        <IoClose
          onClick={onCloseBasket}
          className="lg:text-2xl text-lg cursor-pointer"
        />
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto mt-3 max-h-138 divide-y-2 divide-gray-100 flex flex-col gap-y-3">
        {basket.length >= 1 ? (
          basket.map((item) => (
            <div
              key={item}
              className="w-full flex items-center justify-between"
            >
              <Link href={"./product/1"} className="flex items-center gap-x-4">
                <Image
                  src={item.img}
                  width={120}
                  height={100}
                  alt="product-basket"
                  className="lg:w-[120px] lg:h-[100px] max-lg:w-[80px] max-lg:h-[80px]"
                />
                <div className="space-y-2">
                  <h5 className="text-gray-900 text-right">{item.title}</h5>
                  <p className="text-sm text-gray-900" dir="ltr">
                    {item.price}
                  </p>
                </div>
              </Link>
              <div
                className="lg:p-1.5 p-0.5 rounded-full border-2 text-md cursor-pointer border-gray-100"
                onClick={() => removeProductInBasket(item.id)}
              >
                <IoClose />
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-600 text-2xl h-full flex items-center flex-col justify-center">
            <p>سبد خرید خالی است </p>
            <Image src={"/images/empty-basket.jpg"} width={220} height={220} />
          </div>
        )}
      </div>

      {/* Fixed bottom button */}
      <div className="w-full fixed bottom-5 left-0 px-5 space-y-3">
        <div className="w-full flex items-center justify-between">
          <Activity mode={basket.length >= 1 ? "visible" : "hidden"}>
            <p className="text-gray-900">{basket?.length} محصول</p>
            <p className="text-gray-900 font-bold">{total}</p>
          </Activity>
        </div>
        <Link href={"/shopping_cart"}>
          <button
            className={`w-full text-lg p-2 rounded-full transition-all duration-300 ${
              basket.length >= 1
                ? " bg-success text-white hover:bg-success-dark cursor-pointer"
                : "text-gray-800 bg-gray-400/40 hover:bg-gray-400/20 cursor-not-allowed"
            }`}
            disabled={basket.length >= 1 ? false : true}
          >
            پرداخت
          </button>
        </Link>
      </div>
    </div>
  );
}
