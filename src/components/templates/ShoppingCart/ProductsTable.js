"use client";


import React, { useEffect, useState } from "react";
import Row from "./Row";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { successStyle } from "@/app/ToastStyles";

function ProductsTable() {
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const updateBasket = () => {
      const localStorageBasket = JSON.parse(
        localStorage.getItem("basket") || "[]"
      );
      setBasket(localStorageBasket);

      const totalAmount = localStorageBasket.reduce(
        (sum, item) => sum + item.price * item.count,
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
  };

  const updateProductCount = (id, newCount) => {
    const newBasket = basket.map((item) =>
      item.id === id ? { ...item, count: newCount } : item
    );
    setBasket(newBasket);
    localStorage.setItem("basket", JSON.stringify(newBasket));
    window.dispatchEvent(new Event("basketUpdated"));
  };

  return (
    <div
      className={`overflow-x-auto rounded-lg ${
        basket.length < 1 && "border-2 border-gray-100 dark:border-slate-700"
      }`}
    >
      {basket.length >= 1 ? (
        <div className="min-w-full flex flex-col gap-y-2 overflow-hidden">
          {basket?.map((item) => (
            <Row
              key={item.id}
              {...item}
              removeProductInBasket={removeProductInBasket}
              onChangeCounter={updateProductCount}
            />
          ))}
        </div>
      ) : (
        <Link href={"/products"}>
          <div className="relative group w-full overflow-y-hidden cursor-pointer">
            {/* محتوای اصلی */}
            <div className="text-center text-gray-600 dark:text-gray-300 p-4 text-2xl h-full flex flex-col items-center justify-center transition-all duration-300">
              <p>سبد خرید خالی است</p>
              <Image src="/images/empty-basket.jpg" width={220} height={220} />
            </div>

            <div className="absolute -bottom-5 left-0 w-full h-full bg-gray-400/20 backdrop-blur-2xl z-10 translate-y-full group-hover:translate-y-0 group-hover:bottom-0 transition-transform duration-300 flex items-center justify-center">
              <Image
                src={"/images/mobile-cart-full.webp"}
                width={180}
                height={180}
                alt="Full basket offer"
              />
              <p className="text-gray-900  text-2xl">
                بریم سبد خریدمون رو پر کنیم{" "}
              </p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}

export default ProductsTable;
