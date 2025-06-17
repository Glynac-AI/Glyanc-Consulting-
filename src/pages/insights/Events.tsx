import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Calendar, TrendingUp, Users, BarChart3, CheckCircle, ArrowRight, Building2, Globe, Award, Zap, MapPin, Clock } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Digital Transformation Summit 2024",
      date: "April 15-16, 2024",
      location: "San Francisco, CA",
      description: "Join industry leaders for insights on the future of digital transformation and innovation",
      type: "Conference",
      attendees: "500+",
      price: "$1,200"
    },
    {
      title: "Operational Excellence Webinar Series",
      date: "Every Tuesday, 2 PM EST",
      location: "Virtual",
      description: "Weekly webinars on operational improvement strategies and best practices",
      type: "Webinar",
      attendees: "200+",
      price: "Free"
    },
    {
      title: "Strategy & Innovation Workshop",
      date: "March 28, 2024",
      location: "New York, NY",
      description: "Interactive workshop on developing winning strategies for growth and innovation",
      type: "Workshop",
      attendees: "50",
      price: "$800"
    },
    {
      title: "Customer Experience Forum",
      date: "May 10, 2024",
      location: "Chicago, IL",
      description: "Explore the latest trends in customer experience and service excellence",
      type: "Forum",
      attendees: "300+",
      price: "$600"
    },
    {
      title: "Healthcare Transformation Symposium",
      date: "June 5-6, 2024",
      location: "Boston, MA",
      description: "Comprehensive symposium on healthcare innovation and digital transformation",
      type: "Symposium",
      attendees: "400+",
      price: "$1,500"
    },
    {
      title: "Manufacturing Excellence Conference",
      date: "July 12, 2024",
      location: "Detroit, MI",
      description: "Industry 4.0 and operational excellence in manufacturing",
      type: "Conference",
      attendees: "350+",
      price: "$900"
    }
  ];

  const eventTypes = [
    { name: "All Events", count: 24 },
    { name: "Conferences", count: 8 },
    { name: "Webinars", count: 6 },
    { name: "Workshops", count: 5 },
    { name: "Forums", count: 3 },
    { name: "Symposiums", count: 2 }
  ];

  const featuredEvent = {
    title: "Global Business Transformation Summit 2024",
    description: "The premier event for business leaders, strategists, and transformation experts. Join us for three days of insights, networking, and actionable strategies for driving organizational change and innovation.",
    date: "September 18-20, 2024",
    location: "Las Vegas, NV",
    type: "Summit",
    attendees: "1,000+",
    price: "$2,500",
    highlights: [
      "Keynote speakers from Fortune 500 companies",
      "Interactive workshops and breakout sessions",
      "Networking opportunities with industry leaders",
      "Exclusive access to latest research and insights"
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-glynac-midnight-blue to-glynac-steel-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-glynac-blue p-4 rounded-lg">
                <Calendar size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-futura font-bold mb-6">
              Events & <span className="text-glynac-blue">Webinars</span>
            </h1>
            <p className="text-xl text-glynac-light-gray leading-relaxed mb-8 font-arial">
              Join us for exclusive events, webinars, and workshops featuring industry experts 
              and thought leaders sharing their insights and expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
                Register for Events
              </button>
              <button className="border-2 border-glynac-blue text-glynac-blue hover:bg-glynac-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all font-arial">
                Download Event Calendar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-glynac-light-gray rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-glynac-blue text-white px-4 py-2 rounded-full text-sm font-arial mb-4">
                  {featuredEvent.type}
                </div>
                <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-6">
                  {featuredEvent.title}
                </h2>
                <p className="text-lg text-glynac-steel-blue mb-6 font-arial">
                  {featuredEvent.description}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-glynac-steel-blue font-arial">
                    <Calendar className="h-5 w-5 text-glynac-blue mr-2" />
                    {featuredEvent.date}
                  </div>
                  <div className="flex items-center text-glynac-steel-blue font-arial">
                    <MapPin className="h-5 w-5 text-glynac-blue mr-2" />
                    {featuredEvent.location}
                  </div>
                  <div className="flex items-center text-glynac-steel-blue font-arial">
                    <Users className="h-5 w-5 text-glynac-blue mr-2" />
                    {featuredEvent.attendees}
                  </div>
                  <div className="flex items-center text-glynac-steel-blue font-arial">
                    <Award className="h-5 w-5 text-glynac-blue mr-2" />
                    {featuredEvent.price}
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {featuredEvent.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start text-glynac-steel-blue font-arial">
                      <CheckCircle className="h-4 w-4 text-glynac-blue mr-3 mt-0.5 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-6 py-3 rounded-lg font-semibold transition-colors font-arial">
                  Register Now
                </button>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800&h=600" 
                  alt="Business event" 
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-20 bg-glynac-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Event Categories</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              Discover events across different formats and topics to suit your learning preferences.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {eventTypes.map((type, index) => (
              <button
                key={index}
                className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all border border-glynac-light-gray"
              >
                <div className="text-lg font-futura font-semibold text-glynac-midnight-blue mb-2">
                  {type.name}
                </div>
                <div className="text-sm text-glynac-steel-blue font-arial">
                  {type.count} events
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Upcoming Events</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              Join us for these upcoming events and gain valuable insights from industry experts.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white border border-glynac-light-gray rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="inline-block bg-glynac-blue text-white px-3 py-1 rounded-full text-xs font-arial">
                    {event.type}
                  </div>
                  <div className="text-sm text-glynac-steel-blue font-arial">
                    {event.price}
                  </div>
                </div>
                <h3 className="text-xl font-futura font-semibold text-glynac-midnight-blue mb-3">
                  {event.title}
                </h3>
                <p className="text-glynac-steel-blue mb-4 font-arial">
                  {event.description}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-sm text-glynac-steel-blue font-arial">
                    <Calendar className="h-4 w-4 text-glynac-blue mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-glynac-steel-blue font-arial">
                    <MapPin className="h-4 w-4 text-glynac-blue mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-glynac-steel-blue font-arial">
                    <Users className="h-4 w-4 text-glynac-blue mr-2" />
                    {event.attendees}
                  </div>
                </div>
                <button className="w-full bg-glynac-blue hover:bg-glynac-steel-blue text-white px-4 py-2 rounded-lg font-semibold transition-colors font-arial">
                  Register
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
              View All Events
            </button>
          </div>
        </div>
      </section>

      {/* Event Benefits */}
      <section className="py-20 bg-glynac-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-futura font-bold text-glynac-midnight-blue mb-4">Why Attend Our Events?</h2>
            <p className="text-xl text-glynac-steel-blue max-w-3xl mx-auto font-arial">
              Discover the unique benefits of participating in our events and webinars.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Insights",
                description: "Learn from industry leaders and subject matter experts with decades of experience",
                icon: Award
              },
              {
                title: "Networking Opportunities",
                description: "Connect with peers, industry leaders, and potential partners in your field",
                icon: Users
              },
              {
                title: "Practical Knowledge",
                description: "Gain actionable strategies and tools you can implement immediately",
                icon: TrendingUp
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-center mb-4">
                  <benefit.icon className="h-8 w-8 text-glynac-blue mr-3" />
                  <h3 className="text-xl font-futura font-semibold text-glynac-midnight-blue">{benefit.title}</h3>
                </div>
                <p className="text-glynac-steel-blue font-arial">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-glynac-midnight-blue to-glynac-steel-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-futura font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-glynac-light-gray mb-8 max-w-3xl mx-auto font-arial">
            Join us at our upcoming events and gain the insights, strategies, and connections 
            you need to drive successful business transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-glynac-blue hover:bg-glynac-steel-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors font-arial">
              Browse All Events
            </button>
            <button className="border-2 border-glynac-blue text-glynac-blue hover:bg-glynac-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all font-arial">
              Contact Event Team
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events; 