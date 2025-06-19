import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const Journeys = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-lcw-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-8">
              Learning Journeys
            </h1>
            <p className="text-xl text-lcw-light-gray mb-10 max-w-3xl mx-auto leading-relaxed font-body">
              Discover your learning path with customized journeys designed to build sustainable cultural competence.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-lcw-text-dark mb-6">
              Customized learning paths
            </h2>
            <p className="text-xl text-lcw-text-light font-body max-w-3xl mx-auto leading-relaxed">
              Our learning journeys are designed to build sustainable cultural competence across your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-display font-bold text-lcw-text-dark mb-4">
                Personalized Learning Paths
              </h3>
              <p className="text-lcw-text-light font-body leading-relaxed mb-6">
                We create customized learning journeys that address your organization's specific needs and goals.
              </p>
              <ul className="space-y-3 text-lcw-text-light font-body">
                <li>• Assessment-based recommendations</li>
                <li>• Progressive skill building</li>
                <li>• Ongoing support and reinforcement</li>
                <li>• Measurable progress tracking</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold text-lcw-text-dark mb-4">
                Sustainable Development
              </h3>
              <p className="text-lcw-text-light font-body leading-relaxed mb-6">
                Our journeys focus on long-term cultural transformation and sustainable behavior change.
              </p>
              <ul className="space-y-3 text-lcw-text-light font-body">
                <li>• Continuous learning approach</li>
                <li>• Practical application exercises</li>
                <li>• Community of practice support</li>
                <li>• Integration with daily work</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Journeys; 