"use client";

import React, { useState } from "react";

function TopHeader() {
  const [isLan, setIsLan] = useState(false);
  const [isUSD, setIsUSD] = useState(false);

  return (
    <div className="container flex items-center justify-between border-b-2 border-gray-100 !py-2 !px-[200px]">
      <div>
        <p className="text-gray-600 font-sans-medium">
          {/* Store Location: Lincoln- 344, Illinois, Chicago, USA */}
          محل فروشگاه: درب حرم
        </p>
      </div>

      <div className="flex items-center gap-x-5 font-sans-medium">
        <div className="relative">
          <button
            id="dropdownHoverButton"
            data-dropdown-toggle="dropdownHover"
            data-dropdown-trigger="hover"
            className="text-gray-600 cursor-pointer rounded-lg text-sm text-center inline-flex items-center"
            type="button"
            onClick={() => setIsLan(!isLan)}
          >
            فا
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            id="dropdownHover"
            className={`absolute right-3 z-10 text-gray-600 py-2 bg-white divide-y divide-gray-100 rounded-lg shadow-sm transition-all duration-300 ${
              isLan ? "top-10 opacity-100" : "top-5 opacity-0"
            }`}
          >
            <ul className="text-sm" aria-labelledby="dropdownHoverButton">
              <li>
                <p
                  onClick={() => setIsLan(false)}
                  className="block px-4 cursor-pointer"
                >
                  فا
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative">
          <button
            id="dropdownHoverButton"
            data-dropdown-toggle="dropdownHover"
            data-dropdown-trigger="hover"
            className="text-gray-600 cursor-pointer rounded-lg text-sm text-center inline-flex items-center"
            type="button"
            onClick={() => setIsUSD(!isUSD)}
          >
            IR
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            id="dropdownHover"
            className={`absolute right-3 z-10 text-gray-600 py-2 bg-white divide-y divide-gray-100 rounded-lg shadow-sm transition-all duration-300 ${
              isUSD ? "top-10 opacity-100" : "top-5 opacity-0"
            }`}
          >
            <ul className="text-sm" aria-labelledby="dropdownHoverButton">
              <li>
                <p
                  onClick={() => setIsUSD(false)}
                  className="block px-4 cursor-pointer"
                >
                  IR
                </p>
              </li>
            </ul>
          </div>
        </div>
        <span className="bg-gray-200 w-0.5 h-6"></span>
        <p className="text-gray-600">ثبت نام / ورود </p>
      </div>
    </div>
  );
}

export default TopHeader;
