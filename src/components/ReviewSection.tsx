"use client";

import { Star, Quote, ExternalLink } from "lucide-react";
import { RESTAURANT_INFO } from "@/data/restaurant";
import { Reveal } from "./Reveal";

const REVIEW_SUMMARIES = [
  "Guests frequently highlight the Maharashtrian and Punjabi flavours.",
  "Visitors appreciate the quick, friendly service.",
  "Reviewers mention clean restrooms and ample parking.",
];

export default function ReviewSection() {
  return (
    <section
      id="reviews"
      className="py-20 md:py-28 bg-[var(--color-background)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <Reveal className="mb-10">
          <span className="text-[var(--color-accent-brass)] text-sm font-bold tracking-[0.2em] uppercase block mb-4">
            What Guests Say
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-[var(--color-foreground)] leading-tight mb-6">
            Loved by Thousands
          </h2>
          <div className="w-24 h-px bg-[var(--color-accent-brass)]" />
        </Reveal>

        {/* Big Rating Card */}
        <div className="max-w-3xl mx-auto bg-[var(--color-surface)] rounded-xl p-8 md:p-12 border border-black/5 shadow-sm text-center">
          <p className="font-[family-name:var(--font-display)] text-6xl md:text-7xl text-[var(--color-accent-terracotta)] leading-none mb-4">
            {RESTAURANT_INFO.rating}
          </p>
          {/* 5 filled stars */}
          <div className="flex items-center justify-center gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={28}
                className="text-[var(--color-accent-brass)]"
                fill="currentColor"
              />
            ))}
          </div>
          <p className="text-base text-[var(--color-foreground)]/70">
            {RESTAURANT_INFO.reviewCount.toLocaleString()} Google Reviews
          </p>
          <p className="text-xs text-[var(--color-foreground)]/50 mt-2 italic">
            Based on Google review summary
          </p>
        </div>

        {/* Summary cards */}
        <p className="text-lg font-medium text-[var(--color-foreground)] text-center mt-14 mb-8">
          What reviewers mention most
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {REVIEW_SUMMARIES.map((summary, index) => (
            <Reveal key={summary} delay={index * 0.1}>
              <div
                className="bg-[var(--color-surface)] rounded-xl p-6 border border-black/5 shadow-sm"
              >
                <Quote
                  size={24}
                  className="text-[var(--color-accent-brass)] mb-4"
                />
                <p className="text-base text-[var(--color-foreground)]/80 leading-relaxed">
                  {summary}
                </p>
                <p className="text-xs text-[var(--color-foreground)]/50 mt-4 italic">
                  — Google review summary
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <a
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent-terracotta)] text-white font-medium rounded-md hover:bg-opacity-90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-accent-terracotta)]"
          >
            Read All Google Reviews
            <ExternalLink size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
