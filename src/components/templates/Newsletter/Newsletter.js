import Image from "next/image";

export default function Newsletter() {
  return (
    <section className="lg:px-20 md:px-4 px-4 font-sans-medium">
      <div className="relative max-w-7xl mx-auto overflow-hidden transition-all duration-300 rounded-3xl border border-black/5 dark:border-white/10 bg-gray-100 dark:bg-slate-800 text-black dark:text-white p-6 md:p-10">
        {/* subtle decoration */}
        <div className="pointer-events-none absolute -top-16 -left-16 h-56 w-56 rounded-full bg-black/5 dark:bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-black/5 dark:bg-white/10 blur-2xl" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="flex items-start gap-4">
            {/* icon bubble */}
            <div
              className="shrink-0 h-12 w-12 rounded-2xl bg-white/70 transition-all duration-300 dark:bg-slate-950/40 border border-black/5 dark:border-white/10 flex items-center justify-center overflow-hidden
            "
            >
              <Image
                src={"/images/letter-icon1.jpg"}
                width={50}
                height={50}
                alt="letter 3d icon"
              />
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-sans-bold">خبرنامه</h3>
              <p className="mt-2 text-sm md:text-base text-black/60 transition-all duration-300 dark:text-white/70 max-w-xl">
                هر هفته بهترین پیشنهادها، تخفیف‌ها و محصولات جدید رو مستقیم تو
                ایمیلت بگیر.
              </p>

              <div className="mt-4 flex flex-wrap gap-2 text-xs md:text-sm *:transition-all duration-300">
                <span className="rounded-full bg-white/70 dark:bg-slate-950/40 border border-black/5 dark:border-white/10 px-3 py-1">
                  بدون اسپم
                </span>
                <span className="rounded-full bg-white/70 dark:bg-slate-950/40 border border-black/5 dark:border-white/10 px-3 py-1">
                  لغو عضویت با یک کلیک
                </span>
                <span className="rounded-full bg-white/70 dark:bg-slate-950/40 border border-black/5 dark:border-white/10 px-3 py-1">
                  پیشنهادهای اختصاصی
                </span>
              </div>
            </div>
          </div>

          <form className="w-full lg:w-auto">
            <div className="flex w-full transition-all duration-300 lg:w-[520px] items-center gap-2 rounded-2xl bg-white/80 dark:bg-slate-950/40 border border-black/5 dark:border-white/10 p-2 shadow-sm">
              <input
                type="email"
                className="w-full bg-transparent px-3 py-3 outline-none text-sm md:text-base placeholder:text-black/40 dark:placeholder:text-white/40"
                placeholder="آدرس ایمیل را وارد کنید"
              />
              <button
                type="submit"
                className="shrink-0 cursor-pointer rounded-xl px-5 md:px-6 py-3 text-sm md:text-base font-sans-medium text-white bg-emerald-600 hover:bg-emerald-600/90 transition-colors"
              >
                ارسال
              </button>
            </div>

            <p className="mt-2 text-xs transition-all duration-300 text-black/50 dark:text-white/50">
              با ثبت ایمیل، با قوانین حریم خصوصی موافقت می‌کنید.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
