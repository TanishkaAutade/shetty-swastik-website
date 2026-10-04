"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, MapPin } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { RESTAURANT_INFO } from "../data/restaurant";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#top" },
    { name: "Menu", href: "#menu" },
    { name: "Specialities", href: "#specialities" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "Visit Us", href: "#visit" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--color-background)] shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <a href="#top" aria-label="Back to top">
            <Image
              src="/images/logo.png"
              alt="Hotel Shetty's Swastik - Veg Treat"
              width={240}
              height={60}
              priority={true}
              quality={90}
              className="h-10 md:h-12 w-auto object-contain max-w-[40vw]"
            />
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[var(--color-foreground)] text-sm font-medium hover:text-[var(--color-accent-terracotta)] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://www.instagram.com/swastik__restaurant__kopargaon/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram page"
              className="hidden lg:inline-flex p-2 rounded-md text-[var(--color-foreground)] hover:text-[var(--color-accent-terracotta)] transition-colors"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-[var(--color-accent-terracotta)] text-[var(--color-background)] text-sm font-medium rounded-md hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-accent-terracotta)]"
            >
              Get Directions
            </a>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              aria-label="Open menu"
              className="text-[var(--color-foreground)] p-2 min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed inset-y-0 right-0 w-64 bg-[var(--color-background)] shadow-xl transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-6 border-b border-[var(--color-accent-brass)]/20">
            <span className="font-[family-name:var(--font-display)] font-semibold text-[var(--color-foreground)]">
              Menu
            </span>
            <button
              type="button"
              aria-label="Close menu"
              className="text-[var(--color-foreground)] p-2 min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          <nav className="p-6 flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[var(--color-foreground)] text-lg font-medium block py-2 hover:text-[var(--color-accent-terracotta)] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-6 border-t border-[var(--color-accent-brass)]/20">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-4 py-3 bg-[var(--color-accent-terracotta)] text-[var(--color-background)] font-medium rounded-md hover:bg-opacity-90 transition-colors focus:outline-none"
              >
                <MapPin size={18} className="mr-2" />
                Get Directions
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
