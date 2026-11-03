import Footer from "@/components/Footer/footer";
import Navbar from "@/components/Header/navbar";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  path: "/contact",
  image: "/og/contact.jpg",
  description: "Get in touch with Mangalya Group for site visits, pricing, brochures and booking enquiries for our residential projects in Greater Noida West."
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
