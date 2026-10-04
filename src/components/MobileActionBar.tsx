import { Phone, MapPin, UtensilsCrossed } from "lucide-react";
import { RESTAURANT_INFO } from "../data/restaurant";

export default function MobileActionBar() {
  return (
    <nav aria-label="Quick actions" className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-black/10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden">
      <div className="grid grid-cols-3 divide-x divide-black/10">
        <a 
          href={RESTAURANT_INFO.phoneLink}
          className="py-3 flex flex-col items-center justify-center gap-1 text-xs font-medium text-foreground hover:bg-gray-50 transition-colors"
        >
          <Phone size={18} className="text-[var(--color-accent-terracotta)]" />
          Call
        </a>
        <a 
          href={RESTAURANT_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 flex flex-col items-center justify-center gap-1 text-xs font-medium text-foreground hover:bg-gray-50 transition-colors"
        >
          <MapPin size={18} className="text-[var(--color-accent-terracotta)]" />
          Directions
        </a>
        <a 
          href="#menu"
          className="py-3 flex flex-col items-center justify-center gap-1 text-xs font-medium text-foreground hover:bg-gray-50 transition-colors"
        >
          <UtensilsCrossed size={18} className="text-[var(--color-accent-terracotta)]" />
          Menu
        </a>
      </div>
    </nav>
  );
}
