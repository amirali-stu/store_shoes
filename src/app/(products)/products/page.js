import ProductBox from "@/components/modules/Products/ProductBox";
import ProductFilterBox from "@/components/templates/Filter/ProductFilterBox";

export default function Products() {
  return (
    <div className="container-custom flex flex-col lg:flex-row gap-4">
      <div className="lg:w-[400px] max-lg:w-full">
        <ProductFilterBox />
      </div>
      <div className="w-full grid xl:grid-cols-4 sm:grid-cols-3 gap-3 py-6">
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
      </div>
    </div>
  );
}
