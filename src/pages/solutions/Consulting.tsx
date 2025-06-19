import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const Consulting = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-lcw-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-8">
              Consulting
            </h1>
            <p className="text-xl text-lcw-light-gray mb-10 max-w-3xl mx-auto leading-relaxed font-body">
              Find your strategic solution with expert consulting for cultural transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-lcw-text-dark mb-6">
              Strategic consulting solutions
            </h2>
            <p className="text-xl text-lcw-text-light font-body max-w-3xl mx-auto leading-relaxed">
              Our expert consultants help you develop the mindsets, systems, and skills needed for lasting cultural transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-display font-bold text-lcw-text-dark mb-4">
                Cultural Assessment & Strategy
              </h3>
              <p className="text-lcw-text-light font-body leading-relaxed mb-6">
                We help you assess your current culture and develop comprehensive strategies for inclusive transformation.
              </p>
              <ul className="space-y-3 text-lcw-text-light font-body">
                <li>• Cultural audits and assessments</li>
                <li>• Strategic planning and roadmaps</li>
                <li>• Policy and process reviews</li>
                <li>• Change management support</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold text-lcw-text-dark mb-4">
                Expert Guidance & Support
              </h3>
              <p className="text-lcw-text-light font-body leading-relaxed mb-6">
                Our consultants provide ongoing support and guidance throughout your cultural transformation journey.
              </p>
              <ul className="space-y-3 text-lcw-text-light font-body">
                <li>• Executive coaching</li>
                <li>• Team facilitation</li>
                <li>• Implementation support</li>
                <li>• Progress monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consulting; 