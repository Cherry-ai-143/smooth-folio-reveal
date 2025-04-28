
import React, { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  percentage: number;
  color?: string;
}

const frontendSkills: Skill[] = [
  { name: "HTML & CSS", percentage: 90 },
  { name: "JavaScript", percentage: 85 },
  { name: "React", percentage: 80 },
  { name: "TypeScript", percentage: 75 },
  { name: "Tailwind CSS", percentage: 85 }
];

const backendSkills: Skill[] = [
  { name: "Node.js", percentage: 75 },
  { name: "Express", percentage: 70 },
  { name: "MongoDB", percentage: 65 },
  { name: "REST API", percentage: 80 },
  { name: "Firebase", percentage: 70 }
];

const designSkills: Skill[] = [
  { name: "Figma", percentage: 80 },
  { name: "UI/UX Design", percentage: 75 },
  { name: "Adobe XD", percentage: 65 },
  { name: "Responsive Design", percentage: 90 }
];

const SkillBar = ({ name, percentage }: Skill) => {
  const skillRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (skillRef.current) {
              skillRef.current.style.setProperty('--progress-width', `${percentage}%`);
              skillRef.current.classList.add('animate-progress-bar');
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (skillRef.current) {
      observer.observe(skillRef.current);
    }
    
    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [percentage]);
  
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm font-medium text-primary">{percentage}%</span>
      </div>
      <div className="skill-progress-container">
        <div 
          ref={skillRef}
          className="skill-progress-bar"
          style={{ width: '0%' }}
        ></div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent"></div>
      <div className="container-section relative">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-md animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold mb-4 text-primary">Frontend Development</h3>
            {frontendSkills.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-md animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-bold mb-4 text-primary">Backend Development</h3>
            {backendSkills.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-md animate-fade-in-right" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-xl font-bold mb-4 text-primary">Design Skills</h3>
            {designSkills.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}
          </div>
        </div>
        
        <div className="mt-16 bg-card p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-6 text-center">Other Skills & Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Git & GitHub", "Webpack", "Jest", "Docker", "AWS", "GraphQL", "Sass", "Redux", "Next.js", "Gatsby"].map((tool, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-muted rounded-full text-sm font-medium animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
