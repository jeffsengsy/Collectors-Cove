import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "About — Collector's Cove",
  description:
    "Learn about Collector's Cove, located at 322 S Main St in Salisbury, NC. Store hours, directions, and contact information.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#0a0e1a] min-h-screen px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-[#22d3ee] text-sm font-semibold tracking-widest uppercase mb-2">
            Who We Are
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            About the Shop
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Collector&apos;s Cove is Salisbury&apos;s largest hobby destination — a
            20,000 square foot retail space home to multiple independent vendors
            specializing in trading cards, video games, toys, and collectibles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Shop info */}
          <div className="bg-[#0d1220] border border-white/10 rounded-2xl p-8">
            <h2 className="text-[#22d3ee] font-bold text-lg mb-6">
              Store Information
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                  Address
                </p>
                <p className="text-white font-medium">322 S Main St</p>
                <p className="text-white font-medium">Salisbury, NC 28144</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                  Phone
                </p>
                <a
                  href="tel:+18283868998"
                  className="text-white font-medium hover:text-[#22d3ee] transition-colors"
                >
                  (828) 386-8998
                </a>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                  Hours
                </p>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Tuesday – Saturday</span>
                    <span className="text-white font-medium">12pm – 10pm</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-white font-medium">12pm – 6pm</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Monday</span>
                    <span className="text-red-400 font-medium">Closed</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                  Social
                </p>
                <a
                  href="https://instagram.com/thecollectorscove"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#22d3ee] hover:underline text-sm font-medium"
                >
                  @thecollectorscove
                </a>
                <span className="text-gray-500 text-xs ml-2">10.6K followers</span>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="bg-[#0d1220] border border-white/10 rounded-2xl overflow-hidden">
            <iframe
              title="Collector's Cove location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.1253693396357!2d-80.47735!3d35.67066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88519f16d25d3c9b%3A0x1a!2s322+S+Main+St%2C+Salisbury%2C+NC+28144!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="100%"
              style={{ minHeight: "280px", border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* About text */}
        <div className="bg-[#0d1220] border border-white/10 rounded-2xl p-8 mb-8">
          <h2 className="text-white font-bold text-2xl mb-4">Our Story</h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              Collector&apos;s Cove was built around a simple idea: give hobby
              enthusiasts a single place to find everything they love. With over
              20,000 square feet of floor space and 8+ independent vendors,
              there&apos;s always something new to discover on every visit.
            </p>
            <p>
              Whether you&apos;re a competitive Pokémon player chasing the latest
              tournament staples, a sports card investor tracking rookie pull
              rates, a Magic player building your next Commander deck, or a
              retro gamer hunting down that elusive cartridge — our vendors have
              got you covered.
            </p>
            <p>
              Follow us on Instagram at{" "}
              <a
                href="https://instagram.com/thecollectorscove"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#22d3ee] hover:underline"
              >
                @thecollectorscove
              </a>{" "}
              for new arrivals, event announcements, and box break content from
              our vendors.
            </p>
          </div>
        </div>

        {/* Contact form */}
        <div className="bg-[#0d1220] border border-white/10 rounded-2xl p-8">
          <h2 className="text-white font-bold text-2xl mb-2">Get in Touch</h2>
          <p className="text-gray-400 text-sm mb-6">
            Have a question or vendor inquiry? Fill out the form and we&apos;ll get
            back to you via Instagram DM or stop by the shop in person.
          </p>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
