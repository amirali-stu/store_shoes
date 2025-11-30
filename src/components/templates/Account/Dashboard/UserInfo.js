import React from "react";

function UserInfo() {
  return (
    <div className="w-full flex flex-col gap-y-4 md:px-5 px-2">
      <p className="text-gray-600">مشخصات آدرس</p>
      <h2 className="text-gray-900 text-xl">رضا معصومی</h2>
      <p className="text-gray-600">نیروگاه ، خیابان حافظ ، کوچه 25 ، پلاک 7</p>
      <p className="text-gray-900">amiralimosolo@gmail.com</p>
      <p className="text-gray-900">09054073722</p>
      <button className="text-success cursor-pointer inline w-26">ویرایش آدرس</button>
    </div>
  );
}

export default UserInfo;
