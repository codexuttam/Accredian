"use client";

import { motion } from "framer-motion";
import { Users, Target, Zap, Sliders, Monitor, ShieldCheck, Globe } from "lucide-react";

const edgeItems = [
  {
    title: "Tailored Solutions",
    desc: "Programs customized to your organization's goals.",
    icon: <Sliders className="w-6 h-6" />,
    pos: "top",
  },
  {
    title: "Innovative Framework",
    desc: "Proprietary methods for impactful, driven results.",
    icon: <Target className="w-6 h-6" />,
    pos: "top",
  },
  {
    title: "Diverse Offerings",
    desc: "Courses across industries, skill levels, and fields.",
    icon: <Globe className="w-6 h-6" />,
    pos: "top",
  },
  {
    title: "Flexible Delivery",
    desc: "Online and offline options tailored to your needs.",
    icon: <Monitor className="w-6 h-6" />,
    pos: "top",
  },
  {
    title: "Expert Guidance",
    desc: "Learn from industry leaders with real-world success.",
    icon: <Users className="w-6 h-6" />,
    pos: "bottom",
  },
  {
    title: "Advanced Technology",
    desc: "State-of-the-art LMS for seamless learning.",
    icon: <Zap className="w-6 h-6" />,
    pos: "bottom",
  },
  {
    title: "Proven Impact",
    desc: "Trusted by leading organizations for measurable ROI.",
    icon: <ShieldCheck className="w-6 h-6" />,
    pos: "bottom",
  },
];

const AccredianEdge = () => {
  return (
    <section id="edge" className="py-24 bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-primary mb-4">
            The <span className="text-brand-blue">Accredian Edge</span>
          </h2>
          <p className="text-gray-500">Key Aspects of <span className="text-brand-blue font-medium">Our Strategic Training</span></p>
        </div>

        {/* Visual Diagram */}
        <div className="relative mt-20 lg:mt-32">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[50%] left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent -translate-y-1/2 z-0" />

          {/* Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 lg:gap-y-32 gap-x-8">
            {edgeItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col items-center text-center group ${
                  index >= 4 ? "lg:translate-y-16" : "lg:-translate-y-16"
                }`}
              >
                {/* Icon Container */}
                <div className="w-20 h-20 rounded-full bg-white border-2 border-brand-blue flex items-center justify-center text-brand-blue shadow-xl z-10 bg-white group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                   {item.icon}
                </div>

                {/* Content */}
                <div className={`mt-6 max-w-[240px] ${
                  index >= 4 ? "lg:order-first lg:mb-6 lg:mt-0" : ""
                }`}>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                
                {/* Vertical Connector (Desktop) */}
                <div className={`hidden lg:block absolute left-1/2 -translate-x-1/2 w-0.5 h-16 bg-brand-blue/20 z-0 transition-all duration-500 group-hover:h-20 group-hover:bg-brand-blue/40 ${
                   index >= 4 ? "bottom-full" : "top-full"
                }`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccredianEdge;
