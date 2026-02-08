import { useRef } from 'react';
import { useFadeInOnView } from '../../hooks/useFadeInOnView';

export function VisionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useFadeInOnView(sectionRef);

  return (
    <section
      id="vision"
      ref={sectionRef}
      className="py-24 md:py-32 bg-background"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="reveal text-4xl md:text-5xl font-serif mb-12 text-foreground">
          Vision & Philosophy
        </h2>
        
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p className="reveal">
            I believe in the power of continuous learning and evolution. Education is not static—it's 
            a living, breathing process that adapts to the needs of each learner and the changing world 
            around us.
          </p>
          
          <p className="reveal">
            Technology and education are no longer separate domains. They intersect in powerful ways, 
            creating new possibilities for how we teach, learn, and grow. I am fascinated by this 
            intersection and committed to exploring how digital tools, AI, and creative thinking can 
            transform educational experiences.
          </p>
          
          <p className="reveal">
            My vision is to bridge traditional teaching with modern technology, creating meaningful 
            learning experiences that prepare students—and myself—for a future that demands adaptability, 
            creativity, and a global perspective. I am at the beginning of something meaningful, and I'm 
            excited to see where this journey leads.
          </p>
        </div>
      </div>
    </section>
  );
}
