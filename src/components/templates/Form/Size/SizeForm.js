"use client";

import { createNewSize } from "@/actions/brands";
import { errorStyle, successStyle } from "@/app/ToastStyles";
import { useActionState, useEffect } from "react";
import { toast } from "react-toastify";
import SizeButton from "./SizeButton";

const initialState = { success: null, error: null, data: null };

export default function SizeForm() {
  const [state, formAction, isPending] = useActionState(
    async (prevState, formData) => {
      return await createNewSize(formData);
    },
    initialState
  );

  useEffect(() => {
    if (state?.success) {
      toast.success("سایز با موفقیت ساخته شد", successStyle);
    } else if (state?.success === false) {
      if (state.error === "SIZE_EXISTS")
        toast.error("این سایز قبلاً ثبت شده", errorStyle);
      else if (state.error === "INVALID_DATA")
        toast.error("نام سایز الزامی است", errorStyle);
      else toast.error("خطای سرور", errorStyle);
    }
  }, [state]);

  return (
    <form action={formAction} className="flex items-center flex-col gap-5">
      <div className="flex items-center flex-col gap-2">
        <label className="text-black dark:text-white">سایز</label>
        <input name="size" className="bg-gray-400 dark:text-black" />
      </div>

      <SizeButton isPending={isPending} />
    </form>
  );
}
