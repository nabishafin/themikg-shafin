import React, { useState, useRef } from "react";
import verificationImg from "../../assets/verificationimg.png"; // Assuming you'll use a similar illustration or replace it

export default function VerifyCode() {
  // State to hold the 6-digit verification code
  const [code, setCode] = useState(new Array(6).fill(""));
  const [error, setError] = useState("");
  const inputRefs = useRef([]); // To manage focus on input fields

  // Handle input changes for each digit
  const handleChange = (element, index) => {
    // Only allow numbers
    if (isNaN(element.value)) return;

    // Update the code array
    const newCode = [...code];
    newCode[index] = element.value;
    setCode(newCode);

    // Move to next input if a digit is entered and it's not the last input
    if (element.value !== "" && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Handle paste event (e.g., pasting a 6-digit code)
  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").trim();
    if (pasteData.length === 6 && /^\d+$/.test(pasteData)) {
      const newCode = pasteData.split("");
      setCode(newCode);
      // Optionally move focus to the last input after paste
      inputRefs.current[5].focus();
      setError(""); // Clear any previous errors
    } else {
      setError("Please paste a valid 6-digit number.");
    }
  };

  // Handle keydown for navigation (backspace, arrow keys)
  const handleKeyDown = (e, index) => {
    // Backspace: move to previous input and clear current if empty
    if (e.key === "Backspace" && index > 0 && code[index] === "") {
      inputRefs.current[index - 1].focus();
    }
    // Optional: Arrow keys for navigation
    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
    if (e.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredCode = code.join("");

    if (enteredCode.length !== 6 || isNaN(enteredCode)) {
      setError("Please enter a valid 6-digit code.");
    } else {
      setError("");
      console.log("Verification Code:", enteredCode);
      // Here you would typically send the code to your backend for verification
      // Example: await verifyCodeAPI(enteredCode);
      // On success: redirect to new password page or dashboard
      // On failure: setError("Invalid code. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl rounded-lg overflow-hidden shadow-xl">
        {/* Left Image Section - Hidden on small screens */}
        <div className="hidden md:flex w-full md:w-1/2 bg-black justify-center items-center p-6">
          {/* Replace with your actual illustration image */}
          <img
            src={verificationImg}
            alt="Verification illustration"
            className="max-w-full h-auto object-contain"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 bg-black p-8 flex flex-col justify-center border-l ">
          <h2 className="text-xl font-semibold mb-6 text-gray-100">
            <span className="mr-2">←</span> Enter verification code
          </h2>

          <p className="text-gray-400 mb-6 text-sm">
            Please check your email. We have sent a code to your email!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div
              className="flex justify-center md:justify-start gap-3 mb-6"
              onPaste={handlePaste} // Add paste handler to the container
            >
              {code.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e.target, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (inputRefs.current[index] = el)} // Store ref for focus
                  className="w-12 h-12 text-center text-2xl font-bold bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                />
              ))}
            </div>

            {error && (
              <p className="text-red-500 text-sm mt-1 text-center md:text-left">
                {error}
              </p>
            )}

            <div className="flex justify-between items-center text-sm text-gray-400">
              <span>Didn't receive code?</span>
              <button
                type="button"
                className="text-[#23769D] hover:text-blue-300 font-medium"
                onClick={() => console.log("Resend code clicked")} // Implement resend logic
              >
                Resend
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-[#23769D]  py-3 rounded-md text-white font-semibold transition"
            >
              VERIFY
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
