import Image from "next/image";
import React from "react";

function UserInfo() {
  return (
    <div className="border-2 border-gray-100 dark:border-slate-700 rounded-lg px-5">
      <h2 className="py-4 border-b-2 border-b-gray-100 dark:border-b-slate-700 text-xl font-sans-bold">
        مشخصات فردی
      </h2>
      <div className="p-5 max-md:p-2">
        <form className="w-full flex max-md:flex-col-reverse max-md:items-center max-md:gap-y-6 items-start justify-between">
          <div className="flex-1 max-md:w-full flex flex-col gap-y-4">
            <div className="w-full flex flex-col gap-y-2">
              <label
                htmlFor="first_name"
                className="text-gray-900 dark:text-gray-300"
              >
                نام
              </label>
              <input
                type="text"
                id="first_name"
                className="border-2 w-full outline-0  border-gray-100 dark:border-slate-700 transition-all duration-300 focus:ring-1 focus:border-success focus:ring-success dark:focus:border-slate-500 dark:focus:ring-slate-500 bg-white dark:bg-slate-600/20 rounded-md py-2 pr-4 text-gray-600 dark:text-gray-400"
                placeholder="مثال: علی"
              />
            </div>
            <div className="w-full flex flex-col gap-y-2">
              <label
                htmlFor="last_name"
                className="text-gray-900 dark:text-gray-300"
              >
                نام خانوادگی
              </label>
              <input
                type="text"
                id="last_name"
                className="border-2 w-full outline-0  border-gray-100 dark:border-slate-700 transition-all duration-300 focus:ring-1 focus:border-success focus:ring-success dark:focus:border-slate-500 dark:focus:ring-slate-500 bg-white dark:bg-slate-600/20 rounded-md py-2 pr-4 text-gray-600 dark:text-gray-400"
                placeholder="مثال: محمدی"
              />
            </div>
            <button className="text-white dark:text-gray-300 bg-success border-2 dark:border-slate-700 transition-all duration-300 p-2 md:w-40 rounded-full cursor-pointer hover:bg-white dark:hover:bg-slate-900 dark:bg-slate-600/20 hover:border-success dark:hover:border-slate-500 hover:text-success dark:hover:text-gray-100">
              ذخیره تغییرات
            </button>
          </div>
          <div className="flex-1 max-md:w-full flex items-center justify-center flex-col gap-y-4">
            <Image
              src={"/images/products/image.png"}
              alt="edit profile"
              width={220}
              height={220}
              className="rounded-full max-lg:w-40 max-lg:h-40"
            />
            <label
              htmlFor="upload"
              className="border-2 border-success dark:border-slate-700 text-success dark:text-gray-300 transition-all duration-300 bg-white dark:bg-slate-600/20 p-2 rounded-full cursor-pointer inline-block hover:bg-success dark:hover:bg-slate-900 px-5 hover:border-white hover:text-white dark:hover:border-slate-500 dark:hover:text-gray-100"
            >
              انتخاب عکس
            </label>

            <input
              id="upload"
              type="file"
              accept="image/*"
              className="hidden"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserInfo;
