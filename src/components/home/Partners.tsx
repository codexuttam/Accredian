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
    <section id="clients" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container-custom px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our Valued <span className="text-brand-blue">Partnerships</span>
          </h2>
          <p className="text-gray-500 text-xl md:text-2xl">Successful Collaborations With the <span className="text-brand-blue font-semibold">World&apos;s Best</span></p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 lg:gap-32">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.15 }}
              className="relative w-40 h-20 md:w-56 md:h-28 flex items-center justify-center transition-all duration-500"
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
