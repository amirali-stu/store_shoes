import connectToDb from "../../../../../database/db";
import UserModel from "../../../../../schema/user";
import { confirmPasswordHashed } from "../../../../../utils/userVlidate";
import { loginValidation } from "../../../../../validation/loginValidation";

export async function POST(req) {
  try {
    await connectToDb();

    const data = await req.json();

    const result = loginValidation.safeParse(data);
    if (!result.success) {
      const errors = {};
      for (const issue of result.error.issues) {
        const field = issue.path.join(".");
        if (!errors[field]) errors[field] = issue.message;
      }
      return Response.json(
        { error: "داده‌های ارسالی معتبر نیستند", details: errors },
        { status: 422 }
      );
    }

    const { email, password } = result.data;

    const getUserInfo = await UserModel.findOne({ email });

    if (!getUserInfo) {
      return Response.json(
        { error: "داده نامعتبر : هیچ کاربری با این اطلاعات پیدا نشد" },
        { status: 404 }
      );
    }

    const isTrustPassword = confirmPasswordHashed(
      password,
      getUserInfo.password
    );

    if (!isTrustPassword) {
      return Response.json(
        { error: "ایمیل یا گذرواژه اشتباه است" },
        { status: 404 }
      );
    }

    return Response.json(
      { message: "کاربر با موفقیت وارد حساب شد", user: result.data },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { message: "field", error: error.message },
      { status: 500 }
    );
  }
}
