import Link from "next/link";

export default function Main() {
  return (
    <div className="flex">
      <img
        src="/field1.jpg"
        alt="Field Workers"
        className="w-[1000px] h-screen"
      />
      <div className="flex flex-col justify-center items-start p-8 space-y-4">
        <h1 className="text-4xl font-bold text-[#4a7a4c]">Sign In</h1>

        <div className="flex flex-col space-y-2 w-full">
          <input
            type="text"
            placeholder="Username"
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

        <div className="flex space-x-4">
          <Link href="/farm">
            <button className="bg-green-600 text-white px-4 py-2 rounded">
              Log In
            </button>
          </Link>

          <Link href="/main2">
            <button className="text-[#4a7a4c] border border-[#4a7a4c] px-4 py-2 rounded">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
