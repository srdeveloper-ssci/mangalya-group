import Footer from "@/components/Footer/footer";
import Navbar from "@/components/Header/navbar";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
 
export const metadata: Metadata = pageMetadata({
  title: "Disclaimer",
  path: "/disclaimer",
  description: "Read the Mangalya Group website disclaimer, statutory disclosures and warranty information."
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
