import React from "react";
import Comment from "./Comment";
import PostComment from "./PostComment";
import { RiLoader2Fill } from "react-icons/ri";

function CommentContainer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 max-w-full max-sm:overflow-x-hidden">
      {/* ستون راست که باید در موبایل بیاد اول */}
      <div className="order-1 md:order-2 col-span-12 xl:col-span-4 md:col-span-5 w-full md:h-[500px] md:sticky md:top-5">
        <PostComment />
      </div>

      {/* ستون چپ کامنت‌ها */}
      <div className="order-2 md:order-1 col-span-12 xl:col-span-8 md:col-span-7">
        <h2 className="text-xl text-gray-800 mb-6">نظرات کاربران</h2>

        {/* فقط کامنت‌ها divide داشته باشن */}
        <div className="divide-y-2 divide-gray-200">
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>

        <button className="p-3 flex items-center justify-center gap-x-1 bg-[#56AC59]/10 text-success rounded-full cursor-pointer text-center left-0 mt-2 text-lg">
          بارگزاری بیشتر
          <RiLoader2Fill />
        </button>
      </div>
    </div>
  );
}

export default CommentContainer;
