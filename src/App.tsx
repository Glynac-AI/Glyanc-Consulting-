import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Platform from "./pages/Platform";
import NotFound from "./pages/NotFound";

// Service pages
import Strategy from "./pages/services/Strategy";
import Operations from "./pages/services/Operations";
import Digital from "./pages/services/Digital";
import Customer from "./pages/services/Customer";
import Sales from "./pages/services/Sales";

// Industry pages
import Financial from "./pages/industries/Financial";
import Healthcare from "./pages/industries/Healthcare";
import Technology from "./pages/industries/Technology";
import Consumer from "./pages/industries/Consumer";
import Manufacturing from "./pages/industries/Manufacturing";

// Insights pages
import ThoughtLeadership from "./pages/insights/ThoughtLeadership";
import CaseStudies from "./pages/CaseStudies";
import Research from "./pages/Research";
import Events from "./pages/insights/Events";

// About pages
import Company from "./pages/about/Company";
import Approach from "./pages/about/Approach";
import People from "./pages/about/People";
import Partners from "./pages/about/Partners";
import Careers from "./pages/Careers";

// Contact page
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/platform" element={<Platform />} />
          
          {/* Service Routes */}
          <Route path="/services/strategy" element={<Strategy />} />
          <Route path="/services/operations" element={<Operations />} />
          <Route path="/services/digital" element={<Digital />} />
          <Route path="/services/customer" element={<Customer />} />
          <Route path="/services/sales" element={<Sales />} />
          
          {/* Industry Routes */}
          <Route path="/industries/financial" element={<Financial />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/technology" element={<Technology />} />
          <Route path="/industries/consumer" element={<Consumer />} />
          <Route path="/industries/manufacturing" element={<Manufacturing />} />
          
          {/* Insights Routes */}
          <Route path="/insights/thought-leadership" element={<ThoughtLeadership />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/research" element={<Research />} />
          <Route path="/events" element={<Events />} />
          
          {/* About Routes */}
          <Route path="/about/company" element={<Company />} />
          <Route path="/about/approach" element={<Approach />} />
          <Route path="/about/people" element={<People />} />
          <Route path="/about/partners" element={<Partners />} />
          <Route path="/careers" element={<Careers />} />
          
          {/* Contact Route */}
          <Route path="/contact" element={<Contact />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
