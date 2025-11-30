"use client";

import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoEyeOffOutline } from "react-icons/io5";
import { useState } from "react";

function ChangePassword() {
  const [isShowCurrentPassword, setIsShowCurrentPassword] = useState(false);
  const [isShowNewPassword, setIsShowNewPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

  return (
    <div className="border-2 border-gray-100 rounded-lg px-5">
      <h2 className="py-4 border-b-2 border-b-gray-100 text-xl font-sans-bold">
        تغییر رمز عبور
      </h2>
      <div className="p-5 max-md:p-2">
        <form className="w-full flex flex-col gap-y-4 justify-between">
          <div className="flex-1 flex flex-col gap-y-4">
            <div className="w-full flex flex-col gap-y-2">
              <label htmlFor="current_password" className="text-gray-900">
                رمز عبور فعلی
              </label>
              <div className="border-2 w-full border-gray-100  bg-white rounded-md py-2 text-xl text-gray-600 transition-all duration-300 flex items-center px-4">
                <input
                  type={isShowCurrentPassword ? "text" : "password"}
                  id="current_password"
                  className=" outline-0 w-full text-base"
                  placeholder="AlirezaMohmmadi@0201"
                />
                {isShowCurrentPassword ? (
                  <MdOutlineRemoveRedEye
                    className="cursor-pointer"
                    onClick={() => setIsShowCurrentPassword(false)}
                  />
                ) : (
                  <IoEyeOffOutline
                    className="cursor-pointer"
                    onClick={() => setIsShowCurrentPassword(true)}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center max-md:flex-col max-md:gap-y-4 justify-between gap-x-4">
            <div className="w-full flex flex-col gap-y-2">
              <label htmlFor="new_password" className="text-gray-900">
                رمز عبور جدید
              </label>
              <div className="border-2 w-full border-gray-100  bg-white rounded-md py-2 text-xl text-gray-600 transition-all duration-300 flex items-center px-4">
                <input
                  type={isShowNewPassword ? "text" : "password"}
                  id="new_password"
                  className=" outline-0 w-full text-base"
                  placeholder="AlirezaMohmmadi@0201"
                />
                {isShowNewPassword ? (
                  <MdOutlineRemoveRedEye
                    className="cursor-pointer"
                    onClick={() => setIsShowNewPassword(false)}
                  />
                ) : (
                  <IoEyeOffOutline
                    className="cursor-pointer"
                    onClick={() => setIsShowNewPassword(true)}
                  />
                )}
              </div>
            </div>
            <div className="w-full flex flex-col gap-y-2">
              <label htmlFor="confirm_password" className="text-gray-900">
                تکرار رمز عبور
              </label>
              <div className="border-2 w-full border-gray-100  bg-white rounded-md py-2 text-xl text-gray-600 transition-all duration-300 flex items-center px-4">
                <input
                  type={isShowConfirmPassword ? "text" : "password"}
                  id="confirm_password"
                  className=" outline-0 w-full text-base"
                  placeholder="AlirezaMohmmadi@0201"
                />
                {isShowConfirmPassword ? (
                  <MdOutlineRemoveRedEye
                    className="cursor-pointer"
                    onClick={() => setIsShowConfirmPassword(false)}
                  />
                ) : (
                  <IoEyeOffOutline
                    className="cursor-pointer"
                    onClick={() => setIsShowConfirmPassword(true)}
                  />
                )}
              </div>
            </div>
          </div>
          <button className="text-white bg-success border-2 transition-all duration-300 p-2 md:w-40 rounded-full cursor-pointer hover:bg-white hover:border-success hover:text-success">
            تغییر رمز
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
