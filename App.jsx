import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedCompanies from "./components/TrustedCompanies";
import Services from "./components/Services";
import FeatureGrid from "./components/FeatureGrid";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustedCompanies />
      <Services />
      <FeatureGrid />
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  );
}

export default App;