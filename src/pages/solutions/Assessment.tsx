import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const Assessment = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-lcw-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-8">
              Assessment
            </h1>
            <p className="text-xl text-lcw-light-gray mb-10 max-w-3xl mx-auto leading-relaxed font-body">
              Start measuring your progress with comprehensive assessments for cultural transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-lcw-text-dark mb-6">
              Comprehensive cultural assessments
            </h2>
            <p className="text-xl text-lcw-text-light font-body max-w-3xl mx-auto leading-relaxed">
              Our assessments identify opportunities and track progress in your organization's cultural transformation journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-display font-bold text-lcw-text-dark mb-4">
                Diagnostic Tools
              </h3>
              <p className="text-lcw-text-light font-body leading-relaxed mb-6">
                We use a variety of diagnostic tools to assess your organization's culture and inclusion.
              </p>
              <ul className="space-y-3 text-lcw-text-light font-body">
                <li>• Sustainable Culture of Inclusion Model™</li>
                <li>• Inclusive Collaboration Assessment</li>
                <li>• IDI® Assessments</li>
                <li>• Focus Groups & Surveys</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold text-lcw-text-dark mb-4">
                Actionable Insights
              </h3>
              <p className="text-lcw-text-light font-body leading-relaxed mb-6">
                Our assessments provide actionable insights to guide your organization's cultural transformation.
              </p>
              <ul className="space-y-3 text-lcw-text-light font-body">
                <li>• Evidence-based recommendations</li>
                <li>• Progress tracking dashboards</li>
                <li>• Custom reporting</li>
                <li>• Ongoing measurement and feedback</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Assessment; 