import connectToDb from "../../../../../database/db";
import { categoryModel } from "../../../../../schema/product/category";

export async function GET() {
  try {
    await connectToDb();

    const categories = await categoryModel.find({});

    return Response.json(
      {
        success: true,
        message: "Get Color Successfully",
        data: categories,
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
