import connectToDb from "../../../database/db";
import WishlistModel from "../../../schema/user/wishlist_item";

export default async function getWishlist() {
  let productIdForQuery = null;
  await connectToDb();

  try {
    const wishlists = await WishlistModel.find(
      { isActive: true },
      { productId: 1 }
    )
      .sort({ createAt: -1 })
      .populate({
        path: "productId",
        select: "title images price",
        options: { lean: true },
      })
      .lean();

    const data = wishlists.map((w) => {
      productIdForQuery = w.productId;
      return {
        _id: w._id.toString(),
        product: productIdForQuery
          ? {
              _id: productIdForQuery._id.toString(),
              title: productIdForQuery.title ?? null,
              price: productIdForQuery.price ?? null,
              image: productIdForQuery.images?.[0]?.url ?? null,
            }
          : null,
      };
    });

    return {
      success: true,
      message: "Get Wishlist Successfully",
      data,
    };
  } catch (error) {
    return {
      success: false,
      message: `Get Wishlist Field -> ${error?.message}`,
    };
  }
}
