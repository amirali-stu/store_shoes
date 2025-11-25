import React from "react";
import Row from "./Row";

function ProductsTable() {
  return (
    <div className="overflow-x-auto border-2 border-gray-100 rounded-lg">
      <table className="min-w-full overflow-hidden">
        <thead className="bg-white md:text-sm max-md:text-xs border-b-2 border-gray-100">
          <tr>
            <th
              scope="col"
              className="py-3 text-right md:px-8 max-md:px-5 text-nowrap"
            >
              محصول
            </th>
            <th
              scope="col"
              className="py-3 text-right md:px-12 max-md:px-5 text-nowrap"
            >
              مبلغ
            </th>
            <th
              scope="col"
              className="py-3 text-right md:px-16 max-md:px-5 text-nowrap"
            >
              تعداد
            </th>
            <th
              scope="col"
              className="py-3 text-right md:px-8 max-md:px-5 text-nowrap"
            >
              مبلغ کل
            </th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y-2 divide-gray-100">
          <Row />
          <Row />
          <Row />
        </tbody>

        <tfoot className="bg-white border-t-2 border-gray-100">
          <tr>
            <td colSpan={5} className="py-4 px-4">
              <div className="flex items-center justify-between w-full">
                <button className="px-7 py-3.5 bg-gray-50 text-gray-700 rounded-full transition-all duration-300 hover:bg-gray-100 cursor-pointer">
                  بازگشت به فروشگاه
                </button>

                <button className="px-7 py-3.5 bg-gray-50 text-gray-700 rounded-full transition-all duration-300 hover:bg-gray-100 cursor-pointer">
                  بازگشت به فروشگاه
                </button>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default ProductsTable;
