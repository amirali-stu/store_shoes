"use client";

import { useEffect } from "react";

function Hero() {
  useEffect(() => {
    const onScroll = () => {
      document.documentElement.style.setProperty("--scroll", window.scrollY);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 font-sans-medium antialiased">
      <div
        className="
          relative rounded-3xl overflow-hidden 
          h-[500px] flex items-center
          bg-slate-900
          bg-fixed bg-center bg-cover
        "
        style={{
          backgroundImage: "url('/images/banner.png')",
          backgroundPositionY: "calc(50% + var(--scroll) * 0.1)",
        }}
      >
        {/* overlay برای خوانایی */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        <div className="relative z-10 px-8 md:px-16 max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium mb-4 border border-white/10">
            کالکشن جدید ۲۰۲۴
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            قدم‌های خود را
            <br />
            متمایز بردارید.
          </h1>

          <p className="text-lg text-gray-200 mb-8 max-w-lg">
            طراحی مدرن، راحتی بی‌نظیر و کیفیت ساخت بالا. تجربه خریدی متفاوت برای
            حرفه‌ای‌ها.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-4 md:px-6 py-3 bg-white text-slate-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              مشاهده محصولات
            </button>
            <button className="px-4 md:px-6 py-3 bg-transparent border border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-colors">
              خرید عمده
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
