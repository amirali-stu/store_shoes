import Detail from "@/components/modules/Products/Details/Detail";
import HelperProduct from "@/components/modules/Products/Details/HelperProdcut";
import RelatedProduct from "@/components/modules/Products/Details/RelatedProduct";
import { GetProductDetails } from "@/lib/product/GetProductDetails";
import { notFound } from "next/navigation";
import connectToDb from "../../../../../database/db";
import { productModel } from "../../../../../schema/product/product";

export default async function ProductDetail({ params }) {
  const { slug } = await params;

  try {
    await connectToDb();

    const product = await productModel.findOne({ slug });

    if (!product) {
      return notFound();
    }
  } catch (error) {
    return notFound();
  }

  const productDetails = await GetProductDetails(slug);

  return (
    <div className="max-w-7xl mx-auto font-sans-medium px-4 py-4">
      <Detail
      id={productDetails._id}
        title={productDetails.title}
        images={productDetails.images}
        description={productDetails.description}
        slug={productDetails.slug}
        price={productDetails.price}
        colors={productDetails.colors}
        sizeRange={productDetails.sizeRange}
      />
      <HelperProduct />
      <RelatedProduct />
    </div>
  );
}
