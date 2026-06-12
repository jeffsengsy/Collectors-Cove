import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Collector's Cove",
  description:
    "Get in touch with Collector's Cove in Salisbury, NC. Vendor inquiries, event info, selling a collection, or general questions.",
};

const HEADING_FONT = "var(--font-russo), sans-serif";

export default function ContactPage() {
  return (
    <div className="bg-[#0a0e1a] min-h-screen px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-[#22d3ee] text-xs font-semibold tracking-[0.3em] uppercase mb-2">
            Reach Out
          </p>
          <h1
            className="text-4xl sm:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Contact Us
          </h1>
          <p className="text-gray-400 text-lg max-w-xl">
            Vendor inquiries, event info, selling a collection, or just a general question — we&apos;re here.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8">

          {/* Contact info */}
          <div className="space-y-4">
            <div className="bg-[#0d1220] border border-white/10 rounded-2xl p-6 space-y-5">
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Address</p>
                <p className="text-white font-medium text-sm">322 S Main St</p>
                <p className="text-white font-medium text-sm">Salisbury, NC 28144</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Phone</p>
                <a
                  href="tel:+18283868998"
                  className="text-white font-medium text-sm hover:text-[#22d3ee] transition-colors"
                >
                  (828) 386-8998
                </a>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Hours</p>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Tue – Sat</span>
                    <span className="text-white font-medium">12pm – 10pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-white font-medium">12pm – 6pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Monday</span>
                    <span className="text-red-400 font-medium">Closed</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Instagram</p>
                <a
                  href="https://instagram.com/thecollectorscove"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#22d3ee] hover:underline text-sm font-medium"
                >
                  @thecollectorscove
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div className="bg-[#0d1220] border border-[#22d3ee]/20 rounded-2xl p-6">
              <p className="text-[#22d3ee] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                Fastest response
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                For the quickest reply, DM us on Instagram. We monitor it daily and typically respond within a few hours.
              </p>
              <a
                href="https://instagram.com/thecollectorscove"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 bg-[#22d3ee] text-[#0a0e1a] font-bold px-5 py-2.5 rounded-full hover:bg-cyan-300 transition-colors text-sm cursor-pointer"
              >
                DM on Instagram
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#0d1220] border border-white/10 rounded-2xl p-8">
            <h2
              className="text-white font-bold text-xl mb-1"
              style={{ fontFamily: HEADING_FONT }}
            >
              Send a Message
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Fill out the form and we&apos;ll get back to you as soon as possible.
            </p>
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
}
