import Navbar from "../components/layout/Navbar";
import Hero from "../sections/home/Hero";
import HealthcareServices from "../sections/home/HealthcareServices";
import EmergencySection from "../sections/home/EmergencySection";
import HealthcareNetwork from "../sections/home/HealthcareNetwork";
import HowItWorks from "../sections/home/HowItWorks";
import AppPreview from "../sections/home/AppPreview";
import ProviderSection from "../sections/home/ProviderSection";
import TrustSection from "../sections/home/TrustSection";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <HealthcareServices />
        <EmergencySection />
        <HealthcareNetwork />
        <HowItWorks />
        <AppPreview />
        <ProviderSection />
        <TrustSection />
      </main>

      <Footer />
    </>
  );
};

export default Home;
