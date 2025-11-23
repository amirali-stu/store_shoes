import ProductContainer from "@/components/modules/Products/ProductContainer";
import ProductFilterBox from "@/components/templates/Filter/ProductFilterBox";

export default function Products() {
  return (
    <div className="container-custom flex flex-col lg:flex-row gap-4">
      <div className="lg:w-[400px] max-lg:w-full">
        <ProductFilterBox />
      </div>

      <ProductContainer />
    </div>
  );
}
