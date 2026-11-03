import Footer from "@/components/Footer/footer";
import Navbar from "@/components/Header/navbar";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
 
export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  path: "/privacy",
  description: "How Mangalya Group collects, uses and protects your personal information when you use our website or contact us."
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
