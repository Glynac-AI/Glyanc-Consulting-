import React from 'react';
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { ArrowRight, Play, Users, Globe, Brain, Target, BookOpen, Video, MessageSquare } from 'lucide-react';

const Strategy = () => {
  const modalities = [
    {
      title: "AI-Powered Strategic Planning",
      description: "Next-generation strategic planning platforms that leverage machine learning to analyze market trends, organizational data, and cultural dynamics. Our AI continuously monitors strategic indicators, adapts plans in real-time, and provides intelligent recommendations based on changing business landscapes.",
      features: ["Real-time AI adaptation", "Market trend analysis", "Global scalability", "Predictive strategic analytics"],
      image: "/scalable-solutions-photo.png",
      logo: "/lcw-logo.png"
    },
    {
      title: "Intelligent Organizational Design",
      description: "AI-driven organizational design that delivers data-driven insights for optimal structure and culture alignment. Our intelligent system analyzes organizational patterns, predicts structural needs, and provides personalized recommendations for building high-performing, inclusive teams.",
      features: ["Predictive organizational insights", "Data-driven design", "Cultural alignment", "Performance analytics"],
      image: "/structured-delivery-photo.png",
      logo: "/lcw-logo.png"
    },
    {
      title: "AI-Enhanced Change Management",
      description: "Human-led change initiatives supercharged with AI insights. Our change management experts leverage real-time AI analytics to personalize change strategies, identify resistance patterns, and create more impactful transformation experiences that bridge cultural and operational differences.",
      features: ["Real-time AI insights", "Personalized change strategies", "Hybrid delivery", "Cultural intelligence"],
      image: "/facilitated-photo.png",
      logo: "/lcw-logo.png"
    },
    {
      title: "Smart Strategy Toolkits & AI Guides",
      description: "Intelligent strategic frameworks and AI-powered planning guides that help leaders develop and execute inclusive strategies. Our AI analyzes organizational dynamics and provides real-time suggestions for more effective, culturally-aware strategic planning.",
      features: ["AI strategy coaching", "Real-time guidance", "Cultural intelligence", "Impact analytics"],
      image: "/toolkits-photo.png",
      logo: "/lcw-logo.png"
    }
  ];

  const strategyCategories = [
    {
      title: "AI-Enhanced Strategic Planning",
      description: "Leverage artificial intelligence to create comprehensive strategic plans that drive organizational success and inclusive growth. Our AI-powered strategic planning uses advanced analytics to identify market opportunities, optimize resource allocation, and measure strategic impact in real-time.",
      popularCourses: [
        {
          title: "AI-Powered Strategic Vision Workshop",
          format: "AI-Enhanced Strategic Planning",
          audience: "Executive Teams, Board Members, Senior Leaders",
          description: "Interactive workshops where AI analyzes market data and provides real-time insights to build comprehensive strategic visions."
        },
        {
          title: "Intelligent Strategic Execution",
          format: "AI-Enhanced Strategic Planning", 
          audience: "Senior Leaders, Department Heads",
          description: "AI-driven planning where leaders receive personalized insights on executing strategic priorities with enhanced inclusion strategies."
        },
        {
          title: "AI-Enhanced Market Analysis",
          format: "AI-Enhanced Strategic Planning",
          audience: "Strategy Teams, Business Development", 
          description: "Advanced analytical program using AI to help teams identify, analyze, and capitalize on market opportunities in real-time."
        }
      ]
    },
    {
      title: "AI-Powered Organizational Development",
      description: "Harness the power of artificial intelligence to design and develop high-performing organizations. Our AI continuously monitors organizational health, provides real-time development insights, and delivers personalized interventions to create more effective, inclusive workplace structures.",
      popularCourses: [
        {
          title: "AI-Enhanced Organizational Design",
          format: "Intelligent Organizational Design",
          audience: "HR Leaders, Executive Teams, Organizational Development",
          description: "Intelligent design process that uses AI to identify organizational patterns and provides customized strategies for optimal structure."
        },
        {
          title: "Smart Culture Development Series",
          format: "Intelligent Organizational Design",
          audience: "Culture Teams, HR Leaders, Executive Teams",
          description: "AI-driven development modules that adapt strategies based on organizational culture patterns and performance metrics."
        },
        {
          title: "AI-Powered Leadership Development",
          format: "AI-Enhanced Change Management",
          audience: "Senior Leaders, People Managers, HR Leaders",
          description: "Advanced development where AI provides real-time feedback on leadership effectiveness and organizational impact."
        }
      ]
    },
    {
      title: "Intelligent Change Management",
      description: "Transform organizational change with AI-powered change intelligence. Our advanced algorithms analyze change patterns, provide real-time change insights, and help organizations develop deeper change competencies through personalized transformation journeys.",
      popularCourses: [
        {
          title: "AI-Enhanced Change Strategy",
          format: "AI-Enhanced Change Management",
          audience: "Change Management Teams, Executive Teams, Project Leaders",
          description: "AI-powered sessions that adapt change strategies based on organizational readiness and provide personalized change insights."
        },
        {
          title: "Intelligent Transformation Navigation",
          format: "AI-Enhanced Change Management",
          audience: "HR, Project Teams, Leaders & Executives",
          description: "AI-driven change management that provides real-time organizational context and personalized strategies for successful transformation."
        },
        {
          title: "Smart Change & Culture Intelligence",
          format: "AI-Powered Strategic Planning",
          audience: "HR, Change Teams, Leaders & Executives",
          description: "AI-enhanced planning that personalizes change approaches and provides intelligent insights into organizational transformation."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-[#2cb674] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                AI-Powered Strategy Development
              </h1>
              <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
                Transform your organization with intelligent strategic planning that adapts in real-time, predicts market opportunities, and drives measurable organizational success across cultures and geographies.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/training-title-photo.png" 
                  alt="AI-powered strategy development platform"
                  className="w-full h-96 object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2cb674]/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-[#1e3a8a] font-semibold text-sm">
                      "AI that adapts to your organization's unique strategic and cultural patterns"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modalities Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1e3a8a] mb-6">
              Choose your AI-powered strategy experience
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              Our intelligent strategy ecosystem adapts to your organization's unique needs, leveraging cutting-edge AI to deliver personalized, impactful strategic planning experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {modalities.map((modality, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={modality.image}
                    alt={`${modality.title} strategy modality`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* Content Section */}
                <div className="p-6">
                  <div className="mb-4">
                    <img 
                      src={modality.logo}
                      alt={`${modality.title} logo`}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                    {modality.title}
                  </h3>
                  <p className="text-[#1e3a8a]/70 text-sm leading-relaxed">
                    {modality.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Categories */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
              AI-powered solutions for strategic organizational success
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              Leverage artificial intelligence to build successful strategies and inclusive organizational development with our comprehensive AI-enhanced strategic solutions.
            </p>
          </div>

          {strategyCategories.map((category, index) => {
            // Different images for each category
            const categoryImages = [
              "/workplace-inclusion-photo.png", // Strategic Planning
              "/mitigating-bias-photo.png", // Organizational Development
              "/cultural-literacy-photo.png" // Change Management
            ];
            
            const categoryAltTexts = [
              "AI-powered strategic planning and execution",
              "AI-enhanced organizational design and development",
              "AI-driven change management and transformation"
            ];

            return (
              <div key={index} className="mb-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                  {/* Left Column - Text Content */}
                  <div className="text-left">
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#1e3a8a] mb-4">
                      {category.title}
                    </h3>
                    <p className="text-lg text-[#1e3a8a]/80 leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Right Column - Image */}
                  <div className="relative">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img 
                        src={categoryImages[index]}
                        alt={categoryAltTexts[index]}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {category.popularCourses.map((course, courseIndex) => {
                    // Find the corresponding modality to get the logo
                    const modality = modalities.find(m => m.title === course.format);
                    
                    return (
                      <div key={courseIndex} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center gap-2 mb-3">
                          {modality ? (
                            <img 
                              src={modality.logo}
                              alt={`${modality.title} logo`}
                              className="h-6 w-auto object-contain"
                            />
                          ) : (
                            <div className="w-2 h-2 bg-[#1e3a8a] rounded-full"></div>
                          )}
                          <span className="text-sm font-medium text-[#1e3a8a] uppercase tracking-wide">
                            {course.format}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-[#1e3a8a] mb-3">
                          {course.title}
                        </h4>
                        <p className="text-[#1e3a8a]/70 text-sm mb-4 leading-relaxed">
                          {course.description}
                        </p>
                        <div className="text-xs text-[#1e3a8a]/60 mb-4">
                          <strong>Audience:</strong> {course.audience}
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="w-full border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white"
                        >
                          Learn More »
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Strategy Delivery Section */}
      <section className="py-16 lg:py-24 bg-[#1e3a8a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              How AI transforms strategy development
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Scalable solutions column */}
            <div className="flex flex-col items-center text-center lg:text-left lg:items-start">
              <img 
                src="/scalable-solutions-photo.png"
                alt="AI-powered scalable strategy solutions"
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-xl font-bold text-white mb-4">
                Intelligent strategic scalability
              </h3>
              <p className="text-white/90 leading-relaxed mb-4">
                Our AI-powered strategy platform automatically scales to fit your organization's size, market position, and global presence. Machine learning algorithms optimize strategic planning, market analysis, and organizational alignment in real-time.
              </p>
              <p className="text-white/90 leading-relaxed">
                <strong>AI Enhancement:</strong> Predictive analytics and intelligent personalization that adapts strategies based on organizational patterns, market contexts, and strategic goals.
              </p>
            </div>

            {/* Structured delivery column */}
            <div className="flex flex-col items-center text-center lg:text-left lg:items-start">
              <img 
                src="/structured-delivery-photo.png"
                alt="AI-enhanced structured strategy delivery"
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-xl font-bold text-white mb-4">
                AI-driven strategic journeys
              </h3>
              <p className="text-white/90 leading-relaxed mb-4">
                Our AI orchestrates complementary strategic experiences, creating intelligent planning paths that adapt to individual and organizational needs. The Sustainable Culture of Inclusion Model™ is enhanced with real-time AI insights and predictive strategic analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#3cc1c9]/50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
            Ready to transform your strategy with AI?
          </h2>
          <p className="text-xl text-[#1e3a8a]/90 max-w-3xl mx-auto mb-8">
            Connect with an LCW AI expert. We'll help you leverage the power of artificial intelligence to create a sustainable culture of inclusion, regardless of where your organization is on its strategic transformation journey.
          </p>
          <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Contact Us »
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Strategy; 