import Banner from "@/components/templates/slider/Banner";
import car from "../svgs/delivery-truck.svg";
import headephone from "../svgs/headphones.svg";
import packageBox from "../svgs/package.svg";
import shoppingBag from "../svgs/shopping-bag.svg";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" flex min-h-screen items-center flex-col">
      <div className="container relative">
        <Banner />
        <div className="w-[80%] h-[128px] absolute -bottom-[10%] left-1/2 -translate-x-1/2 bg-white font-sans-medium shadow-md rounded-xl z-10 p-10 flex items-center gap-x-8">
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
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <h1 className="text-2xl font-sans-medium">سلام . این یک متن تستی است</h1>

      <div className="font-yekan-regular text-2xl">
        این یک متن تستی با فونت یکان است
      </div>
    </div>
  );
}
