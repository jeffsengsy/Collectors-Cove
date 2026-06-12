import type { Metadata } from "next";
import Image from "next/image";
import categories from "@/data/categories.json";

export const metadata: Metadata = {
  title: "Categories — Collector's Cove",
  description:
    "Browse all product categories at Collector's Cove: Pokémon TCG, One Piece TCG, Magic: The Gathering, Sports Cards, Video Games, Toys & Collectibles.",
};

const CATEGORY_LOGOS: Record<string, { src: string; whiteBg: boolean }> = {
  "pokemon-tcg":       { src: "/images/logos/pokemon-tcg.png",       whiteBg: true },
  "one-piece-tcg":     { src: "/images/logos/one-piece-tcg.png",     whiteBg: true },
  "magic-the-gathering":{ src: "/images/logos/magic-the-gathering.jpg", whiteBg: false },
  "lorcana":           { src: "/images/logos/lorcana.png",           whiteBg: true },
  "riftbound":         { src: "/images/logos/riftbound.png",         whiteBg: true },
};

const HEADING_FONT = "var(--font-russo), sans-serif";

export default function CategoriesPage() {
  return (
    <div className="bg-[#0a0e1a] min-h-screen px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-[#22d3ee] text-xs font-semibold tracking-[0.3em] uppercase mb-2">
            What We Carry
          </p>
          <h1
            className="text-4xl sm:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Categories
          </h1>
          <p className="text-gray-400 text-lg max-w-xl">
            From the latest TCG releases to retro video games and vintage
            collectibles — if it&apos;s part of the hobby, you&apos;ll find it here.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const logo = CATEGORY_LOGOS[cat.slug];
            return (
              <div
                key={cat.id}
                className="bg-[#0d1220] border border-white/10 hover:border-[#22d3ee]/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.12)] group"
              >
                {/* Logo or emoji fallback */}
                {logo ? (
                  <div
                    className={`relative h-14 w-44 mb-6 rounded-xl overflow-hidden shrink-0 ${
                      logo.whiteBg ? "bg-white p-2" : ""
                    }`}
                  >
                    <Image
                      src={logo.src}
                      fill
                      className="object-contain"
                      alt={`${cat.name} logo`}
                      sizes="176px"
                    />
                  </div>
                ) : (
                  <span className="text-5xl mb-6 block">{cat.emoji}</span>
                )}

                <h2
                  className="text-white font-bold text-xl mb-3 group-hover:text-[#22d3ee] transition-colors duration-200"
                  style={{ fontFamily: HEADING_FONT }}
                >
                  {cat.name}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {cat.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-[#0d1220] border border-[#22d3ee]/20 rounded-2xl p-8">
            <h3
              className="text-[#22d3ee] font-bold text-lg mb-2"
              style={{ fontFamily: HEADING_FONT }}
            >
              Buying Collections
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Looking to sell? Our vendors buy collections across all categories.
              Bring your cards, games, or figures in and get a same-day offer.
            </p>
          </div>
          <div className="bg-[#0d1220] border border-[#22d3ee]/20 rounded-2xl p-8">
            <h3
              className="text-[#22d3ee] font-bold text-lg mb-2"
              style={{ fontFamily: HEADING_FONT }}
            >
              Singles & Sealed
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Whether you need a single card to finish a deck or a full sealed
              case to crack open, our vendors have you covered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
