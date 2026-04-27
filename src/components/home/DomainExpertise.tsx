"use client";

import { motion } from "framer-motion";
import { Brain, LineChart, Settings, Layout, DollarSign, Rocket, Shield } from "lucide-react";

const domains = [
  { name: "Product & Innovation Hub", icon: <Rocket className="w-8 h-8" /> },
  { name: "Gen-AI Mastery", icon: <Brain className="w-8 h-8" /> },
  { name: "Leadership Elevation", icon: <Users className="w-8 h-8" /> },
  { name: "Tech & Data Insights", icon: <LineChart className="w-8 h-8" /> },
  { name: "Operations Excellence", icon: <Settings className="w-8 h-8" /> },
  { name: "Digital Enterprise", icon: <Layout className="w-8 h-8" /> },
  { name: "Fintech Innovation Lab", icon: <DollarSign className="w-8 h-8" /> },
];

import { Users } from "lucide-react";

const DomainExpertise = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-primary mb-4">
            Our <span className="text-brand-blue">Domain Expertise</span>
          </h2>
          <p className="text-brand-blue font-medium">Specialized Programs Designed to Fuel Innovation</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, shadow: "0 10px 25px -5px rgba(26, 115, 232, 0.1)" }}
              className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center transition-all duration-300"
            >
              <div className="text-brand-blue mb-5 bg-brand-lightBlue p-4 rounded-xl">
                {domain.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 leading-tight">
                {domain.name}
              </h3>
            </motion.div>
          ))}
          <div className="bg-brand-blue p-8 rounded-2xl flex flex-col items-center justify-center text-center text-white">
             <h3 className="text-xl font-bold mb-4">Explore All Courses</h3>
             <button className="bg-white text-brand-blue px-6 py-2 rounded-lg font-bold hover:bg-opacity-90 transition-all">
                View catalog
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainExpertise;
