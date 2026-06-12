"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/vendors", label: "Vendors" },
  { href: "/categories", label: "Categories" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0e1a]/95 backdrop-blur border-b border-[#22d3ee]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-[#22d3ee] text-xl font-bold tracking-tight">
              Collector&apos;s Cove
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors ${
                  pathname === href
                    ? "text-[#22d3ee]"
                    : "text-gray-300 hover:text-[#22d3ee]"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <a
            href="https://instagram.com/thecollectorscove"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-300 hover:text-[#22d3ee] transition-colors border border-[#22d3ee]/40 hover:border-[#22d3ee] px-3 py-1.5 rounded-full"
          >
            @thecollectorscove
          </a>
        </div>

        {/* Mobile nav */}
        <div className="md:hidden flex gap-4 pb-3 overflow-x-auto">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium whitespace-nowrap transition-colors ${
                pathname === href
                  ? "text-[#22d3ee]"
                  : "text-gray-400 hover:text-[#22d3ee]"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
