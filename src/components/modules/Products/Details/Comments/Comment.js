import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

function Comment() {
  return (
    <div className="flex flex-col gap-y-3 py-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <Image
            src={"/images/products/image.png"}
            width={50}
            height={50}
            alt="comment"
            className="rounded-full"
          />
          <div className="flex flex-col gap-y-1">
            <h3 className="text-gray-900 text-xl">رضا احمدی</h3>
            <div className="flex items-center gap-x-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-warning w-3 h-3" />
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-400">2 دقیقه پیش</p>
      </div>
      <p className="text-gray-500 leading-8 line-clamp-2">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
        رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </p>
    </div>
  );
}

export default Comment;
