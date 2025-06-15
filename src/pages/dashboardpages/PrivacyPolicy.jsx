import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="text-white p-6  mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
      <p className="mb-6">Last Updated: {new Date().toLocaleDateString()}</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
        <p className="mb-3">
          We are committed to protecting your privacy. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information
          when you use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          2. Information We Collect
        </h2>
        <p className="mb-2">
          We may collect the following types of information:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-3">
          <li>Personal Information (name, email, contact details)</li>
          <li>Usage Data (how you interact with our services)</li>
          <li>Technical Data (IP address, browser type, device information)</li>
          <li>Cookies and similar tracking technologies</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          7. Changes to This Policy
        </h2>
        <p>
          We may update our Privacy Policy periodically. We will notify you of
          any changes by posting the new policy on this page.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at:
          <br />
          <a
            href="mailto:privacy@example.com"
            className="text-blue-400 hover:underline"
          >
            privacy@example.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
