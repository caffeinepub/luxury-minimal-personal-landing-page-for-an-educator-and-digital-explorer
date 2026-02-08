import { useRef } from 'react';
import { useFadeInOnView } from '../../hooks/useFadeInOnView';
import { HERO_PORTRAIT_PATH } from '../../config/heroPortrait';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useFadeInOnView(sectionRef);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero texture background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-texture.dim_2400x1200.png"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        <div className="reveal mb-6">
          <img
            src="/assets/generated/personal-mark.dim_512x512.png"
            alt="Personal mark"
            className="h-16 w-16 mx-auto mb-8 opacity-70"
          />
        </div>
        
        {/* Portrait image */}
        {HERO_PORTRAIT_PATH && (
          <div className="reveal mb-8">
            <img
              src={HERO_PORTRAIT_PATH}
              alt="Krishna Shankar"
              className="w-48 h-48 md:w-56 md:h-56 mx-auto object-cover object-top rounded-sm"
            />
          </div>
        )}
        
        <h1 className="reveal text-5xl md:text-6xl lg:text-7xl font-serif mb-6 text-foreground leading-tight">
          Krishna Shankar
        </h1>
        
        <p className="reveal text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Education Professional | Technology-Oriented | Continuous Learner
        </p>
        
        <div className="reveal">
          <a
            href="mailto:krishnashankar7070@gmail.com"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-200 shadow-subtle hover:shadow-md"
          >
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
}
