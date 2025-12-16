"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { BsBasket } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { HiOutlineLogout } from "react-icons/hi";
import { NavigationLoader } from "./NavigationLoader";
import { signOut } from "next-auth/react";

function Navigation() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <NavigationLoader />;
  }

  if (!mounted) return null;

  const items = [
    { href: "/account/dashboard", label: "داشبورد", icon: BiSolidDashboard },
    {
      href: "/account/order-history",
      label: "تارخچه سفارشات",
      icon: IoReload,
    },
    {
      href: "/wishlist",
      label: "علاقه مندی ها",
      icon: FaRegHeart,
    },
    { href: "/shopping_cart", label: "سبد خرید", icon: BsBasket },
    { href: "/account/setting", label: "تنظیمات", icon: IoMdSettings },
    {
      onClick: () => signOut({ callbackUrl: "/auth/login" }),
      label: "خروج",
      icon: HiOutlineLogout,
    },
  ];

  return (
    <div
      className="
    md:w-[313px] md:h-[418px]
    max-md:h-14 max-md:w-[95%]
    max-md:fixed max-md:bottom-0 max-md:left-1/2 max-md:-translate-x-1/2 
    rounded-lg max-md:rounded-full md:sticky md:top-18
    
    md:bg-white md:dark:bg-slate-600/20 md:border-2 md:border-gray-100 md:dark:border-slate-700
    max-md:bg-gray-400/20 max-md:dark:bg-slate-600 max-sm:dark:border-slate-700 max-md:flex max-md:items-center max-md:justify-between max-md:border-2 max-md:border-gray-100
    max-md:backdrop-blur-lg
    max-md:mb-4 z-2
    0
"
    >
      <h2 className="text-gray-900 dark:text-gray-300 text-xl max-md:hidden p-4">
        دسترسی سریع
      </h2>
      <ul className="flex max-md:w-full md:flex-col max-md:items-center max-md:justify-between max-md:px-4 gap-y-2">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = item.href ? pathname === item.href : false;

          return (
            <li key={item.href ?? item.label}>
              {item.onClick ? (
                <button
                  type="button"
                  onClick={item.onClick}
                  className="transition-all w-full duration-300 flex items-center md:py-3 md:gap-x-2 md:text-lg md:pr-4 cursor-pointer md:hover:bg-green-100/20 md:dark:hover:bg-slate-500/20 text-gray-600 dark:text-gray-400"
                >
                  <Icon className="max-md:text-2xl" />
                  <p className="max-md:hidden">{item.label}</p>
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={`transition-all duration-300 flex items-center ${
                    isActive
                      ? "md:relative md:text-gray-900 md:dark:text-gray-300 md:bg-green-200/20 md:dark:bg-slate-800 md:flex md:py-3 md:gap-x-2 md:text-lg md:pr-4 md:before:content-[''] md:before:absolute md:before:right-0 md:before:top-0 md:before:h-full md:before:w-1 md:before:bg-success md:before:rounded-md text-green-600 dark:text-gray-200"
                      : "md:text-gray-600 md:dark:text-gray-400 md:flex md:py-3 md:gap-x-2 md:text-lg md:pr-4 md:hover:bg-green-100/20 md:dark:hover:bg-slate-500/20 text-gray-600 dark:text-gray-400"
                  }`}
                >
                  <Icon className="max-md:text-2xl" />
                  <p className="max-md:hidden">{item.label}</p>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navigation;
