"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/mqeogewg", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            required
            className="w-full bg-[#0a0e1a] border border-white/15 focus:border-[#22d3ee] rounded-lg px-4 py-2.5 text-white placeholder-gray-600 outline-none transition-colors text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            className="w-full bg-[#0a0e1a] border border-white/15 focus:border-[#22d3ee] rounded-lg px-4 py-2.5 text-white placeholder-gray-600 outline-none transition-colors text-sm"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1.5">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full bg-[#0a0e1a] border border-white/15 focus:border-[#22d3ee] rounded-lg px-4 py-2.5 text-white outline-none transition-colors text-sm"
        >
          <option value="">Select a topic...</option>
          <option value="Vendor Inquiry">Vendor Inquiry</option>
          <option value="Event Information">Event Information</option>
          <option value="Selling a Collection">Selling a Collection</option>
          <option value="General Question">General Question</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="What's on your mind?"
          required
          className="w-full bg-[#0a0e1a] border border-white/15 focus:border-[#22d3ee] rounded-lg px-4 py-2.5 text-white placeholder-gray-600 outline-none transition-colors text-sm resize-none"
        />
      </div>

      {status === "success" && (
        <p className="text-green-400 text-sm font-medium">
          Message sent! We&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm font-medium">
          Something went wrong. Please try again or DM us on Instagram.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-[#22d3ee] text-[#0a0e1a] font-bold px-8 py-3 rounded-full hover:bg-cyan-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
