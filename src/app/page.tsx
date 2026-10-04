import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import SignatureDishes from "../components/SignatureDishes";
import AboutSection from "../components/AboutSection";
import MenuSection from "../components/MenuSection";
import Gallery from "../components/Gallery";
import ReviewSection from "../components/ReviewSection";
import WhySwastik from "../components/WhySwastik";
import LocationSection from "../components/LocationSection";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import MobileActionBar from "../components/MobileActionBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top" className="pb-16 md:pb-0">
        <Hero />
        <TrustBar />
        <SignatureDishes />
        <AboutSection />
        <MenuSection />
        <Gallery />
        <ReviewSection />
        <WhySwastik />
        <LocationSection />
        <FinalCTA />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
