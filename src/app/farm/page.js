"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaSeedling } from "react-icons/fa";
import { GiFarmTractor } from "react-icons/gi";


export default function Farm() {
  const [corps, setCorps] = useState(false);

  const addCorps = (
    <div className="fixed top-20 left-64 bg-white p-6 rounded shadow-md w-[800px] h-[400px] z-50 flex flex-col ">
      <button
        className="absolute top-4 left-4 bg-white text-[#4a7a4c] border-4 border-[#4a7a4c] px-3 py-1 rounded h-9"
        onClick={() => setCorps(false)}
      >
        Back
      </button>
      <div className="flex flex-col gap-3 justify-center items-center h-full">
        <h1 className="text-[#4a7a4c] font-bold text-4xl">Crop Details</h1>
        <div className="flex flex-col gap-4 w-full max-w-md">
          <input
            type="text"
            placeholder="Crop Name"
            className="border-2 border-[#4a7a4c] rounded px-3 py-2"
          />
          <input
            type="text"
            placeholder="Soil Type"
            className="border-2 border-[#4a7a4c] rounded px-3 py-2"
          />
          <input
            type="text"
            placeholder="Add Image"
            className="border-2 border-[#4a7a4c] w-[120px] rounded px-3 py-2"
          />
        </div>
        <button className="bg-[#4a7a4c] text-white font-extrabold rounded px-4 py-1 mt-6">
          Submit
        </button>
      </div>
    </div>
  );

  return (
    <div>
      {corps && addCorps}

      <div className="fixed left-0 top-0 h-screen w-60 bg-[#4a7a4c] text-white p-4 flex flex-col justify-between">
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
        <div>
          <h2 className="text-2xl font-bold mb-6">Menu</h2>
          <ul className="space-y-4 ">
            <li>
              <a
                href="#"
                className="hover:underline bg-white text-[#4a7a4c] px-6 py-2 "
              >
                Farm Analytics
              </a>
            </li>
            <li>
              <Link href="/livestock">Livestock</Link>
            </li>
            <li>
              <Link href="/dashboard">
                <p href="#" className="hover:underline">
                  Dashboard
                </p>
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <button className="bg-white text-[#4a7a4c] w-full py-2 rounded font-bold">
            + Add Farm
          </button>
        </div>
      </div>

      <div className="ml-60 p-6">
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <h1 className="text-xl font-bold text-[#2e7d32]">Farm 1</h1>
          <button
            className="bg-[#2e7d32] text-white px-4 py-1 rounded"
            onClick={() => setCorps((prev) => !prev)}
          >
            + Add Crop
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="bg-white shadow p-3 rounded">
            <p className="font-semibold">Nitrogen:</p>
            <p className="text-xl font-bold">20%</p>
            <span className="text-green-600 text-sm font-semibold">Good</span>
          </div>
          <div className="bg-white shadow p-3 rounded">
            <p className="font-semibold">Phosphorus:</p>
            <p className="text-xl font-bold">8%</p>
            <span className="text-green-600 text-sm font-semibold">Good</span>
          </div>
          <div className="bg-white shadow p-3 rounded">
            <p className="font-semibold">Potassium:</p>
            <p className="text-xl font-bold">13%</p>
            <span className="text-green-600 text-sm font-semibold">Good</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 items-start mb-4">
          <div className="space-y-3">
            <div className="bg-white shadow p-3 rounded">
              <p className="font-semibold">Humidity:</p>
              <p className="text-xl font-bold">15%</p>
              <span className="text-green-600 text-sm font-semibold">Good</span>
            </div>
            <div className="bg-white shadow p-3 rounded">
              <p className="font-semibold">Soil Hydration:</p>
              <p className="text-xl font-bold">40%</p>
              <span className="text-red-600 text-sm font-semibold">High</span>
            </div>
            <div className="bg-white shadow p-3 rounded">
              <p className="font-semibold">PH Value:</p>
              <p className="text-xl font-bold">4</p>
              <span className="text-yellow-600 text-sm font-semibold">Low</span>
            </div>
          </div>

          <div className="relative">
            <img
              src="/Rectangle20.png"
              alt="crop field"
              className="rounded-xl w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
              <button className="bg-white rounded-full p-1 shadow">
                {"<"}
              </button>
              <button className="bg-white rounded-full p-1 shadow">
                {">"}
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mb-4">
          <div className="flex items-center gap-2 border border-green-600 rounded-full px-4 py-1">
            <FaSeedling className="text-green-600" />
            <span>
              <strong>Crop:</strong> Wheat
            </span>
          </div>
          <div className="flex items-center gap-2 border border-green-600 rounded-full px-4 py-1">
            <GiFarmTractor className="text-green-600" />
            <span>
              <strong>Area:</strong> 25 Acres
            </span>
          </div>
        </div>

        <div className="border border-green-600 text-center py-2 rounded font-semibold text-green-800">
          Efficacy Rating
        </div>
      </div>
    </div>
  );
}
