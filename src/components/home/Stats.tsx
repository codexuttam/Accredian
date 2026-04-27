"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "10K+",
    label: "Professionals Trained",
    subLabel: "For Exceptional Career Success",
  },
  {
    value: "200+",
    label: "Sessions Delivered",
    subLabel: "With Unmatched Learning Excellence",
  },
  {
    value: "5K+",
    label: "Active Learners",
    subLabel: "Engaged In Dynamic Courses",
  },
];

const Stats = () => {
  return (
    <section id="stats" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-primary mb-4">
            Our <span className="text-brand-blue">Track Record</span>
          </h2>
          <p className="text-gray-500 font-medium">The Numbers Behind <span className="text-brand-blue">Our Success</span></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-blue/10 group-hover:bg-brand-blue transition-colors duration-300" />
              <div className="text-4xl lg:text-5xl font-bold text-brand-blue mb-4">{stat.value}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">{stat.label}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{stat.subLabel}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
