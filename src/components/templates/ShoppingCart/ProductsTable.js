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
    <div className="overflow-x-auto border-2 border-gray-100 rounded-lg">
      {basket.length >= 1 ? (
        <table className="min-w-full overflow-hidden">
          <thead className="bg-white md:text-sm max-md:text-xs border-b-2 border-gray-100">
            <tr>
              <th
                scope="col"
                className="py-3 text-right md:px-8 max-md:px-5 text-nowrap"
              >
                محصول
              </th>
              <th
                scope="col"
                className="py-3 text-right md:px-12 max-md:px-5 text-nowrap"
              >
                مبلغ
              </th>
              <th
                scope="col"
                className="py-3 text-right md:px-16 max-md:px-5 text-nowrap"
              >
                تعداد
              </th>
              <th
                scope="col"
                className="py-3 text-right md:px-8 max-md:px-5 text-nowrap"
              >
                مبلغ کل
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y-2 divide-gray-100">
            {basket?.map((item) => (
              <Row
                key={item.id}
                {...item}
                removeProductInBasket={removeProductInBasket}
                onChangeCounter={updateProductCount}
              />
            ))}
          </tbody>

          <tfoot className="bg-white border-t-2 border-gray-100">
            <tr>
              <td colSpan={5} className="py-4 px-4">
                <div className="flex items-center justify-between w-full">
                  <Link href={"/"}>
                    <button className="px-7 py-3.5 bg-gray-50 text-gray-700 rounded-full transition-all duration-300 hover:bg-gray-100 cursor-pointer">
                      بازگشت به فروشگاه
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      ) : (
        <Link href={"/products"}>
          <div className="relative group w-full overflow-y-hidden cursor-pointer">
            {/* محتوای اصلی */}
            <div className="text-center text-gray-600 p-4 text-2xl h-full flex flex-col items-center justify-center transition-all duration-300">
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
              <p className="text-gray-900 text-2xl">
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
