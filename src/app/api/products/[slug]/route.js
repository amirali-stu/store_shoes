import connectToDb from "../../../../../database/db";
import { productModel } from "../../../../../schema/product/product";
import { productColorModel } from "../../../../../schema/product/product_color";
import { productVariantModel } from "../../../../../schema/product/product_variant";

export async function GET(req, { params }) {
  try {
    await connectToDb();

    const { slug } = await params;
    const cleanSlug = decodeURIComponent(String(slug)).trim();

    // 1) پیدا کردن محصول با slug
    const product = await productModel
      .findOne(
        { slug: cleanSlug, isActive: true },
        { createdAt: 0, updatedAt: 0, __v: 0 }
      )
      .populate("brandId", "name slug")
      .populate("categoryId", "name slug")
      .lean();

    if (!product) {
      return Response.json(
        { success: false, message: "Product Not Found" },
        { status: 404 }
      );
    }

    // 2) رنگ‌های این محصول
    const colors = await productColorModel
      .find({ productId: product._id }, { __v: 0, createdAt: 0, updatedAt: 0 })
      .populate("colorId", "name hexCode")
      .lean();

    // 3) واریانت‌های این محصول (رنگ+سایز+قیمت)
    const variants = await productVariantModel
      .find({ productId: product._id })
      .populate("sizeId", "value")
      .lean();

    // 4) چسباندن سایزها به هر رنگ
    const colorsWithSizes = colors.map((c) => {
      const sizesForThisColor = variants
        .filter((v) => String(v.productColorId) === String(c._id))
        .map((v) => ({
          sizeId: v.sizeId,
          price: v.price,
          sku: v.sku,
        }));

      return {
        ...c,
        sizes: sizesForThisColor,
      };
    });

    // 5) خروجی نهایی
    return Response.json({
      success: true,
      message: "Get Product Successfully",
      data: {
        ...product,
        colors: colorsWithSizes,
      },
    });
  } catch (error) {
    console.log(error);
    return Response.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
