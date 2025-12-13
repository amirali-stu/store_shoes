import React from "react";
import Vector from "@/svgs/Vector.svg";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

function TopComment() {
  return (
    <div className="p-6 bg-white rounded-lg flex flex-col gap-y-4 font-sans-medium">
      <Image src={Vector} width={30} height={30} alt="svg" />
      <p className="line-clamp-4 text-right text-black">
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
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-3">
          <Image
            src={"/images/user/profile1.png"}
            width={56}
            height={56}
            alt="profile"
          />
          <div className="*:text-right">
            <h4 className="text-gray-900 text-xl max-md:text-lg">متین رضایی</h4>
            <p className="text-gray-400 max-md:text-sm">مشتری</p>
          </div>
        </div>

        <div className="flex items-center text-yellow-600">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
    </div>
  );
}

export default TopComment;
