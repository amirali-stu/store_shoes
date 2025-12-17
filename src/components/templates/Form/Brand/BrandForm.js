"use client";

import { createNewBrand } from "@/actions/brands";
import { errorStyle, successStyle } from "@/app/ToastStyles";
import { useActionState, useEffect } from "react";
import { toast } from "react-toastify";
import LogoInput from "./LogoInput";
import BrandButton from "./BrandButton";

const initialState = { success: null, error: null, data: null };

export default function BrandForm() {
  const [state, formAction, isPending] = useActionState(
    async (prevState, formData) => {
      return await createNewBrand(formData);
    },
    initialState
  );

  useEffect(() => {
    if (state?.success) {
      toast.success("برند با موفقیت ساخته شد", successStyle);
    } else if (state?.success === false) {
      if (state.error === "BRAND_EXISTS")
        toast.error("این برند قبلاً ثبت شده", errorStyle);
      else if (state.error === "NO_FILE")
        toast.error("لطفاً لوگو را انتخاب کنید", errorStyle);
      else if (state.error === "INVALID_FILE_TYPE")
        toast.error("فقط فایل تصویر مجاز است", errorStyle);
      else if (state.error === "INVALID_DATA")
        toast.error("نام برند الزامی است", errorStyle);
      else if (state.error === "FILE_TOO_LARGE")
        toast.error("حجم لوگو زیاد است", errorStyle);
      else toast.error("خطای سرور", errorStyle);
    }
  }, [state]);

  return (
    <form
      action={formAction}
      encType="multipart/form-data"
      className="flex items-center flex-col gap-5"
    >
      <div className="flex items-center flex-col gap-2">
        <label className="text-black dark:text-white">نام</label>
        <input name="name" className="bg-gray-400 dark:text-black" />
      </div>

      <div className="flex items-center flex-col gap-2">
        <label className="text-black dark:text-white">لوگو</label>
        <LogoInput />
      </div>

      <BrandButton isPending={isPending} />
    </form>
  );
}
