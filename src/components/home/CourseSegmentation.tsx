"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const segments = [
  {
    title: "Program Specific",
    desc: "Certificate, Executive, Post Graduate Certificate",
    image: "/images/program_specific.png",
  },
  {
    title: "Industry Specific",
    desc: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
    image: "/images/industry_specific.png",
  },
  {
    title: "Topic Specific",
    desc: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
    image: "/images/topic_specific.png",
  },
  {
    title: "Level Specific",
    desc: "Senior Leadership, Mid-Career Professionals, Freshers",
    image: "/images/level_specific.png",
  },
];

const CourseSegmentation = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tailored <span className="text-brand-blue">Course Segmentation</span>
          </h2>
          <p className="text-gray-500 font-medium">Explore <span className="text-brand-blue font-bold">Custom-fit Courses</span> Designed to Address Every Professional Focus</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {segments.map((segment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-full flex flex-col group transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={segment.image}
                  alt={segment.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col text-center">
                <h3 className="text-xl font-bold text-brand-blue mb-4">{segment.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{segment.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSegmentation;
