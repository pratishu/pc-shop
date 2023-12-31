import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
