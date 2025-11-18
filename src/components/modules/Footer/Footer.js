import React from "react";
import { FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import Newsletter from "@/components/templates/Newsletter/Newsletter";

function Footer() {
  return (
    <>
      <Newsletter />

      <div className="lg:px-20 md:px-10 max-md:px-4 bg-gray-50 border-t-2 border-t-gray-100 font-sans-medium w-full pt-20 max-sm:pt-8 flex flex-col items-center justify-center">
        <div className="w-full flex lg:items-center md:items-start justify-between max-sm:flex-col">
          <div className="space-y-4 max-sm:mb-4">
            <h2 className="text-gray-900 text-2xl font-sans-demibold">
              درباره فروشگاه
            </h2>
            <p className="text-gray-500 max-w-[400px] text-wrap leading-7">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای
              زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و
              متخصصان را می طلبد
            </p>
            <p className=" text-gray-300 space-x-2 max-sm:flex max-sm:items-center max-sm:justify-center max-sm:flex-col max-sm:gap-y-2">
              <span className="text-gray-900 border-b-2 border-success">
                09054073722
              </span>{" "}
              یا{" "}
              <span className="text-gray-900 border-b-2 border-success md:mr-2">
                amiralimosolo275@gmail.com
              </span>
            </p>
          </div>

          <div className="flex flex-wrap items-start gap-x-18 gap-y-10 max-sm:gap-y-6">
            <ul className="flex-1 min-w-[130px]">
              <h4 className="text-gray-900 text-2xl mb-4 font-sans-demibold">
                اکانت من
              </h4>
              <li className="cursor-pointer text-gray-300 my-1.5 transition-all duration-300 hover:text-gray-600">
                اکانت من
              </li>
              <li className="cursor-pointer text-gray-300 my-1.5 transition-all duration-300 hover:text-gray-600">
                تاریخچه سفارشات
              </li>
              <li className="cursor-pointer text-gray-300 my-1.5 transition-all duration-300 hover:text-gray-600">
                سبد خرید
              </li>
              <li className="cursor-pointer text-gray-300 my-1.5 transition-all duration-300 hover:text-gray-600">
                علاقه مندی ها
              </li>
              <li className="cursor-pointer text-gray-300 my-1.5 transition-all duration-300 hover:text-gray-600">
                تنظیمات
              </li>
            </ul>

            <ul className="flex-1 min-w-[130px]">
              <h4 className="text-gray-900 text-2xl mb-4 font-sans-demibold">
                اکانت من
              </h4>
              <li className="cursor-pointer text-gray-300 my-1.5 transition-all duration-300 hover:text-gray-600">
                اکانت من
              </li>
              <li className="cursor-pointer text-gray-300 my-1.5 transition-all duration-300 hover:text-gray-600">
                تاریخچه سفارشات
              </li>
              <li className="cursor-pointer text-gray-300 my-1.5 transition-all duration-300 hover:text-gray-600">
                سبد خرید
              </li>
              <li className="cursor-pointer text-gray-300 my-1.5 transition-all duration-300 hover:text-gray-600">
                علاقه مندی ها
              </li>
              <li className="cursor-pointer text-gray-300 my-1.5 transition-all duration-300 hover:text-gray-600">
                تنظیمات
              </li>
            </ul>

            <ul className="flex-1 min-w-[130px]">
              <h4 className="text-gray-900 text-2xl mb-4 font-sans-demibold">
                اکانت من
              </h4>
              <li className="cursor-pointer text-gray-300 my-1.5 transition-all duration-300 hover:text-gray-600">
                اکانت من
              </li>
              <li className="cursor-pointer text-gray-300 my-1.5 transition-all duration-300 hover:text-gray-600">
                تاریخچه سفارشات
              </li>
              <li className="cursor-pointer text-gray-300 my-1.5 transition-all duration-300 hover:text-gray-600">
                سبد خرید
              </li>
              <li className="cursor-pointer text-gray-300 my-1.5 transition-all duration-300 hover:text-gray-600">
                علاقه مندی ها
              </li>
              <li className="cursor-pointer text-gray-300 my-1.5 transition-all duration-300 hover:text-gray-600">
                تنظیمات
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 max-sm:flex-col max-sm:gap-y-2 max-sm:text-sm py-2 border-t-2 border-gray-100 w-full flex items-center justify-between">
          <p className="text-gray-500">
            این سایت بر طبق مقررات اسلامی و رعایت اصول میباشد.
          </p>

          <div className="flex items-center gap-x-2">
            <FaInstagram
              size={45}
              className="rounded-full cursor-pointer hover:text-white text-black p-2 transition-all duration-300 hover:bg-success"
            />
            <FaTelegramPlane
              size={45}
              className="rounded-full cursor-pointer hover:text-white text-black p-2 transition-all duration-300 hover:bg-success"
            />
            <FaWhatsapp
              size={45}
              className="rounded-full cursor-pointer hover:text-white text-black p-2 transition-all duration-300 hover:bg-success"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
