import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const Training = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-lcw-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-8">
              Training & Learning
            </h1>
            <p className="text-xl text-lcw-light-gray mb-10 max-w-3xl mx-auto leading-relaxed font-body">
              Bring timely learning to your organization with scalable, customized training solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-lcw-text-dark mb-6">
              Scalable learning solutions
            </h2>
            <p className="text-xl text-lcw-text-light font-body max-w-3xl mx-auto leading-relaxed">
              Our training programs address your specific cultural challenges and help build inclusive, high-performing teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-display font-bold text-lcw-text-dark mb-4">
                Customized Training Programs
              </h3>
              <p className="text-lcw-text-light font-body leading-relaxed mb-6">
                We develop tailored training solutions that address your organization's unique cultural challenges and goals.
              </p>
              <ul className="space-y-3 text-lcw-text-light font-body">
                <li>• Intercultural competence training</li>
                <li>• Inclusive leadership development</li>
                <li>• Unconscious bias awareness</li>
                <li>• Cross-cultural communication</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold text-lcw-text-dark mb-4">
                Flexible Delivery Options
              </h3>
              <p className="text-lcw-text-light font-body leading-relaxed mb-6">
                Our training is available in multiple formats to meet your organization's needs and schedule.
              </p>
              <ul className="space-y-3 text-lcw-text-light font-body">
                <li>• In-person workshops</li>
                <li>• Virtual training sessions</li>
                <li>• E-learning modules</li>
                <li>• Blended learning approaches</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Training; 