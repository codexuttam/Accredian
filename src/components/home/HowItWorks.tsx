"use client";

import { motion } from "framer-motion";
import { BarChart3, Monitor, Tv } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Skill Gap Analysis",
    description: "Assess team skill gaps and developmental needs.",
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    color: "bg-brand-blue",
  },
  {
    id: 2,
    title: "Customized Training Plan",
    description: "Create a tailored roadmap addressing organizational goals.",
    icon: <Monitor className="w-6 h-6 text-white" />,
    color: "bg-brand-blue",
  },
  {
    id: 3,
    title: "Flexible Program Delivery",
    description: "Deliver adaptable programs aligned with industry and organizational needs.",
    icon: <Tv className="w-6 h-6 text-white" />,
    color: "bg-brand-blue",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16 px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            How We <span className="text-brand-blue">Deliver Results</span> That Matter?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg md:text-xl font-medium"
          >
            A Structured Three-Step Approach to <span className="text-brand-blue">Skill Development</span>
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative px-4">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-brand-blue/10 -translate-y-1/2 pointer-events-none" />
          
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative bg-white p-8 rounded-2xl shadow-xl shadow-blue-50 border-x-4 border-brand-blue/20 flex flex-col items-center text-center group hover:border-brand-blue transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="absolute top-4 left-4 w-6 h-6 rounded-full border border-brand-blue flex items-center justify-center text-xs font-bold text-brand-blue bg-white">
                {step.id}
              </div>
              
              <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mb-6 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform`}>
                {step.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
