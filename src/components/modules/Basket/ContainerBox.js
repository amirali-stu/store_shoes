// ContainerBox.jsx
import BasketBox from "./BasketBox";

export default function ContainerBox({ isOpenBasket, onCloseBasket }) {
  return (
    <>
      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 lg:w-110 max-lg:w-75 h-screen bg-white z-50 lg:p-10 p-5 transition-transform duration-500 font-sans-medium 
          ${isOpenBasket ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <BasketBox onCloseBasket={onCloseBasket} />
      </div>

      {/* Overlay */}
      <div
        onClick={onCloseBasket}
        className={`fixed top-0 left-0 w-full h-full bg-black/30 z-40 cursor-pointer transition-opacity duration-500
          ${isOpenBasket ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      ></div>
    </>
  );
}
