'use client';

import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  return (
    <section
      id="education"
      className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-portfolio-purple dark:text-portfolio-purple-light mb-12">
          Professional Development
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Academic Background */}
          <div className="md:w-1/2 glassmorphism p-8 relative overflow-hidden group">
            {/* Decorative shape */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-portfolio-blue rounded-full opacity-10 transition-transform duration-500 group-hover:scale-150"></div>

            <div className="flex items-center mb-6">
              <GraduationCap className="w-8 h-8 text-portfolio-blue dark:text-portfolio-blue-light mr-3" />
              <h2 className="text-2xl font-bold text-portfolio-blue dark:text-portfolio-blue-light">
                Academic Background
              </h2>
            </div>

            <Badge className="mb-4 bg-portfolio-blue-lighter text-portfolio-blue border-none dark:bg-blue-900/30 dark:text-blue-300">
              Bachelor of Science in Computer Science
            </Badge>

            <div className="mb-1 flex justify-between items-center">
              <p className="text-gray-700 dark:text-gray-300 font-medium">Jamhuriya University</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Graduated: 2024</p>
            </div>

            <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              Gained a solid foundation in full-stack development through coursework and practical experience. Completed multiple real-world projects and participated in hackathons to reinforce hands-on skills and teamwork.
            </p>

            {/* Achievement badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded-full text-xs font-medium">
                Top Graduate
              </span>
            </div>
          </div>

          {/* Continuous Learning */}
          <div className="md:w-1/2 glassmorphism p-8 relative overflow-hidden group">
            {/* Decorative shape */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-portfolio-purple rounded-full opacity-10 transition-transform duration-500 group-hover:scale-150"></div>

            <div className="flex items-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-portfolio-blue dark:text-portfolio-blue-light mr-3"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              <h2 className="text-2xl font-bold text-portfolio-blue dark:text-portfolio-blue-light">
                Continuous Learning
              </h2>
            </div>

            <Badge className="mb-6 bg-portfolio-blue-lighter text-portfolio-blue border-none dark:bg-blue-900/30 dark:text-blue-300">
              Certifications & Professional Development
            </Badge>
            <ul className="space-y-4">
            {[
              "Online Full-Stack Development Program, Udemy Academy (2025).",
              "Completed an intensive course on Building Dynamic Web Applications with PHP & MySQL at Dugsiiye.",
              "Online courses in React, Node.js, and modern web technologies.",
              "Active participation in tech events, workshops, and hackathons.",
            ].map((item, idx) => (
              <li className="flex items-start" key={idx}>
                <div className="h-6 w-6 rounded-full bg-portfolio-blue-lighter flex items-center justify-center text-portfolio-blue dark:bg-blue-900/30 dark:text-blue-300 mr-3 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {item}
                </p>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
