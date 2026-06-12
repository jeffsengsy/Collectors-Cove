import type { Metadata } from "next";
import events from "@/data/events.json";

export const metadata: Metadata = {
  title: "Events — Collector's Cove",
  description:
    "Weekly locals and monthly card shows at Collector's Cove in Salisbury, NC.",
};

const HEADING_FONT = "var(--font-russo), sans-serif";

type Event = {
  id: number;
  title: string;
  day?: string;
  date?: string;
  time: string;
  type: string;
  recurring: boolean;
  description: string;
  location: string;
};

const allEvents = events as Event[];
const weeklyEvents = allEvents.filter((e) => e.recurring);
const upcomingEvents = allEvents.filter((e) => !e.recurring);

function formatDate(dateStr: string): string {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function EventsPage() {
  return (
    <div className="bg-[#0a0e1a] min-h-screen px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-[#22d3ee] text-xs font-semibold tracking-[0.3em] uppercase mb-2">
            What&apos;s Going On
          </p>
          <h1
            className="text-4xl sm:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Events
          </h1>
          <p className="text-gray-400 text-lg">
            Weekly locals, monthly card shows, and more. Follow{" "}
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

        {/* Weekly Schedule */}
        <div className="mb-12">
          <p className="text-[#22d3ee] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Every Week
          </p>
          <div className="bg-[#0d1220] border border-white/10 rounded-2xl overflow-hidden">
            {weeklyEvents.map((event, i) => (
              <div
                key={event.id}
                className={`flex items-center justify-between px-6 py-5 gap-4 ${
                  i < weeklyEvents.length - 1 ? "border-b border-white/5" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className="text-[#22d3ee] font-bold text-sm w-24 shrink-0"
                    style={{ fontFamily: HEADING_FONT }}
                  >
                    {event.day}
                  </span>
                  <span className="text-white font-medium">{event.title}</span>
                </div>
                <span className="text-gray-400 text-sm shrink-0">{event.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming one-time events */}
        {upcomingEvents.length > 0 && (
          <div className="mb-12">
            <p className="text-[#22d3ee] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              Upcoming
            </p>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-[#0d1220] border border-[#EAB308]/30 rounded-2xl p-6 sm:p-8 hover:border-[#EAB308]/60 transition-colors duration-200"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                    <div>
                      <span className="inline-block text-xs font-semibold text-yellow-400 bg-yellow-400/10 border border-yellow-400/30 px-2.5 py-0.5 rounded-full mb-2">
                        {event.type}
                      </span>
                      <h2
                        className="text-white font-bold text-xl sm:text-2xl"
                        style={{ fontFamily: HEADING_FONT }}
                      >
                        {event.title}
                      </h2>
                    </div>
                    {event.date && (
                      <div className="shrink-0 bg-[#0a0e1a] border border-[#EAB308]/20 rounded-xl px-5 py-3 text-center min-w-[160px]">
                        <p className="text-yellow-400 font-bold text-sm">
                          {formatDate(event.date).split(",")[0]}
                        </p>
                        <p className="text-white text-xs mt-0.5">
                          {formatDate(event.date).replace(/^\w+,\s/, "")}
                        </p>
                        <p className="text-gray-400 text-xs mt-1">{event.time}</p>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Host CTA */}
        <div className="bg-[#0d1220] border border-[#22d3ee]/20 rounded-2xl p-8 text-center">
          <h3
            className="text-white text-2xl font-bold mb-2"
            style={{ fontFamily: HEADING_FONT }}
          >
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
            className="inline-block bg-[#22d3ee] text-[#0a0e1a] font-bold px-8 py-3 rounded-full hover:bg-cyan-300 transition-colors cursor-pointer"
          >
            Message Us on Instagram
          </a>
        </div>

      </div>
    </div>
  );
}
