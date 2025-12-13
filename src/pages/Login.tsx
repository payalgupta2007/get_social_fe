import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex flex-row h-screen">
      <div className="w-1/2 flex bg-black text-white justify-center items-center">
        <div
          className="text-3xl font-bold"
          style={{
            fontFamily: "Italianno",
            fontWeight: 400,
            fontSize: 100,
            fontStyle: "normal",
          }}
        >
          Get Social
        </div>
      </div>
      <div className="w-1/2 flex-col bg-white flex justify-center items-center">
        <form className="w-3/4 max-w-sm p-2">
          <h2 className="text-2xl font-bold mb-10 text-center">Login</h2>
          <div>
            <label htmlFor="email" className="block mb-2 font-bold">
              Email ID
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email id"
              className="w-full px-2 py-2 border rounded-lg mb-4"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 font-bold">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-2 py-2 border rounded-lg mb-4"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg font-bold"
            >
              Login
            </button>
          </div>
          <p className="mt-4 text-center text-gray-600 font-thin">
            Don’t have an account?{" "}
            <Link to="/signup" className="hover:underline font-normal">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
