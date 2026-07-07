"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function PrivacyPage() {
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
            Our Privacy Policy
          </motion.h1>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
            <p>Last Updated: May 2026</p>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p>Welcome to Accredian. We value your privacy and are committed to protecting your personal data. This Our Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <p>We collect information that you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Name and contact information</li>
                <li>Professional details and educational background</li>
                <li>Payment information</li>
                <li>Usage data and cookies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p>We use the information we collect to provide and improve our services, communicate with you, process payments, and ensure a personalized learning experience.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Your Data Security</h2>
              <p>We implement industry-standard security measures to protect your data from unauthorized access, loss, or disclosure. However, no method of transmission over the internet is 100% secure.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal information. You can manage your preferences through your account settings or by contacting our support team.</p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
