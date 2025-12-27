import connectToDb from "../../../../../database/db";
import { colorModel } from "../../../../../schema/product/color";

export async function GET() {
  try {
    await connectToDb();

    const colors = await colorModel.find({});

    return Response.json(
      {
        success: true,
        message: "Get Color Successfully",
        data: colors,
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
