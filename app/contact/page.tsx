import { BottomLine } from "@/components/contact/bottomLine";
import { HeroSection } from "@/components/contact/hero";
import ContactSection from "@/components/Home/contactSection";

function page() {
  return (
    <div>
      <HeroSection />
      <ContactSection page="contact" />
      <BottomLine />
    </div>
  );
}

export default page;
