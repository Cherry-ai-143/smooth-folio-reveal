
import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Web Developer & Designer";
  const typingSpeed = 100;

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ 
        backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(79, 70, 229, 0.15) 0%, transparent 70%)'
      }}
    >
      <div className="container-section">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 animate-fade-in-left">
            <span className="text-primary font-medium mb-4 block">Hello, I'm</span>
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-4">
              John Doe
            </h1>
            <div className="h-8 mb-6">
              <h2 className="text-xl md:text-2xl text-muted-foreground font-inter border-r-2 border-primary pr-1 inline-block">
                {typedText}
              </h2>
            </div>
            <p className="text-muted-foreground mb-8 max-w-lg">
              I design and code beautifully simple things, and I love what I do. Building digital products, brands, and experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary" onClick={scrollToProjects}>
                View My Work
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="btn-outline" onClick={scrollToContact}>
                Contact Me
              </button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center animate-fade-in-right">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Decorative circles */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm animate-pulse"></div>
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/30 animate-spin" style={{ animationDuration: '15s' }}></div>
              
              {/* Placeholder for profile image */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg overflow-hidden flex items-center justify-center">
                <span className="text-6xl text-white font-bold">JD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute top-24 -right-12 w-72 h-72 bg-secondary/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
