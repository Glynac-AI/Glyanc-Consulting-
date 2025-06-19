import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const Advisory = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-lcw-text-dark mb-6">
            Advisory
          </h1>
          <p className="text-xl text-lcw-text-light font-body mb-8">
            Strategic guidance for crypto projects.
          </p>
          <div className="bg-lcw-light-gray p-8 rounded-lg">
            <p className="text-lcw-text-light font-body">
              This page is under development. We provide strategic guidance and advisory services to help crypto projects succeed and scale.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Advisory; 