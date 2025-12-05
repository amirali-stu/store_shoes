import { cookies } from "next/headers";
import connectToDb from "../../../../database/db";
import { verifyToken } from "../../../../utils/auth";
import UserModel from "../../../../schema/user";
import Link from "next/link";

export default async function TopHeader() {
  await connectToDb();

  const cookieStore = await cookies();
  const tokenCookie = cookieStore.get("token");
  const token = tokenCookie?.value;

  let user = null;

  if (token) {
    const decoded = verifyToken(token);
    if (decoded?.email) {
      user = await UserModel.findOne(
        { email: decoded.email },
        { password: 0, __v: 0 }
      );
    }
  }



  return (
    <div className="w-full flex items-center justify-between border-b-2 border-gray-100 bg-white !py-2 lg:!px-[250px] max-lg:!px-[80px] max-sm:!px-[40px]">
      <div>
        <p className="text-gray-600 font-sans-medium">محل فروشگاه: درب حرم</p>
      </div>

      <div className="flex items-center gap-x-5 *:text-gray-600 font-sans-medium">
        {user ? (
          <p>{user.email}</p>
        ) : (
          <p>
            <Link href={"/auth/signup"}>ثبت نام</Link> /
            <Link href={"/auth/login"}>ورود</Link>
          </p>
        )}
      </div>
    </div>
  );
}
