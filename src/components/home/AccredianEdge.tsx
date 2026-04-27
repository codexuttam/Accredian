"use client";

import { motion } from "framer-motion";
import { Lightbulb, MessageSquare, RefreshCcw, Settings, ArrowRightLeft, Target, Package, ChevronRight } from "lucide-react";

const edgeItems = [
  {
    title: "Tailored Solutions",
    desc: "Programs customized to your organization's goals and challenges.",
    icon: <Lightbulb className="w-8 h-8" />,
    pos: "top",
  },
  {
    title: "Innovative Framework",
    desc: "Proprietary methods for impactful, application-driven results.",
    icon: <MessageSquare className="w-8 h-8" />,
    pos: "top",
  },
  {
    title: "Diverse Offerings",
    desc: "Courses across industries, skill levels, and emerging fields.",
    icon: <RefreshCcw className="w-8 h-8" />,
    pos: "top",
  },
  {
    title: "Flexible Delivery",
    desc: "Online and offline options tailored to your needs.",
    icon: <ArrowRightLeft className="w-8 h-8" />,
    pos: "top",
  },
  {
    title: "Expert Guidance",
    desc: "Learn from industry leaders with real-world success.",
    icon: <Settings className="w-8 h-8" />,
    pos: "bottom",
  },
  {
    title: "Advanced Technology",
    desc: "State-of-the-art LMS for seamless learning experiences.",
    icon: <Target className="w-8 h-8" />,
    pos: "bottom",
  },
  {
    title: "Proven Impact",
    desc: "Trusted by leading organizations for measurable ROI.",
    icon: <Package className="w-8 h-8" />,
    pos: "bottom",
  },
];

const AccredianEdge = () => {
  return (
    <section id="edge" className="py-24 bg-white overflow-hidden">
      <div className="container-custom px-4">
        <div className="text-center mb-32 md:mb-48">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The <span className="text-brand-blue">Accredian Edge</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            Key Aspects of <span className="text-brand-blue font-semibold">Our Strategic Training</span>
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Main Container for Steps */}
          <div className="flex flex-col lg:flex-row items-center justify-between relative gap-12 lg:gap-0">
            {edgeItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center relative z-10 flex-1">
                {/* Horizontal Connector Line (Desktop) */}
                {index < edgeItems.length - 1 && (
                  <div className="hidden lg:block absolute left-[calc(50%+40px)] right-[calc(-50%+40px)] top-1/2 -translate-y-1/2">
                    <div className="flex items-center justify-center space-x-1">
                      {[1, 2, 3].map((i) => (
                        <ChevronRight key={i} size={16} className="text-gray-300" />
                      ))}
                    </div>
                  </div>
                )}

                {/* Top Content (Desktop alternate) */}
                {index % 2 === 0 && (
                  <div className="hidden lg:block absolute bottom-[120%] mb-4 w-48 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="flex items-center justify-center gap-2 mb-2">
                       <div className="w-2 h-2 rounded-full bg-brand-blue" />
                       <h3 className="font-bold text-[15px]">{item.title}</h3>
                    </div>
                    <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                    <div className="w-px h-12 bg-gradient-to-t from-brand-blue/40 to-transparent mx-auto mt-4" />
                  </div>
                )}

                {/* The Circle with Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="w-20 h-20 rounded-full bg-white border border-gray-100 flex items-center justify-center text-brand-blue shadow-[0_0_30px_rgba(0,111,255,0.15)] hover:shadow-[0_0_40px_rgba(0,111,255,0.25)] transition-all relative"
                >
                  {item.icon}
                </motion.div>

                {/* Bottom Content (Desktop alternate) */}
                {index % 2 !== 0 && (
                  <div className="hidden lg:block absolute top-[120%] mt-4 w-48 text-center animate-in fade-in slide-in-from-top-4 duration-700">
                    <div className="w-px h-12 bg-gradient-to-b from-brand-blue/40 to-transparent mx-auto mb-4" />
                    <div className="flex items-center justify-center gap-2 mb-2">
                       <div className="w-2 h-2 rounded-full bg-brand-blue" />
                       <h3 className="font-bold text-[15px]">{item.title}</h3>
                    </div>
                    <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                )}

                {/* Mobile Content */}
                <div className="lg:hidden mt-6 text-center">
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 max-w-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Background Connecting Wave (Subtle Decorative) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full -translate-y-1/2 h-px bg-dashed border-t-2 border-dashed border-gray-100 -z-10" />
        </div>
      </div>
    </section>
  );
};

export default AccredianEdge;
