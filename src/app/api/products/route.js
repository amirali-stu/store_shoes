import connectToDb from "../../../../database/db";
import { productModel } from "../../../../schema/product/product";
import { productVariantModel } from "../../../../schema/product/product_variant";

export async function GET() {
  try {
    await connectToDb();

    const products = await productModel
      .find({    isActive: true })
      .select("title slug description images brandId categoryId")
      .populate("brandId", "name slug")
      .populate("categoryId", "name slug")
      .lean();

    const productIds = products.map((p) => p._id);

    // فقط قیمت‌ها برای محاسبه minPrice
    const variants = await productVariantModel
      .find({ productId: { $in: productIds }, isActive: true })
      .select("productId price")
      .lean();

    // minPrice برای هر محصول
    const minPriceMap = new Map();
    for (const v of variants) {
      const key = String(v.productId);
      const current = minPriceMap.get(key);
      if (current == null || v.price < current) minPriceMap.set(key, v.price);
    }

    const data = products.map((p) => ({
      _id: p._id,
      title: p.title,
      slug: p.slug,
      description: p.description,
      price: minPriceMap.get(String(p._id)) ?? null,
      image: p.images?.[0]?.url ?? null,
      brand: p.brandId,
      category: p.categoryId,
    }));

    return Response.json({
      success: true,
      message: "Get Products Successfully",
      data,
    });
  } catch (error) {
    console.log(error);
    return Response.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
