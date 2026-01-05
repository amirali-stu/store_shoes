import { toast } from "react-toastify";
import { apiRequest } from "../../../../services/axios/config/apiRequest";
import { errorStyle, successStyle } from "@/app/ToastStyles";

export default async function AddProductToWishlist({ id }) {
  try {
    const updateWishlistItem = await apiRequest.post("/wishlist", {
      productId: id,
    });

    return toast.success(
      "محصول با موفقیت به علاقه مندی اضافه شد",
      successStyle
    );
  } catch (error) {
    if (error?.status === 409) {
      return toast.error("محصول در علاقه مندی شما وجود دارد", errorStyle);
    } else if (error?.status === 401) {
      return toast.error("ابتدا لاگین انجام دهید", errorStyle);
    } else {
      console.log(`error in to updata wishlist -> ${error}`);
      return toast.error("مشکلی پیش آمد لطفا دوباره امتجان کنید", errorStyle);
    }
  }
}
