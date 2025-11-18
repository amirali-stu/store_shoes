"use client";

import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function GoUp() {
  const [isShowBtn, setIsShowBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setIsShowBtn(true);
      } else {
        setIsShowBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollInTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`
    fixed p-3 group cursor-pointer bottom-16 right-16 bg-success-dark 
    rounded-full text-white ring-2 hover:ring-green-600 border-gray-200 z-40
    transition-all duration-500 max-sm:bottom-8 max-sm:right-8

    ${
      isShowBtn
        ? "opacity-100 translate-y-0 pointer-events-auto"
        : "opacity-0 translate-y-5 pointer-events-none"
    }
  `}
      onClick={scrollInTop}
    >
      <FaArrowUp size={22} />
    </button>
  );
}

export default GoUp;
