"use client"

import Image from "next/image";
import { Montserrat, Playfair_Display } from "next/font/google";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: '',
    date: '',
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  };
  return (
    <main>
      <body className="font-['Montserrat']">
        <header className="flex items-center justify-between h-[5.5em] bg-[#ffffff64] backdrop-blur-sm absolute z-[10] top-0 left-0 right-0 p-8">
          <Image src="/logo.png" alt="logo" width={300} height={100} />
          <div>
            <ul className="flex space-x-12">
              <li className="text-white">Home</li>
              <li className="text-white">About Us</li>
              <li className="text-white">Services</li>
              <li className="text-white">Contact Us</li>
            </ul>
          </div>
        </header>
        <div id="home" className="h-screen grid grid-cols-2 items-center justify-center px-12">
          <div>
            <h1 className="text-4xl text-white font-['Playfair_Display']">GODAVARI TOURS & TRAVELS</h1>
            <h1 className="text-lg text-white py-4">Creating Memories, One Step At A Time</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col py-4">
              <label htmlFor="name">Name:</label>
              <input className="bg-transparent border-white active:border-white" type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="flex flex-col py-4">
              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="flex flex-col py-4">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="flex flex-col py-4">
              <label htmlFor="destination">Destination:</label>
              <input type="text" id="destination" name="destination" value={formData.destination} onChange={handleChange} required />
            </div>
            <div className="flex flex-col py-4">
              <label htmlFor="date">Date of Travel:</label>
              <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
            </div>
            <button className="py-6 w-full bg-[orange] rounded-lg" type="submit">Submit</button>
          </form>
        </div>
        <div className="h-screen bg-white flex flex-col items-center justify-center">
          <h2 className="text-black text-4xl">ABOUT US</h2>
          <p className="text-black py-4">Our Tradition Of Best Hospitality</p>
          <div className="flex items-center justify-evenly py-12">
            <Image className="rounded-lg shadow-2xl hover:shadow-lg duration-200 grayscale hover:grayscale-0" src="/about.jpeg" alt="about" width={600} height={300} />
            <p className="text-black w-2/5 leading-8">Godavari Tours and Travels is a well-known travel agency that operates from the Godavari district, Kakinada, Andhra Pradesh, India. We offer a variety of travel services, including Domestic & International tour packages, Transportation, Hotel Reservations, Visa, Cruise Bookings, and Travel Insurance to both domestic and international travelers.

              The agency likely organizes tours to popular destinations within India & Internationally. These tours might encompass cultural, historical, and natural attractions, providing travelers with an immersive experience of the region’s rich heritage and scenic beauty.

              In addition to tour packages, Godavari Tours and Travels may offer transportation services such as bus or car rentals for individuals or groups. They may also assist with booking accommodations, ensuring that travelers have a comfortable place to stay during their journey.</p>
          </div>
        </div>
        <div id="memorable" className="text-white flex flex-col py-24">
          <h2 className="text-4xl py-4">Make Every Moment Memorable…</h2>
          <p>At Godavari Tours and Travels, we believe that every journey should be more than just a trip – it should be a collection of unforgettable moments. From the first step of your adventure to the last, we curate exceptional experiences that leave lasting impressions. Make every moment memorable with us.</p>
        </div>
        <div className="min-h-screen bg-white items-center justify-center flex flex-col">
          <h2 className="text-black text-4xl py-6">PACKAGES</h2>
          <h3 className="text-black text-lg">Domestic Packages</h3>
          <div className="grid grid-flow-row grid-cols-4 gap-3.5">
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200 hover:w-64" src={'/kashmir.jpeg'} alt="" width={250} height={250}></Image>
              <p id="placetext" className="absolute text-black font-semibold text-xl tracking-widest shadow-2xl duration-200">KASHMIR</p>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200 hover:w-64 " src={'/ladakh.jpeg'} alt="" width={250} height={250}></Image>
              <p id="placetext" className="absolute text-black font-semibold text-xl tracking-widest shadow-2xl duration-200">LADAKH</p>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200 hover:w-64" src={'/shimla.jpeg'} alt="" width={250} height={250}></Image>
              <p id="placetext" className="absolute text-black font-semibold text-xl tracking-widest shadow-2xl duration-200">SHIMLA & MANALI</p>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200 hover:w-64" src={'/gangtok.jpeg'} alt="" width={250} height={250}></Image>
              <p id="placetext" className="absolute text-black font-semibold text-xl tracking-widest shadow-2xl duration-200">GANGTOK & <br />DARJEELING</p>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200 hover:w-64" src={'/meghalaya.jpeg'} alt="" width={250} height={250}></Image>
              <p id="placetext" className="absolute text-black font-semibold text-xl tracking-widest shadow-2xl duration-200">MEGHALAYA</p>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200 hover:w-64" src={'/kerala.jpeg'} alt="" width={250} height={250}></Image>
              <p id="placetext" className="absolute text-black font-semibold text-xl tracking-widest shadow-2xl duration-200">KERALA</p>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200 hover:w-64" src={'/ooty.jpeg'} alt="" width={250} height={250}></Image>
              <p id="placetext" className="absolute text-black font-semibold text-xl tracking-widest shadow-2xl duration-200">OOTY&<br />KODAIKANAL</p>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200 hover:w-64" src={'/coorg.jpeg'} alt="" width={250} height={250}></Image>
              <p id="placetext" className="absolute text-black font-semibold text-xl tracking-widest shadow-2xl duration-200">COORG</p>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200 hover:w-64" src={'/goa.jpeg'} alt="" width={250} height={250}></Image>
              <p id="placetext" className="absolute text-black font-semibold text-xl tracking-widest shadow-2xl duration-200">GOA</p>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200 hover:w-64" src={'/araku.jpeg'} alt="" width={250} height={250}></Image>
              <p id="placetext" className="absolute text-black font-semibold text-xl tracking-widest shadow-2xl duration-200">VIZAG&<br />ARAKU</p>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200 hover:w-64" src={'/hyderabad.jpeg'} alt="" width={250} height={250}></Image>
              <p id="placetext" className="absolute text-black font-semibold text-xl tracking-widest shadow-2xl duration-200">HYDERABAD</p>
            </div>
          </div>
          <h3 className="text-black text-lg">International Packages</h3>
          <div className="grid grid-flow-row grid-cols-4 gap-3.5">
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200 hover:w-64" src={'/thailand.jpeg'} alt="" width={250} height={250}></Image>
              <p id="placetext" className="absolute text-black font-semibold text-xl tracking-widest shadow-2xl duration-200">THAILAND</p>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200 hover:w-64" src={'/singapore.jpeg'} alt="" width={250} height={250}></Image>
              <p id="placetext" className="absolute text-black font-semibold text-xl tracking-widest shadow-2xl duration-200">SINGAPORE</p>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200 hover:w-64" src={'/malaysia.jpeg'} alt="" width={250} height={250}></Image>
              <p id="placetext" className="absolute text-black font-semibold text-xl tracking-widest shadow-2xl duration-200">MALAYSIA</p>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200 hover:w-64" src={'/dubai.jpeg'} alt="" width={250} height={250}></Image>
              <p id="placetext" className="absolute text-black font-semibold text-xl tracking-widest shadow-2xl duration-200">DUBAI</p>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200 hover:w-64" src={'/maldives.jpeg'} alt="" width={250} height={250}></Image>
              <p id="placetext" className="absolute text-black font-semibold text-xl tracking-widest shadow-2xl duration-200">MALDIVES</p>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200 hover:w-64" src={'/bali.jpeg'} alt="" width={250} height={250}></Image>
              <p id="placetext" className="absolute text-black font-semibold text-xl tracking-widest shadow-2xl duration-200">BALI</p>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200 hover:w-64" src={'/srilanka.jpeg'} alt="" width={250} height={250}></Image>
              <p id="placetext" className="absolute text-black font-semibold text-xl tracking-widest shadow-2xl duration-200">SRILANKA</p>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200 hover:w-64" src={'/vietnam.jpeg'} alt="" width={250} height={250}></Image>
              <p id="placetext" className="absolute text-black font-semibold text-xl tracking-widest shadow-2xl duration-200">VIETNAM</p>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200 hover:w-64" src={'/turkey.jpeg'} alt="" width={250} height={250}></Image>
              <p id="placetext" className="absolute text-black font-semibold text-xl tracking-widest shadow-2xl duration-200">TURKEY</p>
            </div>
          </div>
        </div>
        <div className="py-12 bg-black flex items-center justify-center">
          <Image src="/thankyou.png" alt="footer" width={250} height={300} />
          <p></p>
        </div>
      </body>
    </main>
  );
}
