"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { name: "Reliance", logo: "/logos/reliance.png" },
  { name: "HCL", logo: "/logos/hcl.png" },
  { name: "IBM", logo: "/logos/ibm.png" },
  { name: "CRIF", logo: "/logos/crif.png" },
  { name: "ADP", logo: "/logos/adp.png" },
  { name: "Bayer", logo: "/logos/bayer.png" },
];

const Partners = () => {
  return (
    <section id="clients" className="py-20 bg-white overflow-hidden">
      <div className="container-custom px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our Proven <span className="text-brand-blue">Partnerships</span>
          </h2>
          <p className="text-gray-500 text-lg">Successful Collaborations With the <span className="text-brand-blue font-semibold">Industry&apos;s Best</span></p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-x-20 md:gap-y-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative w-32 h-16 md:w-40 md:h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
