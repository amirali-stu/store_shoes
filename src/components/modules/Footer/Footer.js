import React from "react";
import { FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div className="lg:px-20 md:px-10 max-md:px-4 font-sans-medium w-full pt-20 max-sm:pt-8 flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 items-center justify-center">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
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
            <p className="text-sm text-slate-500 leading-relaxed">
              تخصصی‌ترین فروشگاه آنلاین کتونی اورجینال. ارسال سریع به سراسر کشور
              و ضمانت بازگشت وجه.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">
              دسترسی سریع
            </h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <a
                  href="#"
                  className="hover:text-slate-900 dark:hover:text-white"
                >
                  محصولات جدید
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-slate-900 dark:hover:text-white"
                >
                  مردانه
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-slate-900 dark:hover:text-white"
                >
                  زنانه
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-slate-900 dark:hover:text-white"
                >
                  فروش ویژه
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">
              خدمات مشتریان
            </h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <a
                  href="#"
                  className="hover:text-slate-900 dark:hover:text-white"
                >
                  پیگیری سفارش
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-slate-900 dark:hover:text-white"
                >
                  رویه بازگشت کالا
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-slate-900 dark:hover:text-white"
                >
                  حریم خصوصی
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-slate-900 dark:hover:text-white"
                >
                  شرایط استفاده
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">
              شبکه‌های اجتماعی
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-900 flex items-center justify-center text-slate-500 hover:bg-slate-900 hover:text-white transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  data-icon="lucide:instagram"
                  className="iconify iconify--lucide"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                  </g>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-900 flex items-center justify-center text-slate-500 hover:bg-slate-900 hover:text-white transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  data-icon="lucide:twitter"
                  className="iconify iconify--lucide"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-900 flex items-center justify-center text-slate-500 hover:bg-slate-900 hover:text-white transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  data-icon="lucide:linkedin"
                  className="iconify iconify--lucide"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2"></circle>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">
            © ۲۰۲۳ اسنیکر پرو. تمامی حقوق محفوظ است.
          </p>
          <div className="flex gap-4">
            <div className="h-6 w-10 bg-gray-200 dark:bg-slate-800 rounded"></div>
            <div className="h-6 w-10 bg-gray-200 dark:bg-slate-800 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
