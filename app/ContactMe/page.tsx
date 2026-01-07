"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message sent!\nName: ${form.name}\nPurpose: ${form.message}`);
    setForm({ name: '', message: '' });
  };

  return (
    <LazyMotion features={domAnimation}>
      <main className="min-h-screen bg-black text-gray-100 flex flex-col items-center justify-center px-6 py-24">
        <m.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-green-400 mb-6 text-center"
        >
          Contact Me
        </m.h1>

        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 text-center max-w-2xl mb-12"
        >
          Connect with me through social platforms or drop a message below. I am open to collaboration, project inquiries, and mentorship.
        </m.p>

        {/* Social Links */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-6 mb-12"
        >
          <a href="www.linkedin.com/in/oladimeji-balogun-ab730729b" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition">
            LinkedIn
          </a>
          <a href="https://x.com/balodim1?s=11" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition">
            X
          </a>
          <a href="https://wa.me/09065013817" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition">
            WhatsApp
          </a>
        </m.div>

        {/* Contact Form */}
        <m.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full max-w-xl flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="px-4 py-3 rounded-lg bg-black border border-green-400/40 text-gray-100 focus:outline-none focus:border-green-400"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Purpose / Message"
            required
            rows={5}
            className="px-4 py-3 rounded-lg bg-black border border-green-400/40 text-gray-100 focus:outline-none focus:border-green-400 resize-none"
          />

          <button type="submit" className="px-6 py-3 rounded-full bg-green-400 text-black font-medium hover:bg-green-300 transition">
            Send Message
          </button>
        </m.form>
      </main>
    </LazyMotion>
  );
}
