import { MotionConfig } from 'framer-motion';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import MoreToolsSection from './sections/MoreToolsSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen bg-[#0C0C0C] font-kanit" style={{ overflowX: 'clip' }}>
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <MoreToolsSection />
        <ContactSection />
        <Footer />
      </main>
    </MotionConfig>
  );
}
