import { getServerSession } from "next-auth";
import { authOptions } from "../[...nextauth]/route";
import connectToDb from "../../../../../database/db";
import UserModel from "../../../../../schema/user/user";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return Response.json(
        { code: "UNAUTHORIZED", message: "User is not authenticated" },
        { status: 401 }
      );
    }

    await connectToDb();

    const user = await UserModel.findOne(
      { email: session.user.email, isActive: true },
      { __v: 0, password: 0 }
    );

    if (!user) {
      return Response.json(
        { code: "USER_NOT_FOUND", message: "User not found" },
        { status: 404 }
      );
    }

    return Response.json({ message: "success", data: user }, { status: 200 });
  } catch (error) {
    return Response.json(
      { message: "Internal Server Error 500" },
      { status: 500 }
    );
  }
}
