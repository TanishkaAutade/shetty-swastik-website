"use client";

import { MapPin, Phone } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { RESTAURANT_INFO } from "../data/restaurant";
import { Reveal } from "./Reveal";

export default function LocationSection() {
  return (
    <section id="visit" className="py-20 md:py-28 bg-[#FFFFF0]">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal className="text-center mb-12">
          <p className="text-[var(--color-accent-brass)] uppercase tracking-widest text-sm mb-4 font-semibold">
            VISIT US
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-[#1C1917] mb-6">
            Find Us in Kopargaon
          </h2>
          <p className="text-base text-foreground/70 max-w-xl mx-auto mb-10">
            Stop by for a meal — we&apos;re easy to find.
          </p>
          <div className="w-24 h-[1px] bg-[var(--color-accent-brass)] mx-auto mb-12"></div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <a
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#EDE5D5] border border-dashed border-[var(--color-accent-brass)]/40 flex flex-col items-center justify-center hover:opacity-90 transition-opacity"
          >
            <MapPin size={48} className="text-[var(--color-accent-terracotta)]" />
            <span className="text-sm font-medium text-[#1C1917] mt-2">
              Hotel Shetty&apos;s Swastik
            </span>
            <span className="text-xs text-foreground/60">
              Kopargaon, Maharashtra
            </span>
            <span className="text-xs text-[var(--color-accent-terracotta)] underline mt-1">
              View on Google Maps
            </span>
          </a>

          <div>
            <div className="mb-6">
              <p className="text-[var(--color-accent-brass)] uppercase tracking-widest text-xs mb-2 font-semibold">
                ADDRESS
              </p>
              <div className="text-base text-[#1C1917] leading-relaxed">
                <p>Hotel Swastik Food Mall</p>
                <p>Nagar Manmad Hwy</p>
                <p>near Jangali Maharaj Ashram</p>
                <p>Kopargaon, Maharashtra 423601</p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-[var(--color-accent-brass)] uppercase tracking-widest text-xs mb-2 font-semibold">
                PHONE
              </p>
              <p className="text-lg font-medium text-[#1C1917]">
                {RESTAURANT_INFO.phone}
              </p>
            </div>

            <div className="mb-6">
              <p className="text-[var(--color-accent-brass)] uppercase tracking-widest text-xs mb-2 font-semibold">
                INSTAGRAM
              </p>
              <a
                href="https://www.instagram.com/swastik__restaurant__kopargaon/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className="inline-flex items-center gap-2 text-base text-[var(--color-accent-terracotta)] hover:underline transition-colors"
              >
                <FaInstagram size={18} />
                @swastik__restaurant__kopargaon
              </a>
            </div>

            <div className="mb-8">
              <p className="text-[var(--color-accent-brass)] uppercase tracking-widest text-xs mb-2 font-semibold">
                HOURS
              </p>
              <div className="text-sm text-foreground/70">
                <p>Check-in: 12:00 PM</p>
                <p>Check-out: 11:00 AM</p>
              </div>
            </div>

            <div className="flex gap-3 flex-wrap">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--color-accent-terracotta)] text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 active:scale-95 transition-all duration-100"
              >
                <MapPin size={18} />
                Get Directions
              </a>
              <a
                href={RESTAURANT_INFO.phoneLink}
                className="inline-flex items-center gap-2 bg-white border border-[var(--color-accent-terracotta)] text-[var(--color-accent-terracotta)] hover:bg-[#FFF5F3] active:scale-95 transition-all duration-100 px-6 py-3 rounded-md font-medium"
              >
                <Phone size={18} />
                Call Restaurant
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
