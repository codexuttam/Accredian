"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Linkedin } from "lucide-react";

const leaders = [
  {
    name: "Manvender Singh (Manav)",
    title: "Chief executive officer",
    image: "/images/leader_ceo.png",
  },
  {
    name: "Nikhil Bhogaraju",
    title: "Chief operating officer",
    image: "/images/leader_coo.png",
  },
  {
    name: "Suchit Majumdar",
    title: "Chief product officer",
    image: "/images/leader_cpo.png",
  },
];

const stats = [
  { value: "2018", label: "Year of inception" },
  { value: "5000+", label: "professionals trained" },
  { value: "1.6M", label: "class hours delivered" },
  { value: "30+", label: "batches launched" },
  { value: "3.6 lac", label: "followers & users" },
  { value: "4.5/5", label: "program satisfaction" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Vision Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about_vision.png"
            alt="Vision Background"
            fill
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-brand-blue/30" />
        </div>
        
        <div className="relative z-10 container-custom">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-200 font-bold uppercase tracking-widest mb-4 block"
          >
            our vision
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl mx-auto leading-tight"
          >
            Empower every professional to reach their highest potential through world-class learning.
          </motion.h1>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 text-center">
        <div className="container-custom">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-semibold text-gray-800 max-w-3xl mx-auto mb-4"
          >
            &quot; We believe that anyone can learn new skills and grow in their careers. &quot;
          </motion.p>
          <p className="text-gray-500 font-medium">- Manav, CEO - Accredian</p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-gray-50/50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Leadership Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-gray-100 flex flex-col items-center group hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                    <Linkedin className="text-white w-8 h-8 cursor-pointer hover:scale-110 transition-transform" />
                  </div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
                  <p className="text-brand-blue font-semibold text-sm uppercase tracking-wider">{leader.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 text-center">
        <div className="container-custom">
          <span className="text-brand-blue font-bold uppercase tracking-widest mb-6 block">Our mission & focus</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-3xl mx-auto leading-relaxed">
            To make world class education accessible & enable high impact careers for everyone.
          </h2>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-10 rounded-3xl border border-gray-100 shadow-xl shadow-gray-50 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300"
              >
                <span className="text-4xl md:text-5xl font-black text-green-500 mb-4 group-hover:scale-110 transition-transform">{stat.value}</span>
                <span className="text-gray-500 text-sm font-bold uppercase tracking-widest">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="container-custom flex flex-col md:flex-row gap-8 justify-center max-w-5xl">
          <div className="flex-1 bg-brand-lightBlue p-10 rounded-[32px] text-center shadow-lg shadow-blue-100/50">
            <h3 className="text-2xl font-bold mb-4">Join our team</h3>
            <p className="text-gray-600 text-sm mb-8">Explore current job openings in full time, internships and freelance.</p>
            <button className="bg-white text-brand-blue px-8 py-3 rounded-xl font-bold shadow-md hover:shadow-xl transition-all">Current job openings</button>
          </div>
          <div className="flex-1 bg-amber-400 p-10 rounded-[32px] text-center shadow-lg shadow-amber-100/50">
            <h3 className="text-2xl font-bold mb-4">Public Relations</h3>
            <p className="text-gray-600 text-sm mb-8">For any media enquiries, drop us an email.</p>
            <button className="bg-white text-gray-800 px-8 py-3 rounded-xl font-bold shadow-md hover:shadow-xl transition-all">info@accredian.com</button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
