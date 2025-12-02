import { z } from "zod";

export const userValidation = z.object({
  username: z
    .string()
    .min(3, { message: "نام کاربری باید حداقل ۳ کاراکتر باشد" })
    .optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  age: z.number().min(0).max(120).optional(),
  email: z.string("ایمیل باید شامل حروف باشد").email("ایمیل نامعتبر است"),
  phone: z.string().optional(),
  streetAddress: z.string().optional(),
  city: z.string().optional(),
  province: z.string().optional(),
  password: z
    .string("رمزعبور باید باید به درستی وارد شود")
    .min(8, { message: "رمز عبور باید حداقل 8 کاراکتر باشد" }),
});
