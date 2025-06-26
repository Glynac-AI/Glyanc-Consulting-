import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// Platform pages
import Portal from "./pages/platform/Portal";
import Connect from "./pages/platform/Connect";
import Research from "./pages/platform/Research";
import Training from "./pages/platform/Training";

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

// Resources pages
import ResourcesResearch from "./pages/resources/Research";
import Events from "./pages/resources/Events";
import Newsletter from "./pages/resources/Newsletter";
import Podcast from "./pages/resources/Podcast";

// Company pages
import CompanyAbout from "./pages/company/About";
import Careers from "./pages/company/Careers";
import Contact from "./pages/company/Contact";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        
        {/* Platform Routes */}
        <Route path="/platform/portal" element={<Portal />} />
        <Route path="/platform/connect" element={<Connect />} />
        <Route path="/platform/research" element={<Research />} />
        <Route path="/platform/training" element={<Training />} />
        
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
        
        {/* Resources Routes */}
        <Route path="/resources/research" element={<ResourcesResearch />} />
        <Route path="/resources/events" element={<Events />} />
        <Route path="/resources/newsletter" element={<Newsletter />} />
        <Route path="/resources/podcast" element={<Podcast />} />
        
        {/* Company Routes */}
        <Route path="/company/about" element={<CompanyAbout />} />
        <Route path="/company/careers" element={<Careers />} />
        <Route path="/company/contact" element={<Contact />} />
        
        {/* Legacy routes for backward compatibility */}
        <Route path="/about" element={<About />} />
        
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
