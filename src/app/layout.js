import localFont from "next/font/local";
import Navbar from "@/components/modules/Header/navbar/Navbar";
import "./globals.css";
import "./slider.css";
import Footer from "@/components/modules/Footer/Footer";
import GoUp from "@/components/modules/MoveUp/GoUp";
import Breadcrumb from "@/components/modules/Breadcrumb/Breadcrumb";
import { Slide, ToastContainer } from "react-toastify";
import TopHeader from "@/components/modules/Header/TopHeader";

const SanaRegular = localFont({
  src: "../../public/fonts/Sans-Regular.ttf",
  variable: "--font-sana-regular",
});
const SanaMedium = localFont({
  src: "../../public/fonts/Sans-Medium.ttf",
  variable: "--font-sana-medium",
});
const SanaBold = localFont({
  src: "../../public/fonts/Sans-Bold.ttf",
  variable: "--font-sana-bold",
});
const SanaDemiBold = localFont({
  src: "../../public/fonts/Sans-DemiBold.ttf",
  variable: "--font-sana-demibold",
});
const YekanMedium = localFont({
  src: "../../public/fonts/YekanBakh-Medium.ttf",
  variable: "--font-yekan-medium",
});
const YekanBold = localFont({
  src: "../../public/fonts/YekanBakh-Bold.ttf",
  variable: "--font-yekan-bold",
});
const YekanRegular = localFont({
  src: "../../public/fonts/YekanBakh-Regular.ttf",
  variable: "--font-yekan-regular",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${SanaRegular.variable} ${SanaMedium.variable} ${SanaBold.variable} ${SanaDemiBold.variable} ${YekanMedium.variable} ${YekanBold.variable} ${YekanRegular.variable}`}
    >
      <body>
        <header className="w-full flex items-center flex-col">
          <TopHeader />
          <Navbar />
        </header>

        <Breadcrumb />

        <main>
          {children}
          <GoUp />
        </main>

        <footer className="w-full">
          <Footer />
        </footer>

        <ToastContainer
          position="top-left"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Slide}
        />
      </body>
    </html>
  );
}
