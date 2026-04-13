# Ak Law Chamber Landing Experience

This project now delivers a premium single-page site for Ak Law Chamber with React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, Lucide icons, Zod, and React Hook Form.

## Commands
- Install dependencies (after cloning or when deps change): `npm install`
- Production build (run after every code update): `npm run build`

## Architecture Overview
- `src/App.tsx` stitches the page sections in order: navigation, hero, stats, about, services, testimonials, FAQ, CTA, contact, footer.
- Components live in `src/components/`:
  - `NavigationBar` – animated fixed header with responsive menu and CTA.
  - `HeroSection` – animated hero with brand gradient, stats, and CTA buttons.
  - `StatsStrip`, `AboutSection`, `ServicesSection`, `TestimonialsSection`, `FAQSection`, `CTASection`, `ContactSection`, `Footer` – content sections using Tailwind, Framer Motion, and Lucide icons.
  - `ScrollComponents` – scroll progress bar and floating scroll-to-top button.
- `ServicesSection` uses framer-motion `AnimatePresence` to expand service cards.
- `TestimonialsSection` runs a timed carousel with avatars and rating indicator.
- `ContactSection` handles form validation with React Hook Form + Zod and shows success feedback.
- Global styles (`src/index.css`) define brand fonts, color palette, smooth scrolling, and reusable blur helper.
- Tailwind theme (`tailwind.config.js`) extends fonts, brand colors, and custom shadows.

## Assets
- Background/hero and testimonial portraits are referenced via CDN URLs. Ensure they remain accessible or replace with project-hosted images if needed.

## Notes for Future Development
- Maintain absolute asset paths (e.g., `/assets/...`) when moving images into the `public` build pipeline.
- Reuse gradients and colors defined in Tailwind theme to keep visual consistency.
- Keep running `npm run build` after modifications to guarantee production readiness.
