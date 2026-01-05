import { getServerSession } from "next-auth";
import connectToDb from "../../../../database/db";
import WishlistModel from "../../../../schema/user/wishlist_item";
import { apiRequest } from "../../../../services/axios/config/apiRequest";
import { authOptions } from "../auth/[...nextauth]/route";
import { withAuth } from "@/lib/auth/withAuth";

export async function GET() {
  await connectToDb();

  try {
    const wishlists = await WishlistModel.find(
      {},
      { __v: 0, updatedAt: 0, createdAt: 0 }
    ).populate("productId");

    return Response.json({
      success: true,
      message: "Get Wishlist Successfully",
      data: wishlists,
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: `Get Wishlist Field -> ${error?.message}`,
    });
  }
}

export const POST = withAuth(async (req, ctx, user) => {
  await connectToDb();

  try {
    await connectToDb();
    const body = await req.json();

    const exists = await WishlistModel.findOne({
      productId: body.productId,
      userId: user.id,
    });

    // چک کردن وجود محصول در سبد خرید
    if (exists) {
      return Response.json(
        {
          success: false,
          message: "Product already exists in wishlist",
        },
        { status: 409 }
      );
    }

    const wishlist = await WishlistModel.create({
      productId: body.productId,
      userId: user.id,
    });

    return Response.json({
      success: true,
      message: "Create Wishlist Successfully",
      data: wishlist,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
});
