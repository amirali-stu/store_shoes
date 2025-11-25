import React from "react";

function CartTotal() {
  return (
    <div className="p-6 border-2 border-gray-100 rounded-lg ">
      <h3 className="text-xl font-bold text-gray-900">مجموع خرید</h3>
      <div className="*:py-3 divide-y-2 divide-gray-100 mt-2">
        <div className="w-full flex items-center justify-between">
          <p className="text-gray-700">مبلغ خرید</p>
          <p className="text-gray-900">$80.00</p>
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="text-gray-700">هزینه ارسال</p>
          <p className="text-gray-900">رایگان</p>
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="text-gray-700">مجموع کل</p>
          <p className="text-gray-900">$80.00</p>
        </div>
      </div>
      <button className="w-full mt-5 rounded-full text-center bg-success text-white py-4">
        پرداخت آنی
      </button>
    </div>
  );
}

export default CartTotal;
