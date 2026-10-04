"use client";

import { Leaf, ChefHat, Zap, Car, Sparkles, type LucideIcon } from "lucide-react";
import { FEATURES } from "@/data/restaurant";
import { Reveal } from "./Reveal";

// Local metadata — data file is read-only, titles pulled from FEATURES
interface FeatureMeta {
  description: string;
  Icon: LucideIcon;
}

const FEATURE_META: Record<string, FeatureMeta> = {
  "Pure Vegetarian": {
    description: "A vegetarian dining destination in Kopargaon.",
    Icon: Leaf,
  },
  "Maharashtrian & Punjabi Flavours": {
    description: "Guests specifically mention these cuisines.",
    Icon: ChefHat,
  },
  "Quick Service": {
    description: "Highlighted positively in Google reviews.",
    Icon: Zap,
  },
  "Ample Parking": {
    description: "Convenient for families and travellers.",
    Icon: Car,
  },
  "Clean & Comfortable": {
    description: "Clean restrooms and a welcoming space.",
    Icon: Sparkles,
  },
};

export default function WhySwastik() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <Reveal className="text-center mb-10">
          <span className="text-[var(--color-accent-brass)] text-sm font-bold tracking-[0.2em] uppercase block mb-4">
            Why Swastik
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-[var(--color-foreground)] leading-tight mb-6">
            Why Guests Choose Us
          </h2>
          <p className="text-base text-[var(--color-foreground)]/70 max-w-xl mx-auto">
            Five small reasons that make a big difference.
          </p>
        </Reveal>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => {
            const meta = FEATURE_META[feature.title];
            if (!meta) return null;
            const { description, Icon } = meta;
            return (
              <Reveal key={feature.title} delay={index * 0.08}>
                <div
                  className="bg-[var(--color-background)] rounded-xl p-6 border border-black/5"
                >
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent-terracotta)]/10 flex items-center justify-center mb-4">
                    <Icon
                      size={24}
                      className="text-[var(--color-accent-terracotta)]"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--color-foreground)] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[var(--color-foreground)]/70 leading-relaxed">
                    {description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
