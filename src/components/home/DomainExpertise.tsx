"use client";

import { motion } from "framer-motion";
import { Rocket, Brain, Users, BarChart3, Settings, Computer, Wallet } from "lucide-react";

const domains = [
  { name: "Product & Innovation Hub", icon: <Rocket className="w-10 h-10" /> },
  { name: "Gen-AI Mastery", icon: <Brain className="w-10 h-10" /> },
  { name: "Leadership Elevation", icon: <Users className="w-10 h-10" /> },
  { name: "Tech & Data Insights", icon: <BarChart3 className="w-10 h-10" /> },
  { name: "Operations Excellence", icon: <Settings className="w-10 h-10" /> },
  { name: "Digital Enterprise", icon: <Computer className="w-10 h-10" /> },
  { name: "Fintech Innovation Lab", icon: <Wallet className="w-10 h-10" /> },
];

const DomainExpertise = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-brand-blue">Domain Expertise</span>
          </h2>
          <p className="text-brand-blue font-semibold text-lg">Specialized Programs Designed to Fuel Innovation</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {domains.slice(0, 6).map((domain, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.05)" }}
                className="bg-white p-10 rounded-[30px] border border-gray-100 flex flex-col items-center justify-center text-center shadow-sm transition-all cursor-pointer"
              >
                <div className="text-brand-blue mb-6">
                  {domain.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {domain.name}
                </h3>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-10 rounded-[30px] border border-gray-100 flex flex-col items-center justify-center text-center shadow-sm transition-all cursor-pointer w-full md:w-1/3"
            >
              <div className="text-brand-blue mb-6">
                {domains[6].icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                {domains[6].name}
              </h3>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainExpertise;
