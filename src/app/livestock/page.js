"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


export default function Livestock() {
  const [animals, setAnimals] = useState([
    {
      id: 1,
      name: "Goat",
      count: 5,
      img: "/ronaldo.jpg",
      color: "text-green-600",
    },
    {
      id: 2,
      name: "Cow",
      count: 2,
      img: "/cow.jpg",
      color: "text-green-600",
    },
  ]);

  const addCattle = () => {
    const newAnimal = {
      id: animals.length + 1,
      name: "sheep",
      count: 1,
      img: "/sheep.jpg",
      color: "text-green-600",
    };
    setAnimals([...animals, newAnimal]);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 p-10">
      {/* Sol Menü */}
      <nav className="fixed left-0 top-0 h-screen w-60 bg-[#4a7a4c] text-white p-6 flex flex-col justify-start">
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={80}
            height={80}
            className="rounded-full mb-2"
          />
          <div className="text-center">
            <p className="font-semibold">Namik Korona</p>
            <p className="text-sm">Farm Owner</p>
          </div>
        </div>
        <h2 className="text-3xl font-bold mb-6">Menu</h2>
        <ul className="space-y-4">
          <li>
            <Link href="/farm">
              <p className="block px-4 py-2 rounded text-white hover:bg-[#3a6339] transition">
                Farm Analytics
              </p>
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline bg-white text-[#4a7a4c] px-6 py-2 "
              aria-current="page"
            >
              Livestock
            </a>
          </li>
          <li>
            <Link href="/dashboard">
              <p className="hover:underline">Dashboard</p>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Sağ İçerik */}
      <main className="flex-1 ml-10 bg-white rounded shadow-md p-8">
        {/* İstatistikler */}
        <div className="flex justify-between bg-gray-100 p-6 rounded-lg shadow-md mb-8">
          <div>
            <p className="text-gray-500">Total Livestock</p>
            <p className="text-2xl font-bold text-[#4a7a4c]">
              {animals.reduce((acc, a) => acc + a.count, 0)}
            </p>
          </div>
          <div>
            <p className="text-gray-500">Area</p>
            <p className="text-2xl font-bold text-[#4a7a4c]">25 acres</p>
          </div>
        </div>

        {/* Hayvan Kartları */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          {animals.map((animal) => (
            <div
              key={animal.id}
              className="bg-white p-6 rounded-lg shadow flex flex-col items-center"
            >
              <img
                src={animal.img}
                alt={animal.name}
                className="w-24 h-24 object-cover rounded-md"
              />
              <p className="mt-4 text-xl font-bold text-[#4a7a4c]">
                {animal.name}
              </p>
              <p className={`${animal.color} font-semibold mt-1`}>
                +{animal.count}
              </p>
            </div>
          ))}
        </div>

        {/* Butonlar */}
        <div className="flex gap-6 justify-center">
          <button className="bg-[#4a7a4c] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#3a6339] transition">
            View Live
          </button>
          <button
            onClick={addCattle}
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-700 transition"
          >
            Add Cattle
          </button>
        </div>
      </main>
    </div>
  );
}
