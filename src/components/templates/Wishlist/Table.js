import getWishlist from "@/lib/wishlist/getWishlist";
import Row from "./Row";

export default async function Table() {
  const wishlists = await getWishlist();

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
              className="py-3 text-right md:px-8 max-md:px-5 text-nowrap"
            >
              مبلغ
            </th>
            <th
              scope="col"
              className="py-3 text-right md:px-8 max-md:px-5 text-nowrap"
            >
              وضعیت موجودی
            </th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y-2 divide-gray-100">
          {wishlists.data?.map((item) => (
            <Row key={item._id} {...item.product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
