"use client";

import { Star, MessageSquare, Leaf, Car, Zap } from "lucide-react";
import { RESTAURANT_INFO } from "../data/restaurant";
import { Reveal } from "./Reveal";
import { AnimatedNumber } from "./AnimatedNumber";

export default function TrustBar() {
  const items = [
    {
      icon: Star,
      content: (
        <>
          <AnimatedNumber value={RESTAURANT_INFO.rating} decimals={1} /> Google Rating
        </>
      ),
    },
    {
      icon: MessageSquare,
      content: (
        <>
          <AnimatedNumber value={RESTAURANT_INFO.reviewCount} /> Reviews
        </>
      ),
    },
    { icon: Leaf, content: "Pure Vegetarian" },
    { icon: Car, content: "Ample Parking" },
    { icon: Zap, content: "Quick Service" },
  ];

  return (
    <section id="trust-bar" className="bg-[var(--color-surface)] border-y border-[var(--color-accent-brass)]/30">
      <Reveal className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-y-6 gap-x-4">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-x-8">
                <div className="flex items-center space-x-3 group">
                  <Icon className="text-[var(--color-accent-terracotta)] w-5 h-5 flex-shrink-0" />
                  <span className="font-[family-name:var(--font-body)] text-[var(--color-foreground)] font-medium text-sm md:text-base">
                    {item.content}
                  </span>
                </div>
                {index < items.length - 1 && (
                  <div className="hidden lg:block h-8 w-px bg-[var(--color-accent-brass)]/30" />
                )}
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
