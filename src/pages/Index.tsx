
import Header from '@/components/Header';
import HomeSection from '@/components/HomeSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-background">
      <Header />
      <HomeSection />
      <div className="relative">
        {/* Decorative divider */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-background dark:from-transparent dark:to-background z-10"></div>
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
