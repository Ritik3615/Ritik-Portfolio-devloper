import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted (connect backend/email service here)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-8 py-16"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE CONTENT */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-blue-400">
            Let’s Connect
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Open to backend-focused full stack opportunities, collaborations,
            and challenging engineering problems.  
            If you’re looking for someone who builds structured,
            production-ready systems — let’s talk.
          </p>

          <p className="text-gray-400">
            Share your project details, hiring requirements, or feedback —
            I’ll respond as soon as possible.
          </p>

          <div className="pt-4 space-y-3 text-gray-300">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-blue-400" />
              ritik.kumar.codes@gmail.com
            </p>

            <p className="flex items-center gap-3">
              <FaPhone className="text-blue-400" />
              +91 7338495036
            </p>

            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-400" />
              Bengaluru, Karnataka
            </p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 space-y-6"
        >
          <div>
            <label className="block text-sm mb-2 text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}