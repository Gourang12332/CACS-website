"use client";
/**
 * Don't Touch this import
 * otherwise tailwind css won't work !!!!
 * */

import "./globals.css";
import { Jost, Gothic_A1 } from "next/font/google";

export const jost = Jost({ subsets: ["latin"] });
export const gothic_a1 = Gothic_A1({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={gothic_a1.className}>{children}</body>
    </html>
  );
}