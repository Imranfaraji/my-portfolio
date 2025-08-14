import React, { useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const contactInfo = [
  {
    id: 1,
    title: "Email",
    value: "imranfaraji880@gmail.com",
    link: "mailto:imranfaraji880@gmail.com",
    icon: (
      <svg
        className="w-6 h-6 text-red-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 12H8m8 0l-4 4m4-4l-4-4"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Phone",
    value: "+8801918513419",
    link: "tel:+8801918513419",
    icon: (
      <svg
        className="w-6 h-6 text-red-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5h2l3.6 7.59a1 1 0 00.9.41h7.5a1 1 0 00.9-.55l3.38-6.76a1 1 0 00-.9-1.45H5.21"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Location",
    value: "Bhola, Barisal",
    link: "https://maps.google.com/?q=Bhola,Barisal",
    icon: (
      <svg
        className="w-6 h-6 text-red-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 11a4 4 0 110-8 4 4 0 010 8z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21c-6-4.5-6-10 0-14"
        />
      </svg>
    ),
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks! Your message has been sent.");
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-[#1f2226] border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left: Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-gray-900 p-8 rounded-xl shadow-lg shadow-red-500/10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">Contact Me</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-gray-800 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-gray-800 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="bg-gray-800 text-white rounded-md px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          ></textarea>

          <button
            type="submit"
            className="bg-red-500 text-white font-semibold py-3 rounded-full hover:bg-red-600 shadow-md shadow-red-500/20 transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* Right: Contact Info */}
        <motion.div
          className="flex flex-col justify-center gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>

          {contactInfo.map(({ id, value, link, icon }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-gray-300 hover:text-red-500 transition-colors duration-300"
            >
              <span>{icon}</span>
              <span className="text-lg font-medium">{value}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
