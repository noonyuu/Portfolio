import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className="">
      <body className="" >{children}</body>
    </html>
  );
}

