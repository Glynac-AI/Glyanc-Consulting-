import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const Translation = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-lcw-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-8">
              Translation
            </h1>
            <p className="text-xl text-lcw-light-gray mb-10 max-w-3xl mx-auto leading-relaxed font-body">
              Reach your global audience effectively with professional translation services.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-lcw-text-dark mb-6">
              Culturally sensitive translation
            </h2>
            <p className="text-xl text-lcw-text-light font-body max-w-3xl mx-auto leading-relaxed">
              Our translation services maintain cultural sensitivity and accuracy for your global workforce.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-display font-bold text-lcw-text-dark mb-4">
                Professional Translation Services
              </h3>
              <p className="text-lcw-text-light font-body leading-relaxed mb-6">
                We provide professional translation services for training materials, communications, and more.
              </p>
              <ul className="space-y-3 text-lcw-text-light font-body">
                <li>• Multilingual training content</li>
                <li>• Internal communications</li>
                <li>• Policy and procedure documents</li>
                <li>• Marketing materials</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold text-lcw-text-dark mb-4">
                Global Reach
              </h3>
              <p className="text-lcw-text-light font-body leading-relaxed mb-6">
                Our translation team ensures your message is clear and culturally appropriate in every language.
              </p>
              <ul className="space-y-3 text-lcw-text-light font-body">
                <li>• Native-speaking translators</li>
                <li>• Cultural adaptation</li>
                <li>• Quality assurance</li>
                <li>• Fast turnaround times</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Translation; 