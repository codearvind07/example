import { ScrollProgress, FloatingActionButton } from "./components/ScrollComponents";
// Removed NavigationBar import
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { StatsStrip } from "./components/StatsStrip";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FAQSection } from "./components/FAQSection";
import { CTASection } from "./components/CTASection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { RequestConsultationPage } from "./components/RequestConsultationPage";

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-brand-sand text-brand-navy">
      <ScrollProgress />
      {/* Removed NavigationBar component */}
      <div>
        <Header />
        <HeroSection />
        <RequestConsultationPage />
        <StatsStrip />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <ContactSection />
        <Footer />
      </div>
      <FloatingActionButton />
    </main>
  );
}

export default App;