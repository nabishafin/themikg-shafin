import React, { useState } from "react";
import newPasswordImg from "../../assets/resetbanner.png";

export default function SetNewPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!newPassword || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Basic password strength validation (you can enhance this)
    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    // If all validations pass
    console.log("New Password:", newPassword);
    console.log("Confirm Password:", confirmPassword);
    setSuccess("Password has been reset successfully!");
    // Here you would typically send the new password to your backend
    // Example: await resetPasswordAPI(newPassword);
    // On success: navigate to login page
    // On failure: setError("Failed to reset password. Please try again.");

    // Clear form fields after successful submission (or redirect)
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-gray-900 rounded-lg overflow-hidden shadow-xl">
        {/* Left Image Section - Hidden on small screens */}
        <div className="hidden md:flex w-full md:w-1/2 bg-black justify-center items-center p-6">
          {/* Replace with your actual illustration image */}
          <img
            src={newPasswordImg}
            alt="Set new password illustration"
            className="max-w-full h-auto object-contain"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 bg-black p-8 flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-6 text-gray-100">
            <span className="mr-2">←</span> Set a new password
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="newPassword"
                className="block text-sm mb-2 text-gray-400"
              >
                New Password
              </label>
              <div className="relative">
                <input
                  type="password" // Use type="password" for masked input
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="********"
                  className={`w-full px-4 py-3 pr-10 rounded-md bg-gray-800 border ${
                    error && newPassword.length === 0
                      ? "border-red-500"
                      : "border-gray-700"
                  } text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {/* Optional: Add an eye icon here to toggle password visibility */}
                {/* <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </span> */}
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm mb-2 text-gray-400"
              >
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  type="password" // Use type="password" for masked input
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="********"
                  className={`w-full px-4 py-3 pr-10 rounded-md bg-gray-800 border ${
                    error && confirmPassword.length === 0
                      ? "border-red-500"
                      : "border-gray-700"
                  } text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {/* Optional: Add an eye icon here to toggle password visibility */}
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-sm mt-1 text-center md:text-left">
                {error}
              </p>
            )}
            {success && (
              <p className="text-green-500 text-sm mt-1 text-center md:text-left">
                {success}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-[#23769D]  py-3 rounded-md text-white font-semibold transition"
            >
              RESET PASSWORD
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
