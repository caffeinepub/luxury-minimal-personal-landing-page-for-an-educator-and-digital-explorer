# Specification

## Summary
**Goal:** Update the Hero section portrait to use the newly uploaded photo (20230909_152253-4.jpg) with a corrected, professional head-and-shoulders crop while leaving all Hero text and layout unchanged.

**Planned changes:**
- Create a cropped/rotated head-and-shoulders derivative from 20230909_152253-4.jpg that keeps the full head/face visible and includes shoulders/upper torso, with no effects.
- Update `frontend/src/config/heroPortrait.ts` to point `HERO_PORTRAIT_PATH` to the new cropped portrait asset.
- Ensure no other sections or files (including `frontend/src/components/sections/HeroSection.tsx`) are modified.

**User-visible outcome:** The site’s Hero section displays the user’s uploaded portrait (properly framed with full head/face visible), while the title “Krishna Shankar”, tagline, and “Email Me” CTA remain exactly as before.
