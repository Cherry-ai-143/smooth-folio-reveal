
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  category: string;
  demoUrl?: string;
  codeUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A modern e-commerce platform built with React and Node.js.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Web App",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio website for a photographer.",
    tags: ["HTML", "CSS", "JavaScript", "GSAP"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Web Design",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A task management application with drag and drop functionality.",
    tags: ["React", "TypeScript", "Firebase", "Tailwind"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Web App",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: 4,
    title: "Restaurant Website",
    description: "A responsive website for a local restaurant with online ordering.",
    tags: ["React", "Styled Components", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Web Design",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description: "A weather dashboard that shows current conditions and forecasts.",
    tags: ["JavaScript", "APIs", "Chart.js", "CSS"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Web App",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description: "A fitness tracking application with data visualization.",
    tags: ["React", "TypeScript", "Firebase", "ChartJS"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Web App",
    demoUrl: "#",
    codeUrl: "#"
  }
];

type Filter = "All" | "Web App" | "Web Design";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  const handleFilterClick = (filter: Filter) => {
    setActiveFilter(filter);
  };
  
  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
  };
  
  const closeProjectModal = () => {
    setSelectedProject(null);
  };
  
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container-section">
        <h2 className="section-title">My Projects</h2>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-muted/50 p-1 rounded-lg">
            {["All", "Web App", "Web Design"].map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterClick(filter as Filter)}
                className={cn(
                  "px-4 py-2 rounded-md transition-all duration-300",
                  activeFilter === filter 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : "text-foreground hover:bg-primary/10"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-2 right-2 bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs bg-secondary/30 text-foreground px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <button 
                    className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    onClick={() => openProjectModal(project)}
                  >
                    View Details
                  </button>
                  
                  <div className="flex gap-2">
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.codeUrl && (
                      <a 
                        href={project.codeUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                      >
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div 
            className="bg-card rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-auto animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 sm:h-72 md:h-80">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button 
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2"
                onClick={closeProjectModal}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
              <p className="text-muted-foreground mb-6">{selectedProject.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, idx) => (
                  <span key={idx} className="text-sm bg-secondary/30 text-foreground px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8">
                {selectedProject.demoUrl && (
                  <a 
                    href={selectedProject.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    View Live Demo
                  </a>
                )}
                {selectedProject.codeUrl && (
                  <a 
                    href={selectedProject.codeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    View Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
