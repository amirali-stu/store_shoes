import connectToDb from "../../../../../database/db";
import UserModel from "../../../../../schema/user";
import { hashedPassword } from "../../../../../utils/userVlidate";
import { signupValidation } from "../../../../../validation/signupValidation";

export async function POST(req) {
  try {
    await connectToDb();
    const data = await req.json();

    const result = signupValidation.safeParse(data);
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

    const existingUser = await UserModel.findOne({
      $or: [{ email }],
    });

    if (existingUser) {
      const details = {};
      if (existingUser.email === email) {
        details.email = "این ایمیل قبلاً ثبت شده است";
      }

      return Response.json(
        {
          error: "حساب کاربری با این اطلاعات قبلاً ایجاد شده",
          details,
        },
        { status: 409 }
      );
    }

    const hashPassword = hashedPassword(password);

    const newUser = await UserModel.create({
      ...result.data,
      password: hashPassword,
    });

    const userResponse = newUser.toObject();
    delete userResponse.password;

    return Response.json(
      { message: "ثبت‌نام با موفقیت انجام شد", user: userResponse },
      { status: 201 }
    );
  } catch (error) {
    console.error("خطای سرور در ثبت‌نام:", error);

    if (error.code === 11000) {
      const field = Object.keys(error.keyValue)[0];

      const messages = {
        email: "این ایمیل قبلاً ثبت شده است",
      };

      return Response.json(
        {
          error: "اطلاعات تکراری است",
          details: {
            [field]: messages[field] || "این مقدار قبلاً استفاده شده",
          },
        },
        { status: 409 }
      );
    }

    return Response.json(
      {
        error: "خطای داخلی سرور رخ داد",
        ...(process.env.NODE_ENV === "development" && {
          detail: error.message,
        }),
      },
      { status: 500 }
    );
  }
}
