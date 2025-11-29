import React from "react";

function PostComment() {
  return (
    <>
      <h3 className="text-gray-800 mb-4 text-xl">ثبت نظر جدید</h3>

      <div className="w-full bg-white/50 p-5 rounded-lg border-2 border-gray-100">
        <form className="flex flex-col px-2 gap-y-1">
          <div className="flex flex-col">
            <label className="text-gray-800">نام و نام خانوادگی</label>
            <input
              className="outline-0 w-full pr-3 sm:pr-4 text-sm sm:text-base py-2 border-2 border-gray-100 
                 transition-all focus:border-gray-300 rounded-lg bg-white 
                 min-w-0"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-800">شماره تماس</label>
            <input
              className="outline-0 w-full pr-3 sm:pr-4 text-sm sm:text-base py-2 border-2 border-gray-100 
                 transition-all focus:border-gray-300 rounded-lg bg-white 
                 min-w-0"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-800">نظر</label>
            <textarea
              className="outline-0 w-full pr-3 sm:pr-4 text-sm sm:text-base py-2 border-2 border-gray-100 
                 transition-all focus:border-gray-300 rounded-lg bg-white 
                 min-w-0 resize-none"
              rows="5"
            />
          </div>
          <button className="p-2 bg-success text-white rounded-lg cursor-pointer text-center left-0 mt-2 transition-all hover:bg-success-dark">
            ثبت نظر
          </button>
        </form>
      </div>
    </>
  );
}

export default PostComment;
