import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaMinus, FaPlus, FaBasketShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import ProductGallery from "./Slider";

export default function Detail() {
  const images = [
    "/images/products/image.png",
    "/images/products/image.png",
    "/images/products/image.png",
    "/images/products/image.png",
  ];

  return (
    <div className="lg:px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* گالری عکس */}
        <div className="flex-1 w-full lg:w-1/2">
          <ProductGallery images={images} />
        </div>

        {/* اطلاعات محصول */}
        <div className="w-full lg:w-1/2 flex flex-col gap-y-6">
          <div className="border-b-2 pb-4 border-gray-100 space-y-4">
            <div className="flex items-center gap-x-2">
              <h2 className="text-3xl font-bold">بوراک 367</h2>
              <span className="px-3 py-1 text-sm rounded-lg text-success-dark bg-success-dark/20">
                موجود در انبار
              </span>
            </div>

            <div className="flex items-center gap-x-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-warning w-5 h-5" />
              ))}
              <span className="text-gray-600 text-sm mr-2">5 نقد و بررسی.</span>
            </div>

            <div className="flex items-center gap-x-3">
              <p className="text-2xl font-bold text-success-dark">
                $17,00
                <span className="line-through text-sm text-gray-400 ml-2 font-normal">
                  $48,00
                </span>
              </p>
              <span className="text-error text-sm bg-error/20 rounded-full px-3 py-1">
                34% تخفیف
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-x-3">
              <h4 className="font-medium">برند:</h4>
              <p
                className="border-2 border-gray-200 text-gray-400 rounded-lg p-3 hover:border-gray-700 hover:text-gray-700
               transition-all duration-300"
              >
                Nike
              </p>
            </div>

            <p className="text-gray-600 leading-7 line-clamp-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم
              متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
              طراحان گرافیک است
            </p>
          </div>

          <div className="flex sm:items-center max-sm:flex-col gap-4 py-6 max-sm:justify-between border-t-2 border-gray-100">
            <div className="flex items-center gap-4 max-sm:justify-between w-full">
              <div className="flex gap-x-3 items-center border-2 p-2 border-gray-200 rounded-full">
                <button className="p-2.5 cursor-pointer bg-gray-50 text-gray-600 hover:text-gray-900 rounded-full transition-all duration-300">
                  <FaMinus />
                </button>
                <span className="text-lg font-medium">5</span>
                <button className="p-2.5 cursor-pointer bg-gray-50 text-gray-600 hover:text-gray-900 rounded-full transition-all duration-300">
                  <FaPlus />
                </button>
              </div>

              <button className="flex-1 max-sm:hidden bg-success text-white rounded-full py-4 px-6 flex items-center justify-center gap-3 text-lg font-medium hover:bg-success-dark transition-all duration-300 cursor-pointer">
                <FaBasketShopping />
                افزودن به سبد خرید
              </button>

              <button className="p-4 rounded-full bg-success-dark/20 text-success-dark hover:bg-success hover:text-white transition-all duration-300 cursor-pointer">
                <FaRegHeart className="w-6 h-6" />
              </button>
            </div>

            <button className="flex-1 sm:hidden bg-success text-white rounded-full py-4 px-6 flex items-center justify-center gap-3 text-lg font-medium hover:bg-success-dark transition-all duration-300 cursor-pointer">
              <FaBasketShopping />
              افزودن به سبد خرید
            </button>
          </div>

          <p className="text-gray-700">
            دسته بندی: <span className="text-gray-500">کتونی، نایک، اسپرت</span>
          </p>
        </div>
      </div>
    </div>
  );
}
