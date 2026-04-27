"use client";

import { motion } from "framer-motion";
import { Laptop, XCircle, GraduationCap, Briefcase, BookOpen, MousePointer2, Settings2 } from "lucide-react";

const targetAudience = [
  {
    title: "Tech Professionals",
    desc: "Enhance expertise, embrace tech, drive innovation.",
    icon: <Laptop className="w-8 h-8" />,
  },
  {
    title: "Non-Tech Professionals",
    desc: "Adapt digitally, collaborate in tech environments.",
    icon: <XCircle className="w-8 h-8" />,
  },
  {
    title: "Emerging Professionals",
    desc: "Develop powerful skills for rapid career growth.",
    icon: <GraduationCap className="w-8 h-8" />,
  },
  {
    title: "Senior Professionals",
    desc: "Strengthen leadership, enhance strategic decisions.",
    icon: <Briefcase className="w-8 h-8" />,
  },
];

const catFramework = [
  {
    title: "Concept",
    desc: "Foundational knowledge for deep subject understanding.",
    icon: <BookOpen className="w-10 h-10" />,
  },
  {
    title: "Application",
    desc: "Practical implementation through real-world projects.",
    icon: <Settings2 className="w-10 h-10" />,
  },
  {
    title: "Tools",
    desc: "Resources and techniques for effective execution.",
    icon: <MousePointer2 className="w-10 h-10" />,
  },
];

const CATFramework = () => {
  return (
    <section id="cat" className="py-24 bg-white">
      <div className="container-custom">
        {/* Upper Section */}
        <div className="bg-brand-blue rounded-[32px] p-8 md:p-16 text-white mb-24 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-blue-200 font-bold mb-4 block">Who Should Join?</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Strategic Skill <br />Enhancement
              </h2>
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
                 <div className="absolute inset-0 bg-blue-900/20" />
                 {/* Placeholder for content image */}
                 <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <Laptop className="w-20 h-20 text-white/50" />
                 </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {targetAudience.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <div className="bg-white/10 p-3 rounded-lg w-fit mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-blue-100 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Decorative Circle */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full" />
        </div>

        {/* Framework Section */}
        <div className="text-center mb-16">
          <h2 className="heading-primary mb-4">
            The <span className="text-brand-blue uppercase tracking-widest">CAT</span> Framework
          </h2>
          <p className="text-gray-500">Our Proven Approach to <span className="text-brand-blue font-medium">Learning Excellence</span></p>
        </div>

        <div className="relative">
          {/* Curved Connector (Desktop) */}
          <svg className="hidden lg:block absolute top-1/2 left-0 w-full h-24 -translate-y-1/2 -z-0" viewBox="0 0 1200 100">
             <path 
                d="M100,50 Q300,5 500,50 T900,50 T1100,50" 
                fill="none" 
                stroke="#1A73E8" 
                strokeWidth="2" 
                strokeDasharray="8,8"
                className="opacity-20 translate-y-4"
             />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {catFramework.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full border-2 border-brand-blue text-brand-blue flex items-center justify-center mb-6 bg-white shadow-lg transition-transform group-hover:scale-110 duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed max-w-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CATFramework;
