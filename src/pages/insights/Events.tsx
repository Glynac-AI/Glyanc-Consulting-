import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Calendar, Users, Clock, MapPin, ArrowRight, Play, Download, ExternalLink } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Digital Transformation Summit 2024",
      date: "March 15-16, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "San Francisco, CA",
      type: "Conference",
      description: "Join industry leaders for two days of insights on digital transformation strategies, emerging technologies, and best practices for driving organizational change.",
      speakers: ["Sarah Johnson", "Michael Chen", "Dr. Emily Rodriguez"],
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
      title: "Future of Work Webinar Series",
      date: "March 22, 2024",
      time: "2:00 PM - 3:30 PM",
      location: "Virtual Event",
      type: "Webinar",
      description: "Explore how AI, automation, and changing workforce dynamics are reshaping the future of work and what organizations need to do to prepare.",
      speakers: ["Dr. James Wilson", "Lisa Thompson"],
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
      title: "Sustainability in Business Forum",
      date: "April 5, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "New York, NY",
      type: "Forum",
      description: "Discover how leading companies are integrating sustainability into their business strategies and creating value through environmental responsibility.",
      speakers: ["Robert Green", "Maria Santos", "David Kim"],
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800&h=400"
    }
  ];

  const pastEvents = [
    {
      title: "Leadership Excellence Conference",
      date: "February 10, 2024",
      type: "Conference",
      description: "Insights from top executives on building high-performance teams and driving organizational success.",
      recording: "https://example.com/recording1",
      slides: "https://example.com/slides1"
    },
    {
      title: "Innovation in Healthcare",
      date: "January 25, 2024",
      type: "Webinar",
      description: "Exploring the latest innovations in healthcare delivery and patient experience transformation.",
      recording: "https://example.com/recording2",
      slides: "https://example.com/slides2"
    },
    {
      title: "Financial Services Transformation",
      date: "January 12, 2024",
      type: "Forum",
      description: "How fintech disruption is reshaping traditional banking and financial services.",
      recording: "https://example.com/recording3",
      slides: "https://example.com/slides3"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-amber-500 p-4 rounded-lg">
                <Calendar size={48} className="text-slate-900" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Events & <span className="text-amber-400">Webinars</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Join our thought leadership events, conferences, and webinars to stay ahead of 
              industry trends and connect with experts and peers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors">
                Register for Events
              </button>
              <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all">
                Subscribe to Updates
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for exclusive insights, networking opportunities, and thought-provoking discussions 
              with industry leaders and experts.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      event.type === 'Conference' ? 'bg-blue-100 text-blue-800' :
                      event.type === 'Webinar' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {event.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="mb-4">
                    <h4 className="font-medium text-slate-900 mb-2">Featured Speakers:</h4>
                    <div className="flex flex-wrap gap-2">
                      {event.speakers.map((speaker, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-700 text-sm rounded">
                          {speaker}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 py-3 rounded-lg font-semibold transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Past Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Missed an event? Access recordings, presentations, and key insights from our previous 
              events and webinars.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    event.type === 'Conference' ? 'bg-blue-100 text-blue-800' :
                    event.type === 'Webinar' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {event.type}
                  </span>
                  <span className="text-sm text-gray-500">{event.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex gap-3">
                  <button className="flex items-center px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors">
                    <Play className="h-4 w-4 mr-2" />
                    Watch Recording
                  </button>
                  <button className="flex items-center px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors">
                    <Download className="h-4 w-4 mr-2" />
                    Download Slides
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Connected with Our Events</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter to receive updates about upcoming events, webinars, 
            and exclusive content from our thought leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg text-slate-900"
            />
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events; 