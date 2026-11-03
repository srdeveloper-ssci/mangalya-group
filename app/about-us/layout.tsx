import Footer from "@/components/Footer/footer";
import Navbar from "@/components/Header/navbar";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
 
export const metadata: Metadata = pageMetadata({
  title: "About Us",
  path: "/about-us",
  image: "/og/about-us.jpg",
  description: "Learn about Mangalya Group — a customer-first real estate developer building quality, RERA-registered homes and vibrant communities in Greater Noida West."
});

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default layout;
