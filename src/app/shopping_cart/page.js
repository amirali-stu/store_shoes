import React from "react";
import { BsBasket } from "react-icons/bs";
import ProductsTable from "@/components/templates/ShoppingCart/ProductsTable";
import CartTotal from "@/components/templates/ShoppingCart/CartTotal";
import CouponCode from "@/components/templates/ShoppingCart/CouponCode";

function WishList() {
  return (
    <div className="max-w-7xl mx-auto font-sans-medium px-4 py-8">
      <div className="flex items-center gap-x-3 mb-6 text-center justify-center">
        <h1 className="text-3xl text-center text-gray-900 dark:text-gray-300 font-medium">
          سبد خرید من
        </h1>

        <BsBasket className="text-3xl" />
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 xl:col-span-8 lg:col-span-9">
          <ProductsTable />
          <div className="mt-6">
            <CouponCode />
          </div>
        </div>

        <div className="col-span-12 xl:col-span-4 lg:col-span-3">
          <CartTotal />
        </div>
      </div>
    </div>
  );
}

export default WishList;
