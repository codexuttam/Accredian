import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Accredian Enterprise | Expert Training for High-Performance Teams",
  description: "Next-Gen expertise for your enterprise. Cultivate high-performance teams through expert learning with Accredian's tailored solutions.",
};

import { ModalProvider } from "@/context/ModalContext";
import EnquiryModal from "@/components/home/EnquiryModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${plusJakarta.variable} font-inter antialiased text-brand-dark bg-white`}>
        <ModalProvider>
          {children}
          <EnquiryModal />
        </ModalProvider>
      </body>
    </html>
  );
}
