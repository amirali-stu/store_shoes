import Detail from "@/components/modules/Products/Details/Detail";
import HelperProduct from "@/components/modules/Products/Details/HelperProdcut";
import RelatedProduct from "@/components/modules/Products/Details/RelatedProduct";

export default function ProductDetail() {
  return (
    <div className="max-w-7xl mx-auto font-sans-medium px-4 py-4">
      <Detail />
      <HelperProduct />
      <RelatedProduct />
    </div>
  );
}
