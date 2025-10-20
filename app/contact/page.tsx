"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccess("Failed to send message. Try again.");
      }
    } catch (err) {
      console.error(err);
      setSuccess("An error occurred. Try again.");
    }

    setLoading(false);
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center py-20 px-5 md:px-20 text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1116] via-[#121420] to-[#0f1116] z-[-2]" />

      {/* Animated background circles */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl z-[-1]"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-cyan-500/20 rounded-full filter blur-3xl z-[-1]"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: 2 }}
        className="absolute top-2/3 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl z-[-1]"
      />

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-6xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500"
      >
        Contact Us
      </motion.h1>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl w-full max-w-md flex flex-col gap-5 shadow-2xl border border-gray-700"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="p-3 rounded-lg bg-gray-700/60 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="p-3 rounded-lg bg-gray-700/60 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="p-3 rounded-lg bg-gray-700/60 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
        />

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(8,145,178,0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 rounded-full transition-all"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>
        {success && <p className="text-center mt-2 text-green-500">{success}</p>}
      </motion.form>
    </main>
  );
}
