"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "Reliance", logo: "Reliance" },
  { name: "HCL", logo: "HCL" },
  { name: "IBM", logo: "IBM" },
  { name: "CRIF", logo: "CRIF" },
  { name: "ADP", logo: "ADP" },
  { name: "Bayer", logo: "Bayer" },
];

const Partners = () => {
  return (
    <section id="clients" className="py-16 bg-gray-50/50 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Proven <span className="text-brand-blue">Partnerships</span>
          </h2>
          <p className="text-gray-500">Successful Collaborations With the <span className="text-brand-blue font-medium">Industry&apos;s Best</span></p>
        </div>

        <div className="relative group">
           {/* Simple horizontal scroll/fade marquee effect */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24 opacity-60">
            {partners.map((partner) => (
              <motion.div
                key={partner.name}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="flex items-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <div className="text-2xl md:text-3xl font-black text-gray-400 tracking-tighter">
                  {partner.name === "Reliance" && <span className="text-amber-800">RELIANCE</span>}
                  {partner.name === "HCL" && <span className="text-blue-800">HCL</span>}
                  {partner.name === "IBM" && <span className="text-blue-600 underline decoration-4 underline-offset-4">IBM</span>}
                  {partner.name === "CRIF" && <span className="text-cyan-600 italic font-serif">CRIF</span>}
                  {partner.name === "ADP" && <span className="text-red-600 uppercase">ADP</span>}
                  {partner.name === "Bayer" && <span className="text-green-600 ring-2 ring-green-600 rounded-full px-2">Bayer</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
