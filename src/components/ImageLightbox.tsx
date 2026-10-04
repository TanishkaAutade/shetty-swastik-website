"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/types";

interface ImageLightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function ImageLightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: ImageLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);
  const image = images[currentIndex];

  // Focus close button on mount
  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  // Lock body scroll on mount, restore on unmount
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onNext, onPrev]);

  // Touch swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta < 0) {
        onNext();
      } else {
        onPrev();
      }
    }
    touchStartX.current = null;
  };

  const controlBtn =
    "rounded-full bg-white/10 hover:bg-white/25 p-2 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Inner panel — stop propagation so clicks on the panel don't close */}
      <div
        className="relative max-w-5xl w-full mx-4 max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          ref={closeButtonRef}
          aria-label="Close"
          onClick={onClose}
          className={`absolute top-4 right-4 z-10 ${controlBtn}`}
        >
          <X size={20} />
        </button>

        {/* Previous */}
        <button
          aria-label="Previous image"
          onClick={onPrev}
          className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 ${controlBtn}`}
        >
          <ChevronLeft size={22} />
        </button>

        {/* Next */}
        <button
          aria-label="Next image"
          onClick={onNext}
          className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 ${controlBtn}`}
        >
          <ChevronRight size={22} />
        </button>

        {/* Image */}
        <div
          className="relative aspect-video rounded-lg overflow-hidden bg-[#2A2520]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={true}
            quality={90}
            sizes="100vw"
            className="object-contain"
          />
        </div>

        {/* Counter */}
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm pointer-events-none">
          {currentIndex + 1} / {images.length}
        </p>
      </div>
    </div>
  );
}
