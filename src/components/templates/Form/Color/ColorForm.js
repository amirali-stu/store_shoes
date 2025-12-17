"use client";

import { createNewColor } from "@/actions/brands";
import { errorStyle, successStyle } from "@/app/ToastStyles";
import { useActionState, useEffect } from "react";
import { toast } from "react-toastify";
import ColorButton from "./ColorButton";

const initialState = { success: null, error: null, data: null };

export default function ColorForm() {
  const [state, formAction, isPending] = useActionState(
    async (prevState, formData) => {
      return await createNewColor(formData);
    },
    initialState
  );

  useEffect(() => {
    if (state?.success) {
      toast.success("رنگ با موفقیت ساخته شد", successStyle);
    } else if (state?.success === false) {
      if (state.error === "CATEGORY_EXISTS")
        toast.error("این رنگ قبلاً ثبت شده", errorStyle);
      else if (state.error === "INVALID_DATA")
        toast.error("نام رنگ الزامی است", errorStyle);
      else toast.error("خطای سرور", errorStyle);
    }
  }, [state]);

  return (
    <form action={formAction} className="flex items-center flex-col gap-5">
      <div className="flex items-center flex-col gap-2">
        <label className="text-black dark:text-white">نام</label>
        <input name="name" className="bg-gray-400 dark:text-black" />
      </div>
      <div className="flex items-center flex-col gap-2">
        <label className="text-black dark:text-white">کد رنگی</label>
        <input
          type="color"
          name="color"
          className="bg-gray-400 dark:text-black"
        />
      </div>

      <ColorButton isPending={isPending} />
    </form>
  );
}
