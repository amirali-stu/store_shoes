"use client";

import { errorStyle } from "@/app/ToastStyles";
import React from "react";
import { toast } from "react-toastify";

function LogoInput() {
  const MAX = 5000 * 1024;

  function onLogoChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > MAX) {
      e.target.value = ""; // پاک کردن فایل انتخابی
      toast.error("حجم لوگو زیاد است (حداکثر 5 مگابایت)", errorStyle);
      return;
    }
  }

  return (
    <input name="logo" type="file" accept="image/*" onChange={onLogoChange} />
  );
}

export default LogoInput;
