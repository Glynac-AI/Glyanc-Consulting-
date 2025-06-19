import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-lcw-text-dark mb-6">
            Contact
          </h1>
          <p className="text-xl text-lcw-text-light font-body mb-8">
            Get in touch with our team.
          </p>
          <div className="bg-lcw-light-gray p-8 rounded-lg">
            <p className="text-lcw-text-light font-body">
              This page is under development. Get in touch with our team to discuss investment opportunities, partnerships, or any questions about our work.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact; 