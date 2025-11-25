import React from "react";

import { FaRegHeart } from "react-icons/fa";
import Table from "@/components/templates/Wishlist/Table";

function WishList() {
  return (
    <div className="max-w-7xl mx-auto font-sans-medium px-4 py-8">
      <div className="flex items-center gap-x-3 mb-6 text-center justify-center">
        <h1 className="text-3xl text-center text-gray-900 font-medium">
          علاقه مندی ها{" "}
        </h1>

        <FaRegHeart className="text-3xl" />
      </div>

      <Table />
    </div>
  );
}

export default WishList;
