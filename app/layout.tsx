import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import FloatingBrochureButton from "@/components/FloatingBrochureButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mangalya Group",
    template: "Mangalya Group | %s",
  },
  description:
    "At Mangalya Group, we take pride in shaping vibrant communities. From thoughtfully designed neighborhoods to elegant high-rise developments, our customer-first approach ensures the creation of residences that set new benchmarks for quality and longevity, standing the test of time and enriching lives for generations.",
  keywords: [
    "Mangalya Group",
    "Real Estate",
    "Luxury Apartments",
    "2 BHK Flats",
    "3 BHK Flats",
    "Residential Projects",
    "High Rise Apartments",
    "Premium Homes",
    "Property in India",
    "Modern Housing Projects",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <FloatingBrochureButton />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZYG92EPK4S"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZYG92EPK4S');
          `}
        </Script>
      </body>
    </html>
  );
}
