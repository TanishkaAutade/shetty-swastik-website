import { RESTAURANT_INFO } from "../data/restaurant";

export default function Footer() {
  return (
    <footer className="bg-[#1C1917] text-[#FFFFF0] pt-16 pb-24 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-playfair text-xl text-white">
              Hotel Shetty&apos;s Swastik
            </h3>
            <p className="text-[var(--color-accent-brass)] text-xs tracking-widest uppercase mt-1">
              VEG TREAT
            </p>
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
