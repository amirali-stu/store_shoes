// BasketBox.jsx
import Image from "next/image";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

export default function BasketBox({ onCloseBasket }) {
  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="w-full flex items-center justify-between">
        <h4 className="lg:text-3xl text-xl text-gray-900">سبد خرید (4)</h4>
        <IoClose
          onClick={onCloseBasket}
          className="lg:text-2xl text-lg cursor-pointer"
        />
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto mt-3 max-h-138 divide-y-2 divide-gray-100 flex flex-col gap-y-3">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div key={item} className="w-full flex items-center justify-between">
            <Link href={"./product/1"} className="flex items-center gap-x-4">
              <Image
                src={"/images/products/Image.png"}
                width={120}
                height={100}
                alt="product-basket"
                className="lg:w-[120px] lg:h-[100px] max-lg:w-[80px] max-lg:h-[80px]"
              />
              <div className="space-y-2">
                <h5 className="text-gray-900 text-right">کتونی نایک</h5>
                <p className="text-sm text-gray-900" dir="ltr">
                  120,000,000 <span>x 2</span>
                </p>
              </div>
            </Link>
            <div className="lg:p-1.5 p-0.5 rounded-full border-2 text-md border-gray-100">
              <IoClose />
            </div>
          </div>
        ))}
      </div>

      {/* Fixed bottom button */}
      <div className="w-full fixed bottom-5 left-0 px-5 space-y-3">
        <div className="w-full flex items-center justify-between">
          <p className="text-gray-900">2 محصول</p>
          <p className="text-gray-900 font-bold">$26.00</p>
        </div>
        <Link href={"/shopping_cart"}>
          <button className="w-full text-lg bg-success text-white p-2 rounded-full cursor-pointer transition-all duration-300 hover:bg-success-dark">
          پرداخت
        </button>
        </Link>
      </div>
    </div>
  );
}
