import { ArrowRight, Mail, Calendar } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-lcw-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
          Ready to build the future?
        </h2>
        <p className="text-xl text-lcw-light-gray font-body max-w-3xl mx-auto mb-10 leading-relaxed">
          Whether you're building the next generation of protocols or looking to invest in frontier technologies, we'd love to hear from you.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-lcw-accent text-white hover:bg-lcw-light-blue px-8 py-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 font-body text-lg">
            <Mail size={20} />
            Get in touch
            <ArrowRight size={20} />
          </button>
          <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 font-body text-lg">
            <Calendar size={20} />
            Schedule a call
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="text-white">
            <h3 className="text-2xl font-display font-bold mb-2">Research</h3>
            <p className="text-lcw-light-gray font-body">Deep technical analysis and market insights</p>
          </div>
          <div className="text-white">
            <h3 className="text-2xl font-display font-bold mb-2">Investment</h3>
            <p className="text-lcw-light-gray font-body">Strategic capital for promising protocols</p>
          </div>
          <div className="text-white">
            <h3 className="text-2xl font-display font-bold mb-2">Support</h3>
            <p className="text-lcw-light-gray font-body">Technical expertise and ecosystem connections</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 