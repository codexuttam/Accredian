"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CheckCircle2, Star, Target, TrendingUp, Users, Zap, Award, BookOpen, Heart } from "lucide-react";

const pillars = [
  {
    title: "100% Live Learning",
    desc: "Interactive live sessions with real-time feedback from industry experts.",
    icon: <Zap className="w-10 h-10 text-brand-blue" />,
  },
  {
    title: "Expert Guidance",
    desc: "Mentorship from top practitioners who have led large-scale digital transformations.",
    icon: <Users className="w-10 h-10 text-brand-blue" />,
  },
  {
    title: "Career Support",
    desc: "Dedicated placement assistance and career coaching for professional growth.",
    icon: <Target className="w-10 h-10 text-brand-blue" />,
  },
  {
    title: "Industry Aligned",
    desc: "Curriculum designed in collaboration with leading enterprises for job-ready skills.",
    icon: <TrendingUp className="w-10 h-10 text-brand-blue" />,
  },
  {
    title: "Global Alumni Network",
    desc: "Connect with thousands of professionals across top firms worldwide.",
    icon: <Award className="w-10 h-10 text-brand-blue" />,
  },
  {
    title: "Practical Projects",
    desc: "Hands-on experience with real-world case studies and project-based learning.",
    icon: <BookOpen className="w-10 h-10 text-brand-blue" />,
  },
];

const values = [
  {
    title: "Innovation First",
    desc: "We stay ahead of the curve, constantly updating our curriculum with the latest industry shifts.",
    icon: <Star className="w-6 h-6" />,
  },
  {
    title: "Outcome Driven",
    desc: "Our primary focus is your success—whether it's a promotion, career shift, or skill mastery.",
    icon: <CheckCircle2 className="w-6 h-6" />,
  },
  {
    title: "Learner Centric",
    desc: "Every program is tailored to provide the best possible learning experience for busy professionals.",
    icon: <Heart className="w-6 h-6" />,
  },
];

export default function WhyAccredianPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                Why <span className="text-brand-blue">Accredian?</span>
              </h1>
              <p className="text-gray-600 text-xl md:text-2xl leading-relaxed mb-10">
                For over 5 years, we&apos;ve been the catalyst for career transformations, helping professionals bridge the gap between their potential and industry excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary text-lg px-10 py-4">Explore Programs</button>
                <button className="bg-white border-2 border-brand-blue text-brand-blue px-10 py-4 rounded-xl font-bold hover:bg-brand-blue/5 transition-all text-lg">Watch Success Stories</button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-[4/3] rounded-[50px] overflow-hidden shadow-2xl border-8 border-gray-50"
            >
              <Image
                src="/images/why_accredian_hero.png"
                alt="Why Accredian"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
        
        {/* Background Decorative Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50/50 rounded-full translate-y-1/2 -translate-x-1/2 -z-10" />
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="container-custom px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Empowering Ambitious Professionals</h2>
            <p className="text-gray-500 text-xl leading-relaxed">
              Our holistic approach to education ensures you don&apos;t just learn, but you thrive in the competitive global market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-12 rounded-[40px] shadow-sm border border-gray-100 transition-all hover:shadow-xl group"
              >
                <div className="bg-blue-50 p-6 rounded-3xl w-fit mb-8 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section (Quick View) */}
      <section className="py-24 bg-brand-blue text-white overflow-hidden relative">
        <div className="container-custom px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">10k+</div>
              <div className="text-blue-100 text-lg">Alumni Base</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">450k+</div>
              <div className="text-blue-100 text-lg">Monthly Engagement</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">91%</div>
              <div className="text-blue-100 text-lg">Placement Support</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">4.8/5</div>
              <div className="text-blue-100 text-lg">Learner Rating</div>
            </div>
          </div>
        </div>
        
        {/* Abstract background shapes */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl" />
           <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-300 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24">
        <div className="container-custom px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
               <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">Built on Trust, <br/>Defined by Results</h2>
               <div className="space-y-12">
                 {values.map((value, index) => (
                   <div key={index} className="flex gap-6">
                      <div className="bg-brand-blue text-white p-3 h-fit rounded-xl">
                        {value.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">{value.desc}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
            <div className="flex-1 relative aspect-square w-full max-w-lg">
               <div className="absolute inset-0 bg-blue-100 rounded-[60px] -rotate-6" />
               <div className="absolute inset-0 bg-white border border-gray-100 rounded-[60px] p-12 flex flex-col justify-center">
                 <div className="space-y-8">
                   <div className="text-6xl font-bold text-brand-blue">&quot;</div>
                   <p className="text-2xl font-medium text-gray-800 leading-relaxed italic">
                     &quot;Accredian provided me with the tools and the network to successfully transition my career into Data Science. The live sessions were invaluable.&quot;
                   </p>
                   <div>
                     <p className="font-bold text-xl">Sandeep Sharma</p>
                     <p className="text-gray-500">Data Scientist at Google</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
