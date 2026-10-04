=== START COPYING FROM HERE ===

# Instructions for Antigravity Agent

This file contains the exact prompts to paste into Antigravity, phase by phase.

**Rule:** Do NOT paste more than one phase prompt at a time. Let the agent
finish each phase, review it, then move to the next.

---

## PHASE 2 PROMPT — Design System + Globals

This is a Next.js 16 project with TypeScript, Tailwind CSS, and App Router.
The goal is to build a premium one-page restaurant website for
"Hotel Shetty's Swastik - Veg Treat" in Kopargaon, Maharashtra.

For this phase, ONLY set up the design system. Do NOT build any sections yet.

1. Configure Tailwind with these custom colors:
   - background: warm ivory (#FBF7F0)
   - foreground: deep charcoal (#1C1917)
   - accent-terracotta: rich earthy red (#B23A2F)
   - accent-brass: muted gold (#B8894B)
   - accent-green: dark forest green (#2D4A32) - use sparingly
   - surface: pure white (#FFFFFF)

2. Add Google Fonts via next/font/google:
   - Playfair Display (display headings) - weights 400, 600, 700
   - Inter (body) - weights 400, 500, 600
   - Noto Sans Devanagari (Marathi text) - weights 400, 600

3. Set up global CSS in src/app/globals.css:
   - Reset margins/padding
   - Enable smooth scrolling
   - Base body styles using ivory background + charcoal text
   - Respect prefers-reduced-motion (disable animations)

4. Create a cn() utility in src/lib/utils.ts (combine classnames)

5. Do NOT install Framer Motion yet - we'll add it later.

Generate:
- tailwind.config.ts (or update existing)
- src/app/globals.css
- src/app/layout.tsx (with font setup + metadata)
- src/lib/utils.ts

Show me the plan before writing code.

---

## PHASE 3 PROMPT — Data Layer

Create src/data/restaurant.ts. This file is the SINGLE SOURCE OF TRUTH
for all restaurant info. UI components must import from here.

Include ONLY verified information:

Restaurant:
- name: "Hotel Shetty's Swastik - Veg Treat"
- marathiName: "होटल शेट्टी'स स्वास्तिक- वेज ट्रीट"
- tagline: "Pure Vegetarian"
- address: "Hotel Swastik Food Mall, Nagar Manmad Hwy, near Jangali Maharaj Ashram, Kopargaon, Maharashtra 423601"
- phone: "073503 33222"
- phoneLink: "tel:+917350333222"
- googleMapsUrl: "https://www.google.com/maps/place/Hotel+Shetty's+Swastik-+Veg+Treat/"
- rating: 4.5
- reviewCount: 9808

Signature dishes (only these three are verified):
1. Special Kolhapuri Misal Pav - tag: "Signature Favourite" - category: "Maharashtrian"
2. Rumali Khakra - tag: "Must Try" - category: "Snacks"
3. Sev Bhaji - tag: "Guest Favourite" - category: "Maharashtrian"

Menu items - include ONLY these (verified from Google photos/highlights):
- Special Kolhapuri Misal Pav (Maharashtrian)
- Rumali Khakra (Snacks)
- Sev Bhaji (Maharashtrian)
- Falooda (Desserts)
- Masala Papad (Snacks)
- Dosa (South Indian)
- Espresso (Beverages)

DO NOT invent prices. Leave price field undefined/omitted.

Features (Why Swastik):
- Pure Vegetarian
- Maharashtrian & Punjabi Flavours
- Quick Service
- Ample Parking
- Clean & Comfortable

Gallery images - use placeholder paths like:
- /images/gallery/misal-pav.jpg
- /images/gallery/rumali-khakra.jpg
- /images/gallery/restaurant-interior.jpg
- (8-10 placeholders with realistic names)

Export everything as typed constants using TypeScript interfaces.

Show the plan first, then generate src/data/restaurant.ts and type definitions.

---

## PHASE 4 PROMPT — Navbar + Hero + Trust Bar

Build three components:

1. src/components/Navbar.tsx
   - Sticky at top
   - Left: "Hotel Shetty's Swastik" (display font)
   - Center/right links: Home, Menu, Specialities, Gallery, Reviews, Visit Us
   - Right CTA: "Get Directions" (opens Google Maps in new tab)
   - On scroll: shrink height, add subtle shadow + ivory background
   - Mobile: hamburger menu -> slide-in drawer
   - Smooth transitions

2. src/components/Hero.tsx
   - Eyebrow: "PURE VEGETARIAN - KOPARGAON"
   - Headline: "Good Food. Good Company. The Swastik Way."
   - Subcopy: "Discover authentic vegetarian flavours, comforting favourites and a dining experience made for families, travellers and food lovers."
   - Two CTAs: "Explore Menu" (scroll to #menu) + "Get Directions"
   - Rating badge below: 4.5 stars - 9,800+ Google Reviews
   - Right side: large hero image (use /images/hero-food.jpg placeholder)
   - Subtle decorative element (thin brass line, not flashy)

3. src/components/TrustBar.tsx
   - Below hero
   - 5 items: 4.5 stars | 9,808 Reviews | Pure Vegetarian | Ample Parking | Quick Service
   - Horizontal layout, thin dividers between items
   - Elegant icons from lucide-react (install it: npm install lucide-react)

Style: warm ivory background, charcoal text, terracotta CTA buttons,
brass accents on dividers. Use CSS transitions (no Framer Motion yet).

Mobile-first. Ensure it looks great at 360px wide.

Show me the plan first.

---

## PHASE 5 PROMPT — Signature Dishes + About

Build two components:

1. src/components/SignatureDishes.tsx
   - Heading: "A Few Favourites"
   - Subheading: "Some of the flavours guests come back for."
   - 3 editorial cards (NOT identical layouts):
     * Special Kolhapuri Misal Pav (large card, spans 2 columns)
     * Rumali Khakra (medium)
     * Sev Bhaji (medium)
   - Each card: image, tag badge, dish name, short description
   - Hover: subtle image zoom + slight lift
   - Asymmetric layout - not a boring 3-column grid

2. src/components/AboutSection.tsx
   - Eyebrow: "THE SWASTIK EXPERIENCE"
   - Heading: "More Than Just a Meal"
   - Copy: "Whether you're stopping by Kopargaon for a meal or looking for a comfortable vegetarian dining experience, Swastik brings together familiar Indian flavours and a welcoming atmosphere."
   - Bullet list:
     - Pure vegetarian kitchen
     - Maharashtrian and Punjabi flavours
     - Quick, friendly service
     - Clean, comfortable restrooms
     - Ample parking for families and travellers
   - Layout: split - image on left (restaurant-interior.jpg), text on right
   - Mobile: stack vertically

Do NOT invent founding year, family history, chef names, or awards.

Show me the plan first.

---

## PHASE 6 PROMPT — Menu Section

Build src/components/MenuSection.tsx

- Heading: "Explore the Menu"
- Category tabs: All | Maharashtrian | Punjabi | South Indian | Snacks | Beverages | Desserts
- Tab click filters visible items with a smooth transition
- Items come from src/data/restaurant.ts
- ONLY show verified items (no fabrication)
- Do NOT display prices (since we don't have verified prices)
- Layout: responsive grid (1 col mobile, 2 cols tablet, 3 cols desktop)
- Each card: small image, dish name, category badge
- Use useState for active tab
- Empty categories show: "Menu coming soon - ask us at the counter."
- Add a subtle note: "Full menu available at the restaurant."

Show me the plan first.

---

## PHASE 7 PROMPT — Gallery + Lightbox

Build:
1. src/components/Gallery.tsx
   - Heading: "See What's Cooking"
   - Masonry layout (CSS grid with varied row spans)
   - Categories: All | Food | Ambience | Highlights
   - Placeholder images from /public/images/gallery/
   - Hover: subtle zoom + overlay with dish/category name
   - Lazy load with next/image

2. src/components/ImageLightbox.tsx
   - Opens on image click
   - Full-screen overlay with dark backdrop
   - Close (X) button, next (right arrow), prev (left arrow)
   - Keyboard: Escape closes, ArrowLeft/ArrowRight navigate
   - Mobile: swipe left/right
   - Accessible: aria-labels, focus trap
   - Smooth fade/scale animation

Install framer-motion for the lightbox animation only if needed.
Show me the plan first.

---

## PHASE 8 PROMPT — Reviews + Why Swastik

Build:
1. src/components/ReviewSection.tsx
   - Heading: "Loved by Thousands"
   - Big rating display: "4.5" + 5 stars + "9,808 Google Reviews"
   - 3 review-summary cards (NOT fake quotes):
     * "Guests frequently highlight the Maharashtrian and Punjabi flavours."
     * "Visitors appreciate the quick, friendly service."
     * "Reviewers mention clean restrooms and ample parking."
   - CTA button: "Read All Google Reviews" -> Google Maps link
   - Label clearly: "Based on Google review summary"

2. src/components/WhySwastik.tsx
   - Heading: "Why Guests Choose Swastik"
   - 5 feature cards with lucide-react icons:
     * Pure Vegetarian
     * Maharashtrian & Punjabi Flavours
     * Quick Service
     * Ample Parking
     * Clean & Comfortable
   - Elegant cards, not oversized emoji
   - Grid: 1 col mobile, 2 col tablet, 3 col desktop

Show me the plan first.

---

## PHASE 9 PROMPT — Location + Final CTA + Footer + Mobile Bar

Build:
1. src/components/LocationSection.tsx
   - Heading: "Find Us in Kopargaon"
   - Full address, phone
   - Buttons: "Get Directions" (Google Maps) + "Call Restaurant" (tel: link)
   - Static map-style visual (NO Google Maps API key)
   - Hours: "Check-in: 12:00 PM | Check-out: 11:00 AM"

2. src/components/FinalCTA.tsx
   - Heading: "Hungry Yet?"
   - Copy: "Make your next stop a delicious one."
   - 3 buttons: View Menu | Get Directions | Call Now
   - Strong but simple visual

3. src/components/Footer.tsx
   - Name + Marathi name
   - Quick links
   - Phone
   - Google rating badge
   - Copyright 2026 Hotel Shetty's Swastik - Veg Treat
   - NO fake social media links

4. src/components/MobileActionBar.tsx
   - Fixed at bottom, ONLY visible on mobile (< 768px)
   - Three buttons: Call | Directions | Menu
   - Icons + labels
   - Doesn't cover content (add padding-bottom on mobile)

Update src/app/page.tsx to compose all sections in order:
Navbar -> Hero -> TrustBar -> SignatureDishes -> About -> Menu -> Gallery ->
WhySwastik -> Reviews -> Location -> FinalCTA -> Footer -> MobileActionBar

Show me the plan first.

---

## PHASE 10-12 PROMPT — Polish, Accessibility, SEO

Final polish pass:

1. RESPONSIVE: Test at 360px, 375px, 390px, 414px, 768px, 1024px, 1440px.
   Fix any overflow, cramped text, or broken layouts.

2. ACCESSIBILITY:
   - Verify semantic HTML (nav, main, section, footer)
   - Alt text on every image
   - Visible focus rings
   - All icon-only buttons have aria-labels
   - Color contrast passes WCAG AA

3. SEO:
   - Set metadata in src/app/layout.tsx:
     title: "Hotel Shetty's Swastik - Veg Treat | Vegetarian Restaurant in Kopargaon"
     description: "Hotel Shetty's Swastik - Veg Treat in Kopargaon. Discover vegetarian Maharashtrian and Punjabi flavours, signature dishes, quick service and a comfortable dining experience."
   - Add Open Graph tags
   - Add JSON-LD Restaurant schema in head with:
     * name, phone, address, aggregateRating (4.5, 9808)
     * url: leave placeholder unless owner provides domain

4. PERFORMANCE:
   - Use next/image for all images
   - Lazy load below-fold images
   - Preload hero image only
   - Ensure npm run build passes with zero errors
   - Ensure npm run lint passes

Report every issue you fixed.

---

## PHASE 13 PROMPT — Deploy Prep

Prepare for deployment:
1. Make sure npm run build works with zero errors
2. Make sure npm run start serves the site correctly
3. Verify all links work (Google Maps, tel:, internal anchors)
4. Write a DEPLOYMENT.md with instructions for:
   - Pushing to GitHub
   - Deploying on Vercel (free tier)
   - Adding a custom domain later
5. Do NOT add fake analytics or tracking scripts

---

## NOTES FOR ME

- Check Antigravity's "Implementation Plan" before approving each phase
- If the agent suggests adding something not verified, tell it:
  "Do not invent facts. Only use what's in src/data/restaurant.ts."
- If images are needed, use placeholders with clear filenames
- After each phase, run npm run dev and check localhost:3000

=== STOP COPYING HERE ===