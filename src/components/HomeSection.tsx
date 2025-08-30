
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import { scrollToSection } from '@/lib/scrollUtils';
import TechStackLogo from './TechStackLogos';

const HomeSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-between pt-16 sm:pt-6 pb-10 px-4 md:px-6 lg:px-8 xl:px-12 gradient-bg"
    >
      {/* Text Section (Left) */}
      <div
        className={`w-full lg:w-5/12 xl:w-5/12 mx-auto  flex flex-col justify-center ${
          isVisible ? 'animate-fadeIn' : 'opacity-0'
        }`}
        style={{ transitionDelay: '0.2s' }}
      >
        <div className="mb-4">
          <span className="px-4 py-1 rounded-full text-sm font-medium inline-block animated-border">
            <span className="bg-gradient-to-r from-portfolio-teal via-portfolio-purple to-portfolio-coral bg-clip-text text-transparent">
              Full-Stack Developer
            </span>
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hey, I'm <span className="bg-gradient-to-r from-portfolio-purple via-portfolio-teal to-portfolio-coral bg-clip-text text-transparent">Dahir</span>
        </h1>
        <p className="text-lg mb-6 text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
          I build high-quality full-stack web and mobile applications with a focus on clean code, intuitive design, and seamless user experiences. Specializing in Flutter and MERN stack technologies, I combine technical expertise with creative problem-solving to deliver responsive, user-focused solutions that drive real business value.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-2">
          <Button
            asChild
            className="rounded-full bg-gradient-to-r from-portfolio-purple to-portfolio-teal hover:shadow-lg transition-all duration-300 animate-bounce-subtle"
            style={{ animationDelay: '0.6s' }}
          >
            <a
              href="/Dahir_FullStack Developer_CV.pdf"
              download
              className="flex items-center"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-portfolio-purple text-portfolio-purple hover:text-white hover:bg-portfolio-purple dark:border-portfolio-purple-light dark:text-portfolio-purple-light dark:hover:bg-portfolio-purple-light dark:hover:text-gray-900 group"
            onClick={() => scrollToSection('contact')}
          >
            <span className="flex items-center">
              Let's Talk
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
        </div>

        {/* Tech stack logos */}
        <div className="mt-10 flex flex-wrap justify-center lg:justify-start">
          <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center justify-center lg:justify-start">
            {['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Flutter','PHP','Python','HTML5','CSS3','JavaScript','Vue.js','MySQL','Firebase','Bootstrap'].map((tech, index) => (
              <div
                key={tech}
                className="flex flex-col items-center group"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <div className="p-2 sm:p-3 bg-white/70 dark:bg-gray-800/70 border border-gray-200/50 dark:border-gray-700/50 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110">
                  <TechStackLogo name={tech} className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                </div>
                <span className="mt-1 text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Section (Right) */}
      <div className={`w-full lg:w-5/12 xl:w-5/12 flex justify-center items-center mt-10 lg:mt-0 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ transitionDelay: '0.5s' }}>
        <div className="relative">
          {/* Decorative stars */}
          <Star className="absolute -top-6 sm:-top-10 -left-6 sm:-left-8 text-portfolio-purple opacity-60 animate-pulse-gentle h-4 w-4 sm:h-6 sm:w-6" />
          <Star className="absolute top-6 sm:top-10 -right-6 sm:-right-10 text-portfolio-teal opacity-60 animate-pulse-gentle h-3 w-3 sm:h-4 sm:w-4" style={{ animationDelay: '0.5s' }} />
          <Star className="absolute -bottom-6 sm:-bottom-8 -right-4 sm:-right-6 text-portfolio-coral opacity-60 animate-pulse-gentle h-4 w-4 sm:h-5 sm:w-5" style={{ animationDelay: '1s' }} />

          {/* Main image with animated border */}
          <div className="hidden sm:block  rounded w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[26rem] lg:h-[26rem] xl:w-[28rem] xl:h-[28rem] overflow-hidden shadow-2xl animate-float border-4 border-white dark:border-gray-700 animated-border relative bg-gradient-to-b from-portfolio-purple/10 to-portfolio-teal/10">
            <img
              src="/dahir.png"
              alt="Profile Image"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 filter contrast-105 brightness-105"
              style={{ objectPosition: 'center center' }}
            />
            <div className="absolute inset-0 shadow-inner pointer-events-none"></div>
          </div>

          {/* Floating decoration elements */}
          <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-16 sm:w-20 md:w-24 lg:w-32 h-16 sm:h-20 md:h-24 lg:h-32 bg-portfolio-teal rounded-full opacity-20 blur-xl animate-pulse-gentle"></div>
          <div className="absolute -bottom-6 sm:-bottom-10 -left-6 sm:-left-10 w-20 sm:w-24 md:w-32 lg:w-40 h-20 sm:h-24 md:h-32 lg:h-40 bg-portfolio-purple rounded-full opacity-20 blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -top-10 sm:-top-16 -left-10 sm:-left-16 w-16 sm:w-20 md:w-24 lg:w-28 h-16 sm:h-20 md:h-24 lg:h-28 bg-portfolio-coral rounded-full opacity-20 blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
