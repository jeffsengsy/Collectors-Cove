import type { Metadata } from "next";
import vendorsData from "@/data/vendors.json";

type Vendor = {
  id: number;
  name: string;
  specialty: string;
  bio: string;
  initials: string;
};

const vendors = vendorsData as Vendor[];

export const metadata: Metadata = {
  title: "Vendors — Collector's Cove",
  description:
    "Meet the independent vendors at Collector's Cove in Salisbury, NC. Specializing in Pokémon TCG, Sports Cards, Magic: The Gathering, Video Games, and more.",
};

export default function VendorsPage() {
  return (
    <div className="bg-[#0a0e1a] min-h-screen px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-[#22d3ee] text-sm font-semibold tracking-widest uppercase mb-2">
            Inside the Cove
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Our Vendors
          </h1>
          <p className="text-gray-400 text-lg max-w-xl">
            {vendors.length > 0
              ? `${vendors.length} independent sellers, each bringing their own specialty to the floor. Browse their booths in person at 322 S Main St.`
              : "Vendor profiles coming soon. Stop by 322 S Main St to meet everyone on the floor."}
          </p>
        </div>

        {vendors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vendors.map((vendor) => (
              <div
                key={vendor.id}
                className="bg-[#0d1220] border border-white/10 hover:border-[#22d3ee]/50 rounded-2xl p-6 transition-all hover:shadow-[0_0_24px_rgba(34,211,238,0.12)] group"
              >
                <div className="w-14 h-14 rounded-full bg-[#22d3ee]/15 border border-[#22d3ee]/30 flex items-center justify-center mb-4">
                  <span className="text-[#22d3ee] font-bold text-lg">
                    {vendor.initials}
                  </span>
                </div>
                <h2 className="text-white font-bold text-xl mb-1 group-hover:text-[#22d3ee] transition-colors">
                  {vendor.name}
                </h2>
                <span className="inline-block text-xs font-semibold text-[#22d3ee] bg-[#22d3ee]/10 border border-[#22d3ee]/20 px-2.5 py-0.5 rounded-full mb-3">
                  {vendor.specialty}
                </span>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {vendor.bio}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-[#0d1220] border border-dashed border-white/10 rounded-2xl p-6"
              >
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 mb-4" />
                <div className="h-5 bg-white/5 rounded w-2/3 mb-2" />
                <div className="h-4 bg-white/5 rounded w-1/3 mb-4" />
                <div className="space-y-2">
                  <div className="h-3 bg-white/5 rounded w-full" />
                  <div className="h-3 bg-white/5 rounded w-5/6" />
                  <div className="h-3 bg-white/5 rounded w-4/6" />
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 bg-[#0d1220] border border-[#22d3ee]/20 rounded-2xl p-8 text-center">
          <h3 className="text-white text-2xl font-bold mb-2">
            Interested in a Booth?
          </h3>
          <p className="text-gray-400 mb-6">
            We have vendor space available. Stop by the shop or reach out via
            Instagram to get started.
          </p>
          <a
            href="https://instagram.com/thecollectorscove"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[#22d3ee] text-[#22d3ee] font-bold px-8 py-3 rounded-full hover:bg-[#22d3ee]/10 transition-colors"
          >
            Contact Us on Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
