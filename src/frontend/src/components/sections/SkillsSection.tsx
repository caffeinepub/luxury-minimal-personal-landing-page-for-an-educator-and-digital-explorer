import { useRef } from 'react';
import { useFadeInOnView } from '../../hooks/useFadeInOnView';
import { BookOpen, MessageCircle, Cpu, Lightbulb, TrendingUp } from 'lucide-react';

const skills = [
  {
    icon: BookOpen,
    title: 'Teaching & Education',
    description: 'Nearly 4 years of experience across early childhood to upper primary levels'
  },
  {
    icon: MessageCircle,
    title: 'Communication & Language',
    description: 'English instruction and foundational subject expertise'
  },
  {
    icon: Cpu,
    title: 'Digital Tools & AI Exploration',
    description: 'Exploring AI platforms, creative media, and modern tech workflows'
  },
  {
    icon: Lightbulb,
    title: 'Creative Thinking & Problem Solving',
    description: 'Building ideas, systems, content, and experiences'
  },
  {
    icon: TrendingUp,
    title: 'Continuous Learning',
    description: 'Curious, adaptable, and always evolving'
  }
];

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useFadeInOnView(sectionRef);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 md:py-32 bg-secondary/30"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="reveal text-4xl md:text-5xl font-serif mb-16 text-foreground text-center">
          What I Do
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="reveal bg-card p-8 border border-border hover:border-primary/20 transition-all duration-300"
            >
              <skill.icon className="w-10 h-10 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-serif mb-3 text-foreground">
                {skill.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
