"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useModal } from "@/context/ModalContext";

const faqCategories = [
  { id: "course", label: "About the Course" },
  { id: "delivery", label: "About the Delivery" },
  { id: "misc", label: "Miscellaneous" },
];

const faqData = {
  course: [
    {
      question: "What types of corporate training programs does Accredian offer?",
      answer: "Accredian offers a wide range of programs including Data Science, AI, Product Management, and Strategic Leadership tailored for enterprise teams.",
    },
    {
      question: "What domain specializations are available?",
      answer: "We specialize in Finance, Healthcare, Retail, and Technology domains, ensuring industry-relevant skill development.",
    },
  ],
  delivery: [
    {
      question: "How are the training programs delivered?",
      answer: "Programs are delivered through a mix of live sessions, recorded content, and hands-on projects, accessible via our enterprise learning platform.",
    },
    {
      question: "Can the delivery schedule be customized?",
      answer: "Yes, we offer flexible scheduling to ensure minimal disruption to your team's workflow.",
    },
  ],
  misc: [
    {
      question: "Is there support available after the program?",
      answer: "We provide post-program support through alumni networks, mentorship sessions, and updated learning materials.",
    },
  ],
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className={`text-sm md:text-base font-semibold transition-colors ${isOpen ? "text-brand-blue" : "text-gray-800 group-hover:text-brand-blue"}`}>
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-brand-blue" : ""}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className="pb-5 text-gray-600 text-sm md:text-base leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQs = () => {
  const [activeTab, setActiveTab] = useState("course");
  const { openModal } = useModal();

  return (
    <section id="faqs" className="py-24 bg-white relative">
      <div className="container-custom px-4">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16"
        >
          Frequently Asked <span className="text-brand-blue">Questions</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Tabs Sidebar */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-8 py-5 rounded-xl text-lg font-bold transition-all text-center border-2 border-transparent ${
                  activeTab === category.id
                    ? "bg-white text-brand-blue shadow-xl shadow-blue-100 border-blue-50"
                    : "bg-gray-50 text-gray-400 hover:bg-gray-100"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* FAQ Content */}
          <div className="lg:w-2/3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white"
            >
              {(faqData as any)[activeTab].map((item: any, idx: number) => (
                <FAQItem key={idx} question={item.question} answer={item.answer} />
              ))}
            </motion.div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <button 
            onClick={openModal}
            className="bg-brand-blue text-white px-10 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-blue-200 transition-all"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
