"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import {
  MENU_ITEMS,
  MENU_CATEGORIES,
  type MenuCategory,
  type MenuItemWithPrice,
} from "@/data/restaurant";

// ─── Item Card ──────────────────────────────────────────────────────────────

function MenuItemCard({ item }: { item: MenuItemWithPrice }) {
  const isSignature = item.menuCategory === "Signature";

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group relative bg-[var(--color-surface)] rounded-lg border border-black/5 border-l-4 border-l-transparent hover:border-l-[var(--color-accent-terracotta)] p-5 shadow-md hover:shadow-lg transition-all duration-200"
    >
      {isSignature && (
        <span className="absolute top-2 right-2 bg-[var(--color-accent-brass)] text-white text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden md:block pointer-events-none">
          Popular
        </span>
      )}
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-[family-name:var(--font-body)] font-medium text-base text-[var(--color-foreground)] leading-snug">
          {item.name}
        </h3>
        <motion.span
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="font-medium text-[var(--color-accent-terracotta)] whitespace-nowrap text-base flex-shrink-0 inline-block"
        >
          {"\u20B9"}{item.price}
        </motion.span>
      </div>
      {item.description && (
        <p className="text-sm text-[var(--color-foreground)]/60 mt-1 leading-relaxed">
          {item.description}
        </p>
      )}
    </motion.article>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("All");

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return MENU_ITEMS;
    return MENU_ITEMS.filter((item) => item.menuCategory === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="menu"
      className="py-20 md:py-28 bg-[var(--color-background)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <Reveal className="mb-10">
          <span className="text-[var(--color-accent-brass)] text-sm font-bold tracking-[0.2em] uppercase block mb-4">
            Explore the Menu
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-[var(--color-foreground)] leading-tight mb-6">
            Something for every craving
          </h2>
          <p className="text-base text-[var(--color-foreground)]/70 max-w-xl mb-8 leading-relaxed">
            From Maharashtrian classics to Punjabi favourites — explore our full
            vegetarian spread.
          </p>
          <div className="w-24 h-px bg-[var(--color-accent-brass)]" />
        </Reveal>

        {/* Category Tabs */}
        <div
          className="flex gap-3 mb-10 overflow-x-auto pb-2 md:flex-wrap md:overflow-x-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          role="tablist"
          aria-label="Menu categories"
        >
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap rounded-full px-5 py-2 min-h-[44px] text-sm border active:scale-95 transition-all duration-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-terracotta)] focus-visible:ring-offset-2 flex items-center justify-center ${
                  isActive
                    ? "bg-[var(--color-accent-terracotta)] text-white border-[var(--color-accent-terracotta)]"
                    : "bg-[var(--color-surface)] text-[var(--color-foreground)] border-black/10 hover:border-[var(--color-accent-terracotta)]/40"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Item Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredItems.map((item, index) => (
              <Reveal key={`${item.name}-${item.menuCategory}`} delay={Math.min(index * 0.03, 0.3)}>
                <MenuItemCard item={item} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="py-16 flex items-center justify-center">
            <p className="text-base text-[var(--color-foreground)]/60 italic">
              More items coming soon — ask us at the counter.
            </p>
          </div>
        )}

        {/* Footer note */}
        <p className="text-xs text-[var(--color-foreground)]/50 text-center mt-12">
          A selection from our full menu. Many more dishes available at the
          restaurant. Prices subject to change.
        </p>
      </div>
    </section>
  );
}
