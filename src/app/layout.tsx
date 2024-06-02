import type { Metadata } from "next";
import { DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const font = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});
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
      <Link href={"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"}></Link>
      <header className="flex fixed items-center justify-between h-[5.5em] bg-white z-[10] top-0 left-0 right-0 p-8 shadow-lg">
        <Image src="/logo.png" alt="logo" width={300} height={100} />
        <div className="hidden lg:block">
          <ul className="flex space-x-12">
            <a className="text-black" href="/#home"><li>Home</li></a>
            <a className="text-black" href="/#about"><li>About Us</li></a>
            <a className="text-black" href="/#packages"><li>Packages</li></a>
            <a className="text-black" href="/#gallery"><li>Gallery</li></a>

          </ul>
        </div>
      </header>
      <body className={font.className}>{children}</body>
      <footer className="w-full bg-white text-black text-center flex flex-col px-12 py-4">
        <div className="flex flex-col lg:flex-row items-start justify-evenly gap-12">
          <div className="w-full text-left">
            <Image src={"/logo.png"} alt={""} width={300} height={0}></Image>
            <p className="py-4 text-sm">Godavari Tours & Travels, is a renowned destination management company with a SHA+ certification.</p>
          </div>
          <div className="w-full text-left">
            <h1 className="text-lg py-4">Product Categories</h1>
            <ul className="flex flex-col gap-2">
              <li><a href="/#home">Home</a></li>
              <li><a href="/#about">About</a></li>
              <li><a href="/#packages">Packages</a></li>
              <li><a href="/#gallery">Gallery</a></li>
            </ul>
          </div>
          <div className="w-full text-left">
            <h1 className="text-lg py-4">Legals</h1>
            <ul className="flex flex-col gap-2">
              <li><a href="/terms">Terms & Conditions</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="w-full text-left">
            <h1 className="text-lg py-4">Contact Details</h1>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-2 items-start"><Image src={"/address.svg"} alt={""} width={24} height={0}></Image> <a href="https://maps.google.com/maps?ll=16.994026,82.250619&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=13714170174522801401"> Door No 3-231,Gangaraju Nagar,Valasapakala,Near Sub-registrar office,Ramanayyapeta, Kakinada,Andhrapradesh-533005</a></li>
              <li className="flex gap-2 items-start"><Image src={"/phone.svg"} alt={""} width={24} height={0}></Image> <a href="https://wa.me/919390909394?text=Hi!">+91 93909 09394</a></li>
              <li className="flex gap-2 items-start"><Image src={"/email.svg"} alt={""} width={24} height={0}></Image> <a href="mailto:godavaritravelsindia@gmail.com">godavaritravelsindia@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <p className="text-black text-sm py-4">© 2024 Godavari Tours & Travels. </p>
      </footer>
    </html>
  );
}