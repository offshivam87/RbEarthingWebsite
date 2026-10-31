
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});


export const metadata = {
  metadataBase: new URL("https://rbearthing.com"),

  title: {
    default:
      "RB Earthing Company | Earthing Electrode Manufacturer & Supplier",
    template: "%s | RB Earthing Company",
  },

  description:
    "RB Earthing Company offers quality earthing electrodes, copper bonded rods, chemical earthing systems and lightning protection solutions for industrial and commercial applications across India.",

  openGraph: {
    title:
      "RB Earthing Company | Electrical Earthing Solutions",
    description:
      "Explore reliable earthing electrodes, chemical earthing and lightning protection products from RB Earthing Company.",
    url: "https://rbearthing.com",
    siteName: "RB Earthing Company",
    locale: "en_IN",
    type: "website",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
