import connectToDb from "../../../../../database/db";
import { brandModel } from "../../../../../schema/product/brand";

export async function GET() {
  try {
    await connectToDb();

    const brands = await brandModel.find({});

    return Response.json(
      {
        success: true,
        message: "Get Brand Successfully",
        data: brands,
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
