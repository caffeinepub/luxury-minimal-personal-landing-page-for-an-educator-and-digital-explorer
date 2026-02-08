import { useRef } from 'react';
import { useFadeInOnView } from '../../hooks/useFadeInOnView';

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useFadeInOnView(sectionRef);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-background"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="reveal text-4xl md:text-5xl font-serif mb-12 text-foreground">
          Background
        </h2>
        
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p className="reveal">
            An educator with nearly four years of experience teaching across multiple levels, 
            from early childhood to upper primary. Specializing in English and foundational subjects, 
            with a deep interest in communication, creativity, and technology.
          </p>
          
          <p className="reveal">
            Beyond the classroom, there is active exploration of digital tools, AI platforms, creative media, 
            and modern tech workflows. A mindset rooted in curiosity, adaptability, and continuous learning. 
            Building ideas, systems, content, and experiences.
          </p>
          
          <p className="reveal">
            The journey is one of evolution—from educator to creator, technologist, and independent professional 
            with a global perspective. Focused on growth, curiosity, and preparing for opportunities 
            at the intersection of education and technology.
          </p>
        </div>
      </div>
    </section>
  );
}
