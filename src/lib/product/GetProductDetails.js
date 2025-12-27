import connectToDb from "../../../database/db";
import { productModel } from "../../../schema/product/product";
import { productColorModel } from "../../../schema/product/product_color";
import { productVariantModel } from "../../../schema/product/product_variant";

export async function GetProductDetails(slug) {
  await connectToDb();
  const cleanSlug = decodeURIComponent(String(slug)).trim();

  const product = await productModel
    .findOne(
      { slug: cleanSlug, isActive: true },
      { createdAt: 0, updatedAt: 0, __v: 0 }
    )
    .populate("brandId", "name slug")
    .populate("categoryId", "name slug")
    .lean();

  if (!product) return null;

  const colors = await productColorModel
    .find({ productId: product._id }, { __v: 0, createdAt: 0, updatedAt: 0 })
    .populate("colorId", "name hexCode")
    .lean();

  const variants = await productVariantModel
    .find({ productId: product._id, isActive: true })
    .populate("sizeId", "value")
    .select("productColorId sizeId sku stock")
    .lean();

  const images = Array.isArray(product.images)
    ? product.images.map((img) => ({
        url: img.url ?? "",
        alt: img.alt ?? "",
        sortOrder: img.sortOrder ?? 0,
      }))
    : [];

  const from = product.sizeRange?.from;
  const to = product.sizeRange?.to;

  if (!Number.isFinite(from) || !Number.isFinite(to) || from > to) return null;

  const allSizeValues = [];

  for (let s = from; s <= to; s++) allSizeValues.push(String(s));

  const variantMap = new Map();
  for (const v of variants) {
    const colorKey = String(v.productColorId);
    const sizeValue = v.sizeId?.value != null ? String(v.sizeId.value) : null;
    if (!sizeValue) continue;
    variantMap.set(`${colorKey}:${sizeValue}`, v);
  }

  const colorsWithSizes = colors.map((c) => {
    const colorKey = String(c._id);

    const sizes = allSizeValues.map((sv) => {
      const v = variantMap.get(`${colorKey}:${sv}`);
      return {
        value: sv,
        label: sv,
        count: v?.stock ?? 0,
        sku: v?.sku ?? null,
        variantId: v ? String(v._id) : null,
      };
    });

    return {
      value: String(c._id),
      name: c.colorId?.name ?? "",
      hexCode: c.colorId?.hexCode ?? "#999999",
      sizes,
    };
  });

  return {
    ...product,
    _id: String(product._id),
    price: product.price ?? null,

    images,

    brand: product.brandId
      ? {
          _id: String(product.brandId._id),
          name: product.brandId.name,
          slug: product.brandId.slug,
        }
      : null,

    category: product.categoryId
      ? {
          _id: String(product.categoryId._id),
          name: product.categoryId.name,
          slug: product.categoryId.slug,
        }
      : null,

    brandId: undefined,
    categoryId: undefined,

    colors: colorsWithSizes,
  };
}
