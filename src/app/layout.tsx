import type { Metadata } from "next";
import { Inter, DM_Sans, Jost } from "next/font/google";
import "./globals.css";
import { ToastContainer, Bounce } from "react-toastify";
import "@/styles/index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomTheme from "./theme-settings/customTheme";
import ScrollToTop from "./theme-settings/scrolToTop";
// import Footer from "@/components/Footer/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Dm_Sans = DM_Sans({
  subsets: ["latin"],
  display: "auto",
  weight: ["300", "400", "500", "600", "700"],
});

const jost = Jost({
  subsets: ["latin"],
  display: "auto",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PM Higher Education",
  description: "largest course listing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="keywords"
          content="	courses, jamb, postjamb, university, lagos, abuja, undergraduate, oau, ui, zaria, unilorin, "
        />
        <meta
          name="description"
          content="Edupedia - Undergraduate course listing NextJS Template"
        />
        <meta name="pmengineering" content="PME" />

        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={Dm_Sans.className}>
        <div className="relative">
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            // pauseOnHover
            theme="colored"
            transition={Bounce}
          />
          <CustomTheme />
          {children}
          {/* <Footer /> */}
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
