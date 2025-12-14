"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsBasket } from "react-icons/bs";
import { IoIosSearch, IoMdHeartEmpty } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import { LuUser, LuSun, LuMoon } from "react-icons/lu";

function MiddleHeader() {
  const [basketLength, setBasketLength] = useState(0);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const handleBasketUpdate = () => {
      const basket = JSON.parse(localStorage.getItem("basket") || "[]");
      setBasketLength(basket.length);
    };

    // dark mood
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");

    handleBasketUpdate();
    window.addEventListener("basketUpdated", handleBasketUpdate);
    return () => {
      window.removeEventListener("basketUpdated", handleBasketUpdate);
    };
  }, []);

  const changeThemeSite = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans-medium">
      {/* Logo */}
      <Link href={"/"}>
        <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              data-icon="lucide:footprints"
              data-width="20"
              className="iconify iconify--lucide"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0m16 4v-2.38c0-2.12 1.03-3.12 1-5.62c-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0m-4-3h4M4 13h4"
              ></path>
            </svg>
          </div>

          <span className="font-bold text-lg text-slate-900 dark:text-white tracking-tight">
            استیکر
            <span className="text-slate-500">پرو</span>
          </span>
        </div>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex **:cursor-pointer items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
        <Link href={"/"}>
          <button className="hover:text-slate-900 dark:hover:text-white transition-colors">
            خانه
          </button>
        </Link>
        <Link href={"/products"}>
          <button className="hover:text-slate-900 dark:hover:text-white transition-colors">
            محصولات
          </button>
        </Link>
        <Link href={"about-us"}>
          <button className="hover:text-slate-900 dark:hover:text-white transition-colors">
            درباره ما
          </button>
        </Link>
        <Link href={"/concat"}>
          <button className="hover:text-slate-900 dark:hover:text-white transition-colors">
            تماس
          </button>
        </Link>
      </nav>

      <div className="flex items-center **:cursor-pointer gap-4">
        <button
          className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-slate-800"
          onClick={() => changeThemeSite()}
        >
          {theme === "dark" ? <LuSun size={20} /> : <LuMoon size={20} />}
        </button>

        <Link href={"/account/setting"}>
          <button className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-slate-800">
            <LuUser size={20} />
          </button>
        </Link>
        <Link href={"/wishlist"}>
          <button className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-slate-800">
            <IoMdHeartEmpty size={20} />
          </button>
        </Link>

        <Link href={"/shopping_cart"}>
          <div className="relative p-2 text-slate-900 dark:text-white transition-colors rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700">
            <FiShoppingBag size={20} />
            {basketLength > 0 && (
              <span className="absolute top-0 right-0 -mt-1 -mr-1 h-4 w-4 bg-red-500 rounded-full text-[10px] font-bold text-white flex items-center justify-center">
                {basketLength}
              </span>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MiddleHeader;
