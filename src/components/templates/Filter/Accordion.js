"use client";

import { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div>
      <button
        type="button"
        className="flex font-sans-medium items-center justify-between w-full py-5 font-medium gap-3 cursor-pointer border-b-2 border-gray-200 last:[&:last-child]:border-b-0"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-sans-bold text-xl">{title}</span>
        <IoIosArrowDown
          size={22}
          className={`transition-all duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0px",
          overflow: "hidden",
          transition: "max-height 0.3s ease, opacity 0.3s ease",
        }}
      >
        <div className="py-5">{children}</div>
      </div>
    </div>
  );
}
