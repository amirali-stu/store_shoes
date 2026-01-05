import { errorStyle, successStyle } from "@/app/ToastStyles";
import { toast } from "react-toastify";

export default function AddProductToLocalStorage({ id, title, price, image }) {
  const productDetails = {
    id,
    title,
    count: 1,
    price,
    img: image,
  };

  const existingBasket = JSON.parse(localStorage.getItem("basket") || "[]");

  const isAlreadyInBasket = existingBasket.some(
    (item) => item.id === productDetails.id
  );

  if (isAlreadyInBasket) {
    return toast.error("محصول در سبد خرید شما وجود دارد", errorStyle);
  }

  const updatedBasket = [...existingBasket, productDetails];
  localStorage.setItem("basket", JSON.stringify(updatedBasket));

  // آپدیت در dom
  window.dispatchEvent(new Event("basketUpdated"));
  toast.success("محصول با موفقیت اضافه شد", successStyle);

  // فرستادن کاربر به اول صفحه
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
