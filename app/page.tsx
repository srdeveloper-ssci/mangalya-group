import Footer from "@/components/Footer/footer";
import Navbar from "@/components/Header/navbar";
import { AboutSection } from "@/components/Home/about-us";
import { AmenitiesGallery } from "@/components/Home/amenitiesGallery";
import ContactSection from "@/components/Home/contactSection";
import FAQSection from "@/components/Home/faq";
import { HeroSection } from "@/components/Home/hero";
import InfoCardsSection from "@/components/Home/InfoCardsSectiondemo";
import MangalyaSpeciality from "@/components/Home/mangalyaSpeciality";
import QuoteBanner from "@/components/Home/quoteBanner";
import { TopProperties } from "@/components/Home/top-performig";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <InfoCardsSection />
      <TopProperties />
      <QuoteBanner />
      <AmenitiesGallery />
      <MangalyaSpeciality />
      <ContactSection />
      <FAQSection />
      <Footer />
    </>
  );
}
