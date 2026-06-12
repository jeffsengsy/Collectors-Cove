import type { Metadata } from "next";
import Image from "next/image";
import vendorsData from "@/data/vendors.json";

type Vendor = {
  id: number;
  name: string;
  slug: string;
  logo?: string;
  specialty: string;
  bio: string;
  tags: string[];
};

const vendors = vendorsData as Vendor[];

const HEADING_FONT = "var(--font-russo), sans-serif";

export const metadata: Metadata = {
  title: "Vendors — Collector's Cove",
  description:
    "Meet the independent vendors at Collector's Cove in Salisbury, NC. Specializing in Pokémon TCG, Sports Cards, Magic: The Gathering, Video Games, and more.",
};

export default function VendorsPage() {
  return (
    <div className="bg-[#0a0e1a] min-h-screen px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-[#22d3ee] text-xs font-semibold tracking-[0.3em] uppercase mb-2">
            Inside the Cove
          </p>
          <h1
            className="text-4xl sm:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Meet the Vendors
          </h1>
          <p className="text-gray-400 text-lg max-w-xl">
            {vendors.length} independent seller{vendors.length !== 1 ? "s" : ""}, each bringing their own specialty to the floor.
            Stop by 322 S Main St to browse their booths in person.
          </p>
        </div>

        {/* Vendor grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {vendors.map((vendor) => (
            <div
              key={vendor.id}
              className="bg-[#0d1220] border border-white/10 hover:border-[#22d3ee]/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.12)] group flex flex-col"
            >
              {/* Logo */}
              {vendor.logo ? (
                <div className="w-24 h-24 rounded-full overflow-hidden mb-5 shrink-0 ring-2 ring-white/10 group-hover:ring-[#22d3ee]/30 transition-all duration-300">
                  <Image
                    src={vendor.logo}
                    width={96}
                    height={96}
                    alt={`${vendor.name} logo`}
                    className="object-cover w-full h-full"
                  />
                </div>
              ) : (
                <div className="w-24 h-24 rounded-full bg-[#22d3ee]/10 border border-[#22d3ee]/20 flex items-center justify-center mb-5 shrink-0">
                  <span className="text-[#22d3ee] font-bold text-2xl" style={{ fontFamily: HEADING_FONT }}>
                    {vendor.name.charAt(0)}
                  </span>
                </div>
              )}

              {/* Name + specialty */}
              <h2
                className="text-white font-bold text-xl mb-1 group-hover:text-[#22d3ee] transition-colors duration-200"
                style={{ fontFamily: HEADING_FONT }}
              >
                {vendor.name}
              </h2>
              <span className="inline-block text-xs font-semibold text-[#22d3ee] bg-[#22d3ee]/10 border border-[#22d3ee]/20 px-2.5 py-0.5 rounded-full mb-3 w-fit">
                {vendor.specialty}
              </span>

              {/* Bio */}
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                {vendor.bio}
              </p>

              {/* Tags */}
              {vendor.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
                  {vendor.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-500 bg-white/5 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* "More coming soon" placeholder cards */}
          {[...Array(Math.max(0, 3 - vendors.length))].map((_, i) => (
            <div
              key={`placeholder-${i}`}
              className="bg-[#0d1220] border border-dashed border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3"
            >
              <div className="w-24 h-24 rounded-full bg-white/5 border border-dashed border-white/10" />
              <p className="text-gray-600 text-sm">More vendors coming soon</p>
            </div>
          ))}
        </div>

        {/* Booth CTA */}
        <div className="bg-[#0d1220] border border-[#22d3ee]/20 rounded-2xl p-8 sm:p-12 text-center">
          <p className="text-[#22d3ee] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Rent a Booth
          </p>
          <h3
            className="text-white text-2xl sm:text-3xl font-bold mb-3"
            style={{ fontFamily: HEADING_FONT }}
          >
            Interested in a Vendor Space?
          </h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            We have vendor space available inside a 20,000 sq ft marketplace.
            Stop by or reach out via Instagram to get started.
          </p>
          <a
            href="https://instagram.com/thecollectorscove"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#22d3ee] text-[#0a0e1a] font-bold px-8 py-3.5 rounded-full hover:bg-cyan-300 transition-colors duration-200 cursor-pointer"
          >
            Contact Us on Instagram
          </a>
        </div>

      </div>
    </div>
  );
}
