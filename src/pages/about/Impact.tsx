import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const Impact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-lcw-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-8">
              Our Impact
            </h1>
            <p className="text-xl text-lcw-light-gray mb-10 max-w-3xl mx-auto leading-relaxed font-body">
              See the measurable results we've delivered across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-lcw-text-dark mb-6">
              Transformative results across the globe
            </h2>
            <p className="text-xl text-lcw-text-light font-body max-w-3xl mx-auto leading-relaxed">
              Our work has reached thousands of learners and organizations worldwide, creating lasting change in workplace culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-lcw-accent mb-2">0</div>
              <div className="text-lcw-text-dark font-body">Learners across all clients last year</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-lcw-accent mb-2">0</div>
              <div className="text-lcw-text-dark font-body">Training languages</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-lcw-accent mb-2">0</div>
              <div className="text-lcw-text-dark font-body">IDI© assessments deployed last year</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-lcw-accent mb-2">0</div>
              <div className="text-lcw-text-dark font-body">Net Promoter Score (2023)</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impact; 