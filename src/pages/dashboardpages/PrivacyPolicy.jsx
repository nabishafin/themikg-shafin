import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className=" bg-[#222222] ">
      {/* Header */}
      <div className="bg-slate-400 px-6 py-4">
        <h1 className="text-2xl font-bold text-black">Privecy Policy</h1>
      </div>

      {/* Main Content */}
      <div className="px-6 py-3 text-white relative">
        <div className="max-w-4xl">
          {/* Introduction */}
          <div className="">
            <h2 className="text-lg font-semibold mb-3">1. Introduction</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Welcome to [Your Website/App Name] ("we," "our," or "us"). Your
              privacy is important to us. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your personal information
              when you use our website [Your Website URL] and related services.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="">
            <h2 className="text-lg font-semibold mb-3">
              2. Information We Collect
            </h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              We may collect the following types of information:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span>
                  Personal Information: Name, email address, phone number,
                  payment details, etc.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span>
                  Account Information: Username, password, profile details, etc.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span>
                  Usage Data: IP address, browser type, pages visited, time
                  spent on pages, etc.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span>
                  Cookies & Tracking Technologies: We use cookies to enhance
                  user experience and track interactions.
                </span>
              </li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div className="">
            <h2 className="text-lg font-semibold mb-3">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              We may use the collected information to:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span>Provide and improve our services.</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span>Process transactions and payments.</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span>
                  Communicate with you regarding support, promotions, or
                  updates.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span>Personalize user experience.</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span>Ensure security and prevent fraud.</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span>Comply with legal obligations.</span>
              </li>
            </ul>
          </div>

          {/* Sharing & Disclosure */}
          <div className="">
            <h2 className="text-lg font-semibold mb-3">
              4. Sharing & Disclosure of Information
            </h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              We do not sell your personal data. However, we may share
              information with:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span>
                  Service Providers: Third-party vendors for payment processing,
                  hosting, analytics, etc.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span>
                  Legal Authorities: If required by law or to protect our
                  rights.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Edit Profile Button */}
        <Link
          to={"/dashboard/settings/editprivacy"}
          className="fixed bottom-20 right-6"
        >
          <button className="bg-[#23769D]  text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            Edit Privacy Policy
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
