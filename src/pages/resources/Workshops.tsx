import React from 'react';
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { ArrowRight, Calendar, Clock, Users, MapPin, Star, BookOpen, TrendingUp, Lightbulb, Award, Globe, Target, CheckCircle } from 'lucide-react';

const Workshops = () => {
  const upcomingWorkshops = [
    {
      title: "Inclusive Leadership Development Workshop",
      description: "A comprehensive 2-day workshop designed to develop inclusive leadership capabilities and create high-performing, diverse teams.",
      date: "March 28-29, 2024",
      time: "9:00 AM - 5:00 PM EST",
      duration: "2 days",
      location: "New York, NY",
      capacity: 25,
      price: "$1,200",
      instructor: "Dr. Sarah Chen",
      instructorTitle: "Senior Cultural Consultant",
      image: "/leadership-photo.png",
      featured: true,
      category: "Leadership",
      rating: 4.8,
      reviews: 45
    },
    {
      title: "Cultural Intelligence (CQ) Training",
      description: "Learn how to develop cultural intelligence and apply it effectively in global business environments and diverse teams.",
      date: "April 5-6, 2024",
      time: "9:00 AM - 5:00 PM EST",
      duration: "2 days",
      location: "San Francisco, CA",
      capacity: 20,
      price: "$1,500",
      instructor: "Michael Rodriguez",
      instructorTitle: "Global Business Strategist",
      image: "/global-cultural.png",
      featured: true,
      category: "Global Business",
      rating: 4.9,
      reviews: 38
    },
    {
      title: "Unconscious Bias Awareness & Mitigation",
      description: "Interactive workshop focused on identifying, understanding, and mitigating unconscious bias in the workplace.",
      date: "April 12, 2024",
      time: "9:00 AM - 4:00 PM EST",
      duration: "1 day",
      location: "Chicago, IL",
      capacity: 30,
      price: "$800",
      instructor: "Dr. Marcus Johnson",
      instructorTitle: "Diversity Training Expert",
      image: "/bias-training-photo.png",
      featured: true,
      category: "Training",
      rating: 4.7,
      reviews: 52
    }
  ];

  const virtualWorkshops = [
    {
      title: "Remote Team Culture Building",
      description: "Learn strategies for building and maintaining strong team culture in remote and hybrid work environments.",
      date: "March 30, 2024",
      time: "10:00 AM - 2:00 PM EST",
      duration: "4 hours",
      platform: "Zoom",
      capacity: 50,
      price: "$400",
      instructor: "Jennifer Park",
      instructorTitle: "Remote Work Specialist",
      image: "/remote-work-photo.png",
      category: "Remote Work"
    },
    {
      title: "Psychological Safety in Teams",
      description: "Create environments where team members feel safe to take risks, share ideas, and be their authentic selves.",
      date: "April 7, 2024",
      time: "1:00 PM - 5:00 PM EST",
      duration: "4 hours",
      platform: "Microsoft Teams",
      capacity: 40,
      price: "$350",
      instructor: "Lisa Thompson",
      instructorTitle: "Team Development Consultant",
      image: "/team-safety-photo.png",
      category: "Team Building"
    },
    {
      title: "Diversity & Inclusion Strategy Workshop",
      description: "Develop comprehensive D&I strategies that align with your organization's goals and drive measurable results.",
      date: "April 14, 2024",
      time: "9:00 AM - 3:00 PM EST",
      duration: "6 hours",
      platform: "Zoom",
      capacity: 35,
      price: "$600",
      instructor: "Dr. Emily Watson",
      instructorTitle: "D&I Strategy Director",
      image: "/diversity-strategy-photo.png",
      category: "Strategy"
    }
  ];

  const categories = [
    { name: "Leadership", count: 8, icon: Target },
    { name: "Global Business", count: 6, icon: Globe },
    { name: "Training", count: 12, icon: Award },
    { name: "Remote Work", count: 7, icon: BookOpen },
    { name: "Team Building", count: 9, icon: Lightbulb },
    { name: "Strategy", count: 5, icon: TrendingUp }
  ];

  const benefits = [
    {
      title: "Interactive Learning",
      description: "Hands-on exercises and real-world case studies to ensure practical application of concepts.",
      icon: Lightbulb
    },
    {
      title: "Expert Instructors",
      description: "Learn from certified cultural consultants with years of experience in organizational development.",
      icon: Award
    },
    {
      title: "Small Group Sizes",
      description: "Intimate learning environments that allow for personalized attention and meaningful discussions.",
      icon: Users
    },
    {
      title: "Practical Tools",
      description: "Take away actionable frameworks and tools you can immediately implement in your organization.",
      icon: BookOpen
    }
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
                Workshops
              </h1>
              <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
                Immersive learning experiences designed to transform your organization's culture and leadership capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => window.location.href = '/blog-hub?tab=categories'}
                  className="bg-white text-[#ff6b35] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  View Upcoming Workshops »
                </Button>
                <Button 
                  onClick={() => window.location.href = '/resources/workshop-hub?tab=request'}
                  variant="outline" 
                  className="border-white text-[#1e3a8a] hover:bg-white hover:text-[#ff6b35] px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 bg-white/10 backdrop-blur-sm"
                >
                  Request Custom Workshop »
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/facilitated_training.png" 
                  alt="Interactive workshops and training sessions"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#ff6b35]/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-[#1e3a8a] font-semibold text-sm">
                      "Transform your organization through immersive, expert-led workshops"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
              Why Choose Our Workshops?
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              Our workshops are designed to deliver maximum impact through proven methodologies and expert facilitation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#ff6b35]/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-[#ff6b35]" />
                </div>
                <h3 className="text-lg font-bold text-[#1e3a8a] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[#1e3a8a]/70 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
              Upcoming In-Person Workshops
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              Join us for immersive, hands-on learning experiences in major cities across the country.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {upcomingWorkshops.map((workshop, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={workshop.image} 
                    alt={workshop.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#ff6b35] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {workshop.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/50 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {workshop.price}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-[#1e3a8a]/60 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {workshop.date}
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-2" />
                    {workshop.duration}
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-3 line-clamp-2">
                    {workshop.title}
                  </h3>
                  <p className="text-[#1e3a8a]/70 mb-4 line-clamp-3">
                    {workshop.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-[#1e3a8a]/60">
                      <MapPin className="h-4 w-4 mr-2" />
                      {workshop.location}
                    </div>
                    <div className="flex items-center text-sm text-[#1e3a8a]/60">
                      <Users className="h-4 w-4 mr-2" />
                      {workshop.capacity} spots
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < Math.floor(workshop.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-[#1e3a8a]/60 ml-2">
                      {workshop.rating} ({workshop.reviews} reviews)
                    </span>
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-[#1e3a8a]">{workshop.instructor}</p>
                        <p className="text-xs text-[#1e3a8a]/60">{workshop.instructorTitle}</p>
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

      {/* Virtual Workshops */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
              Virtual Workshops
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto">
              Join our interactive online workshops from anywhere in the world. Same quality, maximum convenience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {virtualWorkshops.map((workshop, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={workshop.image} 
                    alt={workshop.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#ff6b35]/10 text-[#ff6b35] px-3 py-1 rounded-full text-xs font-semibold">
                      {workshop.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Virtual
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-[#1e3a8a]/60 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {workshop.date}
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-2" />
                    {workshop.duration}
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                    {workshop.title}
                  </h3>
                  <p className="text-[#1e3a8a]/70 mb-4">
                    {workshop.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-[#1e3a8a]/60">
                      <Users className="h-4 w-4 mr-2" />
                      {workshop.capacity} spots
                    </div>
                    <div className="text-sm font-semibold text-[#1e3a8a]">
                      {workshop.price}
                    </div>
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-[#1e3a8a]">{workshop.instructor}</p>
                        <p className="text-xs text-[#1e3a8a]/60">{workshop.instructorTitle}</p>
                      </div>
                      <Button variant="ghost" className="text-[#ff6b35] hover:text-[#ff6b35]/80 p-0">
                        Register <ArrowRight className="h-4 w-4 ml-1" />
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
              View All Virtual Workshops »
            </Button>
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
              Find workshops on specific topics that matter to your organization.
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
                    {category.count} workshops
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1e3a8a] mb-2">
                  {category.name}
                </h3>
                <Button variant="ghost" className="text-[#ff6b35] hover:text-[#ff6b35]/80 p-0">
                  View Workshops <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-xl text-[#1e3a8a]/80 max-w-3xl mx-auto mb-8">
              Join thousands of professionals who have transformed their organizations through our expert-led workshops.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.location.href = '/blog-hub?tab=categories'}
                className="bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Browse All Workshops »
              </Button>
              <Button 
                onClick={() => window.location.href = '/resources/workshop-hub?tab=request'}
                variant="outline" 
                className="border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                Request Custom Workshop »
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Workshops; 