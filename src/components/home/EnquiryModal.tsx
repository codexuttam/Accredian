"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import { useState } from "react";

const EnquiryModal = () => {
  const { isOpen, closeModal } = useModal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    domain: "",
    candidates: "",
    deliveryMode: "",
    location: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add success logic here
    closeModal();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white rounded-3xl shadow-2xl w-full max-w-5xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>

          {/* Left Image Side */}
          <div className="hidden md:block md:w-[45%] relative">
            <Image
              src="/images/enquiry_modal.png"
              alt="Enquire Now"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Form Side */}
          <div className="flex-1 p-8 md:p-12 overflow-y-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Enquire Now</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full py-2 border-b border-gray-300 focus:border-brand-blue outline-none transition-colors text-sm"
                  required
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full py-2 border-b border-gray-300 focus:border-brand-blue outline-none transition-colors text-sm"
                  required
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 border-b border-gray-300 focus-within:border-brand-blue transition-colors">
                <div className="flex items-center gap-1 py-2 text-sm text-gray-600 cursor-pointer">
                  <span className="text-xl">🇮🇳</span>
                  <span>+91</span>
                </div>
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="flex-1 py-2 outline-none text-sm"
                  required
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              {/* Company */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter company name"
                  className="w-full py-2 border-b border-gray-300 focus:border-brand-blue outline-none transition-colors text-sm"
                  required
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              {/* Domain Dropdown */}
              <div className="relative">
                <select
                  className="w-full py-2 border-b border-gray-300 focus:border-brand-blue outline-none transition-colors text-sm bg-transparent appearance-none"
                  required
                  value={formData.domain}
                  onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                >
                  <option value="" disabled>Select Domain</option>
                  <option value="data-science">Data Science</option>
                  <option value="ai-ml">AI & ML</option>
                  <option value="product-mgmt">Product Management</option>
                  <option value="strategy">Strategy</option>
                </select>
                <ChevronDown className="absolute right-0 top-2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>

              {/* Candidates */}
              <div className="relative">
                <input
                  type="number"
                  placeholder="Enter No. of candidates"
                  className="w-full py-2 border-b border-gray-300 focus:border-brand-blue outline-none transition-colors text-sm"
                  required
                  onChange={(e) => setFormData({ ...formData, candidates: e.target.value })}
                />
              </div>

              {/* Delivery Mode Dropdown */}
              <div className="relative">
                <select
                  className="w-full py-2 border-b border-gray-300 focus:border-brand-blue outline-none transition-colors text-sm bg-transparent appearance-none"
                  required
                  value={formData.deliveryMode}
                  onChange={(e) => setFormData({ ...formData, deliveryMode: e.target.value })}
                >
                  <option value="" disabled>Select Mode of Delivery *</option>
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                  <option value="hybrid">Hybrid</option>
                </select>
                <ChevronDown className="absolute right-0 top-2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>

              {/* Location */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Eg: Gurgaon, Delhi, India"
                  className="w-full py-2 border-b border-gray-300 focus:border-brand-blue outline-none transition-colors text-sm"
                  required
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100 mt-4"
              >
                Submit
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default EnquiryModal;
