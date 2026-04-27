"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Partners from "@/components/home/Partners";
import AccredianEdge from "@/components/home/AccredianEdge";
import DomainExpertise from "@/components/home/DomainExpertise";
import CourseSegmentation from "@/components/home/CourseSegmentation";
import CATFramework from "@/components/home/CATFramework";
import HowItWorks from "@/components/home/HowItWorks";
import FAQs from "@/components/home/FAQs";
import Testimonials from "@/components/home/Testimonials";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="flex flex-col">
        <Hero />
        <Stats />
        <Partners />
        <AccredianEdge />
        <DomainExpertise />
        <CourseSegmentation />
        <CATFramework />
        <HowItWorks />
        <FAQs />
        <Testimonials />
        
      </div>

      <Footer />
    </main>
  );
}
