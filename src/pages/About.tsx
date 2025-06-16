
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Users, Award, Globe, Lightbulb } from "lucide-react";

const About = () => {
  const milestones = [
    {
      year: "1995",
      title: "LCW Founded",
      description: "Language & Culture Worldwide established as a leader in cross-cultural training and language services."
    },
    {
      year: "2018",
      title: "Digital Transformation",
      description: "Pioneered digital learning platforms and virtual cultural intelligence assessments."
    },
    {
      year: "2023",
      title: "AI Integration",
      description: "Launched advanced AI analytics for sentiment analysis and organizational culture mapping."
    },
    {
      year: "2024",
      title: "Glynac Evolution",
      description: "Rebranded as Glynac with expanded AI-powered culture intelligence platform."
    }
  ];

  const leadership = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80&w=300&h=300",
      bio: "25+ years in organizational psychology and DEI strategy"
    },
    {
      name: "Dr. Marcus Johnson",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300",
      bio: "Former Google AI researcher specializing in NLP and cultural analytics"
    },
    {
      name: "Elena Rodriguez",
      role: "Chief Culture Officer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300&h=300",
      bio: "Global DEI expert with Fortune 500 transformation experience"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              From <span className="text-amber-400">Heritage</span> to <span className="text-amber-400">Innovation</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Three decades of cultural expertise meets cutting-edge AI to transform how organizations build inclusive, high-performing cultures.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  What began as Language & Culture Worldwide (LCW) in 1995 has evolved into Glynac, 
                  the world's most advanced culture intelligence platform.
                </p>
                <p>
                  For nearly three decades, we've helped global organizations navigate the complexities 
                  of diverse workforces. Our deep expertise in cross-cultural communication, 
                  language equity, and DEI strategy has served Fortune 500 companies across every continent.
                </p>
                <p>
                  Today, we've transformed that human expertise into AI-powered insights that can 
                  analyze organizational culture at unprecedented scale and precision. The result? 
                  Measurable transformation that drives both inclusion and performance.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Team collaboration" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our evolution</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-amber-400 h-full"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-amber-600 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-400 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Experts who bridge human insight and technological innovation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-48 h-48 mx-auto rounded-full object-cover shadow-lg group-hover:shadow-xl transition-shadow"
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{leader.name}</h3>
                <div className="text-amber-600 font-medium mb-3">{leader.role}</div>
                <p className="text-gray-600">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-300">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Human-Centered", description: "Technology serves people, not the other way around" },
              { icon: Award, title: "Excellence", description: "Uncompromising quality in everything we deliver" },
              { icon: Globe, title: "Inclusive", description: "Every voice matters in building better cultures" },
              { icon: Lightbulb, title: "Innovative", description: "Always pushing the boundaries of what's possible" }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-amber-500 p-4 rounded-lg mb-4 mx-auto w-fit">
                  <value.icon size={32} className="text-slate-900" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
