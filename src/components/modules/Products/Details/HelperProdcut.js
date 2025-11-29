"use client";

import { useState, useRef, useEffect } from "react";
import CommentContainer from "./Comments/CommentContainer";

export default function HelperProduct() {
  const tabs = [
    { id: 1, title: "نحوه استفاده" },
    { id: 2, title: "آموزش استفاده" },
    { id: 3, title: "جزئیات محصول" },
    { id: 4, title: "نظرات کاربران" },
    { id: 5, title: "سوالات متداول" },
  ];

  const contents = {
    1: "این بخش نحوه استفاده از محصول را توضیح می‌دهد...",
    2: "ویدیوها و آموزش‌های گام به گام در این قسمت قرار دارد.",
    3: "مطالب مفید",
    4: <CommentContainer />,
    5: "سوالات پرتکرار کاربران درباره این محصول.",
  };

  const [activeTab, setActiveTab] = useState(1);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef([]);

  // انیمیشن خط زیر تب
  useEffect(() => {
    const activeEl = tabRefs.current[activeTab - 1];
    if (activeEl) {
      setIndicatorStyle({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
      });
    }
  }, [activeTab]);

  // اولین بار که صفحه لود شد
  useEffect(() => {
    const firstTab = tabRefs.current[0];
    if (firstTab) {
      setIndicatorStyle({
        left: firstTab.offsetLeft,
        width: firstTab.offsetWidth,
      });
    }
  }, []);

  return (
    <div dir="rtl" className="w-full my-10  font-medium">
      {/* تب‌ها */}
      <div className="relative border-b-2 border-gray-200">
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-8">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              ref={(el) => (tabRefs.current[index] = el)}
              className={`
                relative lg:px-5 max-lg:px-2 max-sm:px-4 max-sm:rounded-lg py-4 text-lg transition-all cursor-pointer duration-300 rounded-t-xl
                ${
                  activeTab === tab.id
                    ? "text-green-600 font-bold shadow-lg bg-white -mb-0.5 z-10"
                    : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
                }
              `}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* خط متحرک سبز (انیمیشن کشیده شدن) */}
        <span
          className="max-sm:hidden absolute -bottom-0.5 h-1 z-10 bg-green-600 rounded-full transition-all duration-500 ease-out shadow-md"
          style={{
            left: indicatorStyle.left + "px",
            width: indicatorStyle.width + "px",
          }}
        />
      </div>

      {/* محتوای تب */}
      <div className="mt-8 p-8 max-md:px-4 bg-white rounded-2xl shadow-xl border border-gray-100">
        <div className="text-gray-700 leading-9 text-lg">
          {contents[activeTab]}
        </div>
      </div>
    </div>
  );
}
