import React from "react";

const About = () => {
  return (
    <div className="text-white p-6  mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Our History</h2>
        <p className="mb-3">
          Founded in 2010, we began as a small startup with just 5 team members.
          Over the years, we've grown into a leading company with over 50
          employees serving clients worldwide.
        </p>
        <p>
          Our journey has been marked by continuous innovation and commitment to
          excellence.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>To deliver exceptional quality products and services</li>
          <li>To make technology accessible to everyone</li>
          <li>To foster innovation and creativity</li>
          <li>To build long-term relationships with our clients</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Our Team</h2>
        <p>
          We're proud of our diverse team of experts in development, design,
          marketing, and customer support who work together to deliver
          outstanding results.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Our Values</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Integrity</h3>
            <p>We believe in honesty and transparency in all our dealings.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Innovation</h3>
            <p>We constantly push boundaries to create better solutions.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Customer Focus</h3>
            <p>Our clients' success is our top priority.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Teamwork</h3>
            <p>We achieve more when we work together.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
