import car from "../svgs/delivery-truck.svg";
import headephone from "../svgs/headphones.svg";
import packageBox from "../svgs/package.svg";
import shoppingBag from "../svgs/shopping-bag.svg";
import Image from "next/image";
import ProductBox from "@/components/modules/Products/ProductBox";
// import ProductRow from "@/components/modules/Products/ProductRow";
import { IoArrowForward } from "react-icons/io5";
import Box from "@/components/templates/Category/Box";
// import Banner from "@/components/templates/Slider/Banner";
import Comment from "@/components/templates/Slider/Comment";
import Article from "@/components/modules/Blog/Article";
import Hero from "@/components/modules/Header/Hero";
// import productImage from "@/./public/images/products/Image.png";
import productImage from "../../public/images/products/Image.png";

const staticProducts = [
  {
    id: crypto.randomUUID(),
    title: "محصول تستی",
    price: 1_200_000,
    image: productImage,
    slug: "/test",
  },
  {
    id: crypto.randomUUID(),
    title: "محصول تستی",
    price: 1_200_000,
    image: productImage,
    slug: "/test",
  },
  {
    id: crypto.randomUUID(),
    title: "محصول تستی",
    price: 1_200_000,
    image: productImage,
    slug: "/test",
  },
  {
    id: crypto.randomUUID(),
    title: "محصول تستی",
    price: 1_200_000,
    image: productImage,
    slug: "/test",
  },
  {
    id: crypto.randomUUID(),
    title: "محصول تستی",
    price: 1_200_000,
    image: productImage,
    slug: "/test",
  },
  {
    id: crypto.randomUUID(),
    title: "محصول تستی",
    price: 1_200_000,
    image: productImage,
    slug: "/test",
  },
  {
    id: crypto.randomUUID(),
    title: "محصول تستی",
    price: 1_200_000,
    image: productImage,
    slug: "/test",
  },
  {
    id: crypto.randomUUID(),
    title: "محصول تستی",
    price: 1_200_000,
    image: productImage,
    slug: "/test",
  },
  {
    id: crypto.randomUUID(),
    title: "محصول تستی",
    price: 1_200_000,
    image: productImage,
    slug: "/test",
  },
  {
    id: crypto.randomUUID(),
    title: "محصول تستی",
    price: 1_200_000,
    image: productImage,
    slug: "/test",
  },
];

export default function Home() {
  return (
    <>
      <div className="flex items-center flex-col z-10">
        {/* بنر تبلیغاتی */}
        <section className="container-custom relative mt-8">
          <Hero />

          <div className="xl:w-[80%] xl:h-[128px] w-full max-xl:mt-8 max-xl:border-2 max-xl:border-gray-50 dark:border-0 xl:absolute xl:-bottom-[10%] xl:left-1/2 xl:-translate-x-1/2 bg-white dark:bg-slate-800 dark:**:text-white font-sans-medium shadow-md rounded-xl z-10 xl:p-10 max-xl:p-3 xl:flex xl:items-center xl:gap-x-8 max-xl:grid max-xl:grid-cols-2 max-sm:grid-cols-1 max-xl:gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-x-4">
                <Image src={car} alt="لوگو" width={40} height={40} priority />
                <div className="h-full flex flex-col gap-y-2">
                  <h4 className="text-gray-900 text-lg">ارسال سریع</h4>
                  <p className="text-gray-400 text-sm">
                    بسته های سفارشی در کمترین زمان ممکن به دستتون میرسد
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-x-4">
                <Image
                  src={headephone}
                  alt="لوگو"
                  width={40}
                  height={40}
                  priority
                />
                <div className="h-full flex flex-col gap-y-2">
                  <h4 className="text-gray-900 text-lg">پاسخگویی 24 ساعته</h4>
                  <p className="text-gray-400 text-sm">
                    پشتیبانی تلفنی در تمام ساعات شبانه روز
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-x-4">
                <Image
                  src={packageBox}
                  alt="لوگو"
                  width={40}
                  height={40}
                  priority
                />
                <div className="h-full flex flex-col gap-y-2">
                  <h4 className="text-gray-900 text-lg">پرداخت ایمن</h4>
                  <p className="text-gray-400 text-sm">
                    پرداخت های درون سایتی با بالاترین امنیت است
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-x-4">
                <Image
                  src={shoppingBag}
                  alt="لوگو"
                  width={40}
                  height={40}
                  priority
                />
                <div className="h-full flex flex-col gap-y-2">
                  <h4 className="text-gray-900 text-lg">برگشت پول</h4>
                  <p className="text-gray-400 text-sm">
                    در صورت وجود وجود نقص در محصول اماکن برگشت آن تا 30 روز وجود
                    دارد
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* محصولات برتر  */}
        <div className="container-custom md:mt-40 max-md:mt-10">
          <h2 className="text-3xl max-md:text-2xl text-gray-900 dark:text-white text-center font-sans-demibold relative">
            محصولات برتر
            <div className="flex justify-center mt-2 gap-x-1">
              <span className="block w-3 h-1 bg-success/30"></span>
              <span className="block w-6 h-1 bg-success"></span>
              <span className="block w-3 h-1 bg-success/30"></span>
            </div>
          </h2>

          <div className="grid justify-center xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 w-full md:justify-center mt-4 gap-3">
            {staticProducts.map((item) => (
              <ProductBox key={item.id} {...item} />
            ))}
          </div>

          {/* <div className="flex items-center xl:gap-x-6 lg:gap-x-2 max-lg:gap-x-4 mt-10 max-sm:flex-col lg:justify-center ">
            <div className="max-sm:w-full max-sm:my-2 max-lg:flex-1">
              <div className="flex items-center justify-between w-full mb-4">
                <h2 className="text-lg text-gray-900 font-sans-demibold relative">
                  محصولات کم فروش
                </h2>
                <a
                  href="#"
                  className="font-sans-medium text-success flex items-center hover:underline gap-x-1"
                >
                  نتایج بیشتر
                  <span>
                    <IoArrowForward className="rotate-180" />
                  </span>
                </a>
              </div>

              <div className="w-full flex flex-col gap-y-2">
                <ProductRow />
                <ProductRow />
                <ProductRow />
                <ProductRow />
              </div>
            </div>

            <div className="max-2xl:hidden lg:block max-lg:hidden">
              <h2 className="text-lg  text-gray-900 font-sans-demibold relative mb-4">
                محصولات پر فروش
              </h2>

              <div className="flex flex-col gap-y-2">
                <ProductRow />
                <ProductRow />
                <ProductRow />
                <ProductRow />
              </div>
            </div>

            <div className="max-sm:w-full max-sm:my-2 max-lg:flex-1">
              <div className="flex items-center justify-between w-full mb-4">
                <h2 className="text-lg text-gray-900 font-sans-demibold relative">
                  محصولات کم فروش
                </h2>
                <a
                  href="#"
                  className="font-sans-medium text-success flex items-center hover:underline gap-x-1"
                >
                  نتایج بیشتر
                  <span>
                    <IoArrowForward className="rotate-180" />
                  </span>
                </a>
              </div>

              <div className="flex flex-col gap-y-2">
                <ProductRow />
                <ProductRow />
                <ProductRow />
                <ProductRow />
              </div>
            </div>

        
            <div
              id="product-banner"
              className="w-[312px] max-xl:hidden h-[426px] mt-10 font-sans-medium flex items-center flex-col pt-10"
            >
              <h4 className="text-xl text-center text-gray-900">
                تخفیف بزرگ تابستانه
              </h4>
              <span className="text-red-600 text-4xl font-sans-demibold my-2">
                % 75 تخفیف
              </span>
              <button className="flex items-center justify-center gap-x-2 bg-white rounded-full w-[162px] h-[45px] shadow-[0_0_10px_-2px_##0000001E] cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px_-2px_#0000001E] hover:ml-4 text-success text-xl group">
                <IoArrowForward
                  size={20}
                  className="transition-all duration-300 group-hover:animate-pulse"
                />
                <span>خرید</span>
              </button>
            </div>
          </div> */}
        </div>

        {/* دسته بندی محصولات */}
        <div className="container-custom md:mt-30 max-md:mt-10">
          <h2 className="text-3xl max-md:text-2xl text-gray-900 dark:text-white text-center font-sans-demibold relative">
            دسته بندی های محبوب 💫
            <div className="flex justify-center mt-2 gap-x-1">
              <span className="block w-3 h-1 bg-success/30"></span>
              <span className="block w-6 h-1 bg-success"></span>
              <span className="block w-3 h-1 bg-success/30"></span>
            </div>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <Box count={152} title={"دمپایی"} />
            <Box count={354} title={"کتونی"} />
            <Box count={21} title={"کفش"} />
            <Box count={984} title={"صندل"} />
            {/* <Box count={21} title={"اسکیچرز"} /> */}
          </div>
        </div>

        {/* جدیدترین محصولات */}
        <div className="container-custom md:mt-40 max-md:mt-10">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl max-md:text-2xl text-gray-900 dark:text-white  text-right font-sans-demibold relative">
              جدیدترین محصولات
              <div className="flex mt-2 gap-x-1">
                <span className="block w-3 h-1 bg-success/30"></span>
                <span className="block w-6 h-1 bg-success"></span>
                <span className="block w-3 h-1 bg-success/30"></span>
              </div>
            </h2>

            <a
              href="#"
              className="font-sans-medium text-success flex items-center hover:underline gap-x-1"
            >
              نتایج بیشتر
              <span>
                <IoArrowForward className="rotate-180" />
              </span>
            </a>
          </div>

          <div className="grid justify-center xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 w-full gap-3 mt-4">
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
          </div>
        </div>

        {/* کامنت های برتر */}
        <div className="container-custom bg-gray-100 rounded-lg dark:bg-slate-800/80 md:mt-20 md:py-10 max-md:py-5 max-md:mt-10 w-full">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl max-md:text-2xl text-gray-900 dark:text-white text-right font-sans-demibold relative">
              کامنت های برتر
              <div className="flex mt-2 gap-x-1">
                <span className="block w-3 h-1 bg-success/30"></span>
                <span className="block w-6 h-1 bg-success"></span>
                <span className="block w-3 h-1 bg-success/30"></span>
              </div>
            </h2>

            <a
              href="#"
              className="font-sans-medium text-success flex items-center hover:underline gap-x-1"
            >
              نتایج بیشتر
              <span>
                <IoArrowForward className="rotate-180" />
              </span>
            </a>
          </div>

          <div className="mt-14 max-md:mt-10">
            <Comment />
          </div>
        </div>

        {/* وبلاگ */}
        <div className="container-custom md:mt-30 md:mb-20 max-md:mb-10 max-md:mt-10">
          <h2 className="text-3xl max-md:text-2xl text-gray-900 dark:text-white text-center font-sans-demibold relative">
            وبلاگ های مارا دنبال کنید...
            <div className="flex justify-center mt-2 gap-x-1">
              <span className="block w-3 h-1 bg-success/30"></span>
              <span className="block w-6 h-1 bg-success"></span>
              <span className="block w-3 h-1 bg-success/30"></span>
            </div>
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            <Article />
            <Article />
            <Article />
            <Article />
          </div>
        </div>
      </div>
    </>
  );
}
