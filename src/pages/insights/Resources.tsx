import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const Resources = () => (
  <div className="min-h-screen bg-white">
    <Navigation />
    <section className="py-20 bg-lcw-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl lg:text-6xl font-display font-bold mb-8">Downloadable Resources</h1>
        <p className="text-xl text-lcw-light-gray mb-10 max-w-3xl mx-auto leading-relaxed font-body">Access guides, whitepapers, and more from LCW.</p>
      </div>
    </section>
    <Footer />
  </div>
);

export default Resources; 