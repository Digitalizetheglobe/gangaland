import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Playfair_Display, Raleway } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Living Blueprint | 3 & 3.5 BHK Sports First Township in Bavdhan, Pune",
  description: "Explore the Living Blueprint, a sports-first township in Bavdhan, Pune. Buy premium 3 BHK & 3.5 BHK homes with world-class sports academies & amenities.",
  keywords: "3 BHK flats in Bavdhan Pune, 3.5 BHK apartments in Bavdhan, Luxury homes in Bavdhan Pune, new residential projects in Bavdhan, residential township, premium residencies, luxury amenities, Sports township Pune, luxury living, luxury township pune, ganga legend county, Ganga Legends County Bavdhan, the living blueprint bavdhan",
  verification: {
    google: "79H87-xZenYSKTzfQ9L8nNKqr5PhlKsXauDz6pjTqvc",
  },
};

import FixedButtons from "@/components/FixedButtons";
import { ScheduleModalProvider } from "@/context/ModalContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${raleway.variable} antialiased`}
      >
        {/* Google Tag (Google Ads) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18516423518"
          strategy="afterInteractive"
        />
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-P5233FQM80"
          strategy="afterInteractive"
        />
        <Script id="google-tags" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18516423518');
            gtag('config', 'G-P5233FQM80');
          `}
        </Script>
        <ScheduleModalProvider> 
        
          {children}
          <FixedButtons />
        </ScheduleModalProvider>
      </body>
    </html>
  );
}
