import { RESTAURANT_INFO } from "../data/restaurant";

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-24 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-[55%] flex flex-col items-start text-left">
          <span className="text-[var(--color-accent-brass)] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Pure Vegetarian • Kopargaon
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-[var(--color-foreground)] font-bold leading-tight mb-6">
            Good Food. <br className="hidden sm:block" /> Good Company. <br className="hidden sm:block" /> The Swastik Way.
          </h1>
          <p className="font-[family-name:var(--font-body)] text-lg text-[var(--color-foreground)]/80 max-w-md mb-8 leading-relaxed">
            Discover authentic vegetarian flavours, comforting favourites and a dining experience made for families, travellers and food lovers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
            <a
              href="#menu"
              className="inline-flex justify-center items-center px-6 py-3 bg-[var(--color-accent-terracotta)] text-[var(--color-background)] font-medium rounded-md hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-accent-terracotta)]"
            >
              Explore Menu
            </a>
            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-6 py-3 border-2 border-[var(--color-accent-terracotta)] text-[var(--color-accent-terracotta)] font-medium rounded-md hover:bg-[var(--color-accent-terracotta)] hover:text-[var(--color-background)] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-accent-terracotta)]"
            >
              Get Directions
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[var(--color-foreground)]/70">
            <span className="text-[var(--color-accent-brass)]">★</span>
            <span className="font-semibold">{RESTAURANT_INFO.rating}</span>
            <span>· {RESTAURANT_INFO.reviewCount.toLocaleString()}+ Google Reviews</span>
          </div>
        </div>

        {/* Right Side: Image Placeholder */}
        <div aria-label="Hero image placeholder" className="w-full lg:w-[45%] aspect-[3/4] md:aspect-[4/5] relative rounded-xl shadow-xl bg-[var(--color-background)] border-2 border-[var(--color-accent-brass)]/20 flex flex-col items-center justify-center p-8 text-center">
          <p className="text-[var(--color-foreground)]/60 text-sm border border-dashed border-[var(--color-foreground)]/20 p-4 rounded-md">
            Hero image placeholder <br />
            <span className="font-mono text-xs mt-2 block">/public/images/hero-food.jpg</span>
          </p>
        </div>
      </div>
    </section>
  );
}
