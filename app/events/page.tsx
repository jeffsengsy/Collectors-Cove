import type { Metadata } from "next";
import events from "@/data/events.json";

export const metadata: Metadata = {
  title: "Events — Collector's Cove",
  description:
    "Upcoming tournaments, giveaways, and casual play events at Collector's Cove in Salisbury, NC.",
};

const typeColors: Record<string, string> = {
  Tournament: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
  "Casual Play": "text-green-400 bg-green-400/10 border-green-400/30",
  "Giveaway Event": "text-pink-400 bg-pink-400/10 border-pink-400/30",
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function EventsPage() {
  return (
    <div className="bg-[#0a0e1a] min-h-screen px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-[#22d3ee] text-sm font-semibold tracking-widest uppercase mb-2">
            What&apos;s Coming Up
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Events
          </h1>
          <p className="text-gray-400 text-lg">
            Tournaments, casual play nights, box breaks, and giveaways. Check
            back often or follow{" "}
            <a
              href="https://instagram.com/thecollectorscove"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#22d3ee] hover:underline"
            >
              @thecollectorscove
            </a>{" "}
            for the latest announcements.
          </p>
        </div>

        <div className="space-y-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-[#0d1220] border border-white/10 hover:border-[#22d3ee]/40 rounded-2xl p-6 sm:p-8 transition-all hover:shadow-[0_0_24px_rgba(34,211,238,0.10)] group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h2 className="text-white font-bold text-xl sm:text-2xl group-hover:text-[#22d3ee] transition-colors mb-2">
                    {event.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 items-center">
                    <span
                      className={`inline-block text-xs font-semibold border px-2.5 py-0.5 rounded-full ${
                        typeColors[event.type] ??
                        "text-gray-400 bg-gray-400/10 border-gray-400/30"
                      }`}
                    >
                      {event.type}
                    </span>
                    <span className="text-gray-500 text-xs">
                      {event.location}
                    </span>
                  </div>
                </div>

                <div className="shrink-0 bg-[#0a0e1a] border border-[#22d3ee]/20 rounded-xl px-5 py-3 text-center min-w-[140px]">
                  <p className="text-[#22d3ee] font-bold text-sm">
                    {formatDate(event.date).split(",")[0]}
                  </p>
                  <p className="text-white text-xs mt-0.5">
                    {formatDate(event.date).replace(/^\w+,\s/, "")}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">{event.time}</p>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">
                {event.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#0d1220] border border-[#22d3ee]/20 rounded-2xl p-8 text-center">
          <h3 className="text-white text-2xl font-bold mb-2">
            Host an Event With Us
          </h3>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Interested in running a tournament or event at Collector&apos;s Cove?
            Reach out and let&apos;s make it happen.
          </p>
          <a
            href="https://instagram.com/thecollectorscove"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#22d3ee] text-[#0a0e1a] font-bold px-8 py-3 rounded-full hover:bg-cyan-300 transition-colors"
          >
            Message Us on Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
