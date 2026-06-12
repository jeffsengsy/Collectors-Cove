import Image from "next/image";

const HEADING_FONT = "var(--font-russo), sans-serif";

const ROW_1 = [
  { src: "/images/store/mural.webp",     alt: "Pokémon mural and tournament play area at Collector's Cove" },
  { src: "/images/store/exterior.jpg",   alt: "Collector's Cove storefront on S Main St, Salisbury NC" },
  { src: "/images/store/store-3.webp",   alt: "Inside Collector's Cove" },
  { src: "/images/store/store-5.webp",   alt: "Inside Collector's Cove" },
];

const ROW_2 = [
  { src: "/images/store/main-floor.webp", alt: "Main retail floor at Collector's Cove" },
  { src: "/images/store/video-games.jpg", alt: "Retro video game wall at Collector's Cove" },
  { src: "/images/store/store-4.webp",    alt: "Inside Collector's Cove" },
  { src: "/images/store/store-6.webp",    alt: "Inside Collector's Cove" },
];

function CarouselRow({
  photos,
  direction,
}: {
  photos: typeof ROW_1;
  direction: "left" | "right";
}) {
  return (
    <div className="overflow-hidden">
      <div className={`${direction === "left" ? "carousel-left" : "carousel-right"} w-max flex gap-3 cursor-grab`}>
        {[...photos, ...photos].map((photo, i) => (
          <div
            key={i}
            className="shrink-0 relative w-[340px] h-[210px] sm:w-[420px] sm:h-[250px] rounded-2xl overflow-hidden"
          >
            <Image
              src={photo.src}
              fill
              alt={photo.alt}
              className="object-cover transition-transform duration-700 hover:scale-105 motion-reduce:transition-none"
              sizes="(max-width: 640px) 340px, 420px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PhotoCarousel() {
  return (
    <section className="py-10 bg-[#0a0e1a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-[#22d3ee] text-xs font-semibold tracking-[0.3em] uppercase mb-2">
          See the space
        </p>
        <h2
          className="text-3xl sm:text-4xl font-bold text-white"
          style={{ fontFamily: HEADING_FONT }}
        >
          Inside the Store
        </h2>
      </div>

      <div className="space-y-3">
        <CarouselRow photos={ROW_1} direction="left" />
        <CarouselRow photos={ROW_2} direction="right" />
      </div>

      <p className="text-gray-600 text-xs text-center mt-5 px-4">
        Follow{" "}
        <a
          href="https://instagram.com/thecollectorscove"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#22d3ee] hover:underline cursor-pointer"
        >
          @thecollectorscove
        </a>{" "}
        on Instagram for more
      </p>
    </section>
  );
}
