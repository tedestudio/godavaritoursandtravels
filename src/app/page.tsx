"use client"

import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";

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
    window.open('https://wa.me/919390909394?text=Name:%20' + formData.name + '%0APhone:%20' + formData.phone + '%0AEmail:%20' + formData.email + '%0ADestination:%20' + formData.destination + '%0ADate:%20' + formData.date, '_blank');
  };
  return (
    <main>
      <body className="">
        <div id="home" className="min-h-screen flex flex-col items-center justify-center px-2 z-10 lg:px-12 py-32 lg:p-0">
          <div className="text-center">
            <h4 className="text-xs lg:text-lg text-white py-4 tracking-[12px]">WELCOME TO</h4>
            <h1 className="text-2xl lg:text-7xl text-white ">GODAVARI TOURS & TRAVELS</h1>
            <p className="text-xs lg:text-base font-thin text-white py-4 tracking-wide">Book your dream journey with Godavari Tours and Travels today and explore the world like never before. Discover breathtaking landscapes, vibrant cultures, and unforgettable adventures. Your perfect getaway starts here – don't wait, embark on your journey now!</p>
          </div>
          <form className="w-full lg:px-12 py-12" onSubmit={handleSubmit}>
            <div className="flex w-full justify-between py-4 flex-col lg:flex-row gap-2">
              <div className="flex flex-col w-full">
                <label htmlFor="name">Name</label>
                <input className="border-white active:border-white" type="text" id="name" name="name" value={formData.name} placeholder="Name" onChange={handleChange} required />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="destination">Destination</label>
                <input type="text" id="destination" name="destination" placeholder="Destination" value={formData.destination} onChange={handleChange} required />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="date">Date of Travel</label>
                <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
              </div>
            </div>
            <button className="py-6 w-full bg-[orange] rounded-lg tracking-[5px]" type="submit">SUBMIT</button>
          </form>
        </div>
        <div id="about" className="min-h-screen bg-white text-center place-content-center px-4 py-12">
          <div className="lg:flex items-end justify-evenly py-4 text-left">
            <Image className="rounded-lg shadow-2xl hover:shadow-lg duration-200 grayscale hover:grayscale-0" src="/about.jpeg" alt="about" width={600} height={300} />
            <div className="text-amber-950 flex flex-col gap-4 lg:gap-12 lg:w-2/5 leading-8">
              <div>
                <h2 className="text-base lg:text-lg">About Godavari Tours & Travels</h2>
                <h2 className="text-4xl">Few Words About Us</h2>
              </div>
              <p id="abouttext" className="text-base lg:text-lg text-justify text-gray-600">Godavari Tours and Travels is a well-known travel agency that operates from the Godavari district, Kakinada, Andhra Pradesh, India. We offer a variety of travel services, including Domestic & International tour packages, Transportation, Hotel Reservations, Visa, Cruise Bookings, and Travel Insurance to both domestic and international travelers.

                The agency likely organizes tours to popular destinations within India & Internationally. These tours might encompass cultural, historical, and natural attractions, providing travelers with an immersive experience of the region’s rich heritage and scenic beauty.

                In addition to tour packages, Godavari Tours and Travels may offer transportation services such as bus or car rentals for individuals or groups. They may also assist with booking accommodations, ensuring that travelers have a comfortable place to stay during their journey.</p>
            </div>
          </div>
        </div>
        <div id="memorable" className="text-white flex flex-col py-24 px-4">
          <h2 className="text-2xl lg:text-4xl py-4">Make Every Moment Memorable…</h2>
          <p className="text-xs lg:text-base">At Godavari Tours and Travels, we believe that every journey should be more than just a trip – it should be a collection of unforgettable moments. From the first step of your adventure to the last, we curate exceptional experiences that leave lasting impressions. Make every moment memorable with us.</p>
        </div>
        <div id="whychoose" className="text-white flex flex-col py-24 px-4">
          <h2 className="text-2xl lg:text-4xl py-4">Why Choose Godavari Tours and Travels</h2>
          <div className="flex flex-col lg:flex-row gap-4 py-4">
            <div className="text-center items-center justify-center flex flex-col p-12 bg-[orange] rounded-lg shadow-md w-full">
              <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed"><path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z" /></svg>
              <p className="text-lg py-2">More than 2500 clients</p>
            </div>
            <div className="text-center items-center justify-center flex flex-col p-12 bg-[orange] rounded-lg shadow-md w-full">
              <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed"><path d="m368-336 112-84 110 84-42-136 112-88H524l-44-136-44 136H300l110 88-42 136ZM480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z" /></svg>
              <p className="text-lg py-2">100% Trusted Agent</p>
            </div>
            <div className="text-center items-center justify-center flex flex-col p-12 bg-[orange] rounded-lg shadow-md w-full">
              <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed"><path d="m274-274-128-70 42-42 100 14 156-156-312-170 56-56 382 98 157-155q17-17 42.5-17t42.5 17q17 17 17 42.5T812-726L656-570l98 382-56 56-170-312-156 156 14 100-42 42-70-128Z" /></svg>
              <p className="text-lg py-2">10+ Years of Experience</p>
            </div>
            <div className="text-center items-center justify-center flex flex-col p-12 bg-[orange] rounded-lg shadow-md w-full">
              <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" /></svg>
              <p className="text-lg py-2">90% Happy Traveller</p>
            </div>
          </div>
        </div>
        <div id="packages" className="min-h-screen bg-white items-center justify-center flex flex-col px-4">
          <h2 className="text-zinc-950 text-4xl py-6">PACKAGES</h2>
          <p className="text-zinc-950 text-base tracking-[10px] pt-4">DOMESTIC PACKAGES</p>
          <div className="grid grid-flow-row grid-cols-2 lg:grid-cols-4 gap-3.5">
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200" src={'/kashmir.jpeg'} alt="" width={250} height={250}></Image>
              <h6 id="placetext" className="absolute text-zinc-950 font-semibold text-xl tracking-widest shadow-2xl duration-200">KASHMIR</h6>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200 " src={'/ladakh.jpeg'} alt="" width={250} height={250}></Image>
              <h6 id="placetext" className="absolute text-zinc-950 font-semibold text-xl tracking-widest shadow-2xl duration-200">LADAKH</h6>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200" src={'/shimla.jpeg'} alt="" width={250} height={250}></Image>
              <h6 id="placetext" className="absolute text-zinc-950 font-semibold text-xl tracking-widest shadow-2xl duration-200">SHIMLA &<br /> MANALI</h6>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200" src={'/gangtok.jpeg'} alt="" width={250} height={250}></Image>
              <h6 id="placetext" className="absolute text-zinc-950 font-semibold text-xl tracking-widest shadow-2xl duration-200">GANGTOK & <br />DARJEELING</h6>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200" src={'/meghalaya.jpeg'} alt="" width={250} height={250}></Image>
              <h6 id="placetext" className="absolute text-zinc-950 font-semibold text-xl tracking-widest shadow-2xl duration-200">MEGHALAYA</h6>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200" src={'/kerala.jpeg'} alt="" width={250} height={250}></Image>
              <h6 id="placetext" className="absolute text-zinc-950 font-semibold text-xl tracking-widest shadow-2xl duration-200">KERALA</h6>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200" src={'/ooty.jpeg'} alt="" width={250} height={250}></Image>
              <h6 id="placetext" className="absolute text-zinc-950 font-semibold text-xl tracking-widest shadow-2xl duration-200">OOTY&<br />KODAIKANAL</h6>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200" src={'/coorg.jpeg'} alt="" width={250} height={250}></Image>
              <h6 id="placetext" className="absolute text-zinc-950 font-semibold text-xl tracking-widest shadow-2xl duration-200">COORG</h6>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200" src={'/goa.jpeg'} alt="" width={250} height={250}></Image>
              <h6 id="placetext" className="absolute text-zinc-950 font-semibold text-xl tracking-widest shadow-2xl duration-200">GOA</h6>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200" src={'/araku.jpeg'} alt="" width={250} height={250}></Image>
              <h6 id="placetext" className="absolute text-zinc-950 font-semibold text-xl tracking-widest shadow-2xl duration-200">VIZAG&<br />ARAKU</h6>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200" src={'/hyderabad.jpeg'} alt="" width={250} height={250}></Image>
              <h6 id="placetext" className="absolute text-zinc-950 font-semibold text-xl tracking-widest shadow-2xl duration-200">HYDERABAD</h6>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200 min-h-[167px]" src={'/odish.jpeg'} alt="" width={250} height={250}></Image>
              <h6 id="placetext" className="absolute text-zinc-950 font-semibold text-xl tracking-widest shadow-2xl duration-200">ODISHA</h6>
            </div>
          </div>
          <p className="text-zinc-950 text-base tracking-[10px] pt-4">INTERNATIONAL PACKAGES</p>
          <div className="grid grid-flow-row grid-cols-2 lg:grid-cols-4 gap-3.5">
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200" src={'/thailand.jpeg'} alt="" width={250} height={250}></Image>
              <h6 id="placetext" className="absolute text-zinc-950 font-semibold text-xl tracking-widest shadow-2xl duration-200">THAILAND</h6>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200" src={'/singapore.jpeg'} alt="" width={250} height={250}></Image>
              <h6 id="placetext" className="absolute text-zinc-950 font-semibold text-xl tracking-widest shadow-2xl duration-200">SINGAPORE</h6>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200" src={'/malaysia.jpeg'} alt="" width={250} height={250}></Image>
              <h6 id="placetext" className="absolute text-zinc-950 font-semibold text-xl tracking-widest shadow-2xl duration-200">MALAYSIA</h6>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200" src={'/dubai.jpeg'} alt="" width={250} height={250}></Image>
              <h6 id="placetext" className="absolute text-zinc-950 font-semibold text-xl tracking-widest shadow-2xl duration-200">DUBAI</h6>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200" src={'/maldives.jpeg'} alt="" width={250} height={250}></Image>
              <h6 id="placetext" className="absolute text-zinc-950 font-semibold text-xl tracking-widest shadow-2xl duration-200">MALDIVES</h6>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200" src={'/bali.jpeg'} alt="" width={250} height={250}></Image>
              <h6 id="placetext" className="absolute text-zinc-950 font-semibold text-xl tracking-widest shadow-2xl duration-200">BALI</h6>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200" src={'/srilanka.jpeg'} alt="" width={250} height={250}></Image>
              <h6 id="placetext" className="absolute text-zinc-950 font-semibold text-xl tracking-widest shadow-2xl duration-200">SRILANKA</h6>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200 min-h-[167px]" src={'/vietnam.jpeg'} alt="" width={250} height={250}></Image>
              <h6 id="placetext" className="absolute text-zinc-950 font-semibold text-xl tracking-widest shadow-2xl duration-200">VIETNAM</h6>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200 min-h-[167px]" src={'/turkey.jpeg'} alt="" width={250} height={250}></Image>
              <h6 id="placetext" className="absolute text-zinc-950 font-semibold text-xl tracking-widest shadow-2xl duration-200">TURKEY</h6>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200 min-h-[167px] h-fit" src={'/europe.jpeg'} alt="" width={250} height={250}></Image>
              <h6 id="placetext" className="absolute text-zinc-950 font-semibold text-xl tracking-widest shadow-2xl duration-200">EUROPE</h6>
            </div><div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200 min-h-[167px]" src={'/egypt.jpeg'} alt="" width={250} height={250}></Image>
              <h6 id="placetext" className="absolute text-zinc-950 font-semibold text-xl tracking-widest shadow-2xl duration-200">EGYPT</h6>
            </div><div className="flex flex-col items-center justify-center py-12">
              <Image id="place" className="rounded-lg opacity-40 grayscale hover:grayscale-0 hover:opacity-100 duration-200" src={'/nepal.jpeg'} alt="" width={250} height={250}></Image>
              <h6 id="placetext" className="absolute text-zinc-950 font-semibold text-xl tracking-widest shadow-2xl duration-200">NEPAL</h6>
            </div>
          </div>
        </div>
        {/* Testimonials */}
        <a className="fixed right-4 bottom-4 opacity-90 hover:opacity-100 duration-200" href="https://wa.me/919390909394?text=Hi!" target="_blank"><Image src="/whatsapp.png" alt="footer" width={74} height={74} /></a>
      </body>
    </main>
  );
}
