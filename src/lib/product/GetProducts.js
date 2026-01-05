import connectToDb from "../../../database/db";
import { productModel } from "../../../schema/product/product";

export async function getProducts() {
  await connectToDb();

  const products = await productModel
    .find({ isActive: true })
    .sort({ createdAt: -1 })
    .select("title slug description images brandId categoryId price")
    .populate("brandId", "name slug")
    .populate("categoryId", "name slug")
    .lean();

  return products.map((p) => ({
    _id: String(p._id),
    title: p.title,
    slug: p.slug,
    description: p.description,
    price: p.price ?? null,
    image: p.images?.[0]?.url ?? null,
    brand: p.brandId
      ? {
          _id: String(p.brandId._id),
          name: p.brandId.name,
          slug: p.brandId.slug,
        }
      : null,
    category: p.categoryId
      ? {
          _id: String(p.categoryId._id),
          name: p.categoryId.name,
          slug: p.categoryId.slug,
        }
      : null,
  }));
}
