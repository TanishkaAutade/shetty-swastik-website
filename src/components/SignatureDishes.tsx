"use client";

import Image from "next/image";
import { SIGNATURE_DISHES } from "../data/restaurant";
import { Reveal } from "./Reveal";

// Hardcoded descriptions and prices for the 3 verified signature dishes
const DISH_META: Record<string, { description: string; price: number; image: string }> = {
  "Special Kolhapuri Misal Pav": {
    description: "A spicy, layered Maharashtrian classic served with soft pav.",
    price: 169,
    image: "/images/signature-misal.jpg",
  },
  "Rumali Khakra": {
    description: "Thin, crisp, hand-rolled â€” a Swastik favourite.",
    price: 140,
    image: "/images/rumali-khakra.jpg",
  },
  "Sev Bhaji": {
    description: "A comforting Maharashtrian curry topped with crunchy sev.",
    price: 150,
    image: "/images/sev-bhaji.jpg",
  },
};


interface DishCardProps {
  name: string;
  tag: string;
  category: string;
  description: string;
  price: number;
  image: string;
  large?: boolean;
}

function DishCard({ name, tag, category, description, price, image, large }: DishCardProps) {
  return (
    <article className="group bg-[var(--color-surface)] border border-black/5 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
      {/* Image area */}
      <div
        className={`relative overflow-hidden flex-shrink-0 ${
          large ? "aspect-[16/10] md:aspect-[3/4]" : "aspect-[16/10]"
        }`}
      >
        {/* Tag badge */}
        <div className="absolute top-4 left-4 z-10 bg-[var(--color-accent-brass)] text-white text-xs uppercase tracking-wide px-3 py-1 rounded-full">
          {tag}
        </div>
        <Image
          src={image}
          alt={name}
          fill
          priority={false}
          quality={85}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Text block */}
      <div className="p-6 flex flex-col flex-1">
        <span className="text-xs uppercase tracking-widest text-[var(--color-foreground)]/60 mb-2">
          {category}
        </span>
        <h3
          className={`font-[family-name:var(--font-display)] text-[var(--color-foreground)] leading-tight mb-2 ${
            large ? "text-xl md:text-2xl" : "text-lg md:text-xl"
          }`}
        >
          {name}
        </h3>
        <p className="text-sm text-[var(--color-foreground)]/70 leading-relaxed flex-1">
          {description}
        </p>
        <p className="text-base font-medium text-[var(--color-accent-terracotta)] mt-3">
          â‚¹{price}
        </p>
      </div>
    </article>
  );
}

export default function SignatureDishes() {
  const [misal, khakra, sevBhaji] = SIGNATURE_DISHES;

  return (
    <section
      id="specialities"
      className="py-20 md:py-28 max-w-7xl mx-auto px-6 lg:px-8"
    >
      {/* Header */}
      <Reveal className="mb-12 md:mb-16">
        <span className="text-[var(--color-accent-brass)] text-sm font-bold tracking-[0.2em] uppercase block mb-4">
          A Few Favourites
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-[var(--color-foreground)] max-w-2xl leading-tight">
          Some of the flavours guests come back for.
        </h2>
        <div className="w-24 h-px bg-[var(--color-accent-brass)] mt-8" />
      </Reveal>

      {/* Asymmetric Grid */}
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {/* Left â€” tall card (Misal Pav) */}
        <Reveal className="md:row-span-2" delay={0}>
          <DishCard
            name={misal.name}
            tag={misal.tag}
            category={misal.category}
            description={DISH_META[misal.name].description}
            price={DISH_META[misal.name].price}
            image={DISH_META[misal.name].image}
            large
          />
        </Reveal>

        {/* Right â€” two stacked cards */}
        <Reveal delay={0.1}>
          <DishCard
            name={khakra.name}
            tag={khakra.tag}
            category={khakra.category}
            description={DISH_META[khakra.name].description}
            price={DISH_META[khakra.name].price}
            image={DISH_META[khakra.name].image}
          />
        </Reveal>
        <Reveal delay={0.2}>
          <DishCard
            name={sevBhaji.name}
            tag={sevBhaji.tag}
            category={sevBhaji.category}
            description={DISH_META[sevBhaji.name].description}
            price={DISH_META[sevBhaji.name].price}
            image={DISH_META[sevBhaji.name].image}
          />
        </Reveal>
      </div>
    </section>
  );
}
