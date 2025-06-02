import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-screen w-60 bg-[#4a7a4c] text-white flex flex-col items-center p-4">
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

        <ul className="w-full space-y-4 text-left">
          <li>
            <Link href="/farm" className="block hover:underline">
              Farm Analytics
            </Link>
          </li>
          <li>
            <Link href="/livestock" className="block hover:underline">
              Livestock
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="block bg-white text-[#4a7a4c] px-4 py-2 rounded font-semibold"
            >
              Dashboard
            </a>
          </li>
        </ul>

        <button className="mt-10 bg-white text-[#4a7a4c] px-4 py-2 rounded font-semibold">
          + Add Farm
        </button>
      </div>

      {/* Main Content */}
      <div className="ml-60 flex-1 bg-gray-100 min-h-screen p-6">
        <div className="bg-white rounded-lg p-6 shadow">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-green-800">
                Manage Livestock
              </h1>
              <p className="mt-2 text-sm text-gray-700">
                <strong>Farms:</strong>
                <br />
                <strong>Area:</strong>
                <br />
                <strong>Expected date of Harvest:</strong>
              </p>

              <div className="mt-4 relative">
                <Image
                  src="/farmland.png"
                  alt="Farmland"
                  width={400}
                  height={400}
                  className="rounded-lg"
                />
                <button className="absolute bottom-2 right-2 bg-red-600 text-white text-sm px-3 py-1 rounded shadow">
                  📍 Locate
                </button>
              </div>
            </div>

            <div className="ml-10 bg-white rounded-lg shadow p-4 w-[300px]">
              <h2 className="text-xl font-bold text-green-800 text-center">
                Crops Distribution
              </h2>

              <div className="my-4 text-center">
                <div className="relative w-24 h-24 mx-auto rounded-full">
                  {/* Renkli çember arka plan */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        "conic-gradient(#f87171 0% 40%, #3b82f6 40% 50%, #ef4444 50% 80%, #22c55e 80% 100%)",
                      padding: "4px",
                    }}
                  >
                 
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-sm font-bold text-black">
                      <div>
                        23 <br /> Acres
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 text-sm">
                <li className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-pink-400 rounded-full" />
                    Wheat
                  </span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                    Ready (40%)
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-blue-500 rounded-full" />
                    Corn
                  </span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
                    Not Ready (10%)
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-red-600 rounded-full" />
                    Barley
                  </span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                    Ready (30%)
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-green-400 rounded-full" />
                    Paddy
                  </span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                    Ready (20%)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
