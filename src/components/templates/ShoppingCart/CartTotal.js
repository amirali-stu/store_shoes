"use client";

import { Activity, useEffect, useState } from "react";
import { apiRequest } from "../../../../services/axios/config/apiRequest";
import { toast } from "react-toastify";
import { errorStyle, successStyle } from "@/app/ToastStyles";
import { useRouter } from "next/navigation";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

function CartTotal() {
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  const router = useRouter();

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
      setTotal(Number(totalAmount.toFixed(2)));
    };

    updateBasket();
    window.addEventListener("basketUpdated", updateBasket);

    return () => window.removeEventListener("basketUpdated", updateBasket);
  }, []);

  const payment = async () => {
    try {
      const res = await apiRequest.get("/auth/me");

      toast.success("خرید با موفقیت انجام شد", successStyle);
    } catch (error) {
      if (error.response?.status === 401) {
        toast.error("ابتدا وارد حساب شوید", errorStyle);
        setTimeout(() => {
          router.replace("/auth/login");
        }, 3000);
      } else {
        toast.error("خطایی رخ داده است", errorStyle);
        console.error(error);
      }
    }
  };

  return (
    <div className="p-6 border-2 border-gray-100 rounded-lg ">
      <h3 className="text-xl font-bold text-gray-900">مجموع خرید</h3>
      <div className="*:py-3 divide-y-2 divide-gray-100 mt-2">
        <div className="w-full flex items-center justify-between">
          <p className="text-gray-700">مبلغ خرید</p>
          <p className="text-gray-900">${total}</p>
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="text-gray-700">هزینه ارسال</p>
          <p className="text-gray-900">رایگان</p>
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="text-gray-700">مجموع کل</p>
          <p className="text-gray-900">${total}</p>
        </div>
      </div>
      <Tippy
        content="سبد خرید خالی است"
        disabled={basket.length >= 1 ? true : false}
        className="font-sans-regular"
      >
        <button
          className={`w-full mt-5 rounded-full text-center text-white py-3 ${
            basket.length >= 1
              ? "bg-success cursor-pointer"
              : "bg-success-dark cursor-not-allowed"
          }`}
          onClick={payment}
        >
          پرداخت آنی
        </button>
      </Tippy>
    </div>
  );
}

export default CartTotal;
