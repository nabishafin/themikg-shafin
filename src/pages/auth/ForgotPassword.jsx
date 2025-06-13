import React, { useState } from "react";
import forgotImg from "../../assets/Forgot.png";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
    } else {
      setError("");
      console.log("GET OTP sent to:", email);
      // OTP send logic goes here
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row w-full max-w-4xl rounded-lg overflow-hidden shadow-lg items-center">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 bg-black flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-gray-700">
          <img
            src={forgotImg}
            alt="Forgot Password"
            className="max-h-96 object-contain"
          />
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 bg-black p-8">
          <h2 className="text-2xl font-semibold mb-6">Forgot Your Password?</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm mb-2">
                Enter your email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className={`w-full px-4 py-3 rounded-md bg-gray-800 border ${
                  error ? "border-red-500" : "border-gray-700"
                } text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-[#23769D] hover:bg-[#23769dc9] py-3 rounded-md text-white font-semibold transition"
            >
              GET OTP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
