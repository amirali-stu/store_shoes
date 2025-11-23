"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoHome } from "react-icons/io5";

function Breadcrumb() {
  const pathname = usePathname();

  // مسیریابی داینامیک
  const segments = pathname.split("/").filter(Boolean);
  // ["auth", "Breadcrumbs"]

  const mapTitle = {
    auth: "حساب",
    login: "ورود",
    signup: "ثبت‌نام",
    logout: "خروج",
    faqs: "سوالات متداول",
    products: "محصولات",
  };

  const breadcrumbs = segments.map((seg) => mapTitle[seg] || seg);

  return (
    breadcrumbs.length != 0 && (
      <div className="font-sans-medium lg:!px-[200px] max-lg:!px-[80px] max-sm:!px-[40px] w-full h-[110px] flex items-center gap-x-3 bg-[url('/images/Banner/breadcrumb.png')] bg-cover bg-center **:text-white">
        <Link href={"/"}>
          <IoHome size={20} />
        </Link>

        {breadcrumbs.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-lg max-sm:text-md"
          >
            <span>{">"}</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    )
  );
}

export default Breadcrumb;
