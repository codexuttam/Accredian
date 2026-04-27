"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-40 pb-24">
        <div className="container-custom px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-12 text-brand-blue"
          >
            Terms of Service
          </motion.h1>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
            <p>Last Updated: April 2026</p>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p>By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of Services</h2>
              <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account credentials.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Intellectual Property</h2>
              <p>All content provided by Accredian, including course materials, videos, and documentation, is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express permission.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payments and Refunds</h2>
              <p>Fees for our programs are disclosed at the time of purchase. Refund eligibility is determined by our specific program policies, which vary by course type.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
              <p>Accredian shall not be liable for any indirect, incidental, or consequential damages arising out of your use of our services.</p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
