import localFont from "next/font/local";
import Navbar from "@/components/modules/Header/navbar/Navbar";
import "../styles/globals.css";
import "../styles/custom-style.css";
import "../styles/slider.css";
import Footer from "@/components/modules/Footer/Footer";
import GoUp from "@/components/modules/MoveUp/GoUp";
import Breadcrumb from "@/components/modules/Breadcrumb/Breadcrumb";
import { Slide, ToastContainer } from "react-toastify";

import { fonts } from "@/styles/fonts";
import Newsletter from "@/components/templates/Newsletter/Newsletter";

export default function RootLayout({ children }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${fonts.join(" ")} transition-all duration-300`}
    >
      <body className="antialiased">
        <header className="fixed top-0 inset-x-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 z-50">
          <Navbar />
        </header>

        <main className="pt-16 pb-12 min-h-screen bg-gray-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-all duration-300">
          <Breadcrumb />
          {children}
          <GoUp />
        </main>

        <footer className="bg-white dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800 pt-16 pb-8">
          <Newsletter />

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
