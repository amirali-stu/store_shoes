"use client";

import { Activity, useState } from "react";
import { IoChevronDown } from "react-icons/io5";

const options = [
  "جدیدترین",
  "پرفروش ترین",
  "محبوب ترین",
  "گران ترین",
  "ارزان ترین",
];

export default function SelectBox() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="relative w-full sm:w-[200px] text-gray-700 select-none">
      {/* Select Box */}
      <div
        onClick={() => setOpen(!open)}
        className="p-3 border-2 border-gray-200 rounded-lg bg-white dark:bg-slate-600/20 dark:border-slate-700 dark:text-gray-300 cursor-pointer flex items-center justify-between hover:border-gray-300 dark:hover:border-slate-600 transition-all"
      >
        <span className="text-sm">{selected}</span>
        <IoChevronDown
          className={`text-gray-500 dark:text-gray-300 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown */}
      <Activity mode={open === true ? "visible" : "hidden"}>
        <div className="absolute z-20 top-[110%] w-full bg-white border-2 border-gray-200 dark:bg-slate-700 dark:border-slate-800 dark:text-gray-300 rounded-lg shadow-lg overflow-hidden">
          {options.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setSelected(item);
                setOpen(false);
              }}
              className="p-3 cursor-pointer text-sm hover:bg-gray-100 dark:hover:bg-slate-900 dark:hover:text-gray-300 transition-all"
            >
              {item}
            </div>
          ))}
        </div>
      </Activity>
    </div>
  );
}
