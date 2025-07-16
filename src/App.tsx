import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RedirectHandler from "@/components/RedirectHandler";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// Platform pages
import Portal from "./pages/platform/Portal";
import Connect from "./pages/platform/Connect";
import Research from "./pages/platform/Research";
import Training from "./pages/platform/Training";
import Strategy from "./pages/platform/Strategy";
import Insights from "./pages/platform/Insights";
import Analytics from "./pages/platform/Analytics";
import Assessment from "./pages/platform/Assessment";
import Api from "./pages/platform/Api";
import Data from "./pages/platform/Data";

// Products pages
import DeFi from "./pages/products/DeFi";
import Infrastructure from "./pages/products/Infrastructure";
import Layer1 from "./pages/products/Layer1";
import Governance from "./pages/products/Governance";

// Services pages
import Investment from "./pages/services/Investment";
import ServicesResearch from "./pages/services/Research";
import Advisory from "./pages/services/Advisory";
import Technical from "./pages/services/Technical";
import ServicesStrategy from "./pages/services/Strategy";
import ServicesAssessment from "./pages/services/Assessment";
import Leadership from "./pages/services/Leadership";
import Workshops from "./pages/services/Workshops";
import Support from "./pages/services/Support";
import Optimization from "./pages/services/Optimization";

// Resources pages
import ResourcesResearch from "./pages/resources/Research";
import SubscribeResearch from "./pages/resources/SubscribeResearch";
import RequestCustomResearch from "./pages/resources/RequestCustomResearch";
import ResearchHub from "./pages/resources/ResearchHub";
import WebinarHub from "./pages/resources/WebinarHub";
import WorkshopHub from "./pages/resources/WorkshopHub";
import TemplateHub from "./pages/resources/TemplateHub";
import Blog from "./pages/resources/Blog";
import Webinars from "./pages/resources/Webinars";
import ResourcesWorkshops from "./pages/resources/Workshops";
import Templates from "./pages/resources/Templates";
import Guide from "./pages/resources/Guide";
import Events from "./pages/resources/Events";
import ResourcesNewsletter from "./pages/resources/Newsletter";
import Podcast from "./pages/resources/Podcast";

// Company pages
import CompanyAbout from "./pages/company/About";
import Careers from "./pages/company/Careers";
import Contact from "./pages/company/Contact";
import Mission from "./pages/company/Mission";
import CompanyLeadership from "./pages/company/Leadership";
import OpenPositions from "./pages/company/OpenPositions";
import Culture from "./pages/company/Culture";
import GetInTouch from "./pages/company/GetInTouch";
import RequestDemo from "./pages/company/RequestDemo";
import Impact from "./pages/about/Impact";
import People from "./pages/about/People";
import ImpactCareersHub from "./pages/company/ImpactCareersHub";
import LeadershipHub from "./pages/company/LeadershipHub";
import ContactHub from "./pages/company/ContactHub";
import Experience from "./pages/Experience";
import Consultation from "./pages/Consultation";
import BlogHub from "./pages/BlogHub";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <ScrollToTop />
      <RedirectHandler>
        <Routes>
        <Route path="/" element={<Index />} />
        
        {/* Platform Routes */}
        <Route path="/platform/portal" element={<Portal />} />
        <Route path="/platform/connect" element={<Connect />} />
        <Route path="/platform/research" element={<Research />} />
        <Route path="/platform/training" element={<Training />} />
        <Route path="/platform/strategy" element={<Strategy />} />
        <Route path="/platform/insights" element={<Insights />} />
        <Route path="/platform/analytics" element={<Analytics />} />
        <Route path="/platform/assessment" element={<Assessment />} />
        <Route path="/platform/api" element={<Api />} />
        <Route path="/platform/data" element={<Data />} />
        
        {/* Products Routes */}
        <Route path="/products/defi" element={<DeFi />} />
        <Route path="/products/infrastructure" element={<Infrastructure />} />
        <Route path="/products/layer1" element={<Layer1 />} />
        <Route path="/products/governance" element={<Governance />} />
        
        {/* Services Routes */}
        <Route path="/services/investment" element={<Investment />} />
        <Route path="/services/research" element={<ServicesResearch />} />
        <Route path="/services/advisory" element={<Advisory />} />
        <Route path="/services/technical" element={<Technical />} />
        <Route path="/services/strategy" element={<ServicesStrategy />} />
        <Route path="/services/assessment" element={<ServicesAssessment />} />
        <Route path="/services/leadership" element={<Leadership />} />
        <Route path="/services/workshops" element={<Workshops />} />
        <Route path="/services/support" element={<Support />} />
        <Route path="/services/optimization" element={<Optimization />} />
        
        {/* Resources Routes */}
        <Route path="/resources/research" element={<ResourcesResearch />} />
        <Route path="/resources/subscribe-research" element={<SubscribeResearch />} />
        <Route path="/resources/request-custom-research" element={<RequestCustomResearch />} />
        <Route path="/resources/research-hub" element={<ResearchHub />} />
        <Route path="/resources/webinar-hub" element={<WebinarHub />} />
        <Route path="/resources/workshop-hub" element={<WorkshopHub />} />
        <Route path="/resources/template-hub" element={<TemplateHub />} />
        <Route path="/resources/blog" element={<Blog />} />
        <Route path="/resources/webinars" element={<Webinars />} />
        <Route path="/resources/workshops" element={<ResourcesWorkshops />} />
        <Route path="/resources/templates" element={<Templates />} />
        <Route path="/resources/guide" element={<Guide />} />
        <Route path="/resources/events" element={<Events />} />
        <Route path="/resources/newsletter" element={<ResourcesNewsletter />} />
        <Route path="/resources/podcast" element={<Podcast />} />
        
        {/* Company Routes */}
        <Route path="/company/about" element={<CompanyAbout />} />
        <Route path="/company/careers" element={<OpenPositions />} />
        <Route path="/company/contact" element={<GetInTouch />} />
        <Route path="/company/mission" element={<Mission />} />
        <Route path="/company/leadership" element={<CompanyLeadership />} />
        <Route path="/company/culture" element={<Culture />} />
        <Route path="/company/demo" element={<RequestDemo />} />
        
        {/* About Routes */}
        <Route path="/about/impact" element={<Impact />} />
        <Route path="/about/people" element={<People />} />
        
        {/* Company Hub Routes */}
        <Route path="/company/impact-careers-hub" element={<ImpactCareersHub />} />
        <Route path="/company/leadership-hub" element={<LeadershipHub />} />
        <Route path="/company/contact-hub" element={<ContactHub />} />
        
        {/* Experience Route */}
        <Route path="/experience" element={<Experience />} />
        
        {/* Consultation Route */}
        <Route path="/consultation" element={<Consultation />} />
        
        {/* Blog Hub Route */}
        <Route path="/blog-hub" element={<BlogHub />} />
        
        {/* Legacy routes for backward compatibility */}
        <Route path="/about" element={<About />} />
        
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
        </Routes>
      </RedirectHandler>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
