import connectToDb from "../../../../../database/db";
import { sizeModel } from "../../../../../schema/product/size";

export async function GET() {
  try {
    await connectToDb();

    const sizes = await sizeModel.find({});

    return Response.json(
      {
        success: true,
        message: "Get Sizes Successfully",
        data: sizes,
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
