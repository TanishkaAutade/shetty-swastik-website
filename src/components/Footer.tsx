import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { RESTAURANT_INFO } from "../data/restaurant";

export default function Footer() {
  return (
    <footer className="bg-[#1C1917] text-[#FFFFF0] pt-16 pb-24 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <Image
              src="/images/logo.png"
              alt="Hotel Shetty's Swastik - Veg Treat"
              width={240}
              height={60}
              priority={false}
              quality={90}
              className="h-12 md:h-14 w-auto object-contain brightness-0 invert"
            />
            <p className="text-sm text-[#FFFFF0]/70 mt-4 font-marathi">
              होटल शेट्टी&apos;स स्वास्तिक- वेज ट्रीट
            </p>
            <p className="text-sm text-[#FFFFF0]/60 mt-3">
              Kopargaon, Maharashtra
            </p>
          </div>

          <div>
            <h4 className="text-[var(--color-accent-brass)] uppercase text-xs tracking-widest mb-4">
              QUICK LINKS
            </h4>
            <nav className="flex flex-col gap-2">
              <a href="#top" className="text-sm text-[#FFFFF0]/80 hover:text-[var(--color-accent-brass)] transition-colors block">
                Home
              </a>
              <a href="#menu" className="text-sm text-[#FFFFF0]/80 hover:text-[var(--color-accent-brass)] transition-colors block">
                Menu
              </a>
              <a href="#specialities" className="text-sm text-[#FFFFF0]/80 hover:text-[var(--color-accent-brass)] transition-colors block">
                Specialities
              </a>
              <a href="#gallery" className="text-sm text-[#FFFFF0]/80 hover:text-[var(--color-accent-brass)] transition-colors block">
                Gallery
              </a>
              <a href="#reviews" className="text-sm text-[#FFFFF0]/80 hover:text-[var(--color-accent-brass)] transition-colors block">
                Reviews
              </a>
              <a href="#visit" className="text-sm text-[#FFFFF0]/80 hover:text-[var(--color-accent-brass)] transition-colors block">
                Visit Us
              </a>
            </nav>
          </div>

          <div>
            <h4 className="text-[var(--color-accent-brass)] uppercase text-xs tracking-widest mb-4">
              CONTACT
            </h4>
            <a href={RESTAURANT_INFO.phoneLink} className="text-sm text-[#FFFFF0]/80 hover:text-[var(--color-accent-brass)] transition-colors block">
              {RESTAURANT_INFO.phone}
            </a>
            <p className="text-sm text-[#FFFFF0]/70 mt-4">
              ★ 4.5 · 9,808 Reviews
            </p>
            <a
              href="https://www.instagram.com/swastik__restaurant__kopargaon/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram page"
              className="flex items-center gap-2 text-sm text-white/80 hover:text-[var(--color-accent-brass)] transition-colors mt-3"
            >
              <FaInstagram size={16} />
              @swastik__restaurant__kopargaon
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-[#FFFFF0]/50">
            © 2026 Hotel Shetty&apos;s Swastik - Veg Treat
          </p>
        </div>
      </div>
    </footer>
  );
}
