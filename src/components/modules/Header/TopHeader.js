export default function TopHeader() {
  return (
    <div className="w-full flex items-center justify-between border-b-2 border-gray-100 bg-white !py-2 lg:!px-[250px] max-lg:!px-[80px] max-sm:!px-[40px]">
      <div>
        <p className="text-gray-600 font-sans-medium">
          {/* Store Location: Lincoln- 344, Illinois, Chicago, USA */}
          محل فروشگاه: درب حرم
        </p>
      </div>

      <div className="flex items-center gap-x-5 font-sans-medium">
        <p className="text-gray-600">ثبت نام / ورود </p>
      </div>
    </div>
  );
}
