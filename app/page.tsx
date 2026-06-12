import Link from "next/link";
import Image from "next/image";
import reviews from "@/data/reviews.json";
import PhotoCarousel from "@/components/PhotoCarousel";

const CATEGORY_LOGOS: Record<string, { src: string; whiteBg: boolean }> = {
  "pokemon-tcg":        { src: "/images/logos/pokemon-tcg.png",        whiteBg: true },
  "one-piece-tcg":      { src: "/images/logos/one-piece-tcg.png",      whiteBg: true },
  "magic-the-gathering":{ src: "/images/logos/magic-the-gathering.jpg", whiteBg: false },
  "lorcana":            { src: "/images/logos/lorcana.png",            whiteBg: true },
  "riftbound":          { src: "/images/logos/riftbound.png",          whiteBg: true },
};

function CategoryVisual({ slug, name }: { slug: string; name: string }) {
  const logo = CATEGORY_LOGOS[slug];
  if (logo) {
    return (
      <div
        className={`relative h-11 w-36 mb-4 rounded-xl overflow-hidden shrink-0 ${
          logo.whiteBg ? "bg-white p-1.5" : ""
        }`}
      >
        <Image
          src={logo.src}
          fill
          className="object-contain"
          alt={`${name} logo`}
          sizes="144px"
        />
      </div>
    );
  }
  return (
    <div className="w-10 h-10 text-[#22d3ee] mb-4 transition-all duration-200 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.75)]">
      <CategoryIcon slug={slug} />
    </div>
  );
}

function CategoryIcon({ slug }: { slug: string }) {
  const cls = "w-full h-full";
  const shared = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    className: cls,
  };

  if (slug === "pokemon-tcg") {
    return (
      <svg {...shared}>
        <path d="M13 2L3 14h7l-3 8 14-12h-7l3-8z" />
      </svg>
    );
  }
  if (slug === "one-piece-tcg") {
    return (
      <svg {...shared}>
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v13" />
        <path d="M5 11h14" />
        <path d="M4 17c2.5 2.5 5 3.5 8 3.5s5.5-1 8-3.5" />
      </svg>
    );
  }
  if (slug === "magic-the-gathering") {
    return (
      <svg {...shared}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    );
  }
  if (slug === "sports-cards") {
    return (
      <svg {...shared}>
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
      </svg>
    );
  }
  if (slug === "video-games") {
    return (
      <svg {...shared}>
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <line x1="6" y1="12" x2="10" y2="12" />
        <line x1="8" y1="10" x2="8" y2="14" />
        <circle cx="15" cy="13" r="0.75" fill="currentColor" stroke="none" />
        <circle cx="18" cy="11" r="0.75" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (slug === "toys-collectibles") {
    return (
      <svg {...shared}>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.29 7 12 12 20.71 7" />
        <line x1="12" y1="22" x2="12" y2="12" />
      </svg>
    );
  }
  return (
    <svg {...shared}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 12h6M12 9v6" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function formatDate(dateStr: string) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

const eventBadge: Record<string, string> = {
  Tournament:      "bg-[#7c3aed]/20 text-purple-300 border border-purple-500/30",
  "Casual Play":   "bg-[#22d3ee]/10 text-cyan-300 border border-cyan-500/30",
  "Giveaway Event":"bg-rose-500/10 text-rose-300 border border-rose-500/30",
  "Weekly Locals": "bg-[#22d3ee]/10 text-cyan-300 border border-cyan-500/30",
  "Card Show":     "bg-[#EAB308]/10 text-yellow-400 border border-yellow-400/30",
};

const HEADING_FONT = "var(--font-russo), sans-serif";

export default function Home() {
  return (
    <div className="bg-[#0a0e1a] overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] sm:min-h-[92vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center overflow-hidden">
        {/* Mural — backgroundImage inline so Next.js always resolves the public path;
             .hero-mural-bg handles responsive size/position via globals.css */}
        <div
          className="absolute inset-0 hero-mural-bg"
          style={{ backgroundImage: 'url("/images/store/mural.webp")' }}
        />
        {/* Semi-transparent dark overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: "rgba(10, 14, 26, 0.70)" }}
        />
        {/* Gradient — bottom fades to solid so the page flows cleanly */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,14,26,0.2) 0%, transparent 30%, rgba(10,14,26,0.5) 70%, #0a0e1a 100%)",
          }}
        />
        {/* Cyan glow orb */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[420px] pointer-events-none animate-float-glow"
          style={{
            background:
              "radial-gradient(ellipse, rgba(34,211,238,0.10) 0%, transparent 70%)",
          }}
        />

        {/* All text/CTA content above the background layers */}
        <div className="relative z-10">
          <p className="text-[#22d3ee] text-xs font-semibold tracking-[0.3em] uppercase mb-6 opacity-75">
            Salisbury, NC — 322 S Main St
          </p>

          <h1
            className="text-5xl sm:text-8xl lg:text-[9rem] font-extrabold tracking-tight leading-none text-white mb-2"
            style={{ fontFamily: HEADING_FONT, textShadow: "0 0 80px rgba(34,211,238,0.18)" }}
          >
            Collector&apos;s
          </h1>
          <h1
            className="text-5xl sm:text-8xl lg:text-[9rem] font-extrabold tracking-tight leading-none mb-8 sm:mb-10"
            style={{
              fontFamily: HEADING_FONT,
              color: "#22d3ee",
              textShadow:
                "0 0 30px rgba(34,211,238,0.7), 0 0 70px rgba(34,211,238,0.35), 0 0 120px rgba(34,211,238,0.15)",
            }}
          >
            Cove
          </h1>

          <p className="text-gray-300 text-xl sm:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Your destination for trading cards, collectibles,
            video games, and more — all under one roof.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/categories"
              className="inline-flex items-center justify-center gap-2 bg-[#22d3ee] text-[#0a0e1a] font-bold px-8 py-3.5 rounded-full hover:bg-cyan-300 transition-colors duration-200 cursor-pointer"
            >
              Browse Categories
            </Link>
            <a
              href="https://instagram.com/thecollectorscove"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-[#22d3ee] text-[#22d3ee] font-bold px-8 py-3.5 rounded-full hover:bg-[#22d3ee]/10 transition-colors duration-200 cursor-pointer"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
              Follow on Instagram
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-500 select-none z-10"
          aria-hidden="true"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
          <svg
            width="14"
            height="20"
            viewBox="0 0 14 20"
            fill="none"
            className="animate-scroll-bounce"
          >
            <path
              d="M7 0v16M1 10l6 6 6-6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { value: "100+", label: "Vendors", sub: "Independent sellers" },
            { value: "Weekly", label: "Giveaways", sub: "Every Friday on Instagram" },
            { value: "Monthly", label: "Card Shows", sub: "End of every month" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-[#0d1220] border border-[#22d3ee]/20 hover:border-[#22d3ee]/50 rounded-2xl p-6 text-center transition-colors duration-200"
            >
              <p
                className="text-[#22d3ee] text-4xl font-extrabold mb-0.5"
                style={{
                  fontFamily: HEADING_FONT,
                  textShadow: "0 0 18px rgba(34,211,238,0.45)",
                }}
              >
                {s.value}
              </p>
              <p className="text-white font-semibold text-sm">{s.label}</p>
              <p className="text-gray-600 text-xs mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── STORE GALLERY ── */}
      <PhotoCarousel />

      {/* ── RECURRING EVENTS ── */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto space-y-6">

          {/* Last Saturday — Card Show (large, featured) */}
          <div
            className="relative overflow-hidden rounded-3xl"
            style={{ border: "1px solid rgba(234,179,8,0.35)" }}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(234,179,8,0.07) 0%, transparent 70%)" }}
            />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Photos */}
              <div className="grid grid-cols-2 gap-2 p-4 lg:p-6">
                <div className="relative col-span-2 aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/store/goodie-bags.jpg"
                    fill
                    className="object-cover"
                    alt="Rows of goodie bags set up for the monthly card show at Collector's Cove"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/images/store/golden-ticket.jpg"
                    fill
                    className="object-cover object-center"
                    alt="Golden Ticket grand prize — past winners have won a Nintendo Switch 2"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div
                  className="relative aspect-square rounded-2xl overflow-hidden bg-[#0d1220] flex flex-col items-center justify-center gap-2 p-4 text-center"
                  style={{ border: "1px solid rgba(234,179,8,0.25)" }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#EAB308" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 12V22H4V12" /><path d="M22 7H2v5h20V7z" /><path d="M12 22V7" />
                    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                  </svg>
                  <p className="text-yellow-400 font-bold text-sm leading-tight">Free<br />Goodie Bag</p>
                  <p className="text-gray-500 text-xs">Every attendee</p>
                </div>
              </div>

              {/* Copy */}
              <div className="flex flex-col justify-center px-6 pb-8 pt-2 lg:py-10 lg:pr-10">
                <span
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase mb-5 w-fit px-3 py-1.5 rounded-full"
                  style={{ color: "#EAB308", background: "rgba(234,179,8,0.12)", border: "1px solid rgba(234,179,8,0.3)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                  End of Every Month
                </span>

                <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-2 leading-none" style={{ fontFamily: HEADING_FONT }}>
                  Monthly
                </h2>
                <h2
                  className="text-4xl sm:text-5xl font-extrabold mb-6 leading-none"
                  style={{ fontFamily: HEADING_FONT, color: "#EAB308", textShadow: "0 0 30px rgba(234,179,8,0.5), 0 0 60px rgba(234,179,8,0.25)" }}
                >
                  Card Show
                </h2>

                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Our biggest event of the month — a full card show where collectors and vendors pack the floor. The{" "}
                  <span className="text-yellow-400 font-semibold">first 400 attendees</span> get a free goodie bag, with{" "}
                  <span className="text-yellow-400 font-semibold">40 Golden Tickets</span> hidden inside.
                </p>

                <ul className="space-y-4 mb-8">
                  {[
                    {
                      gold: false,
                      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>,
                      title: "Free entry — open to everyone",
                      sub: "Buy, sell, and trade with collectors from all over",
                    },
                    {
                      gold: false,
                      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 12V22H4V12"/><path d="M22 7H2v5h20V7z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>,
                      title: "400 free goodie bags — first 400 attendees",
                      sub: "Packed with cards, promos, and surprises. Get there early.",
                    },
                    {
                      gold: true,
                      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
                      title: "40 Golden Tickets hidden in random bags",
                      sub: "Each one wins a grand prize — past winners have taken home a Nintendo Switch 2",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className={`mt-0.5 shrink-0 ${item.gold ? "text-yellow-400" : "text-[#22d3ee]"}`}>{item.icon}</span>
                      <div>
                        <p className={`font-semibold text-sm ${item.gold ? "text-yellow-400" : "text-white"}`}>{item.title}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{item.sub}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 bg-[#EAB308] hover:bg-[#FCD34D] text-[#0a0e1a] font-bold px-8 py-3.5 rounded-full transition-colors duration-200 cursor-pointer w-fit"
                >
                  See Upcoming Shows <ArrowRight />
                </Link>
              </div>
            </div>
          </div>

          {/* Every Friday — Instagram Giveaway */}
          <div
            className="relative overflow-hidden rounded-3xl bg-[#0d1220]"
            style={{ border: "1px solid rgba(34,211,238,0.2)" }}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 60% 80% at 0% 50%, rgba(34,211,238,0.05) 0%, transparent 70%)" }}
            />
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] items-center gap-6 p-6 sm:p-8">

              {/* Prize photo */}
              <div className="relative w-full sm:w-36 h-48 sm:h-36 rounded-2xl overflow-hidden shrink-0">
                <Image
                  src="/images/store/friday-giveaway.jpg"
                  fill
                  className="object-cover object-top"
                  alt="Example Friday giveaway prize — gold Mega Charizard X ex card"
                  sizes="(max-width: 640px) 100vw, 144px"
                />
              </div>

              {/* Copy + rules */}
              <div>
                <span
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase mb-3 px-3 py-1.5 rounded-full"
                  style={{ color: "#22d3ee", background: "rgba(34,211,238,0.08)", border: "1px solid rgba(34,211,238,0.25)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] animate-pulse" />
                  Every Friday — Instagram Giveaway
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2" style={{ fontFamily: HEADING_FONT }}>
                  Weekly Giveaway
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Every Friday we give away something from the store to one lucky follower. Winner drawn the following Friday.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  {[
                    "Must be following @thecollectorscove",
                    "Tag two friends in the comments",
                    "Repost the giveaway post",
                    "Share to your story & tag us",
                  ].map((rule) => (
                    <li key={rule} className="flex items-start gap-2 text-xs text-gray-400">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="shrink-0">
                <a
                  href="https://instagram.com/thecollectorscove"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[#22d3ee] text-[#22d3ee] font-bold px-6 py-3 rounded-full hover:bg-[#22d3ee]/10 transition-colors duration-200 cursor-pointer whitespace-nowrap"
                >
                  Enter on Instagram <ArrowRight />
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#22d3ee] text-xs font-semibold tracking-[0.3em] uppercase mb-2">
            What collectors are saying
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <h2
              className="text-3xl sm:text-4xl font-bold text-white"
              style={{ fontFamily: HEADING_FONT }}
            >
              Google Reviews
            </h2>
            <div className="flex items-center gap-3 shrink-0">
              {/* Star cluster */}
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="#facc15"
                    aria-hidden="true"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <span className="text-white font-bold text-lg">4.9</span>
              <span className="text-gray-500 text-sm">on Google</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-[#0d1220] border border-white/10 hover:border-[#22d3ee]/30 rounded-2xl p-6 flex flex-col transition-colors duration-200"
              >
                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <svg
                      key={i}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="#facc15"
                      aria-hidden="true"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-5 flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Reviewer */}
                <div className="mt-5 pt-4 border-t border-white/5">
                  <p className="text-white font-semibold text-sm">{review.name}</p>
                  {review.badge && (
                    <p className="text-gray-600 text-xs mt-0.5">{review.badge}</p>
                  )}
                  <p className="text-gray-700 text-xs mt-0.5">{review.timeAgo}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://www.google.com/search?q=collectors+cove#lrd=0x8853f30f20920ef9:0x5aa28f50242e5ef7,1,,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#22d3ee]/40 text-[#22d3ee] text-sm font-semibold px-6 py-3 rounded-full hover:border-[#22d3ee] hover:bg-[#22d3ee]/10 transition-colors duration-200 cursor-pointer"
            >
              Read More on Google <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* ── VENDORS CALLOUT ── */}
      <section className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#0d1220] to-[#060d1a] border border-[#22d3ee]/30 rounded-3xl p-8 sm:p-12">
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 w-64 h-64 -translate-y-1/4 translate-x-1/4 rounded-full blur-3xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)",
              }}
            />
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div>
                <p className="text-[#22d3ee] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
                  Multi-vendor marketplace
                </p>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-white mb-2"
                  style={{ fontFamily: HEADING_FONT }}
                >
                  100+ Independent Vendors
                </h2>
                <p className="text-gray-400 max-w-lg">
                  Every vendor brings their own expertise and inventory.
                  One building, endless finds — buy, sell, or trade.
                </p>
              </div>
              <Link
                href="/vendors"
                className="shrink-0 bg-[#22d3ee] text-[#0a0e1a] font-bold px-8 py-3.5 rounded-full hover:bg-cyan-300 transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                Meet the Vendors
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISIT US CTA ── */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div
            className="relative overflow-hidden rounded-3xl p-8 sm:p-16 text-center"
            style={{
              background:
                "linear-gradient(135deg, #0d1220 0%, #0f1828 50%, #0d1220 100%)",
              border: "1px solid rgba(34,211,238,0.2)",
            }}
          >
            {/* Grid */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(34,211,238,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.05) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 35%, #0a0e1a 100%)",
              }}
            />

            <div className="relative z-10">
              <p className="text-[#22d3ee] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                Come see us
              </p>
              <h2
                className="text-4xl sm:text-5xl font-extrabold text-white mb-6"
                style={{
                  fontFamily: HEADING_FONT,
                  textShadow: "0 0 40px rgba(34,211,238,0.2)",
                }}
              >
                Open 6 Days a Week
              </h2>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-gray-400 text-sm">
                <span className="flex items-center gap-2">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  322 S Main St, Salisbury NC 28144
                </span>
                <span
                  className="hidden sm:block w-px h-4 bg-white/15"
                  aria-hidden="true"
                />
                <span className="flex items-center gap-2">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  Tue–Sat 12–10pm · Sun 12–6pm · Mon Closed
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 bg-[#22d3ee] text-[#0a0e1a] font-bold px-8 py-3.5 rounded-full hover:bg-cyan-300 transition-colors duration-200 cursor-pointer"
                >
                  Get Directions & Hours
                </Link>
                <a
                  href="tel:+18283868998"
                  className="inline-flex items-center justify-center gap-2 border border-[#22d3ee] text-[#22d3ee] font-bold px-8 py-3.5 rounded-full hover:bg-[#22d3ee]/10 transition-colors duration-200 cursor-pointer"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.92 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6.99 7l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  (828) 386-8998
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
