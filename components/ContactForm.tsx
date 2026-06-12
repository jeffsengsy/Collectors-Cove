"use client";

export default function ContactForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300 mb-1.5"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            className="w-full bg-[#0a0e1a] border border-white/15 focus:border-[#22d3ee] rounded-lg px-4 py-2.5 text-white placeholder-gray-600 outline-none transition-colors text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-1.5"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="w-full bg-[#0a0e1a] border border-white/15 focus:border-[#22d3ee] rounded-lg px-4 py-2.5 text-white placeholder-gray-600 outline-none transition-colors text-sm"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-300 mb-1.5"
        >
          Subject
        </label>
        <select
          id="subject"
          className="w-full bg-[#0a0e1a] border border-white/15 focus:border-[#22d3ee] rounded-lg px-4 py-2.5 text-white outline-none transition-colors text-sm"
        >
          <option value="">Select a topic...</option>
          <option value="vendor">Vendor Inquiry</option>
          <option value="event">Event Information</option>
          <option value="buying">Selling a Collection</option>
          <option value="general">General Question</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-300 mb-1.5"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="What's on your mind?"
          className="w-full bg-[#0a0e1a] border border-white/15 focus:border-[#22d3ee] rounded-lg px-4 py-2.5 text-white placeholder-gray-600 outline-none transition-colors text-sm resize-none"
        />
      </div>

      <button
        type="submit"
        className="bg-[#22d3ee] text-[#0a0e1a] font-bold px-8 py-3 rounded-full hover:bg-cyan-300 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
