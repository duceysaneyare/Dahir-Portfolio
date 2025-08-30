/**
 * Smoothly scrolls to the specified element ID without changing the URL
 * Accounts for fixed header height
 */
export const scrollToSection = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    // Get the header height
    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 0;

    // Get the element's position
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20; // Extra 20px padding

    // Scroll to the adjusted position
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
