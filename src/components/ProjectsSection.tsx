'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Eye, ExternalLink, Star } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      title: "Quiz Master Challenge",
      description: "Quiz Master Challenge is a responsive and interactive quiz game built with React. It simulates a 'Who Wants to Be a Millionaire'-style experience, featuring animated answer feedback, sound effects, a progress pyramid, and a final celebration when all questions are answered correctly. The game is fully responsive, supporting mobile, tablet, and desktop devices.",
      image: "/quiz.png",
      repoLink: "https://github.com/duceysaneyare/Quiz_Master_Challenge.git",
      liveLink: "https://quiz-master-challenge.vercel.app/",
      category: "Frontend",
      tech: ["React.js", "Tailwind CSS", "Javascript", "CSS"],
    },
    {
      title: "Caluculator App",
      description: "This is a lightweight and interactive Calculator App built using Vue.js. It replicates the functionality of a basic handheld calculator, allowing users to perform essential arithmetic operations with ease.",
      image: "/calculator.png",
      repoLink: "https://github.com/duceysaneyare/Vue-Caluculator-App.git",
      liveLink: "https://vue-caluculator-app.vercel.app/",
      category: "App",
      tech: ["HTML", "CSS", "Vue.js"],
    },
    {
      title: "Find Coach Web App",
      description: "Find a Coach is a responsive web application designed to connect individuals seeking personal or professional coaching with qualified coaches across various fields. The app enables users to browse, filter, and contact coaches based on category, expertise, and availability.",
      image: "/find.png",
      repoLink: "https://github.com/duceysaneyare/Find-a-Coach-Web-App.git",
      liveLink: "https://vue-http-demo-238d0.web.app/",
      category: "Fullstack",
      tech: ["HTML", "CSS", "JavaScript", "Vue.js", "Firebase"],
    },
    
  ];

  const filteredProjects =
    filter === "All"
      ? projects.slice(0, showAll ? projects.length : 3)
      : projects
          .filter((project) => project.category === filter)
          .slice(0, showAll ? projects.length : 4);

  return (
    <section id="projects" className="py-20 px-4 gradient-bg" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-portfolio-purple dark:text-portfolio-purple-light mb-10">
          Recent Works
        </h2>

        {/* Filter Buttons */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {["All", "Fullstack", "App"].map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? "default" : "outline"}
              className={`rounded-full ${
                filter === category
                  ? "bg-gradient-to-r from-portfolio-purple to-portfolio-teal border-none"
                  : "border-portfolio-purple-light text-portfolio-purple hover:bg-portfolio-purple-lighter/50 dark:text-portfolio-purple-light dark:border-portfolio-purple-light/30"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`glassmorphism overflow-hidden group transition-all duration-500 hover:shadow-xl ${
                inView ? "animate-fadeIn" : "opacity-0"
              }`}
              style={{
                transitionDelay: `${0.1 * (index % 3 + 1)}s`,
                borderImage: project.featured
                  ? "linear-gradient(45deg, rgb(155, 135, 245), rgb(56, 178, 172), rgb(249, 115, 22)) 1"
                  : "",
                borderImageSlice: project.featured ? "1" : "",
              }}
            >
              {/* Project Image with Hover Overlay */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 p-2 rounded-full text-portfolio-purple hover:bg-portfolio-purple hover:text-white transition-colors transform hover:scale-110"
                      aria-label={`View source code for ${project.title}`}
                    >
                      <Code className="h-5 w-5" />
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 p-2 rounded-full text-portfolio-teal hover:bg-portfolio-teal hover:text-white transition-colors transform hover:scale-110"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <Eye className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-0 left-0 w-full px-3 py-1.5 bg-gradient-to-r from-portfolio-purple/80 to-portfolio-teal/80 text-white flex items-center justify-center gap-1.5">
                    <Star className="h-3 w-3 fill-white" />
                    <span className="text-xs font-medium">Featured Project</span>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-portfolio-purple to-portfolio-teal bg-clip-text text-transparent">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech?.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="text-xs font-medium bg-portfolio-purple-lighter border-none text-portfolio-purple dark:bg-portfolio-purple/30 dark:text-portfolio-purple-light"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex justify-between items-center pt-2 border-t border-gray-100 dark:border-gray-800">
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-portfolio-purple hover:text-portfolio-purple-dark dark:text-portfolio-purple-light dark:hover:text-white transition-colors flex items-center"
                  >
                    <Code className="h-3.5 w-3.5 mr-1" />
                    Source
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-portfolio-teal hover:text-portfolio-teal-dark dark:text-portfolio-teal-light dark:hover:text-white transition-colors flex items-center"
                  >
                    Demo
                    <ExternalLink className="ml-1 h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-12">
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            className="rounded-full border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple hover:text-white dark:border-portfolio-purple-light dark:text-portfolio-purple-light dark:hover:bg-portfolio-purple-light dark:hover:text-gray-900 group"
          >
            {showAll ? "Show Less" : "Show More Projects"}
            {!showAll && (
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
