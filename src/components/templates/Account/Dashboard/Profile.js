import Image from "next/image";
import React from "react";

function Profile() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-y-2">
      <Image
        src={"/images/products/image.png"}
        alt="profile dashboard"
        width={120}
        height={120}
        className="rounded-full"
      />
      <h2 className="text-gray-900 dark:text-gray-300 text-xl">رضا معصومی</h2>
      <p className="text-gray-500 dark:text-gray-400">کاربر</p>
      <button className="text-success cursor-pointer">ویرایش پروفایل</button>
    </div>
  );
}

export default Profile;
