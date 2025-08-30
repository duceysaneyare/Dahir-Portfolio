'use client';

import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Code,
  Mail,
  Calendar,
  Award,
  Globe,
  GraduationCap,
  BookOpen,
  CheckCircle2,
} from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-portfolio-purple dark:text-portfolio-purple-light">
          Get to Know Me
        </h2>

        {/* Main About Content */}
        <div className="mt-14 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-12">
     {/* Image */}
<div className="lg:w-1/3 w-full flex justify-center relative">
  <div className="relative w-64 h-[430px] sm:w-72 sm:h-[460px] overflow-hidden rounded-2xl shadow-xl border border-portfolio-purple/20 dark:border-gray-800 z-10 bg-gradient-to-b from-portfolio-blue/5 to-portfolio-purple/5 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <img
      src="/dahir.jpg"
      alt="Dahir Muse"
      className="w-full h-full object-cover filter contrast-105 brightness-105"
      style={{ objectPosition: 'center center' }}
      role="img"
    />
    <div className="absolute inset-0 shadow-inner pointer-events-none rounded-2xl"></div>
  </div>

  {/* Background Layers */}
  <div className="absolute top-4 -left-4 w-full h-full bg-portfolio-blue opacity-10 rounded-2xl -z-10 transform -rotate-6"></div>
  <div className="absolute top-8 -left-8 w-full h-full border border-portfolio-purple/30 opacity-30 rounded-2xl -z-20 transform -rotate-3"></div>
</div>


          {/* Info */}
          <div className="lg:w-2/3 w-full flex flex-col items-center lg:items-start">
            <Badge
              variant="outline"
              className="mb-4 px-3 py-1 text-portfolio-purple dark:text-portfolio-blue-light border-portfolio-purple dark:border-portfolio-blue-light"
            >
              About Me
            </Badge>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
             Dahir Muse Abdulle
            </h2>
            <h3 className="text-xl text-portfolio-blue dark:text-portfolio-blue-light mb-5 font-medium">
              Full-Stack Developer
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl text-center lg:text-left leading-relaxed">
              I’m a passionate Full-Stack Developer with a strong foundation in computer science, holding a BSc from Jamhuriya University. I build intuitive, performant web and mobile apps using modern technologies like React, Node.js, and Flutter. My focus is always on delivering clean, scalable solutions that bring real value to users and businesses alike.
            </p>


{/* Professional Highlights */}
<div className="glassmorphism p-6 w-full max-w-3xl lg:min-w-[600px] mb-6">
  <h4 className="text-lg font-semibold mb-4 text-portfolio-purple dark:text-portfolio-purple-light">
    Professional Highlights
  </h4>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {/* Professional Status */}
    <div className="flex items-start gap-3 pb-4 border-b sm:border-b-0 sm:border-r border-gray-100 dark:border-gray-800">
      <Briefcase className="h-5 w-5 text-portfolio-teal flex-shrink-0 mt-1" />
      <div>
        <span className="block text-sm font-medium text-gray-900 dark:text-gray-100">
          Professional Status
        </span>
        <p className="text-sm text-gray-600 dark:text-gray-300">Open to Opportunities</p>
        <span className="mt-1 inline-block px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded text-xs">
          Available for Freelance
        </span>
      </div>
    </div>

    {/* Tech Expertise */}
    <div className="flex items-start gap-3 pb-4 border-b sm:border-b-0 border-gray-100 dark:border-gray-800">
      <Code className="h-5 w-5 text-portfolio-purple flex-shrink-0 mt-1" />
      <div className="w-full">
        <span className="block text-sm font-medium text-gray-900 dark:text-gray-100">
          Tech Expertise
        </span>
        <div className="flex flex-wrap gap-2 mt-2">
          <Badge className="bg-portfolio-purple-lighter text-portfolio-purple dark:bg-portfolio-purple/20 dark:text-portfolio-purple-light border-none">
            MERN Stack
          </Badge>
          <Badge className="bg-portfolio-teal-lighter text-portfolio-teal dark:bg-portfolio-teal/20 dark:text-portfolio-teal-light border-none">
            Next.js
          </Badge>
          <Badge className="bg-portfolio-blue-lighter text-portfolio-blue dark:bg-portfolio-blue/20 dark:text-portfolio-blue-light border-none">
            PHP Laravel
          </Badge>
          <Badge className="bg-portfolio-coral-lighter text-portfolio-coral dark:bg-portfolio-coral/20 dark:text-portfolio-coral-light border-none">
            Flutter
          </Badge>
        </div>
      </div>
    </div>

    {/* Experience */}
    <div className="flex items-start gap-3">
      <Calendar className="h-5 w-5 text-portfolio-coral flex-shrink-0 mt-1" />
      <div>
        <span className="block text-sm font-medium text-gray-900 dark:text-gray-100">
          Experience
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-300">3+ Years</span>
      </div>
    </div>

    {/* Projects */}
    <div className="flex items-start gap-3">
      <Award className="h-5 w-5 text-portfolio-blue flex-shrink-0 mt-1" />
      <div>
        <span className="block text-sm font-medium text-gray-900 dark:text-gray-100">
          Projects
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-300">25+ Completed</span>
      </div>
    </div>

    {/* Location */}
    <div className="flex items-start gap-3">
      <Globe className="h-5 w-5 text-portfolio-teal flex-shrink-0 mt-1" />
      <div>
        <span className="block text-sm font-medium text-gray-900 dark:text-gray-100">
          Location
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-300">Mogadishu, Somalia</span>
      </div>
    </div>

    {/* Contact */}
    <div className="flex items-start gap-3">
      <Mail className="h-5 w-5 text-portfolio-purple flex-shrink-0 mt-1" />
      <div>
        <span className="block text-sm font-medium text-gray-900 dark:text-gray-100">
          Contact
        </span>
        <a
          href="mailto:tuuryaredaahir@gmail.com"
          className="text-sm text-gray-600 dark:text-gray-300 hover:text-portfolio-purple dark:hover:text-portfolio-purple-light transition-colors"
        >
          tuuryaredaahir@gmail.com
        </a>
      </div>
    </div>
  </div>
</div>

          </div>
        </div>

        {/* Next: You can keep your dev cards and events section here exactly as-is. They’re well-structured already. */}
      </div>
    </section>
  );
};

export default AboutSection;