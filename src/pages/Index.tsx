import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import HeroSection from '@/components/HeroSection';
import FleetSection from '@/components/FleetSection';
import BookingForm from '@/components/BookingForm';
import WhyChooseUs from '@/components/WhyChooseUs';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen">
      <HeroSection />
      <FleetSection />
      <BookingForm />
      <WhyChooseUs />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;