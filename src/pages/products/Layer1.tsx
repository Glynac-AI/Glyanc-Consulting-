import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const Layer1 = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-lcw-text-dark mb-6">
            Layer 1 & 2
          </h1>
          <p className="text-xl text-lcw-text-light font-body mb-8">
            Blockchain networks and scaling solutions.
          </p>
          <div className="bg-lcw-light-gray p-8 rounded-lg">
            <p className="text-lcw-text-light font-body">
              This page is under development. We support the development of blockchain networks and scaling solutions that enable mass adoption.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layer1; 