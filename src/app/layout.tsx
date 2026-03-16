import type { Metadata } from "next";
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
  title: "Ganga Legend",
  description: "Ganga Legend is a residential township located in Pune, Maharashtra. It offers a range of amenities and facilities for its residents.",
};

import FixedButtons from "@/components/FixedButtons";
import { ScheduleModalProvider } from "@/context/ModalContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${raleway.variable} antialiased`}
      >
        <ScheduleModalProvider>
          {children}
          <FixedButtons />
        </ScheduleModalProvider>
      </body>
    </html>
  );
}
