import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

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
      <Link href={"https://fonts.googleapis.com"} prefetch={true}></Link>
      <Link href={"https://fonts.gstatic.com"} prefetch={true}></Link>
      <Link href={"https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"} prefetch={true}></Link>
      <meta name="title" content="Godavari Tours & Travels" />
      <meta name="description" content="Top Travel Agency in Andhra Pradesh, established in East Godavari as Godavari Tours & Travels." />
      <meta name="keywords" content="Travel, Travels, Tour, Tours, Godavari, Vacation, Trips, Planning, Travel Agency, Agency, Bus, Flights, Holidays, Destinations, Sightseeing, Adventure, Itinerary, Booking, Reservations, Travel Packages, Deals, Discounts, Family Travel, Solo Travel, Group Travel, Honeymoon, Beach, Mountain, Cultural Tours, Eco Tours, Luxury Travel, Budget Travel, Road Trips, City Tours, Wildlife Tours, Historical Tours, Cruise, Accommodation, Hotels, Resorts, Travel Guide, Transportation, Travel Tips, Travel Deals" />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="1 days" />

      <header className="fixed top-0 left-0 right-0">
        <div className="w-full bg-[orange] py-2 flex justify-between items-center px-6 text-xs lg:text-base">
          <a className="hover:text-black" href="mailto:godavaritravelsindia@gmail.com"><div className="flex"><img className="w-3 h-3 lg:w-5 lg:h-5" src="/email-icon.png" alt="" /><p className="px-2">godavaritravelsindia@gmail.com</p></div></a>
          <a className="hover:text-black" href="https://wa.me/919390909394?text=Hi!"><div className="flex"><img className="w-3 h-3 lg:w-5 lg:h-5" src="/phone.png" alt="" /><p className="px-2">+91 93909 09394</p></div></a>
        </div>
        <div className="flex items-center justify-between h-[5.5em] bg-white z-[10] p-8 shadow-lg">
          <Image src="/logo.png" alt="logo" width={300} height={100} />
          <div className="hidden lg:block">
            <ul className="flex space-x-12">
              <a className="text-black" href="/#home"><li>Home</li></a>
              <a className="text-black" href="/#about"><li>About Us</li></a>
              <a className="text-black" href="/#packages"><li>Packages</li></a>
              <a className="text-black" href="/#testimonials"><li>Testimonials</li></a>
            </ul>
          </div>
          <a href="https://wa.me/919390909394?text=Hi!"><button className="bg-[#ffa600d7] hover:bg-[orange] hidden lg:block duration-300 px-4 py-2 rounded-md text-amber-950">GET IN TOUCH</button></a>
        </div>
      </header>
      <body className=''>{children}</body>
      <footer className="w-full bg-white text-black text-center flex flex-col px-12 py-4">
        <div className="flex flex-col lg:flex-row items-start justify-evenly gap-12">
          <div className="h-full w-full text-left flex flex-col gap-4">
            <Image src={"/logo.png"} alt={""} width={350} height={0}></Image>
            <div className="grid grid-flow-row grid-cols-2 items-center justify-center gap-12">
              <Image src={"/irctc.png"} alt={""} width={200} height={0}></Image>
              <Image src={"/ttaa.png"} alt={""} width={200} height={0}></Image>
              <Image src={"/toat.png"} alt={""} width={200} height={0}></Image>
              <Image src={"/connectindia.png"} alt={""} width={200} height={0}></Image>
            </div>
          </div>
          <div className="text-left lg:px-12 lg:w-1/2 w-full flex items-start justify-evenly lg:block">
            <div className="">
              <h1 className="text-xl py-2">Links</h1>
              <ul className="flex flex-col gap-1 text-gray-800">
                <li><a href="/#home">Home</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#packages">Packages</a></li>
                <li><a href="/#testimonials">Testimonials</a></li>
              </ul>
            </div>
            <div className="py-2">
              <h1 className="text-xl py-1">Legals</h1>
              <ul className="flex flex-col gap-2 text-gray-800">
                <li><a href="/">Terms & Conditions</a></li>
                <li><a href="/">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="w-full flex flex-col gap-6">
            <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.603839691745!2d82.2506185!3d16.9940261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3829a9bc670c59%3A0xbe52851ce9b03cf9!2sGODAVARI%20TOURS%20AND%20TRAVELS!5e0!3m2!1sen!2sin!4v1718730888338!5m2!1sen!2sin" width="400" height="300" loading="lazy"></iframe>
            <Image src={"/msme.png"} alt={""} width={200} height={0}></Image>
          </div>
          <div className="w-full text-left">
            <h1 className="text-xl pb-4">Contact Details</h1>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-2 items-start"><Image src={"/address.svg"} alt={""} width={24} height={0}></Image> <a href="https://maps.google.com/maps?ll=16.994026,82.250619&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=13714170174522801401"> Door No 3-231,Gangaraju Nagar,Valasapakala,Near Sub-registrar office,Ramanayyapeta, Kakinada,Andhrapradesh-533005</a></li>
              <li className="flex gap-2 items-start"><Image src={"/phone.svg"} alt={""} width={24} height={0}></Image> <a href="https://wa.me/919390909394?text=Hi!">+91 93909 09394</a></li>
              <li className="flex gap-2 items-start"><Image src={"/email.svg"} alt={""} width={24} height={0}></Image> <a href="mailto:godavaritravelsindia@gmail.com">godavaritravelsindia@gmail.com</a></li>
            </ul>
            <div className="flex gap-4 pt-6">
              <a href="https://www.instagram.com/godavaritoursandtravels?igsh=eTY3Y2pha3Z6ZDJz"><Image src={"/instagram.png"} alt={""} width={24} height={24}></Image></a>
              <a href="https://www.facebook.com/Godavaritoursandtravels?mibextid=LQQJ4d"><Image src={"/facebook.png"} alt={""} width={24} height={24}></Image></a>
              <a href="https://www.linkedin.com/company/godavaritoursandtravels"><Image src={"/linkedin.png"} alt={""} width={24} height={24}></Image></a>
            </div>
          </div>
        </div>
        <p className="text-black text-sm py-4">© 2024 Godavari Tours & Travels. </p>
      </footer>
    </html>
  );
}