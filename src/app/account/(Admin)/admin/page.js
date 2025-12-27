import BrandForm from "@/components/templates/Form/Brand/BrandForm";
import CategoryForm from "@/components/templates/Form/Category/CategoryForm";
import ColorForm from "@/components/templates/Form/Color/ColorForm";
import ProductsForm from "@/components/templates/Form/ProductsForm/ProductsForm";
import SizeForm from "@/components/templates/Form/Size/SizeForm";

function page() {
  return (
    <section className="max-w-7xl flex flex-col items-center justify-center divide-y-2 divide-gray-600 gap-y-4">
      {/* create brand */}
      <div>
        <h3>ساختن برند</h3>
        <BrandForm />
      </div>
      {/* create category */}
      <div>
        <h3>ساختن دسته بندی</h3>
        <CategoryForm />
      </div>

      <div>
        <h3>ساختن رنگ</h3>
        <ColorForm />
      </div>
      <div>
        <h3>ساختن سایز</h3>
        <SizeForm />
      </div>
      <div>
        <h3>ساخت محصول جدید</h3>
        <ProductsForm />
      </div>
    </section>
  );
}

export default page;
