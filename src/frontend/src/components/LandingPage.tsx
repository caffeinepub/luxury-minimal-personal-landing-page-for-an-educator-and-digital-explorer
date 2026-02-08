import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { VisionSection } from './sections/VisionSection';
import { ContactSection } from './sections/ContactSection';
import { StickyNav } from './Nav/StickyNav';
import { Footer } from './Footer';

export function LandingPage() {
  return (
    <div className="min-h-screen">
      <StickyNav />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <VisionSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
