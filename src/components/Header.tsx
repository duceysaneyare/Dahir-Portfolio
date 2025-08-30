
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Menu, X, Moon, Sun } from 'lucide-react';
import { scrollToSection } from '@/lib/scrollUtils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Check if dark mode is enabled
    if (typeof window !== 'undefined') {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    }

    // Close mobile menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen) {
        const target = event.target as HTMLElement;
        const header = document.querySelector('header');
        if (header && !header.contains(target)) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark');
      setIsDarkMode(!isDarkMode);
    }
  };

  // Toggle mobile menu and handle body scroll lock
  const toggleMobileMenu = (isOpen: boolean) => {
    setIsMobileMenuOpen(isOpen);

    // Lock/unlock body scroll when mobile menu is open/closed
    if (typeof document !== 'undefined') {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 glassmorphism border-none'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <button
          onClick={() => scrollToSection('home')}
          className="text-2xl font-bold bg-gradient-to-r from-portfolio-purple via-portfolio-teal to-portfolio-coral bg-clip-text text-transparent"
        >
          Dahir<span className="text-gray-800 dark:text-white">.dev</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="font-medium text-gray-600 hover:text-portfolio-purple dark:text-gray-300 dark:hover:text-portfolio-purple-light transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-portfolio-purple to-portfolio-teal group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-portfolio-coral" />
            ) : (
              <Moon className="h-5 w-5 text-portfolio-purple" />
            )}
          </button>

          <Button
            onClick={() => scrollToSection('contact')}
            className="rounded-full bg-gradient-to-r from-portfolio-purple to-portfolio-teal hover:shadow-lg transition-all duration-300"
          >
            Let's Talk <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <Sun className="h-4 w-4 text-portfolio-coral" />
            ) : (
              <Moon className="h-4 w-4 text-portfolio-purple" />
            )}
          </button>

          <button
            className="text-gray-700 dark:text-gray-200 hover:text-portfolio-purple dark:hover:text-portfolio-purple-light transition-colors"
            onClick={() => toggleMobileMenu(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 glassmorphism py-4 animate-fadeIn border-t border-white/10">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                className="font-medium text-gray-600 hover:text-portfolio-purple dark:text-gray-300 dark:hover:text-portfolio-purple-light py-2 border-b border-gray-100 dark:border-gray-800 text-left w-full"
                onClick={() => {
                  scrollToSection(link.id);
                  toggleMobileMenu(false);
                }}
              >
                {link.name}
              </button>
            ))}
         
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
