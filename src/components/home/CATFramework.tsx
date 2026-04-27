"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Settings2, MousePointer2, Laptop, XCircle, GraduationCap, Briefcase } from "lucide-react";

const targetAudience = [
  {
    title: "Tech Professionals",
    desc: "Enhance expertise, embrace tech, drive innovation.",
    icon: <Laptop className="w-6 h-6 text-white" />,
  },
  {
    title: "Non-Tech Professionals",
    desc: "Adapt digitally, collaborate in tech environments.",
    icon: <XCircle className="w-6 h-6 text-white" />,
  },
  {
    title: "Emerging Professionals",
    desc: "Develop powerful skills for rapid career growth.",
    icon: <GraduationCap className="w-6 h-6 text-white" />,
  },
  {
    title: "Senior Professionals",
    desc: "Strengthen leadership, enhance strategic decisions.",
    icon: <Briefcase className="w-6 h-6 text-white" />,
  },
];

const catFramework = [
  {
    title: "Concept",
    desc: "Foundational knowledge for deep subject understanding.",
    icon: <BookOpen className="w-12 h-12" />,
  },
  {
    title: "Application",
    desc: "Practical implementation through real-world projects.",
    icon: <Settings2 className="w-12 h-12" />,
  },
  {
    title: "Tools",
    desc: "Resources and techniques for effective execution.",
    icon: <MousePointer2 className="w-12 h-12" />,
  },
];

const CATFramework = () => {
  return (
    <section id="cat" className="py-24 bg-white overflow-hidden">
      <div className="container-custom px-4">
        {/* Strategic Skill Enhancement Section */}
        <div className="bg-brand-blue rounded-[50px] p-12 md:p-20 text-white mb-32 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <p className="text-blue-100 font-semibold mb-2">Who Should Join?</p>
                <h2 className="text-5xl font-bold leading-tight">Strategic Skill <br/>Enhancement</h2>
              </div>
              <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border-8 border-white/10 shadow-2xl">
                <Image
                  src="/images/strategic_skill_person.png"
                  alt="Professional"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {targetAudience.map((item, index) => (
                <div key={index} className="space-y-4">
                   <div className="bg-white/20 w-fit p-4 rounded-2xl">
                      {item.icon}
                   </div>
                   <h3 className="text-2xl font-bold">{item.title}</h3>
                   <p className="text-blue-100 text-lg leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Background shapes */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>

        {/* CAT Framework Section */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-brand-blue uppercase tracking-[0.2em]">CAT</span> Framework
          </h2>
          <p className="text-gray-500 text-xl font-medium">
            Our Proven Approach to <span className="text-brand-blue font-bold">Learning Excellence</span>
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* S-curve Connector (Desktop) */}
          <svg className="hidden lg:block absolute top-1/2 left-0 w-full h-[300px] -translate-y-1/2 z-0" viewBox="0 0 1200 300" preserveAspectRatio="none">
            <path 
              d="M100,150 C300,50 500,250 700,150 C900,50 1100,250 1200,150" 
              fill="none" 
              stroke="#006FFF" 
              strokeWidth="3" 
              strokeDasharray="12,12" 
              className="opacity-10"
            />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
            {catFramework.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-32 h-32 rounded-full border-2 border-brand-blue/30 text-brand-blue flex items-center justify-center mb-8 bg-white shadow-[0_0_40px_rgba(0,111,255,0.1)] group-hover:shadow-[0_0_50px_rgba(0,111,255,0.2)] group-hover:border-brand-blue group-hover:scale-110 transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 transition-colors group-hover:text-brand-blue">{item.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed max-w-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CATFramework;
