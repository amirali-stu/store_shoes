"use client";

import { createNewCategory } from "@/actions/brands";
import { errorStyle, successStyle } from "@/app/ToastStyles";
import { useActionState, useEffect, useState } from "react";
import { toast } from "react-toastify";
import CategoryButton from "./CategoryButton";

const initialState = { success: null, error: null, data: null };

export default function CategoryForm() {
  const [state, formAction, isPending] = useActionState(
    async (prevState, formData) => {
      return await createNewCategory(formData);
    },
    initialState
  );

  useEffect(() => {
    if (state?.success) {
      toast.success("دسته بندی با موفقیت ساخته شد", successStyle);
    } else if (state?.success === false) {
      if (state.error === "CATEGORY_EXISTS")
        toast.error("این دسته بندی قبلاً ثبت شده", errorStyle);
      else if (state.error === "INVALID_DATA")
        toast.error("نام دسته بندی الزامی است", errorStyle);
      else toast.error("خطای سرور", errorStyle);
    }
  }, [state]);

  return (
    <form action={formAction} className="flex items-center flex-col gap-5">
      <div className="flex items-center flex-col gap-2">
        <label className="text-black dark:text-white">نام</label>
        <input name="name" className="bg-gray-400 dark:text-black" />
      </div>

      <CategoryButton isPending={isPending} />
    </form>
  );
}
