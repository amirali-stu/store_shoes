import SelectBox from "@/components/templates/Filter/SelectBox";
import ProductBox from "./ProductBox";
import { getProducts } from "@/lib/product/GetProducts";

export default async function ProductContainer() {
  const products = await getProducts();
  console.log(products);

  return (
    <div className="flex flex-col w-full mt-4 font-sans-medium">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <label className="text-gray-500 text-nowrap" htmlFor="sortBy">
            مرتب بندی :{" "}
          </label>
          <SelectBox />
        </div>
        <p className="text-gray-400 dark:text-gray-300 text-md max-md:text-sm">
          <span className="text-gray-900 dark:text-gray-500">45</span> محصول
          پیدا شد
        </p>
      </div>
      <div className="w-full grid xl:grid-cols-4 sm:grid-cols-3 gap-3 py-6">
        {products?.map((item) => (
          <ProductBox
            key={item._id}
            id={item._id}
            title={item.title}
            price={item.price}
            image={item.image}
            slug={item.slug}
          />
        ))}
      </div>
    </div>
  );
}
