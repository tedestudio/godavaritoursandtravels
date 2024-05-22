"use client"

import Image from "next/image";
import { Montserrat, Playfair_Display } from "next/font/google";
import { ChangeEvent, FormEvent, useState } from "react";
import { Gallery } from "react-grid-gallery";

export default function Home() {
  const images = [
    {
      src: "about.jpeg",
      width: 4,
      height: 3,
    },
    {
      src: "araku.jpeg",
      width: 6,
      height: 3,
    }, {
      src: "bali.jpeg",
      width: 3,
      height: 3,
    }, {
      src: "coorg.jpeg",
      width: 5,
      height: 3,
    }, {
      src: "dubai.jpeg",
      width: 4,
      height: 3,
    }, {
      src: "gangtok.jpeg",
      width: 4,
      height: 3,
    }, {
      src: "goa.jpeg",
      width: 6,
      height: 3,
    }, {
      src: "hyderabad.jpeg",
      width: 6,
      height: 3,
    }, {
      src: "kashmir.jpeg",
      width: 3,
      height: 3,
    }, {
      src: "kerala.jpeg",
      width: 6,
      height: 3,
    }, {
      src: "ladakh.jpeg",
      width: 5,
      height: 3,
    }, {
      src: "araku.jpeg",
      width: 4,
      height: 3,
    }, {
      src: "malaysia.jpeg",
      width: 4,
      height: 3,
    }, {
      src: "maldives.jpeg",
      width: 5,
      height: 3,
    }, {
      src: "meghalaya.jpeg",
      width: 6,
      height: 3,
    }, {
      src: "memorable.jpeg",
      width: 5,
      height: 3,
    }, {
      src: "ooty.jpeg",
      width: 7,
      height: 3,
    }, {
      src: "shimla.jpeg",
      width: 4,
      height: 3,
    }, {
      src: "singapore.jpeg",
      width: 5,
      height: 3,
    }, {
      src: "srilanka.jpeg",
      width: 4,
      height: 3,
    }, {
      src: "thailand.jpeg",
      width: 5,
      height: 3,
    }, {
      src: "turkey.jpeg",
      width: 5.5,
      height: 3,
    }, {
      src: "vietnam.jpeg",
      width: 6,
      height: 3,
    },
    {
      src: 'https://e0.pxfuel.com/wallpapers/898/938/desktop-wallpaper-travel-tours-and-travels-background-travel-and-tourism.jpg',
      width: 7,
      height: 4,
    }

  ];
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
    e.preventDefault();
    const res = await fetch('/api/mailer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  };
  return (
    <main>
      <body className="font-['Montserrat']">
        <header className="flex fixed items-center justify-between h-[5.5em] bg-[#ffffff64] backdrop-blur-sm z-[10] top-0 left-0 right-0 p-8">
          <Image src="/logo.png" alt="logo" width={300} height={100} />
          <div>
            <ul className="flex space-x-12">
              <a className="text-black" href="#home"><li>Home</li></a>
              <a className="text-black" href="#about"><li>About Us</li></a>
              <a className="text-black" href="#packages"><li>Packages</li></a>
              <a className="text-black" href="#gallery"><li>Gallery</li></a>

            </ul>
          </div>
        </header>
        <div id="home" className="h-screen grid grid-cols-2 items-center place-items-center px-12">
          <div>
            <h1 className="text-7xl text-white font-['Playfair_Display']">GODAVARI<br /> TOURS & TRAVELS</h1>
            <h1 className="text-lg text-white py-4">Creating Memories, One Step At A Time</h1>
          </div>
          <form className="w-2/4" onSubmit={handleSubmit}>
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
        <div id="about" className="h-screen bg-white flex flex-col items-center justify-center">
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
        <div id="packages" className="min-h-screen bg-white items-center justify-center flex flex-col">
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
        <div id="gallery" className="min-h-screen p-[64px]">
          <h2 className="text-white text-center text-4xl py-6">GALLERY</h2>
          <Gallery enableImageSelection={false} images={images} />
        </div>
        <div className="py-12 bg-black flex flex-col items-center justify-center">
          <Image src="/thankyou.png" alt="footer" width={250} height={300} />
          <p className="py-4">thanking all our customers,</p>
          <p className="text-2xl">A Happy, Safe, and Memorable Journey</p>
        </div>
        <a className="fixed right-4 bottom-4 animate-spin opacity-90 hover:opacity-100 duration-200" href="https://wa.me/919390909394" target="_blank"><Image src="/whatsapp.png" alt="footer" width={74} height={74} /></a>
        <footer className="w-full bg-white text-center flex flex-col justify-between">
          <div className="flex items-center justify-evenly">
            <Image className="p-4" src="/logo.png" alt="logo" width={250} height={100} />
            <a href="mailto:godavaritravelsindia@gmail.com" className="text-black">godavaritravelsindia@gmail.com</a>
          </div>
          <p className="text-black text-sm py-4">© 2024 Godavari Tours & Travels. </p>
        </footer>
      </body>
    </main>
  );
}
