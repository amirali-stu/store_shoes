import React from "react";

function PostComment() {
  return (
    <div>
      <h3 className="text-gray-800 dark:text-gray-300 mb-4 text-xl">ثبت نظر جدید</h3>

      <div className="w-full bg-white/50 dark:bg-slate-700/20 p-5 rounded-lg border-2 border-gray-100 dark:border-slate-700 transition-all duration-300 hover:scale-104 hover:shadow-[0px_0px_10px] hover:shadow-slate-700/60">
        <form className="flex flex-col px-2 gap-y-1">
          <div className="flex flex-col">
            <label className="text-gray-800 dark:text-gray-300">نام و نام خانوادگی</label>
            <input
              className="outline-0 w-full pr-3 sm:pr-4 text-sm sm:text-base py-2 border-2 dark:bg-slate-900 border-gray-100 dark:border-slate-700 
                 transition-all focus:border-gray-300 rounded-lg bg-white 
                 min-w-0"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-800 dark:text-gray-300">شماره تماس</label>
            <input
              className="outline-0 w-full pr-3 sm:pr-4 text-sm sm:text-base py-2 border-2 dark:bg-slate-900 border-gray-100 dark:border-slate-700 
                 transition-all focus:border-gray-300 rounded-lg bg-white 
                 min-w-0"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-800 dark:text-gray-300">نظر</label>
            <textarea
              className="outline-0 w-full pr-3 sm:pr-4 text-sm sm:text-base py-2 border-2 dark:bg-slate-900 border-gray-100 dark:border-slate-700 
                 transition-all focus:border-gray-300 rounded-lg bg-white 
                 min-w-0 resize-none"
              rows="5"
            />
          </div>
          <button className="p-2 bg-success dark:bg-success-dark text-white rounded-lg cursor-pointer text-center left-0 mt-2 transition-all hover:bg-success-dark dark:hover:bg-success/70">
            ثبت نظر
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostComment;
