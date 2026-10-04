"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { GALLERY_IMAGES } from "@/data/restaurant";
import type { GalleryImage } from "@/types";
import ImageLightbox from "./ImageLightbox";
import { Reveal } from "./Reveal";

// ─── Category mapping — local to this file, data file is read-only ───────────

type GalleryTab = "All" | "Food" | "Ambience" | "Highlights";

const GALLERY_TABS: GalleryTab[] = ["All", "Food", "Ambience", "Highlights"];

const IMAGE_CATEGORY_MAP: Record<string, GalleryTab> = {
  "/images/gallery/misal-pav.jpg":            "Food",
  "/images/gallery/rumali-khakra.jpg":         "Food",
  "/images/gallery/sev-bhaji.jpg":             "Food",
  "/images/gallery/dosa.jpg":                  "Food",
  "/images/gallery/falooda.jpg":               "Food",
  "/images/gallery/restaurant-exterior.jpg":   "Ambience",
  "/images/gallery/restaurant-interior-1.jpg": "Ambience",
  "/images/gallery/restaurant-interior-2.jpg": "Ambience",
  "/images/gallery/parking-area.jpg":          "Highlights",
};

// Pre-assigned row spans for the first 9 images (by original index)
const ROW_SPAN_MAP: Record<number, boolean> = {
  0: true, // tall
  3: true, // tall
  5: true, // tall
};

// ─── Tile ─────────────────────────────────────────────────────────────────────

function GalleryTile({
  image,
  originalIndex,
  onClick,
}: {
  image: GalleryImage;
  originalIndex: number;
  onClick: () => void;
}) {
  const isTall = ROW_SPAN_MAP[originalIndex] ?? false;

  return (
    <div
      className={`group relative cursor-pointer rounded-lg overflow-hidden ${isTall ? "row-span-2" : ""}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View image: ${image.alt}`}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick()}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={false}
        quality={85}
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
        <p className="text-sm text-white font-medium px-4 text-center">{image.alt}</p>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<GalleryTab>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = useMemo(() => {
    if (activeTab === "All") return GALLERY_IMAGES.slice(0, 9);
    return GALLERY_IMAGES.slice(0, 9).filter(
      (img) => IMAGE_CATEGORY_MAP[img.src] === activeTab
    );
  }, [activeTab]);

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + filteredImages.length) % filteredImages.length
    );
  };

  return (
    <>
      <section
        id="gallery"
        className="py-20 md:py-28 bg-[var(--color-background)]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Header */}
          <Reveal className="mb-10">
            <span className="text-[var(--color-accent-brass)] text-sm font-bold tracking-[0.2em] uppercase block mb-4">
              Gallery
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-[var(--color-foreground)] leading-tight mb-6">
              See What&apos;s Cooking
            </h2>
            <p className="text-base text-[var(--color-foreground)]/70 max-w-xl mb-8 leading-relaxed">
              A glimpse into our kitchen, our plates, and our dining space.
            </p>
            <div className="w-24 h-px bg-[var(--color-accent-brass)]" />
          </Reveal>

          {/* Category tabs */}
          <div
            className="flex gap-3 mb-10 overflow-x-auto pb-2 md:flex-wrap md:overflow-x-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            role="tablist"
            aria-label="Gallery categories"
          >
            {GALLERY_TABS.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveTab(tab);
                    setLightboxIndex(null);
                  }}
                  className={`whitespace-nowrap rounded-full px-5 py-2 text-sm border transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-terracotta)] focus-visible:ring-offset-2 ${
                    isActive
                      ? "bg-[var(--color-accent-terracotta)] text-white border-[var(--color-accent-terracotta)]"
                      : "bg-[var(--color-surface)] text-[var(--color-foreground)] border-black/10 hover:border-[var(--color-accent-terracotta)]/40"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Masonry grid */}
          {filteredImages.length > 0 ? (
            <Reveal>
              <div className="grid grid-flow-dense grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
                {filteredImages.map((image, filteredIdx) => {
                  // Recover the original GALLERY_IMAGES index for row-span lookup
                  const originalIndex = GALLERY_IMAGES.findIndex(
                    (g) => g.src === image.src
                  );
                  return (
                    <GalleryTile
                      key={image.src}
                      image={image}
                      originalIndex={originalIndex}
                      onClick={() => setLightboxIndex(filteredIdx)}
                    />
                  );
                })}
              </div>
            </Reveal>
          ) : (
            <div className="py-16 flex items-center justify-center">
              <p className="text-base text-[var(--color-foreground)]/60 italic">
                No images in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <ImageLightbox
          images={filteredImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </>
  );
}
