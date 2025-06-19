import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const ServicesResearch = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-lcw-text-dark mb-6">
            Research Services
          </h1>
          <p className="text-xl text-lcw-text-light font-body mb-8">
            Deep technical and market analysis.
          </p>
          <div className="bg-lcw-light-gray p-8 rounded-lg">
            <p className="text-lcw-text-light font-body">
              This page is under development. Our research team provides deep technical and market analysis for crypto projects and protocols.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesResearch; 