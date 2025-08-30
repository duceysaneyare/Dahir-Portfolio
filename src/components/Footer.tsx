"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { scrollToSection } from "@/lib/scrollUtils";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 2023;

  return (
    <footer className="py-8 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900/90 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-y-6">
          
          {/* Quick Navigation Links */}
          <div>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              {["home", "about", "projects", "contact"].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="text-gray-600 hover:text-portfolio-blue dark:text-gray-400 dark:hover:text-portfolio-blue-light py-1.5 transition-colors"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-portfolio-blue dark:text-portfolio-blue-light mb-2">
              Dahir<span className="text-gray-800 dark:text-white">.dev</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              &copy; {currentYear} Dahir Muse Abdulle. All rights reserved.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/duceysaneyare"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-portfolio-blue hover:text-white transition-transform hover:scale-110 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-portfolio-blue-light dark:hover:text-gray-900"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/duceysane_92/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-portfolio-blue hover:text-white transition-transform hover:scale-110 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-portfolio-blue-light dark:hover:text-gray-900"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:tuuryaredaahir@gmail.com"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-portfolio-blue hover:text-white transition-transform hover:scale-110 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-portfolio-blue-light dark:hover:text-gray-900"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-xs text-gray-500 dark:text-gray-500">
        </div>
      </div>
    </footer>
  );
};

export default Footer;
