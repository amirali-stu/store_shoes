export default function Newsletter() {
  return (
    <div className="lg:px-20 md:px-4 max-md:px-4 font-sans-medium bg-gray-50 md:py-[50px] max-md:py-5 max-sm:py-5 max-md:flex-col flex  items-center justify-between max-md:gap-y-5 max-lg:gap-x-2">
      <div className="flex max-sm:gap-y-4 max-md:w-full max-md:justify-between gap-x-20 max-sm:flex-col">
        <h3 className="text-4xl lg:w-auto max-lg:w-9 text-gray-900">خبرنامه</h3>

        <div className="flex flex-col gap-y-2">
          <h4 className="text-gray-900 text-xl">خبرنامه مارا دنبال کنید</h4>
          <p className="text-gray-400">
            Pellentesque eu nibh eget mauris congue mattis matti.
          </p>
        </div>
      </div>

      <div className="rounded-full duration-300 transition-all hover:ring-2 ring-blue-600/70 flex items-center bg-white max-h-[52px] max-sm:max-h-16 overflow-hidden max-sm:w-80 max-sm:mt-4">
        <input
          type="text"
          className="w-[400px] pr-6 outline-0  py-4 bg-white text-gray-500 placeholder:to-gray-500"
          placeholder="آدرس ایمیل "
        />
        <button
          type="submit"
          className="py-4 px-16 max-sm:px-8 max-sm:py-3 cursor-pointer transition-all duration-300 hover:bg-success/80 text-white bg-success rounded-full text-center flex items-center justify-center"
        >
          ارسال
        </button>
      </div>
    </div>
  );
}
