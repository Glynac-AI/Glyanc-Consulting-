import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { BarChart3, FileText, Download, TrendingUp, Users, CheckCircle, ArrowRight, Building2, Globe, Award } from "lucide-react";

const Research = () => {
  const reports = [
    {
      title: "2024 Global Business Transformation Survey",
      description: "Comprehensive analysis of transformation trends across industries and regions",
      stats: ["500+ organizations surveyed", "15 industries covered", "25 countries represented"],
      downloadUrl: "#",
      category: "Survey Report"
    },
    {
      title: "Digital Maturity Assessment Framework",
      description: "Proven framework for assessing and improving digital transformation readiness",
      stats: ["5 maturity levels", "20 assessment criteria", "Actionable roadmap"],
      downloadUrl: "#",
      category: "Framework"
    },
    {
      title: "Operational Excellence Benchmarking Study",
      description: "Industry benchmarks and best practices for operational improvement",
      stats: ["100+ companies analyzed", "15 performance metrics", "Industry comparisons"],
      downloadUrl: "#",
      category: "Benchmarking"
    },
    {
      title: "Customer Experience Trends Report",
      description: "Latest insights on customer experience trends and best practices",
      stats: ["200+ CX leaders surveyed", "10 key trends identified", "Actionable recommendations"],
      downloadUrl: "#",
      category: "Trend Report"
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
                <BarChart3 size={48} className="text-slate-900" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Research & <span className="text-amber-400">Reports</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Data-driven insights and industry analysis to help you stay ahead of trends 
              and make informed business decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Latest Research</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our comprehensive research reports, surveys, and frameworks 
              based on extensive industry analysis and expert insights.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {reports.map((report, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                    {report.category}
                  </span>
                  <FileText className="h-5 w-5 text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{report.title}</h3>
                <p className="text-gray-600 mb-6">{report.description}</p>
                <ul className="space-y-2 mb-6">
                  {report.stats.map((stat, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                      {stat}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  <Download className="h-4 w-4 mr-2" />
                  Download Report
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated with Our Research</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Subscribe to receive the latest research reports and industry insights 
            delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors">
              Subscribe to Research
            </button>
            <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all">
              Request Custom Research
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Research; 