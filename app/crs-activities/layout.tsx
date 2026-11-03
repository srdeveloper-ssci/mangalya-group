import Footer from "@/components/Footer/footer";
import Navbar from "@/components/Header/navbar";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
 
export const metadata: Metadata = pageMetadata({
  title: "CSR Activities",
  path: "/crs-activities",
  image: "/og/csr.jpg",
  description: "Discover Mangalya Group's corporate social responsibility initiatives — community welfare, food drives and programmes that give back to society."
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
