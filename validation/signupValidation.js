import { z } from "zod";

export const signupValidation = z.object({
  email: z.string("ایمیل باید شامل حروف باشد").email("ایمیل نامعتبر است"),

  password: z
    .string("رمزعبور باید باید به درستی وارد شود")
    .min(8, { message: "رمز عبور باید حداقل 8 کاراکتر باشد" }),
});
