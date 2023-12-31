import type { Metadata } from "next";
import "./globals.css";

import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google";
import { Inter } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});
const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});
export const metadata: Metadata = {
  title: "pcshop",
  description: "A PC shop made with Next which sells computers parts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={` bg-background text-text flex flex-col min-h-screen relative ${inter.className} ${poppins.variable} ${roboto.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
