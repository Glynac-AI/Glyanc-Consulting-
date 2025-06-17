import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import ServicesOverview from "../components/ServicesOverview";
import IndustryDetails from "../components/IndustryDetails";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ServicesOverview />
      <IndustryDetails />
      <Footer />
    </div>
  );
};

export default Index;
