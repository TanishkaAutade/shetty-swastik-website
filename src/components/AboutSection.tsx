import { Check } from "lucide-react";

const ABOUT_BULLETS = [
  "Pure vegetarian kitchen",
  "Maharashtrian and Punjabi flavours",
  "Quick, friendly service",
  "Clean, comfortable restrooms",
  "Ample parking for families and travellers",
];

function ImagePlaceholder({ path, alt }: { path: string; alt?: string }) {
  return (
    <div aria-label={alt ?? `${path} placeholder`} className="w-full h-full flex items-center justify-center bg-[#F5EFE3] border border-dashed border-[var(--color-accent-brass)]/40 rounded-xl">
      <span className="text-xs text-[var(--color-accent-brass)]/60 px-4 text-center break-all">
        {path}
      </span>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-[var(--color-surface)] border-t border-black/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Image with decorative offset square */}
          <div className="relative">
            {/* Decorative brass outline square — desktop only */}
            <div className="hidden md:block absolute -bottom-6 -left-6 w-full h-full border-2 border-[var(--color-accent-brass)]/30 rounded-xl z-0" />

            {/* Image placeholder */}
            <div className="relative z-10 aspect-[4/5] rounded-xl overflow-hidden shadow-lg">
              {/* Replace with <Image src="/images/restaurant.jpg" fill alt="Restaurant interior" className="object-cover" /> once photo is available */}
              <ImagePlaceholder path="/images/restaurant.jpg" alt="Restaurant interior photo placeholder" />
            </div>
          </div>

          {/* Right — Text */}
          <div>
            <span className="text-[var(--color-accent-brass)] text-sm font-bold tracking-[0.2em] uppercase block mb-4">
              The Swastik Experience
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-[var(--color-foreground)] leading-tight mb-6">
              More Than Just a Meal
            </h2>
            <p className="text-lg text-[var(--color-foreground)]/80 leading-relaxed mb-8 max-w-xl">
              Whether you&apos;re stopping by Kopargaon for a meal or looking for a comfortable
              vegetarian dining experience, Swastik brings together familiar Indian flavours
              and a welcoming atmosphere.
            </p>

            {/* Bullet list */}
            <ul className="space-y-4">
              {ABOUT_BULLETS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    size={20}
                    className="text-[var(--color-accent-terracotta)] flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-base text-[var(--color-foreground)]/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
