
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import ServicesOverview from "../components/ServicesOverview";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ServicesOverview />
      <Footer />
    </div>
  );
};

export default Index;
