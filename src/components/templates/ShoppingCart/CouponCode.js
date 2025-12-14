import React from "react";

function CouponCode() {
  return (
    <div className="p-5 border-2 border-gray-100 dark:border-slate-700 rounded-lg flex max-sm:gap-y-3 sm:items-center gap-x-6 max-sm:flex-col">
      <h4 className="text-xl text-gray-900 dark:text-gray-300 font-bold text-nowrap">
        کد تخفیف
      </h4>
      <div className="w-full relative sm:flex items-center sm:h-[52px]">
        <input
          className="border-2 relative z-0 h-full max-sm:h-[52px] outline-0 border-gray-100 dark:border-slate-700 rounded-full w-full pr-6 text-gray-400 placeholder:text-gray-400 transition-all duration-300 focus:border-[#22c55ecc] dark:focus:border-slate-400 focus:shadow-[0px_0px_0px_5px] focus:shadow-[#22C55E4D] dark:focus:shadow-slate-400/20"
          placeholder="کد تخفیف ..."
        />
        {/* دکمه در دسکتاپ */}
        <button className="max-sm:hidden z-10 px-10 h-full transition-all duration-300 hover:bg-gray-900 text-nowrap absolute left-0 rounded-full text-white dark:text-gray-300 bg-gray-800 dark:bg-slate-600 cursor-pointer">
          اعمال تخفیف
        </button>
        {/* دکمه در موبایل */}
        <button className="w-full mt-4 h-[52px] text-sm px-7 rounded-full text-white bg-gray-800  sm:hidden">
          اعمال تخفیف
        </button>
      </div>
    </div>
  );
}

export default CouponCode;
