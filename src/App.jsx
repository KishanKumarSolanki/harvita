import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import DashboardPreview from "./components/DashboardPreview";
import About from "./components/About";
import Services from "./components/Services";
import Audience from "./components/Audience";
import Difference from "./components/Difference";
import CtaBand from "./components/CtaBand";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-cream font-sans text-green antialiased">
      <div className="bg-green text-cream">
        {/* <Navbar /> */}
        <Hero />
        {/* <DashboardPreview /> */}
      </div>
      <About />
      <Services />
      <Difference />
      <Audience />
      <Faq />
      <Contact />
      <CtaBand />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
