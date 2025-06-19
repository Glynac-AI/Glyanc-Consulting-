import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const Investment = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-lcw-text-dark mb-6">
            Investment
          </h1>
          <p className="text-xl text-lcw-text-light font-body mb-8">
            Strategic capital for promising protocols.
          </p>
          <div className="bg-lcw-light-gray p-8 rounded-lg">
            <p className="text-lcw-text-light font-body">
              This page is under development. We provide strategic capital and support to the most promising projects and protocols in the crypto ecosystem.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Investment; 