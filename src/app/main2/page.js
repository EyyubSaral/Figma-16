import Link from "next/link";

export default function Main2() {
  return (
    <div className="flex">
      <img src="/crops.jpg" alt="crops" className="w-auto h-screen" />

      <div className="flex flex-col justify-center items-start p-8 space-y-4">
        <h1 className="text-4xl font-bold text-[#4a7a4c]">Sign Up</h1>

        <div className="flex flex-col space-y-2 w-full">
          <input
            type="text"
            placeholder="Full Name"
            className="border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="border p-2 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded"
          />
        </div>

        <div className="flex items-center space-x-2">
          <input type="checkbox" name="check" id="check" />
          <label htmlFor="check" className="text-sm">
            I agree Terms and Conditions & Private Policy by Signing in
          </label>
        </div>

        <Link href="/farm">
          <button className="text-white border bg-[#4a7a4c] px-4 py-2 rounded flex justify-center w-full mt-24">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}
