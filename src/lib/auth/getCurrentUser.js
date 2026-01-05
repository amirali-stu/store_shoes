import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import connectToDb from "../../../database/db";
import UserModel from "../../../schema/user/user";

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return {
      user: null,
      error: Response.json(
        { code: "UNAUTHORIZED", message: "User is not authenticated" },
        { status: 401 }
      ),
    };
  }

  await connectToDb();

  const exists = await UserModel.exists({
    _id: session.user.id,
    isActive: true,
  });
  if (!exists) {
    return {
      user: null,
      error: Response.json(
        { code: "USER_NOT_FOUND", message: "User not found or inactive" },
        { status: 404 }
      ),
    };
  }

  console.log(session.user);

  return { user: session.user, error: null };
}
