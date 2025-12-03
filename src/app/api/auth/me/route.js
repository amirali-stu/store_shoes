import { cookies } from "next/headers";
import { verifyToken } from "../../../../../utils/auth";
import connectToDb from "../../../../../database/db";
import UserModel from "../../../../../schema/user";

export async function GET() {
  try {
    await connectToDb();
    const cookieStore = await cookies();
    const tokenCookie = cookieStore.get("token");
    const token = tokenCookie?.value;
    let findUserByEmailValue = null;

    if (!token) {
      return Response.json(
        { code: "USER_IS_NOT_REGISTER", message: "کاربر ثبت نام نکرده است" },
        { status: 401 }
      );
    } else {
      const isTrustToken = verifyToken(token);
      if (!isTrustToken) {
        return Response.json(
          { code: "TOKEN_HAS_EXPIRED.", message: "توکن نامعتبر یا منقض است" },
          { status: 401 }
        );
      }
      findUserByEmailValue = isTrustToken.email;
    }

    const user = await UserModel.findOne(
      { email: findUserByEmailValue },
      { _id: 0, __v: 0, password: 0 }
    );

    return Response.json({ message: "success", data: user }, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json(
      { message: "Internal Server Error 500" },
      { status: 500 }
    );
  }
}
