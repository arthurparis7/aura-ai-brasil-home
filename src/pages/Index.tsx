
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesGrid from '@/components/ServicesGrid';
import DifferentialsSection from '@/components/DifferentialsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingChatButton from '@/components/FloatingChatButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesGrid />
      <DifferentialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <FloatingChatButton />
    </div>
  );
};

export default Index;
