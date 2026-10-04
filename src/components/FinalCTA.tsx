"use client";

import { MapPin, Phone, UtensilsCrossed } from "lucide-react";
import { RESTAURANT_INFO } from "../data/restaurant";
import { Reveal } from "./Reveal";

export default function FinalCTA() {
  return (
    <section id="final-cta" className="w-full py-20 md:py-28 bg-[var(--color-accent-terracotta)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              Hungry Yet?
            </h2>
            <p className="text-lg md:text-xl text-white/85 mb-10">
              Make your next stop a delicious one.
            </p>
          </Reveal>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#menu"
              className="inline-flex items-center gap-2 bg-white text-[var(--color-accent-terracotta)] px-6 py-3 rounded-md font-medium hover:bg-white/90 active:scale-95 transition-all duration-100"
            >
              <UtensilsCrossed size={18} />
              View Menu
            </a>
            
            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-transparent border border-white text-white hover:bg-white/10 active:scale-95 px-6 py-3 rounded-md font-medium transition-all duration-100"
            >
              <MapPin size={18} />
              Get Directions
            </a>
            
            <a
              href={RESTAURANT_INFO.phoneLink}
              className="inline-flex items-center gap-2 bg-transparent border border-white text-white hover:bg-white/10 active:scale-95 px-6 py-3 rounded-md font-medium transition-all duration-100"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
