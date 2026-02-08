import { useRef } from 'react';
import { useFadeInOnView } from '../../hooks/useFadeInOnView';

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useFadeInOnView(sectionRef);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32 bg-secondary/30"
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="reveal text-4xl md:text-5xl font-serif mb-6 text-foreground text-center">
          Let's Connect
        </h2>
        
        <p className="reveal text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Open to conversations about education, technology, creative collaboration, 
          or new opportunities. Reach out anytime.
        </p>

        <div className="reveal text-center space-y-2">
          <p className="text-base text-foreground">You can reach me at:</p>
          <p className="text-base text-muted-foreground">
            Email: <a href="mailto:krishnashankar7070@gmail.com" className="text-foreground hover:text-primary transition-colors">krishnashankar7070@gmail.com</a>
          </p>
          <p className="text-base text-muted-foreground">
            Phone: <a href="tel:+919564195759" className="text-foreground hover:text-primary transition-colors">+91 9564195759</a>
          </p>
        </div>
      </div>
    </section>
  );
}
