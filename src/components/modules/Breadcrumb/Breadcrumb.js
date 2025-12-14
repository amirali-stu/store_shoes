"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoHomeOutline } from "react-icons/io5";
import { FiChevronRight } from "react-icons/fi";

function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const mapTitle = {
    auth: "حساب",
    login: "ورود",
    signup: "ثبت‌نام",
    logout: "خروج",
    faqs: "سوالات متداول",
    products: "محصولات",
    product: "محصولات",
    shopping_cart: "سبد خرید",
    account: "حساب",
    dashboard: "پنل کاربری",
    setting: "تنظیمات",
    "order-history": "تاریخچه سفارشات",
  };

  const breadcrumbs = segments.map((seg, idx) => {
    const href = "/" + segments.slice(0, idx + 1).join("/");
    return { label: mapTitle[seg] || decodeURIComponent(seg), href };
  });

  if (breadcrumbs.length === 0) return null;

  return (
    <section className="w-full">
      <div
        className="
          relative overflow-hidden
          font-sans-medium
          rounded-b-3xl
          border
          border-zinc-200/60 dark:border-white/10
          bg-white/[0.65] dark:bg-zinc-950/[0.55]
          backdrop-blur-2xl
          shadow-[0_10px_35px_-18px_rgba(0,0,0,0.35)]
        "
      >
        {/* Top neon rail */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 opacity-90" />

        {/* Background: gradient blobs */}
        <div className="pointer-events-none absolute -right-28 -bottom-28 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl" />

        {/* Subtle noise overlay (no image needed) */}
        <div className="absolute inset-0 noise" />

        <div className="relative px-4 sm:px-6 lg:px-10 py-5 sm:py-4">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-2">
              {/* Home */}
              <li>
                <Link
                  href="/"
                  className="
                    group inline-flex items-center
                    rounded-full
                    px-3.5 py-1
                    text-sm font-medium
                    border
                    border-zinc-200/70 dark:border-white/10
                    bg-white/70 dark:bg-white/5
                    text-zinc-800 dark:text-zinc-200
                    hover:bg-zinc-50 dark:hover:bg-white/10
                    transition
                    active:scale-[0.98]
                  "
                >
                  <span
                    className="
                      grid place-items-center
                      h-8 w-8 rounded-full
                     text-zinc-800
                      dark:bg-transparent dark:text-gray-300
                      group-hover:scale-105 transition
                    "
                  >
                    <IoHomeOutline size={18} />
                  </span>
                  <span className="hidden sm:inline">خانه</span>
                </Link>
              </li>

              {breadcrumbs.map((item, i) => {
                const isLast = i === breadcrumbs.length - 1;

                return (
                  <li key={item.href} className="flex items-center gap-2">
                    <span className="text-zinc-400/80 dark:text-zinc-500 rotate-180">
                      <FiChevronRight />
                    </span>

                    {!isLast ? (
                      <Link
                        href={item.href}
                        className="
                          group relative inline-flex items-center
                          rounded-full
                          px-3.5 py-2
                          text-sm font-medium
                          border
                          border-zinc-200/70 dark:border-white/10
                          bg-white/50 dark:bg-white/5
                          text-zinc-700 dark:text-zinc-200
                          hover:text-zinc-950 dark:hover:text-white
                          hover:bg-white/80 dark:hover:bg-white/10
                          transition
                          active:scale-[0.98]
                        "
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span
                        className="
                          relative inline-flex items-center
                          rounded-full
                          px-4 py-2
                          text-sm
                          bg-white dark:bg-transparent
                          text-zinc-800 dark:text-gray-300
                          shadow-[0_10px_30px_-18px_rgba(34,211,238,0.7)]
                          ring-1 ring-black/5 dark:ring-white/10
                        "
                        aria-current="page"
                      >
                        {/* glow halo */}
                        <span className="pointer-events-none absolute -inset-1 rounded-full bg-gradient-to-r from-fuchsia-500/30 via-cyan-400/30 to-emerald-400/30 blur-xl" />
                        <span className="relative">{item.label}</span>
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Breadcrumb;
