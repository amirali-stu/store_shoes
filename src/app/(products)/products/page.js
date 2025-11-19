import ProductFilterBox from "@/components/templates/Filter/ProductFilterBox";

export default function Products() {
  return (
    <div className="container-custom grid grid-cols-12 gap-4 ">
      <div className="col-span-3">
        <ProductFilterBox />
      </div>
      <div className="col-span-9 h-400">اینجا محتوای محصولات</div>
    </div>
  );
}
