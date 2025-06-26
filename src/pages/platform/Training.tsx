import React from 'react';
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { ArrowRight, Play, Users, Globe, Brain, Target, BookOpen, Video, MessageSquare } from 'lucide-react';

const Training = () => {
  const modalities = [
    {
      title: "AI-Powered eLearning",
      description: "Next-generation adaptive learning platforms that leverage machine learning to create personalized learning experiences. Our AI continuously analyzes learner behavior, adapts content in real-time, and provides intelligent recommendations based on individual progress and cultural context.",
      features: ["Real-time AI adaptation", "Multilingual AI translation", "Global scalability", "Predictive learning analytics"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&crop=center",
      logo: "/elearning.png"
    },
    {
      title: "Intelligent MicroLearning",
      description: "AI-driven microlearning that delivers just-in-time, contextual learning moments. Our intelligent system predicts when learners need specific knowledge and delivers personalized content through mobile-first, bite-sized experiences that drive measurable behavior change.",
      features: ["Predictive content delivery", "Mobile-first AI", "Contextual learning", "Behavioral analytics"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&crop=center",
      logo: "/microlearning.png"
    },
    {
      title: "AI-Enhanced Facilitated Training",
      description: "Human-led workshops supercharged with AI insights. Our facilitators leverage real-time AI analytics to personalize group dynamics, identify learning gaps, and create more impactful interactive experiences that bridge cultural and cognitive differences.",
      features: ["Real-time AI insights", "Personalized facilitation", "Hybrid delivery", "Cultural intelligence"],
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop&crop=center",
      logo: "/facilitated_training.png"
    },
    {
      title: "Smart Toolkits & AI Guides",
      description: "Intelligent conversation frameworks and AI-powered discussion guides that help leaders facilitate inclusive dialogues. Our AI analyzes team dynamics and provides real-time suggestions for more effective, culturally-aware conversations.",
      features: ["AI conversation coaching", "Real-time guidance", "Cultural intelligence", "Impact analytics"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center",
      logo: "/toolkits_discussion.png"
    }
  ];

  const trainingCategories = [
    {
      title: "AI-Enhanced Workplace Inclusion",
      description: "Leverage artificial intelligence to create truly inclusive workplaces where every individual feels valued and heard. Our AI-powered inclusion training uses advanced analytics to identify unconscious bias patterns, personalize learning experiences, and measure inclusion impact in real-time.",
      popularCourses: [
        {
          title: "AI-Powered Inclusion Champions Workshop",
          format: "AI-Enhanced Facilitated Training",
          audience: "Individual Contributors, Employee Resource Groups, HRBPs, Executive Teams",
          description: "Interactive workshops where AI analyzes group dynamics and provides real-time insights to build cultural competence and inclusion skills."
        },
        {
          title: "Intelligent Conscious Inclusion Leadership",
          format: "AI-Enhanced Facilitated Training", 
          audience: "People Leaders, Senior Leaders",
          description: "AI-driven training where leaders receive personalized insights on executing business priorities with enhanced inclusion strategies."
        },
        {
          title: "AI-Enhanced Microaggression Recognition",
          format: "AI-Enhanced Facilitated Training",
          audience: "Leaders & Executives, People Managers", 
          description: "Advanced interactive program using AI to help leaders identify, address, and prevent microaggressions in real-time."
        }
      ]
    },
    {
      title: "AI-Powered Bias Mitigation",
      description: "Harness the power of artificial intelligence to identify and mitigate unconscious bias across your entire talent lifecycle. Our AI continuously monitors decision-making processes, provides real-time bias alerts, and delivers personalized interventions to create fairer, more equitable workplaces.",
      popularCourses: [
        {
          title: "AI-Enhanced Unconscious Bias Management",
          format: "AI-Powered eLearning",
          audience: "HR, Individual Contributors, Leaders & Executives",
          description: "Intelligent course that uses AI to identify personal bias patterns and provides customized strategies for mitigation."
        },
        {
          title: "Smart Bias Mitigation Series",
          format: "Intelligent MicroLearning",
          audience: "People Managers, HR, Recruiters",
          description: "AI-driven microlearning modules that adapt content based on individual bias patterns in recruiting, hiring, and performance management."
        },
        {
          title: "AI-Powered Bias Management for Leaders",
          format: "AI-Enhanced Facilitated Training",
          audience: "Leaders & Executives, People Managers",
          description: "Advanced training where AI provides real-time feedback on bias recognition and interruption strategies."
        }
      ]
    },
    {
      title: "Intelligent Cultural Literacy",
      description: "Transform cultural understanding with AI-powered cultural intelligence. Our advanced algorithms analyze cultural contexts, provide real-time cultural insights, and help individuals develop deeper cross-cultural competencies through personalized learning journeys.",
      popularCourses: [
        {
          title: "AI-Enhanced Cultural Immersion",
          format: "AI-Enhanced Facilitated Training",
          audience: "Employee Resource Group Leaders, HR Leaders, Executive Teams",
          description: "AI-powered sessions that adapt cultural content based on individual backgrounds and provide personalized cultural insights."
        },
        {
          title: "Intelligent Global Culture Navigation",
          format: "AI-Enhanced Facilitated Training",
          audience: "HR, Individual Contributors, Leaders & Executives",
          description: "AI-driven training that provides real-time cultural context and personalized strategies for global team collaboration."
        },
        {
          title: "Smart Culture & Identity Intelligence",
          format: "AI-Powered eLearning",
          audience: "HR, Individual Contributors, Leaders & Executives",
          description: "AI-enhanced course that personalizes cultural content and provides intelligent insights into identity formation."
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
                AI-Powered Learning & Development
              </h1>
              <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
                Transform your organization with intelligent learning that adapts in real-time, predicts learner needs, and drives measurable behavior change across cultures and geographies.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center" 
                  alt="AI-powered learning and development platform"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2cb674]/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-[#1e3a8a] font-semibold text-sm">
                      "AI that adapts to your team's unique cultural and learning patterns"
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
              Choose your AI-powered learning experience
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              Our intelligent learning ecosystem adapts to your organization's unique needs, leveraging cutting-edge AI to deliver personalized, impactful training experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {modalities.map((modality, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={modality.image}
                    alt={`${modality.title} training modality`}
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

      {/* Training Categories */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
              AI-powered solutions for inclusive, equitable workplaces
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              Leverage artificial intelligence to build successful teams and inclusive leadership with our comprehensive AI-enhanced training solutions.
            </p>
          </div>

          {trainingCategories.map((category, index) => {
            // Different images for each category
            const categoryImages = [
              "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&crop=center", // Workplace Inclusion
              "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop&crop=center", // Mitigating Bias
              "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&h=600&fit=crop&crop=center" // Cultural Literacy
            ];
            
            const categoryAltTexts = [
              "AI-powered diverse team collaboration",
              "AI-enhanced team discussing bias mitigation",
              "AI-driven global cultural intelligence"
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

      {/* Course Delivery Section */}
      <section className="py-16 lg:py-24 bg-[#1e3a8a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              How AI transforms learning delivery
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Scalable solutions column */}
            <div className="flex flex-col items-center text-center lg:text-left lg:items-start">
              <img 
                src="https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800&h=400&fit=crop&crop=center"
                alt="AI-powered scalable learning solutions"
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-xl font-bold text-white mb-4">
                Intelligent scalability
              </h3>
              <p className="text-white/90 leading-relaxed mb-4">
                Our AI-powered learning platform automatically scales to fit your organization's size, technology stack, and global presence. Machine learning algorithms optimize content delivery, language translation, and cultural adaptation in real-time.
              </p>
              <p className="text-white/90 leading-relaxed">
                <strong>AI Enhancement:</strong> Predictive analytics and intelligent personalization that adapts content based on individual learning patterns, cultural contexts, and organizational goals.
              </p>
            </div>

            {/* Structured delivery column */}
            <div className="flex flex-col items-center text-center lg:text-left lg:items-start">
              <img 
                src="https://images.unsplash.com/photo-1503676382389-4809596d5290?w=800&h=400&fit=crop&crop=center"
                alt="AI-enhanced structured training delivery"
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-xl font-bold text-white mb-4">
                AI-driven learning journeys
              </h3>
              <p className="text-white/90 leading-relaxed mb-4">
                Our AI orchestrates complementary learning experiences, creating intelligent learning paths that adapt to individual and organizational needs. The Sustainable Culture of Inclusion Model™ is enhanced with real-time AI insights and predictive analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#3cc1c9]/50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
            Ready to transform your learning with AI?
          </h2>
          <p className="text-xl text-[#1e3a8a]/90 max-w-3xl mx-auto mb-8">
            Connect with an LCW AI expert. We'll help you leverage the power of artificial intelligence to create a sustainable culture of inclusion, regardless of where your organization is on its digital transformation journey.
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

export default Training; 