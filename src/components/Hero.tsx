"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { RESTAURANT_INFO } from "../data/restaurant";
import { AnimatedNumber } from "./AnimatedNumber";

// ─── Animation variants ───────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.2 },
  },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={heroRef} id="hero" className="pt-32 pb-20 md:pt-40 md:pb-24 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* Left Side: Text Content */}
        <motion.div
          className="w-full lg:w-[55%] flex flex-col items-start text-left"
          variants={prefersReduced ? undefined : containerVariants}
          initial={prefersReduced ? undefined : "hidden"}
          animate={prefersReduced ? undefined : "visible"}
        >
          <motion.span
            className="text-[var(--color-accent-brass)] text-xs font-bold tracking-[0.2em] uppercase mb-4"
            variants={prefersReduced ? undefined : itemVariants}
          >
            Pure Vegetarian • Kopargaon
          </motion.span>

          <motion.h1
            className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-[var(--color-foreground)] font-bold leading-tight mb-6"
            variants={prefersReduced ? undefined : itemVariants}
          >
            Good Food. <br className="hidden sm:block" /> Good Company. <br className="hidden sm:block" /> The Swastik Way.
          </motion.h1>

          <motion.p
            className="font-[family-name:var(--font-body)] text-lg text-[var(--color-foreground)]/80 max-w-md mb-8 leading-relaxed"
            variants={prefersReduced ? undefined : itemVariants}
          >
            Discover authentic vegetarian flavours, comforting favourites and a dining experience made for families, travellers and food lovers.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8"
            variants={prefersReduced ? undefined : itemVariants}
          >
            <a
              href="#menu"
              className="inline-flex justify-center items-center px-6 py-3 bg-[var(--color-accent-terracotta)] text-[var(--color-background)] font-medium rounded-md hover:bg-opacity-90 active:scale-95 transition-all duration-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-accent-terracotta)]"
            >
              Explore Menu
            </a>
            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-6 py-3 border-2 border-[var(--color-accent-terracotta)] text-[var(--color-accent-terracotta)] font-medium rounded-md hover:bg-[var(--color-accent-terracotta)] hover:text-[var(--color-background)] active:scale-95 transition-all duration-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-accent-terracotta)]"
            >
              Get Directions
            </a>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[var(--color-foreground)]/70"
            variants={prefersReduced ? undefined : itemVariants}
          >
            <span className="text-[var(--color-accent-brass)]">★</span>
            <span className="font-semibold"><AnimatedNumber value={RESTAURANT_INFO.rating} decimals={1} /></span>
            <span>· <AnimatedNumber value={RESTAURANT_INFO.reviewCount} suffix="+" /> Google Reviews</span>
          </motion.div>
        </motion.div>

        {/* Right Side: Hero Image */}
        <motion.div
          className="w-full lg:w-[45%] aspect-[3/4] md:aspect-[4/5] relative rounded-xl shadow-xl overflow-hidden"
          variants={prefersReduced ? undefined : imageVariants}
          initial={prefersReduced ? undefined : "hidden"}
          animate={prefersReduced ? undefined : "visible"}
          style={{ y: prefersReduced ? 0 : imageY }}
        >
          <Image
            src="/images/hero-food.jpg"
            alt="A spread of vegetarian dishes at Hotel Shetty's Swastik"
            fill
            priority={true}
            quality={90}
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
