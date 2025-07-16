import React from 'react';
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { ArrowRight, Calendar, Clock, Users, Play, ExternalLink, BookOpen, TrendingUp, Lightbulb, Award, Globe, Target } from 'lucide-react';

const Webinars = () => {
  const upcomingWebinars = [
    {
      title: "Building Inclusive Leadership in the Digital Age",
      description: "Join us for an interactive session on developing leadership capabilities that foster inclusion and drive innovation in rapidly evolving digital environments.",
      date: "March 25, 2024",
      time: "2:00 PM - 3:30 PM EST",
      duration: "90 minutes",
      speaker: "Dr. Sarah Chen",
      speakerTitle: "Senior Cultural Consultant",
      attendees: 150,
      image: "/leadership-photo.png",
      featured: true,
      category: "Leadership"
    },
    {
      title: "Cultural Intelligence: The Key to Global Business Success",
      description: "Discover how cultural intelligence (CQ) can transform your organization's ability to work effectively across diverse markets and teams.",
      date: "April 2, 2024",
      time: "1:00 PM - 2:30 PM EST",
      duration: "90 minutes",
      speaker: "Michael Rodriguez",
      speakerTitle: "Global Business Strategist",
      attendees: 120,
      image: "/global-cultural.png",
      featured: true,
      category: "Global Business"
    },
    {
      title: "Measuring the ROI of Diversity and Inclusion Initiatives",
      description: "Learn about proven methodologies for quantifying the business impact of D&I programs and communicating value to stakeholders.",
      date: "April 10, 2024",
      time: "3:00 PM - 4:30 PM EST",
      duration: "90 minutes",
      speaker: "Dr. Emily Watson",
      speakerTitle: "Analytics Director",
      attendees: 95,
      image: "/analytics-photo.png",
      featured: true,
      category: "Analytics"
    }
  ];

  const onDemandWebinars = [
    {
      title: "The Future of Remote Work: Maintaining Culture Across Distance",
      description: "How organizations can preserve and strengthen their culture while embracing remote and hybrid work models.",
      duration: "75 minutes",
      speaker: "Jennifer Park",
      speakerTitle: "Remote Work Specialist",
      views: 1250,
      image: "/remote-work-photo.png",
      category: "Remote Work"
    },
    {
      title: "Unconscious Bias Training: What Works and What Doesn't",
      description: "Evidence-based approaches to unconscious bias training that drive real behavioral change in organizations.",
      duration: "60 minutes",
      speaker: "Dr. Marcus Johnson",
      speakerTitle: "Diversity Training Expert",
      views: 980,
      image: "/bias-training-photo.png",
      category: "Training"
    },
    {
      title: "Creating Psychological Safety in High-Performance Teams",
      description: "Strategies for building environments where team members feel safe to take risks and share innovative ideas.",
      duration: "45 minutes",
      speaker: "Lisa Thompson",
      speakerTitle: "Team Development Consultant",
      views: 750,
      image: "/team-safety-photo.png",
      category: "Team Building"
    }
  ];

  const categories = [
    { name: "Leadership", count: 8, icon: Target },
    { name: "Global Business", count: 6, icon: Globe },
    { name: "Training", count: 12, icon: Award },
    { name: "Analytics", count: 4, icon: TrendingUp },
    { name: "Remote Work", count: 7, icon: BookOpen },
    { name: "Team Building", count: 9, icon: Lightbulb }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-[#ff6b35] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Webinars
              </h1>
              <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
                Join our interactive virtual sessions on cultural consulting, inclusive leadership, and organizational transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => window.location.href = '/blog-hub?tab=subscribe'}
                  className="bg-white text-[#ff6b35] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Register for Upcoming »
                </Button>
                <Button 
                  onClick={() => window.location.href = '/blog-hub?tab=categories'}
                  variant="outline" 
                  className="border-white text-[#1e3a8a] hover:bg-white hover:text-[#ff6b35] px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 bg-white/10 backdrop-blur-sm"
                >
                  Browse On-Demand »
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/facilitated-photo.png" 
                  alt="Interactive webinars and virtual events"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#ff6b35]/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-[#1e3a8a] font-semibold text-sm">
                      "Expert-led sessions on building inclusive, high-performing organizations"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
              Upcoming Webinars
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              Register for our upcoming interactive sessions and gain valuable insights from industry experts.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {upcomingWebinars.map((webinar, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={webinar.image} 
                    alt={webinar.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#ff6b35] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {webinar.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/50 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Live
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-[#1e3a8a]/60 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {webinar.date}
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-2" />
                    {webinar.time}
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-3 line-clamp-2">
                    {webinar.title}
                  </h3>
                  <p className="text-[#1e3a8a]/70 mb-4 line-clamp-3">
                    {webinar.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-[#1e3a8a]/60">
                      <Users className="h-4 w-4 mr-2" />
                      {webinar.attendees} registered
                    </div>
                    <div className="text-sm text-[#1e3a8a]/60">
                      {webinar.duration}
                    </div>
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-[#1e3a8a]">{webinar.speaker}</p>
                        <p className="text-xs text-[#1e3a8a]/60">{webinar.speakerTitle}</p>
                      </div>
                      <Button className="bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white px-4 py-2 text-sm font-semibold rounded-lg">
                        Register Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
              Browse by Category
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              Find webinars on specific topics that matter to your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-[#ff6b35]/10 p-3 rounded-lg">
                    <category.icon className="h-6 w-6 text-[#ff6b35]" />
                  </div>
                  <span className="text-sm text-[#1e3a8a]/60 bg-gray-100 px-2 py-1 rounded-full">
                    {category.count} webinars
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1e3a8a] mb-2">
                  {category.name}
                </h3>
                <Button variant="ghost" className="text-[#ff6b35] hover:text-[#ff6b35]/80 p-0">
                  View Webinars <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* On-Demand Webinars */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
              On-Demand Webinars
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              Watch our recorded sessions anytime, anywhere. Perfect for busy professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {onDemandWebinars.map((webinar, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={webinar.image} 
                    alt={webinar.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#ff6b35]/10 text-[#ff6b35] px-3 py-1 rounded-full text-xs font-semibold">
                      {webinar.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <Play className="h-8 w-8 text-[#ff6b35]" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-[#1e3a8a]/60 mb-3">
                    <Clock className="h-4 w-4 mr-2" />
                    {webinar.duration}
                    <span className="mx-2">•</span>
                    <Users className="h-4 w-4 mr-2" />
                    {webinar.views} views
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                    {webinar.title}
                  </h3>
                  <p className="text-[#1e3a8a]/70 mb-4">
                    {webinar.description}
                  </p>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-[#1e3a8a]">{webinar.speaker}</p>
                        <p className="text-xs text-[#1e3a8a]/60">{webinar.speakerTitle}</p>
                      </div>
                      <Button variant="ghost" className="text-[#ff6b35] hover:text-[#ff6b35]/80 p-0">
                        Watch Now <Play className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={() => window.location.href = '/blog-hub?tab=categories'}
              className="bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View All On-Demand Webinars »
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto mb-8">
              Get notified about upcoming webinars and exclusive content. Never miss an opportunity to learn from our experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.location.href = '/resources/webinar-hub?tab=subscribe'}
                className="bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Subscribe to Webinar Updates »
              </Button>
              <Button 
                onClick={() => window.location.href = '/resources/webinar-hub?tab=request'}
                variant="outline" 
                className="border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                Request Custom Webinar »
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Webinars; 