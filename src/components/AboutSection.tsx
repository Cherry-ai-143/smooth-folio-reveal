
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent"></div>
      <div className="container-section relative">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg text-muted-foreground">
              Hello! I'm John, a passionate web developer with a keen eye for design and a love for creating intuitive, dynamic user experiences.
            </p>
            <p className="text-lg text-muted-foreground">
              With over 5 years of experience in the field, I've worked on a variety of projects from simple landing pages to complex web applications. I'm constantly learning and exploring new technologies to stay at the forefront of web development.
            </p>
            <p className="text-lg text-muted-foreground">
              When I'm not coding, you can find me hiking in the mountains, reading science fiction, or experimenting with new recipes in the kitchen.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h3 className="font-bold text-xl mb-2">Education</h3>
                <ul className="space-y-2">
                  <li className="flex flex-col">
                    <span className="font-medium">Computer Science</span>
                    <span className="text-sm text-muted-foreground">University of Technology</span>
                    <span className="text-sm text-muted-foreground">2014 - 2018</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-xl mb-2">Experience</h3>
                <ul className="space-y-2">
                  <li className="flex flex-col">
                    <span className="font-medium">Senior Developer</span>
                    <span className="text-sm text-muted-foreground">Tech Solutions Inc.</span>
                    <span className="text-sm text-muted-foreground">2020 - Present</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-medium">Web Developer</span>
                    <span className="text-sm text-muted-foreground">Digital Agency</span>
                    <span className="text-sm text-muted-foreground">2018 - 2020</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center animate-fade-in-right" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              {/* Main image container */}
              <div className="w-full max-w-md aspect-[3/4] rounded-lg bg-gradient-to-br from-primary/80 to-secondary/80 p-2">
                <div className="w-full h-full rounded-md overflow-hidden bg-muted">
                  {/* Placeholder for actual image */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                    <span className="text-6xl text-gray-400">Portrait</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-lg border-4 border-accent/30 -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full border-4 border-secondary/30 -z-10"></div>
            </div>
            
            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-md mt-12">
              <div className="bg-card rounded-lg p-4 shadow-md text-center">
                <span className="block text-3xl font-bold text-primary">5+</span>
                <span className="text-sm text-muted-foreground">Years Experience</span>
              </div>
              <div className="bg-card rounded-lg p-4 shadow-md text-center">
                <span className="block text-3xl font-bold text-primary">50+</span>
                <span className="text-sm text-muted-foreground">Projects Completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
