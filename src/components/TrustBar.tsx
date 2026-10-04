import { Star, MessageSquare, Leaf, Car, Zap } from "lucide-react";
import { RESTAURANT_INFO } from "../data/restaurant";

export default function TrustBar() {
  const items = [
    { icon: Star, label: `${RESTAURANT_INFO.rating} Google Rating` },
    { icon: MessageSquare, label: `${RESTAURANT_INFO.reviewCount.toLocaleString()} Reviews` },
    { icon: Leaf, label: "Pure Vegetarian" },
    { icon: Car, label: "Ample Parking" },
    { icon: Zap, label: "Quick Service" },
  ];

  return (
    <section id="trust-bar" className="bg-[var(--color-surface)] border-y border-[var(--color-accent-brass)]/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-y-6 gap-x-4">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-x-8">
                <div className="flex items-center space-x-3 group">
                  <Icon className="text-[var(--color-accent-terracotta)] w-5 h-5 flex-shrink-0" />
                  <span className="font-[family-name:var(--font-body)] text-[var(--color-foreground)] font-medium text-sm md:text-base">
                    {item.label}
                  </span>
                </div>
                {index < items.length - 1 && (
                  <div className="hidden lg:block h-8 w-px bg-[var(--color-accent-brass)]/30" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
