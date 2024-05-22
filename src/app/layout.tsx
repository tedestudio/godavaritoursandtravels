import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "Godavari Tours & Travels",
  description: "Top Travel Agency in Andhra Pradesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-white font-[Montserrat]'>{children}</body>
    </html>
  );
}
