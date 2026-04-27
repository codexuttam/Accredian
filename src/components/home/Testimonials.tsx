"use client";

import { motion } from "framer-motion";
import { Quote, Headset, ChevronRight } from "lucide-react";
import { useModal } from "@/context/ModalContext";

const testimonials = [
  {
    company: "ADP",
    quote: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
    logo: "/adp-logo.png", // Placeholder
    brandColor: "text-red-600",
  },
  {
    company: "BAYER",
    quote: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
    logo: "/bayer-logo.png", // Placeholder
    brandColor: "text-blue-500",
  },
];

const Testimonials = () => {
  const { openModal } = useModal();
  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="container-custom px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Testimonials from <span className="text-brand-blue">Our Partners</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg"
          >
            What <span className="text-brand-blue font-semibold">Our Clients</span> Are Saying
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-[32px] border border-gray-100 shadow-xl shadow-gray-50 relative group hover:shadow-2xl hover:shadow-blue-50 transition-all duration-500"
            >
              <div className="mb-8">
                <span className={`text-4xl font-black ${item.brandColor} tracking-tighter opacity-80 group-hover:opacity-100 transition-opacity`}>
                  {item.company}
                </span>
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 w-8 h-8 text-blue-50 -z-0" />
                <p className="text-gray-600 text-sm md:text-base leading-relaxed relative z-10 italic">
                  "{item.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mb-24">
          <div className="w-2.5 h-2.5 rounded-full bg-brand-blue" />
          <div className="w-2.5 h-2.5 rounded-full bg-blue-100" />
        </div>

        {/* CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-brand-blue to-blue-500 rounded-[32px] p-8 md:p-12 lg:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          <div className="flex items-start gap-6 relative z-10">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center flex-shrink-0">
               <Headset className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">Want to Learn More About Our Training Solutions?</h3>
              <p className="text-blue-50 text-lg opacity-90">Get Expert Guidance for Your Team's Success!</p>
            </div>
          </div>
          
          <button 
            onClick={openModal}
            className="bg-white text-brand-blue px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-50 transition-all whitespace-nowrap shadow-xl relative z-10 group"
          >
            Contact Us
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400/20 rounded-full -translate-x-1/2 translate-y-1/2" />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
