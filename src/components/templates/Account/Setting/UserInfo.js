import Image from "next/image";
import React from "react";

function UserInfo() {
  return (
    <div className="border-2 border-gray-100 rounded-lg px-5">
      <h2 className="py-4 border-b-2 border-b-gray-100 text-xl">مشخصات فردی</h2>
      <div className="p-5">
        <form className="w-full flex items-start justify-between">
          <div className="flex-1 flex flex-col gap-y-4">
            <div className="w-full flex flex-col gap-y-2">
              <label htmlFor="first_name" className="text-gray-900">
                نام
              </label>
              <input
                type="text"
                id="first_name"
                className="border-2 w-full outline-0  border-gray-100 transition-all duration-300 focus:ring-1 focus:border-success focus:ring-success bg-white rounded-md py-2 pr-4 text-gray-600"
                placeholder="مثال: علی"
              />
            </div>
            <div className="w-full flex flex-col gap-y-2">
              <label htmlFor="last_name" className="text-gray-900">
                نام خانوادگی
              </label>
              <input
                type="text"
                id="last_name"
                className="border-2 w-full outline-0  border-gray-100 transition-all duration-300 focus:ring-1 focus:border-success focus:ring-success bg-white rounded-md py-2 pr-4 text-gray-600"
                placeholder="مثال: محمدی"
              />
            </div>
            <button className="text-white bg-success border-2 transition-all duration-300 p-2 w-40 rounded-full cursor-pointer hover:bg-white hover:border-success hover:text-success">
              ذخیره تغییرات
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center flex-col gap-y-4  ">
            <Image
              src={"/images/products/image.png"}
              alt="edit profile"
              width={224}
              height={224}
              className="rounded-full"
            />
            <label
              htmlFor="upload"
              className="border-2 border-success text-success transition-all duration-300 bg-white p-2 rounded-full cursor-pointer inline-block hover:bg-success px-5 hover:border-white hover:text-white"
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
