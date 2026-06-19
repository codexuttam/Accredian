"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";

const Hero = () => {
  const { openModal } = useModal();

  return (
    <section id="home" className="pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden">
      <div className="container-custom px-4">
        <div className="bg-brand-lightBlue rounded-[40px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
          {/* Content */}
          <div className="flex-1 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="heading-primary mb-6">
                Next-Gen <span className="text-brand-blue">Expertise</span> For Your <span className="text-brand-blue">Organization</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Cultivate high-performance teams through expert learning.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                {["Tailored Solutions", "Industry Insights", "Expert Guidance"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500 w-5 h-5" />
                    <span className="text-sm font-medium text-gray-700 whitespace-nowrap">{item}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openModal}
                className="btn-primary shadow-xl shadow-brand-blue/20"
              >
                Enquire Now
              </motion.button>
            </motion.div>
          </div>

          {/* Image */}
          <div className="flex-1 relative w-full aspect-square md:aspect-video lg:aspect-auto h-[400px] lg:h-[500px]">
             <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full h-full"
            >
              <Image
                src="/images/hero_professionals.png"
                alt="Experts for Enterprise"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-2xl md:rounded-[32px] shadow-2xl"
                priority
              />
            </motion.div>
            
            {/* Decorative background elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-blue/10 rounded-full blur-3xl z-[-1]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
