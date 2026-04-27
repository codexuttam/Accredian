"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Partners from "@/components/home/Partners";
import AccredianEdge from "@/components/home/AccredianEdge";
import DomainExpertise from "@/components/home/DomainExpertise";
import CATFramework from "@/components/home/CATFramework";
import HowItWorks from "@/components/home/HowItWorks";
import FAQs from "@/components/home/FAQs";
import Testimonials from "@/components/home/Testimonials";
import { useModal } from "@/context/ModalContext";

export default function Home() {
  const { openModal } = useModal();

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="flex flex-col">
        <Hero />
        <Stats />
        <Partners />
        <AccredianEdge />
        <DomainExpertise />
        <CATFramework />
        <HowItWorks />
        <FAQs />
        <Testimonials />
        
        {/* Call to Action Section */}
        <section className="py-24">
          <div className="container-custom px-4">
            <div className="bg-brand-blue rounded-[40px] p-8 md:p-16 text-center text-white relative overflow-hidden">
               <div className="relative z-10">
                 <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Elevate Your Team?</h2>
                 <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                    Join hundreds of forward-thinking enterprises that trust Accredian for their strategic workforce development.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                      onClick={openModal}
                      className="bg-white text-brand-blue px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all text-lg shadow-xl"
                    >
                       Get Started Now
                    </button>
                    <button 
                      onClick={openModal}
                      className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-all text-lg"
                    >
                       Schedule a Demo
                    </button>
                 </div>
               </div>
               
               {/* Background Shapes */}
               <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
               <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full translate-x-1/3 translate-y-1/3" />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
