"use client";

import { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuEyeClosed } from "react-icons/lu";
import Link from "next/link";
import { toast } from "react-toastify";
import { errorStyle, successStyle } from "@/app/ToastStyles";
import { useRouter } from "next/navigation";
import { apiRequest } from "../../../../../services/axios/config/apiRequest";

function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginForm = async (e) => {
    e.preventDefault();

    if (email.length < 13) {
      return toast.error("ایمیل  نامعتبر است", errorStyle);
    }
    if (password.length < 8) {
      return toast.error("گذرواژه باید حداقل 8 کاراکتر باشد", errorStyle);
    }

    try {
      const res = await apiRequest.post("/auth/login", {
        email,
        password,
      });

      if (res.status === 200) {
        setEmail("");
        setPassword("");
        setTimeout(() => {
          router.replace("/");
          router.refresh();
        }, 2000);
        toast.success("ورود با موفقیت انجام شد", successStyle);
        revalidatePath;
      }
    } catch (error) {
      if (error.response.data.code === "USER_NOT_FOUND") {
        return toast.error("کاربری با این اطلاعات یافت نشد", errorStyle);
      } else if (error.response.data.code === "WRONG_PASSWORD") {
        return toast.error("اطلاعات وارد شده اشتباه است", errorStyle);
      } else {
        console.log(error.response.data.code);
        return toast.error("خطایی رخ داد لطفا دوباره امتحان کنید", errorStyle);
      }
    }
  };

  return (
    <div className="w-full font-sans-medium flex items-center justify-center">
      <div className="w-[520px] h-[370px] p-6 bg-white dark:bg-slate-600/20 rounded-lg border-2 border-gray-100 dark:border-slate-700 shadow-lg">
        <h1 className="text-center text-2xl font-sans-demibold mb-3 text-gray-900 dark:text-gray-300">
          ورود
        </h1>
        <form
          className="flex items-center flex-col gap-y-3.5"
          onSubmit={loginForm}
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
              className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
            >
              {showPassword ? (
                <LuEyeClosed size={22} />
              ) : (
                <MdOutlineRemoveRedEye size={22} />
              )}
            </span>
          </div>
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-600 dark:text-gray-400">
              فراموشی رمز عبور؟
            </p>
            <div className="flex items-center gap-x-2">
              <label
                htmlFor="rememberme"
                className="text-sm text-gray-600 dark:text-gray-400 select-none cursor-pointer"
              >
                مرا به خاطر بسپار
              </label>
              <input
                type="checkbox"
                id="rememberme"
                className="    w-5 h-5 rounded-sm border-2 appearance-none cursor-pointer
    flex items-center justify-center

    bg-white border-gray-300
    dark:bg-slate-600/20 dark:border-slate-700

    checked:bg-blue-500 checked:border-blue-500
    dark:checked:bg-blue-400

    relative
    checked:after:content-['✓']
    checked:after:absolute
    checked:after:text-white
    checked:after:text-sm
    checked:after:font-bold
    checked:after:leading-none"
              />
            </div>
          </div>
          <button className="w-full rounded-full text-xl bg-success text-white flex items-center justify-center text-center py-3 cursor-pointer transition-all duration-300 hover:bg-success/80">
            ورود
          </button>
        </form>
        <p className="block text-center mt-5 text-gray-600 dark:text-gray-400">
          آیا اکانت ندارید؟{" "}
          <Link
            href={"./signup"}
            className="text-gray-900 dark:text-gray-300 font-sans-bold"
          >
            ثبت نام
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
