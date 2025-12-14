"use client";

import { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuEyeClosed } from "react-icons/lu";
import Link from "next/link";
import { errorStyle, successStyle } from "@/app/ToastStyles";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { apiRequest } from "../../../../../services/axios/config/apiRequest";

function Signup() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signupForm = async (e) => {
    e.preventDefault();

    try {
      if (email.length < 13) {
        return toast.error("ایمیل  نامعتبر است", errorStyle);
      }
      if (password.length < 8) {
        return toast.error("گذرواژه باید حداقل 8 کاراکتر باشد", errorStyle);
      }
      if (password !== confirmPassword) {
        return toast.error("گذرواژه با تکرار آن مطابقت ندارد", errorStyle);
      }

      const res = await apiRequest.post("/auth/signup", {
        email,
        password,
      });

      if (res.status === 409) {
        return toast.error("ایمیل قبلا ثبت شده است", errorStyle);
      }
      if (res.status === 201) {
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setTimeout(() => {
          router.replace("/");
          router.refresh();
        }, 2000);
        return toast.success("حساب کاربری با موفقیت ایجاد شد", successStyle);
      }
    } catch (error) {
      console.log(error);
      return toast.error("خطایی رخ داد لطفا دوباره امتحان کنید", errorStyle);
    }
  };

  return (
    <div className="w-full font-sans-medium flex items-center justify-center">
      <div className="w-[520px] h-[410px] p-6 bg-white dark:bg-slate-600/20 rounded-lg border-2 border-gray-100 dark:border-slate-700 shadow-lg">
        <h1 className="text-center text-2xl font-sans-demibold mb-3 text-gray-900 dark:text-gray-300">
          ثبت نام
        </h1>
        <form
          className="flex items-center flex-col gap-y-3.5"
          onSubmit={signupForm}
        >
          <input
            type="email"
            placeholder="ایمل"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-2 border-gray-100 dark:border-slate-700 rounded-md pr-2.5  py-3.5 placeholder:text-gray-400 text-gray-600 dark:text-gray-400 outline-0 transition-all duration-300 focus:ring-2 ring-blue-600"
            required
          />
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="رمز عبور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-2 border-gray-100 dark:border-slate-700 rounded-md pr-2.5 py-3.5 
               placeholder:text-gray-400 text-gray-600 dark:text-gray-400 outline-0 transition-all duration-300 focus:ring-2 ring-blue-600"
              required
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
            >
              {showPassword ? (
                <LuEyeClosed size={22} />
              ) : (
                <MdOutlineRemoveRedEye size={22} />
              )}
            </span>
          </div>
          <div className="relative w-full">
            <input
              type={showPasswordConfirm ? "text" : "password"}
              placeholder="تکرار رمز عبور"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border-2 border-gray-100 dark:border-slate-700 rounded-md pr-2.5 py-3.5 
               placeholder:text-gray-400 text-gray-600 dark:text-gray-400 outline-0 transition-all duration-300 focus:ring-2 ring-blue-600"
              required
            />

            <span
              onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
              className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
            >
              {showPasswordConfirm ? (
                <LuEyeClosed size={22} />
              ) : (
                <MdOutlineRemoveRedEye size={22} />
              )}
            </span>
          </div>
          <button className="w-full rounded-full text-xl bg-success dark:bg-success-dark text-white flex items-center justify-center text-center py-3 cursor-pointer transition-all duration-300 hover:bg-success/80">
            ثبت نام
          </button>
        </form>
        <p className="block text-center mt-5 text-gray-600 dark:text-gray-500">
          آیا اکانت دارید؟{" "}
          <Link
            href={"./login"}
            className="text-gray-900 dark:text-gray-300 font-sans-bold"
          >
            وارد شوید
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
