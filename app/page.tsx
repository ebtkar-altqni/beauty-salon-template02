import Header from "../sections/Header";
import HeroSection from "../sections/HeroSection";
import ServicesSection from "../sections/ServicesSection";
import AboutSection from "../sections/AboutSection";
import MapSection from "../sections/MapSection";
import ContactSection from "../sections/ContactSection";
import Footer from "../sections/Footer";

const HomePage = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <MapSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default HomePage;
