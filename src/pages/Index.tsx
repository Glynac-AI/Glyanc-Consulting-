import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import WhatItIs from "../components/WhatItIs";
import HowWeDoIt from "../components/HowWeDoIt";
import CustomerStories from "../components/CustomerStories";
import SolutionsOverview from "../components/SolutionsOverview";
import LatestInsights from "../components/LatestInsights";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <WhatItIs />
      <HowWeDoIt />
      <CustomerStories />
      <SolutionsOverview />
      <LatestInsights />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
